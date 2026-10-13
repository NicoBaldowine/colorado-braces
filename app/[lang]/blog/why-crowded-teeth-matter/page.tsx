import Contact from '@/components/Contact';
import Image from 'next/image';
import Link from 'next/link';
import blogImage from '@/app/assets/lower-anterior-crowding-photo.png';

const article = {
  en: {
    title: 'Why Crowded Teeth Matter Beyond Appearance',
    author: 'Colorado Braces',
    date: 'October 12, 2026',
    readTime: '3 min read',
    imageAlt: 'Close-up photo of lower front-tooth crowding',
    imageCaption: 'Lower front-tooth crowding.',
    intro: 'When teeth overlap or twist, the effect is easy to see in a smile. What is less visible is how those tight spaces can affect daily cleaning. Treating crowding is a personal decision, but understanding its possible effects on oral health can help you make an informed one.',
    sections: [
      {
        heading: 'Crowding can make brushing and flossing harder',
        paragraphs: [
          'A toothbrush cannot clean every surface between teeth. When teeth overlap, reaching some edges and gumlines with floss or other cleaning tools may take extra care. Plaque left behind can irritate the gums and contribute to cavities. The American Association of Orthodontists notes that overlapping teeth can be harder to clean effectively.',
          'This does not mean that everyone with crowded teeth has unhealthy gums. Daily brushing, cleaning between the teeth, and regular dental visits matter regardless of alignment.',
        ],
      },
      {
        heading: 'Where bone loss fits into the picture',
        paragraphs: [
          'Crowding itself does not automatically cause bone loss. The concern is that plaque can be harder to remove in certain crowded areas. If gum inflammation progresses to periodontitis, the disease can damage the tissues and bone that support the teeth. The National Institute of Dental and Craniofacial Research explains that advanced gum disease can destroy supporting bone and eventually loosen teeth.',
          'A long-term study published in the American Journal of Orthodontics and Dentofacial Orthopedics followed men in a dental cohort for up to 35 years. Certain types of front-tooth crowding were associated with deeper periodontal pockets; lower-incisor crowding was also associated with more teeth showing alveolar bone loss. This was an association, not proof that crowding alone caused the damage or that straightening teeth would prevent it.',
          'Bone loss can have several causes and risk factors. A dental examination, gum measurements, and sometimes X-rays are needed to determine whether it is present and what treatment is appropriate.',
        ],
      },
      {
        heading: 'What orthodontic treatment can—and cannot—do',
        paragraphs: [
          'Straightening crowded teeth may make some surfaces easier to reach when you brush and clean between teeth. It can also improve the way teeth fit together and, of course, the appearance of a smile. But orthodontic treatment is not a substitute for plaque control, professional cleanings, or treatment for active gum disease. Research has not established that orthodontics alone prevents future periodontal disease.',
          'If you already have bleeding gums, gum recession, or suspected bone loss, your dentist or orthodontist should evaluate your gum health before and during tooth movement. A coordinated treatment plan may include periodontal care first.',
        ],
      },
      {
        heading: 'A sensible next step',
        paragraphs: [
          'If you struggle to floss around overlapping teeth or notice gums that bleed, ask for an examination. We can review your tooth position and discuss whether braces or clear aligners could help in your case. Whatever treatment you choose, keeping up with daily cleaning and regular dental visits remains essential.',
        ],
      },
    ],
    sourcesTitle: 'Sources',
    sources: [
      { label: 'American Association of Orthodontists: Crowding and oral health', url: 'https://aaoinfo.org/whats-trending/7-common-bite-problems/' },
      { label: 'National Institute of Dental and Craniofacial Research: Gum disease', url: 'https://www.nidcr.nih.gov/health-info/gum-disease' },
      { label: 'Alsulaiman et al.: Incisor malalignment and periodontal disease progression', url: 'https://www.ajodo.org/article/S0889-5406(17)31048-X/abstract' },
      { label: 'Systematic review: Malocclusion, orthodontics, and periodontal health', url: 'https://pubmed.ncbi.nlm.nih.gov/18676800/' },
    ],
    cta: 'Schedule a Consultation',
    back: '← Back to Blog',
  },
  es: {
    title: 'Por qué el apiñamiento dental importa más allá de la estética',
    author: 'Colorado Braces',
    date: '12 de octubre de 2026',
    readTime: '3 min de lectura',
    imageAlt: 'Fotografía de apiñamiento en los dientes anteriores inferiores',
    imageCaption: 'Apiñamiento de los dientes anteriores inferiores.',
    intro: 'Cuando los dientes se enciman o giran, el cambio en la sonrisa se nota a simple vista. Lo que no siempre se ve es cómo esos espacios estrechos pueden dificultar la limpieza diaria. Tratar el apiñamiento es una decisión personal, pero conocer sus posibles efectos en la salud bucal te ayuda a decidir con información.',
    sections: [
      {
        heading: 'El apiñamiento puede dificultar el cepillado y el uso del hilo dental',
        paragraphs: [
          'El cepillo no llega a todas las superficies entre los dientes. Cuando se enciman, limpiar algunos bordes y zonas cercanas a la encía con hilo dental u otros instrumentos puede requerir más cuidado. La placa que permanece allí puede irritar las encías y contribuir a las caries. La Asociación Americana de Ortodoncistas señala que los dientes superpuestos pueden ser más difíciles de limpiar bien.',
          'Esto no significa que todas las personas con apiñamiento tengan encías enfermas. Cepillarse a diario, limpiar entre los dientes y acudir regularmente al dentista son importantes sin importar la alineación.',
        ],
      },
      {
        heading: 'Qué relación tiene con la pérdida de hueso',
        paragraphs: [
          'El apiñamiento por sí solo no causa automáticamente pérdida de hueso. La preocupación es que, en ciertas zonas apiñadas, puede resultar más difícil retirar la placa. Si la inflamación de las encías avanza hasta convertirse en periodontitis, esta enfermedad puede dañar los tejidos y el hueso que sostienen los dientes. El Instituto Nacional de Investigación Dental y Craneofacial explica que la enfermedad periodontal avanzada puede destruir el hueso de soporte y, con el tiempo, aflojar los dientes.',
          'Un estudio de largo plazo publicado en el American Journal of Orthodontics and Dentofacial Orthopedics siguió a hombres de una cohorte dental durante hasta 35 años. Ciertos tipos de apiñamiento de los dientes anteriores se asociaron con bolsas periodontales más profundas; el apiñamiento de los incisivos inferiores también se asoció con más dientes que presentaban pérdida de hueso alveolar. Se trata de una asociación, no de una prueba de que el apiñamiento por sí solo causó el daño ni de que alinear los dientes lo prevenga.',
          'La pérdida de hueso puede tener distintas causas y factores de riesgo. Para saber si existe y cuál es el tratamiento adecuado, se necesita un examen dental, mediciones de las encías y, en ocasiones, radiografías.',
        ],
      },
      {
        heading: 'Lo que la ortodoncia puede hacer y sus límites',
        paragraphs: [
          'Alinear los dientes apiñados puede facilitar el acceso a algunas superficies al cepillarse y limpiar entre los dientes. También puede mejorar la forma en que encajan los dientes y, por supuesto, la apariencia de la sonrisa. Pero la ortodoncia no reemplaza el control de la placa, las limpiezas profesionales ni el tratamiento de una enfermedad activa de las encías. Las investigaciones no han demostrado que la ortodoncia por sí sola prevenga la enfermedad periodontal futura.',
          'Si ya tienes sangrado de encías, retracción de encías o sospecha de pérdida de hueso, tu dentista u ortodoncista debe evaluar la salud periodontal antes y durante el movimiento dental. Un plan coordinado podría incluir primero tratamiento de las encías.',
        ],
      },
      {
        heading: 'Un buen próximo paso',
        paragraphs: [
          'Si te cuesta usar hilo dental entre dientes encimados o notas sangrado en las encías, solicita una evaluación. Podemos revisar la posición de tus dientes y conversar sobre si los brackets o los alineadores transparentes podrían ayudarte. Sea cual sea el tratamiento, la limpieza diaria y las visitas dentales periódicas siguen siendo esenciales.',
        ],
      },
    ],
    sourcesTitle: 'Fuentes',
    sources: [
      { label: 'Asociación Americana de Ortodoncistas: apiñamiento y salud bucal (en inglés)', url: 'https://aaoinfo.org/whats-trending/7-common-bite-problems/' },
      { label: 'Instituto Nacional de Investigación Dental y Craneofacial: enfermedad periodontal (en inglés)', url: 'https://www.nidcr.nih.gov/health-info/gum-disease' },
      { label: 'Alsulaiman y colaboradores: alineación de incisivos y progresión periodontal (en inglés)', url: 'https://www.ajodo.org/article/S0889-5406(17)31048-X/abstract' },
      { label: 'Revisión sistemática: maloclusión, ortodoncia y salud periodontal (en inglés)', url: 'https://pubmed.ncbi.nlm.nih.gov/18676800/' },
    ],
    cta: 'Agenda una Consulta',
    back: '← Volver al Blog',
  },
};

export default function CrowdedTeethArticle({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es' ? 'es' : 'en';
  const content = article[lang];

  return (
    <main>
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.title}</h1>
          <p className="text-sm text-gray-600">{content.author} · {content.date} · {content.readTime}</p>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <figure className="mb-12">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden relative">
              <Image src={blogImage} alt={content.imageAlt} fill className="object-cover object-bottom" priority />
            </div>
            <figcaption className="text-sm text-gray-500 mt-2">{content.imageCaption}</figcaption>
          </figure>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{content.intro}</p>

          {content.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">{section.heading}</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}

          <section className="border-t border-gray-200 pt-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{content.sourcesTitle}</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {content.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[#023A65] underline hover:text-[#034b82]">{source.label}</a>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <Link href={`/${lang}/appointment/`} className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors">{content.cta}</Link>
            <Link href={`/${lang}/blog/`} className="text-[#023A65] hover:text-[#034b82] transition-colors">{content.back}</Link>
          </div>
        </div>
      </article>
      <Contact />
    </main>
  );
}
