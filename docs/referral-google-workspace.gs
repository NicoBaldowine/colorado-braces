/** Google Forms trigger and branded Workspace web app. Keep this code in the form-bound Apps Script project. */
const REFERRAL_RECIPIENT = 'office@colorado-braces.com';
const REFERRAL_NONCE_PREFIX = 'referral-nonce:';

function doGet(request) {
  const lang = request && request.parameter && request.parameter.lang === 'es' ? 'es' : 'en';
  const nonce = Utilities.getUuid();
  CacheService.getScriptCache().put(REFERRAL_NONCE_PREFIX + nonce, 'ready', 7200);
  const page = HtmlService.createTemplateFromFile('ReferralForm');
  page.lang = lang;
  page.nonce = nonce;
  return page.evaluate()
    .setTitle(lang === 'es' ? 'Formulario de referencia | Colorado Braces' : 'Referral form | Colorado Braces')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitBrandedReferral(payload) {
  if (!payload || typeof payload !== 'object' || payload.website) {
    throw new Error('Invalid referral.');
  }
  const fields = [
    ['referringDoctor', 'Referring Doctor', 160],
    ['patientName', 'Patient Name', 160],
    ['gender', 'Gender', 80],
    ['age', 'Age', 20],
    ['guardian', 'Parent / Guardian Name', 160],
    ['phone', 'Phone Number', 80],
    ['panoramic', 'Panoramic radiograph available, dated', 160],
    ['comments', 'Comments / Notes', 3000],
  ];
  const values = {};
  fields.forEach(([key, , limit]) => {
    if (typeof payload[key] !== 'string' || payload[key].length > limit) {
      throw new Error('Please review the referral fields.');
    }
    values[key] = payload[key].trim();
  });
  if (!values.patientName || !values.phone || !values.comments) {
    throw new Error('Patient name, phone number, and comments are required.');
  }
  if (typeof payload.nonce !== 'string' || !/^[a-f0-9-]{36}$/i.test(payload.nonce)) {
    throw new Error('Please refresh the page and try again.');
  }

  const nonceKey = REFERRAL_NONCE_PREFIX + payload.nonce;
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const cache = CacheService.getScriptCache();
    if (cache.get(nonceKey) !== 'ready') {
      throw new Error('Please refresh the page and try again.');
    }
    cache.remove(nonceKey);
  } finally {
    lock.releaseLock();
  }

  const submittedAt = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm z');
  createAndSendReferralPdf_(fields.map(([key, label]) => [label, values[key]]), submittedAt);
  return { ok: true };
}

/** Existing Google Form remains a working fallback. Its installed trigger calls this. */
function sendReferralPdf(event) {
  if (!event || !event.response || !event.source) {
    throw new Error('This function must run from a Google Forms submission trigger.');
  }
  const response = event.response;
  const answers = new Map(
    response.getItemResponses().map((itemResponse) => [
      itemResponse.getItem().getId(),
      itemResponse.getResponse(),
    ])
  );
  const submittedAt = Utilities.formatDate(
    response.getTimestamp(),
    Session.getScriptTimeZone(),
    'yyyy-MM-dd HH:mm z'
  );
  const rows = event.source.getItems().map((item) => {
    const value = answers.get(item.getId());
    return [item.getTitle(), Array.isArray(value) ? value.join(', ') : String(value ?? '')];
  });
  createAndSendReferralPdf_(rows, submittedAt);
}

function createAndSendReferralPdf_(rows, submittedAt) {
  const document = DocumentApp.create(`Colorado Braces referral ${submittedAt}`);
  const documentFile = DriveApp.getFileById(document.getId());
  try {
    const body = document.getBody();
    body.appendParagraph('Colorado Braces — Doctor Referral')
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph(`Submitted / Enviado: ${submittedAt}`);
    body.appendTable(rows);
    document.saveAndClose();
    const pdf = documentFile.getAs(MimeType.PDF)
      .setName('Colorado-Braces-Doctor-Referral.pdf');
    MailApp.sendEmail({
      to: REFERRAL_RECIPIENT,
      subject: 'New doctor referral — Colorado Braces',
      body: 'A new doctor referral was submitted. The details are in the attached PDF.',
      attachments: [pdf],
      name: 'Colorado Braces Referrals',
    });
  } finally {
    documentFile.setTrashed(true);
  }
}
