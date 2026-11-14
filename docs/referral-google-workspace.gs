/** Form-bound Apps Script. Install an "On form submit" trigger for sendReferralPdf. */
const REFERRAL_RECIPIENT = 'office@colorado-braces.com';

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

  const document = DocumentApp.create(`Colorado Braces referral ${submittedAt}`);
  const documentFile = DriveApp.getFileById(document.getId());

  try {
    const body = document.getBody();
    body.appendParagraph('Colorado Braces — Doctor Referral')
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph(`Submitted / Enviado: ${submittedAt}`);

    const rows = event.source.getItems().map((item) => {
      const value = answers.get(item.getId());
      return [
        item.getTitle(),
        Array.isArray(value) ? value.join(', ') : String(value ?? ''),
      ];
    });
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
