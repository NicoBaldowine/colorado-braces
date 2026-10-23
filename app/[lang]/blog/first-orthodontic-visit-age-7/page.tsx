import Contact from '@/components/Contact';
import Image from 'next/image';
import Link from 'next/link';

type Paragraph = { text: string; refs?: number[] };
type Article = {
  title: string;
  date: string;
  readTime: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; paragraphs: Paragraph[] }[];
  referencesTitle: string;
  recommendationsTitle: string;
  studiesTitle: string;
  cta: string;
  back: string;
};

const article: Record<'en' | 'es', Article> = {
  en: {
    title: 'Why Age 7 Is the Right Time for a First Orthodontic Visit',
    date: 'October 23, 2026',
    readTime: '4 min read',
    imageAlt: 'Young patient receiving orthodontic care',
    intro: 'Age 7 is the right time for your child’s first orthodontic checkup, even when their smile looks fine. At this age, an orthodontist can see how the teeth and jaws are developing and decide whether anything needs attention now, later, or not at all. If you notice a concern before age 7, schedule the visit sooner.',
    sections: [
      {
        heading: 'Why age 7?',
        paragraphs: [
          { text: 'The American Association of Orthodontists (AAO) recommends a first orthodontic checkup when a problem is noticed, and no later than age 7. Seven is the right milestone because most children then have a mix of baby and permanent teeth. That gives an orthodontist an opportunity to assess the bite, jaw growth, and how permanent teeth are coming in—even when a concern is not obvious at home.', refs: [1] },
          { text: 'This does not replace regular dental visits. The American Dental Association (ADA) recommends a child’s first dental visit after the first tooth appears and no later than the first birthday. The ADA also notes that abnormal bites commonly become noticeable between ages 6 and 12. Your child’s dentist and orthodontist can work together as their smile develops.', refs: [2, 3] },
        ] satisfies Paragraph[],
      },
      {
        heading: 'What can an early visit reveal?',
        paragraphs: [
          { text: 'An orthodontist can look for crossbites, an underbite, a jaw that shifts when your child bites, significant crowding or spacing, and permanent teeth erupting in unexpected positions. The visit also gives you a chance to discuss chewing concerns, early or late loss of baby teeth, and habits that may affect the bite.', refs: [1] },
          { text: 'The exam starts with a conversation and a look at the teeth and bite. If additional records or X-rays would help answer a specific clinical question, the orthodontist can explain why they are recommended.' },
        ] satisfies Paragraph[],
      },
      {
        heading: 'Sometimes the timing of treatment matters',
        paragraphs: [
          { text: 'A checkup can identify a specific problem that may benefit from treatment while a child still has baby teeth. For example, a randomized trial in the American Journal of Orthodontics and Dentofacial Orthopedics (AJODO) found that a unilateral posterior crossbite in the mixed dentition did not correct itself in its untreated group; one appliance successfully corrected many of the treated cases. That finding applies to children with that diagnosed bite problem, not to every child.', refs: [4] },
          { text: 'Another AJODO randomized trial studied children ages 7.6 to 9.6 with palatally displaced upper canines. In that selected group, early expansion increased the rate at which those permanent canines erupted compared with no treatment. This is one example of why spotting an eruption concern early can matter; it is not a reason to expand every child’s palate.', refs: [5] },
        ] satisfies Paragraph[],
      },
      {
        heading: 'An early checkup does not mean early braces',
        paragraphs: [
          { text: 'Many children need only observation while more permanent teeth come in. The orthodontist may recommend a future check, treatment at a later age, or no treatment at all. A study in AJODO comparing early two-phase treatment with later one-phase treatment for a particular Class II bite problem found little difference in final outcomes after both groups completed treatment. Starting earlier is not automatically better for every condition.', refs: [6] },
          { text: 'The purpose of the age-7 visit is to get the timing right for your child—not to start braces on their seventh birthday.' },
        ] satisfies Paragraph[],
      },
      {
        heading: 'When should you come sooner?',
        paragraphs: [
          { text: 'If you notice a crossbite, a jaw shift, trouble biting or chewing, unusual crowding, or a permanent tooth coming in far from where you expected, ask for an orthodontic evaluation before age 7. You do not need to wait for a referral. If your child is already older than 7, a first visit is still worthwhile.', refs: [1] },
          { text: 'At Colorado Braces, we can assess your child’s developing bite, explain what we see, and recommend the right next step—whether that is treatment, monitoring, or reassurance.' },
        ] satisfies Paragraph[],
      },
    ],
    referencesTitle: 'Recommendations and scientific references',
    recommendationsTitle: 'Professional recommendations',
    studiesTitle: 'Scientific studies',
    cta: 'Schedule an Orthodontic Consultation',
    back: '← Back to Blog',
  },
  es: {
    title: 'Por qué los 7 años son la edad adecuada para la primera visita al ortodoncista',
    date: '23 de octubre de 2026',
    readTime: '4 min de lectura',
    imageAlt: 'Paciente joven durante una consulta de ortodoncia',
    intro: 'Los 7 años son la edad adecuada para la primera evaluación de ortodoncia de tu hijo, incluso si su sonrisa parece estar bien. En esta etapa, el ortodoncista puede revisar cómo se desarrollan los dientes y los maxilares, y decidir si hace falta actuar ahora, más adelante o no hacer ningún tratamiento. Si notas un problema antes de los 7 años, solicita la evaluación antes.',
    sections: [
      {
        heading: '¿Por qué a los 7 años?',
        paragraphs: [
          { text: 'La Asociación Americana de Ortodoncistas (AAO) recomienda la primera evaluación cuando se detecta un problema, y a más tardar a los 7 años. Esa edad es un momento adecuado porque la mayoría de los niños ya tiene una mezcla de dientes de leche y permanentes. Esto permite evaluar la mordida, el crecimiento de los maxilares y la salida de los dientes permanentes, incluso si no se ve un problema en casa.', refs: [1] },
          { text: 'Esta evaluación no reemplaza las visitas habituales al dentista. La Asociación Dental Americana (ADA) recomienda la primera visita dental después de la aparición del primer diente y, como máximo, al cumplir un año. La ADA también señala que las alteraciones de la mordida suelen hacerse visibles entre los 6 y los 12 años. El dentista y el ortodoncista pueden colaborar durante el crecimiento de tu hijo.', refs: [2, 3] },
        ] satisfies Paragraph[],
      },
      {
        heading: '¿Qué puede detectar una evaluación temprana?',
        paragraphs: [
          { text: 'El ortodoncista puede buscar mordidas cruzadas, una mordida invertida, desplazamientos de la mandíbula al cerrar, apiñamiento o espacios importantes y dientes permanentes que salen en posiciones inesperadas. También puedes comentar problemas al masticar, pérdida temprana o tardía de dientes de leche y hábitos que podrían afectar la mordida.', refs: [1] },
          { text: 'La evaluación comienza con una conversación y una revisión de los dientes y la mordida. Si hacen falta registros o radiografías para responder una pregunta clínica concreta, el ortodoncista puede explicarte por qué los recomienda.' },
        ] satisfies Paragraph[],
      },
      {
        heading: 'A veces el momento del tratamiento sí importa',
        paragraphs: [
          { text: 'Una revisión puede detectar un problema específico que convenga tratar mientras aún hay dientes de leche. Por ejemplo, un ensayo aleatorizado publicado en el American Journal of Orthodontics and Dentofacial Orthopedics (AJODO) observó que la mordida cruzada posterior de un solo lado no se corrigió por sí sola en el grupo sin tratamiento; uno de los aparatos corrigió muchos de los casos tratados. El resultado se refiere a niños con ese diagnóstico, no a todos los niños.', refs: [4] },
          { text: 'Otro ensayo aleatorizado de AJODO estudió a niños de entre 7,6 y 9,6 años con caninos superiores desplazados hacia el paladar. En ese grupo seleccionado, la expansión temprana aumentó la frecuencia con que los caninos permanentes lograron salir, en comparación con no tratar. Es un ejemplo de la importancia de detectar ciertos problemas de erupción a tiempo; no significa que todos los niños necesiten expansión del paladar.', refs: [5] },
        ] satisfies Paragraph[],
      },
      {
        heading: 'Una evaluación temprana no significa brackets tempranos',
        paragraphs: [
          { text: 'Muchos niños solo necesitan observación mientras salen más dientes permanentes. El ortodoncista puede recomendar otra revisión, tratamiento más adelante o ningún tratamiento. Un estudio de AJODO que comparó el tratamiento temprano en dos fases con el tratamiento posterior en una fase para un tipo particular de mordida clase II encontró pocas diferencias en los resultados finales después de completar ambos tratamientos. Empezar antes no siempre es mejor.', refs: [6] },
          { text: 'La meta de la visita a los 7 años es elegir el momento adecuado para tu hijo, no colocarle brackets al cumplir esa edad.' },
        ] satisfies Paragraph[],
      },
      {
        heading: '¿Cuándo conviene consultar antes?',
        paragraphs: [
          { text: 'Si notas una mordida cruzada, desplazamiento de la mandíbula, dificultad para morder o masticar, apiñamiento fuera de lo común o un diente permanente que sale en una posición inesperada, solicita una evaluación antes de los 7 años. No necesitas esperar una remisión. Si tu hijo ya pasó esa edad, todavía vale la pena acudir a una primera consulta.', refs: [1] },
          { text: 'En Colorado Braces podemos evaluar cómo se desarrolla la mordida de tu hijo, explicarte lo que observamos y recomendar el siguiente paso: tratamiento, seguimiento o simplemente tranquilidad.' },
        ] satisfies Paragraph[],
      },
    ],
    referencesTitle: 'Recomendaciones y referencias científicas',
    recommendationsTitle: 'Recomendaciones profesionales',
    studiesTitle: 'Estudios científicos',
    cta: 'Agenda una Consulta de Ortodoncia',
    back: '← Volver al Blog',
  },
};

const references = [
  { number: 1, label: 'AAO: The Right Time—When Should Your Child See an Orthodontist?', url: 'https://aaoinfo.org/whats-trending/when-should-your-child-see-an-orthodontist/' },
  { number: 2, label: 'ADA: Your Baby’s First Dental Visit', url: 'https://www.mouthhealthy.org/life-stages/babies-and-kids/first-dental-visit-for-baby' },
  { number: 3, label: 'ADA: Braces', url: 'https://www.mouthhealthy.org/all-topics-a-z/braces' },
  { number: 4, label: 'Petrén S, Bondemark L. Correction of unilateral posterior crossbite in the mixed dentition: a randomized controlled trial. AJODO. 2008;133:790.e7–e13.', url: 'https://doi.org/10.1016/j.ajodo.2007.11.021' },
  { number: 5, label: 'Baccetti T, Mucedero M, Leonardi M, Cozza P. Interceptive treatment of palatal impaction of maxillary canines with rapid maxillary expansion: a randomized clinical trial. AJODO. 2009;136:657–661.', url: 'https://doi.org/10.1016/j.ajodo.2008.03.019' },
  { number: 6, label: 'Tulloch JFC, Proffit WR, Phillips C. Outcomes in a 2-phase randomized clinical trial of early Class II treatment. AJODO. 2004;125:657–667.', url: 'https://doi.org/10.1016/j.ajodo.2004.02.008' },
];

export default function AgeSevenArticle({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es' ? 'es' : 'en';
  const content = article[lang];

  return (
    <main>
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.title}</h1>
          <p className="text-sm text-gray-600">Colorado Braces · {content.date} · {content.readTime}</p>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden relative mb-12">
            <Image src="/age-seven-orthodontic-visit.jpg" alt={content.imageAlt} fill className="object-cover" priority />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{content.intro}</p>

          {content.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">{section.heading}</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.text}>
                    {paragraph.text}
                    {paragraph.refs?.map((number) => (
                      <sup key={number} className="ml-1 text-sm">
                        <a href={'#ref-' + number} className="text-[#023A65] underline" aria-label={'Reference ' + number}>[{number}]</a>
                      </sup>
                    ))}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-12">
            <Link href={'/' + lang + '/appointment/'} className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors">{content.cta}</Link>
            <Link href={'/' + lang + '/blog/'} className="text-[#023A65] hover:text-[#034b82] transition-colors">{content.back}</Link>
          </div>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{content.referencesTitle}</h2>
            <h3 className="font-semibold text-gray-900 mb-3">{content.recommendationsTitle}</h3>
            <ol className="space-y-2 text-gray-700 mb-8">
              {references.slice(0, 3).map((reference) => (
                <li key={reference.number} id={'ref-' + reference.number}>
                  <span className="mr-2">[{reference.number}]</span>
                  <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-[#023A65] underline hover:text-[#034b82]">{reference.label}</a>
                </li>
              ))}
            </ol>
            <h3 className="font-semibold text-gray-900 mb-3">{content.studiesTitle}</h3>
            <ol className="space-y-2 text-gray-700">
              {references.slice(3).map((reference) => (
                <li key={reference.number} id={'ref-' + reference.number}>
                  <span className="mr-2">[{reference.number}]</span>
                  <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-[#023A65] underline hover:text-[#034b82]">{reference.label}</a>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
      <Contact />
    </main>
  );
}
