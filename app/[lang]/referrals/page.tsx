import Contact from '@/components/Contact';
import { getBrandedReferralUrl, getReferralFormUrl } from '@/lib/referrals';

const copy = {
  en: {
    eyebrow: 'For referring doctors',
    title: 'Refer a patient to Colorado Braces',
    intro: 'Thank you for trusting us with your patient’s orthodontic care. We value the opportunity to work with you and will keep your referral experience straightforward.',
    formTitle: 'Referral form',
    formIntro: 'Complete the form below to send your referral to our office.',
    openForm: 'Open the referral form in a new tab',
    backupForm: 'Having trouble? Use the backup referral form',
    unavailable: 'The online referral form is being set up. Please call our office to arrange a referral.',
    previewLabel: 'Local preview — submissions disabled',
    previewDate: 'The submission date and time will be added automatically.',
    previewSubmit: 'Submit referral (preview only)',
    previewNote: 'This is a design preview. Please use the live referral form to send patient information.',
    previewFields: [
      { label: 'Referring Doctor', required: false },
      { label: 'Patient Name', required: true },
      { label: 'Gender', required: false },
      { label: 'Age', required: false },
      { label: 'Parent / Guardian Name', required: false },
      { label: 'Phone Number', required: true },
      { label: 'Panoramic radiograph available, dated', required: false },
      { label: 'Comments / Notes', required: true, multiline: true },
    ],
    call: 'Call (303) 991-4455',
  },
  es: {
    eyebrow: 'Para profesionales que refieren pacientes',
    title: 'Refiere un paciente a Colorado Braces',
    intro: 'Gracias por confiar en nosotros para la atención ortodóntica de tu paciente. Valoramos la oportunidad de colaborar contigo y queremos que el proceso de referencia sea sencillo.',
    formTitle: 'Formulario de referencia',
    formIntro: 'Completa el formulario para enviar la referencia a nuestro consultorio.',
    openForm: 'Abrir el formulario de referencia en otra pestaña',
    backupForm: '¿Tienes problemas? Usa el formulario de respaldo',
    unavailable: 'Estamos preparando el formulario de referencias en línea. Llama a nuestro consultorio para coordinar una referencia.',
    previewLabel: 'Vista previa local — envíos desactivados',
    previewDate: 'La fecha y hora del envío se agregarán automáticamente.',
    previewSubmit: 'Enviar referencia (solo vista previa)',
    previewNote: 'Esta es una vista previa del diseño. Usa el formulario publicado para enviar información del paciente.',
    previewFields: [
      { label: 'Profesional que refiere', required: false },
      { label: 'Nombre del paciente', required: true },
      { label: 'Género', required: false },
      { label: 'Edad', required: false },
      { label: 'Nombre del padre, madre o tutor', required: false },
      { label: 'Teléfono', required: true },
      { label: 'Radiografía panorámica disponible, fecha', required: false },
      { label: 'Comentarios / Notas', required: true, multiline: true },
    ],
    call: 'Llamar al (303) 991-4455',
  },
};

export default function ReferralsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es' ? 'es' : 'en';
  const content = copy[lang];
  const formUrl = getReferralFormUrl(lang);
  const brandedUrl = getBrandedReferralUrl(lang);

  return (
    <main>
      <section className="bg-[#023A65] text-white py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#c6e2dc] mb-4">{content.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mb-6">{content.title}</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">{content.intro}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.formTitle}</h2>
            {brandedUrl ? (
              <>
                <iframe
                  src={brandedUrl}
                  title={content.formTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-[1120px] md:h-[780px] border-0"
                />
                <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
                  <a href={brandedUrl} target="_blank" rel="noopener noreferrer" className="text-[#023A65] font-semibold underline underline-offset-4">{content.openForm}</a>
                  {formUrl && <a href={formUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline underline-offset-4">{content.backupForm}</a>}
                </div>
              </>
            ) : process.env.NODE_ENV === 'development' ? (
              <div className="space-y-7">
                <p className="rounded-xl border border-[#b9d5e3] bg-[#f2f8fb] px-4 py-3 text-sm font-semibold text-[#023A65]">{content.previewLabel}</p>
                <p className="text-gray-600">{content.formIntro}</p>
                <div className="grid gap-5 md:grid-cols-2">
                  {content.previewFields.map((field) => (
                    <div key={field.label} className={field.multiline ? 'md:col-span-2' : undefined}>
                      <label className="mb-2 block text-sm font-semibold text-[#17324b]">
                        {field.label}{field.required && <span className="ml-1 text-[#b64448]">*</span>}
                      </label>
                      {field.multiline ? (
                        <textarea disabled rows={5} className="w-full resize-none rounded-xl border border-[#cbd9e2] bg-white px-4 py-3 shadow-sm" />
                      ) : (
                        <input disabled type="text" className="w-full rounded-xl border border-[#cbd9e2] bg-white px-4 py-3 shadow-sm" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{content.previewDate}</p>
                <div className="flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button type="button" disabled className="rounded-full bg-[#023A65] px-7 py-3 font-semibold text-white opacity-60 cursor-not-allowed">{content.previewSubmit}</button>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-500">{content.previewNote}</p>
                </div>
                {formUrl && <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#023A65] font-semibold underline underline-offset-4">{content.openForm}</a>}
              </div>
            ) : formUrl ? (
              <>
                <p className="text-gray-600 mb-5">{content.formIntro}</p>
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#023A65] font-semibold underline underline-offset-4 mb-6">{content.openForm}</a>
                <iframe
                  src={formUrl}
                  title={content.formTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-[1850px] md:h-[1600px] border-0"
                />
              </>
            ) : (
              <div className="rounded-xl border border-[#b9d5e3] bg-[#f2f8fb] p-6">
                <p className="text-gray-700 leading-relaxed mb-5">{content.unavailable}</p>
                <a href="tel:3039914455" className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#034b82] transition-colors">{content.call}</a>
              </div>
            )}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
