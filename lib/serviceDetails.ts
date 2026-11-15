import type { ServiceLanguage } from './serviceCatalog';

type DetailCopy = {
  title: string;
  summary: string;
  introTitle: string;
  intro: string;
  highlights: { title: string; text: string }[];
  nextTitle: string;
  next: string;
};

type Detail = Record<ServiceLanguage, DetailCopy> & { sourceUrl?: string };

export const serviceDetails: Record<string, Detail> = {
  nightguards: {
    en: {
      title: 'Nightguards',
      summary: 'A comfortable, custom-fitted way to help protect your teeth while you sleep.',
      introTitle: 'Protection made for your bite',
      intro: 'Clenching and grinding can contribute to tooth wear, chipped restorations, and morning jaw discomfort. We assess your teeth and bite before recommending a nightguard that fits your needs.',
      highlights: [
        { title: 'A custom fit', text: 'We make a guard from your dental records so it fits your teeth and is comfortable to wear at night.' },
        { title: 'Protect what you have', text: 'A guard places a protective surface between the teeth. It does not necessarily stop grinding, but it can help limit wear.' },
        { title: 'Review over time', text: 'Your guard and bite may change. Bring it to dental visits so the fit and any signs of wear can be checked.' },
      ],
      nextTitle: 'Is a nightguard right for you?',
      next: 'At a consultation, we can discuss your symptoms and whether a nightguard or another evaluation would be appropriate. A nightguard is different from an appliance used for sleep apnea.',
    },
    es: {
      title: 'Protectores nocturnos',
      summary: 'Una opción cómoda y hecha a medida para ayudar a proteger tus dientes mientras duermes.',
      introTitle: 'Protección adaptada a tu mordida',
      intro: 'Apretar o rechinar los dientes puede contribuir al desgaste dental, a fracturas de restauraciones y a molestias mandibulares al despertar. Evaluamos tus dientes y tu mordida antes de recomendar un protector.',
      highlights: [
        { title: 'Ajuste personalizado', text: 'Fabricamos el protector a partir de registros dentales para que se adapte a tus dientes y sea cómodo durante la noche.' },
        { title: 'Protege tu sonrisa', text: 'El protector crea una superficie entre los dientes. No siempre detiene el bruxismo, pero puede ayudar a limitar el desgaste.' },
        { title: 'Control con el tiempo', text: 'El protector y la mordida pueden cambiar. Tráelo a tus citas dentales para revisar el ajuste y el desgaste.' },
      ],
      nextTitle: '¿Es adecuado para ti?',
      next: 'En una consulta podemos revisar tus síntomas y determinar si conviene un protector u otra evaluación. Un protector nocturno es diferente de un dispositivo para la apnea del sueño.',
    },
  },
  'sports-guards': {
    en: {
      title: 'Sports Guards',
      summary: 'Protect your smile during practices and games with a mouthguard made for your teeth.',
      introTitle: 'A better fit for active smiles',
      intro: 'Contact and collision sports can put teeth, lips, and orthodontic appliances at risk. A properly fitted mouthguard provides a cushion during play and is easier to keep in place.',
      highlights: [
        { title: 'Made for your mouth', text: 'A custom guard is shaped to your teeth rather than relying on a one-size-fits-all fit.' },
        { title: 'Options with braces', text: 'If you wear braces or aligners, we can discuss a guard that accommodates your current treatment.' },
        { title: 'Keep it in good shape', text: 'Clean and inspect your guard regularly, and replace it when it is damaged or no longer fits.' },
      ],
      nextTitle: 'Ready for the season?',
      next: 'Tell us which sport you play and whether you have braces or other appliances. We can recommend the right fit and timing for a sports guard.',
    },
    es: {
      title: 'Protectores deportivos',
      summary: 'Protege tu sonrisa en entrenamientos y partidos con un protector adaptado a tus dientes.',
      introTitle: 'Un mejor ajuste para personas activas',
      intro: 'Los deportes de contacto pueden poner en riesgo los dientes, los labios y los aparatos de ortodoncia. Un protector bucal bien ajustado amortigua los impactos y permanece mejor en su lugar.',
      highlights: [
        { title: 'Hecho para tu boca', text: 'Un protector personalizado se adapta a tus dientes, a diferencia de una opción de talla única.' },
        { title: 'Opciones con brackets', text: 'Si usas brackets o alineadores, podemos elegir una opción compatible con tu tratamiento actual.' },
        { title: 'Cuídalo y revísalo', text: 'Límpialo e inspecciónalo con frecuencia. Reemplázalo si está dañado o ya no ajusta bien.' },
      ],
      nextTitle: '¿Se acerca la temporada?',
      next: 'Cuéntanos qué deporte practicas y si usas aparatos de ortodoncia. Así podremos recomendar el protector y el momento adecuados.',
    },
  },
  'phase-1-treatment': {
    en: {
      title: 'Phase 1 Treatment',
      summary: 'Early orthodontic care when a child would benefit from addressing a specific issue before all adult teeth arrive.',
      introTitle: 'The right care at the right time',
      intro: 'An orthodontic evaluation around age 7 helps us spot developing bite, spacing, or jaw concerns. Most children do not need treatment right away. When early treatment is useful, Phase 1 focuses on a defined problem during growth.',
      highlights: [
        { title: 'Early evaluation', text: 'We review tooth eruption, jaw growth, and bite development to decide whether to monitor or treat.' },
        { title: 'Focused treatment', text: 'Depending on the child, early care may address a crossbite, limited space, or another specific concern.' },
        { title: 'A plan for later', text: 'Some children may still need treatment as teens; others may only need periodic observation.' },
      ],
      nextTitle: 'Start with an evaluation',
      next: 'Bring your child in for a consultation. We will explain what we see, whether treatment is needed now, and when to check again if it is not.',
    },
    es: {
      title: 'Tratamiento de fase 1',
      summary: 'Atención temprana cuando conviene tratar un problema específico antes de que salgan todos los dientes permanentes.',
      introTitle: 'Atención en el momento adecuado',
      intro: 'Una evaluación de ortodoncia alrededor de los 7 años ayuda a detectar problemas en desarrollo de mordida, espacio o crecimiento de los maxilares. La mayoría de los niños no necesita tratamiento inmediato. Cuando resulta útil, la fase 1 se centra en un problema definido.',
      highlights: [
        { title: 'Evaluación temprana', text: 'Revisamos la erupción dental, el crecimiento y la mordida para decidir si conviene observar o tratar.' },
        { title: 'Tratamiento enfocado', text: 'Según el caso, podemos tratar una mordida cruzada, falta de espacio u otra necesidad específica.' },
        { title: 'Plan para el futuro', text: 'Algunos niños necesitarán otra etapa en la adolescencia; otros solo necesitarán controles periódicos.' },
      ],
      nextTitle: 'Comienza con una evaluación',
      next: 'Trae a tu hijo o hija a una consulta. Te explicaremos lo que observamos, si necesita tratamiento ahora y cuándo volver si aún no lo necesita.',
    },
  },
  'teen-orthodontics': {
    en: {
      title: 'Teen Orthodontics',
      summary: 'Orthodontic options that fit a teen’s smile, schedule, and everyday life.',
      introTitle: 'A treatment plan that grows with them',
      intro: 'The teen years are a common time to align teeth and improve the bite. We look at growth, tooth position, oral hygiene, and your teen’s goals before recommending braces or clear aligners.',
      highlights: [
        { title: 'Options to discuss', text: 'Metal braces, clear braces, and aligners may be possibilities depending on the bite and how consistently appliances can be worn.' },
        { title: 'Life beyond the office', text: 'We help teens plan for school, sports, instruments, and cleaning around their treatment.' },
        { title: 'Support throughout treatment', text: 'Regular visits let us follow progress and adjust the plan as teeth and jaws change.' },
      ],
      nextTitle: 'Find the right option together',
      next: 'At the consultation, we will review treatment choices and answer questions from both parents and teens.',
    },
    es: {
      title: 'Ortodoncia para adolescentes',
      summary: 'Opciones de ortodoncia adaptadas a la sonrisa, el horario y la vida diaria de cada adolescente.',
      introTitle: 'Un plan que acompaña su crecimiento',
      intro: 'La adolescencia suele ser un buen momento para alinear los dientes y mejorar la mordida. Evaluamos el crecimiento, la posición dental, la higiene y las metas de cada joven antes de recomendar brackets o alineadores.',
      highlights: [
        { title: 'Opciones para conversar', text: 'Los brackets metálicos o transparentes y los alineadores pueden ser opciones según la mordida y la constancia de uso.' },
        { title: 'La vida fuera del consultorio', text: 'Ayudamos a planificar el tratamiento alrededor de la escuela, el deporte, los instrumentos y la higiene.' },
        { title: 'Acompañamiento continuo', text: 'Las visitas periódicas permiten revisar el progreso y ajustar el plan durante el crecimiento.' },
      ],
      nextTitle: 'Elijamos juntos la mejor opción',
      next: 'En la consulta revisaremos las alternativas y responderemos las preguntas de adolescentes y familiares.',
    },
  },
  'adult-orthodontics': {
    en: {
      title: 'Adult Orthodontics',
      summary: 'Thoughtful tooth and bite alignment designed around your goals and oral health.',
      introTitle: 'It is never too late to discuss your smile',
      intro: 'Adults seek orthodontic care for many reasons, from easier cleaning to changes they would like to make in their smile. We assess your bite and the health of your teeth and gums before creating an individualized plan.',
      highlights: [
        { title: 'Treatment choices', text: 'Clear aligners, ceramic braces, and metal braces offer different advantages. The best option depends on your clinical needs.' },
        { title: 'Care that fits your life', text: 'We discuss visit schedules, appliance care, and how treatment may fit work and family routines.' },
        { title: 'A healthy foundation', text: 'When needed, we coordinate with your general dentist or other providers before and during treatment.' },
      ],
      nextTitle: 'Make a plan with us',
      next: 'A consultation is the place to review your goals, available options, and the steps needed before starting treatment.',
    },
    es: {
      title: 'Ortodoncia para adultos',
      summary: 'Alineación dental y de la mordida pensada para tus objetivos y tu salud bucal.',
      introTitle: 'Siempre puedes conversar sobre tu sonrisa',
      intro: 'Los adultos buscan ortodoncia por distintas razones, desde facilitar la limpieza hasta cambiar algo de su sonrisa. Evaluamos la mordida y la salud de dientes y encías antes de crear un plan individual.',
      highlights: [
        { title: 'Opciones de tratamiento', text: 'Los alineadores transparentes y los brackets cerámicos o metálicos ofrecen ventajas diferentes. La mejor opción depende de tus necesidades clínicas.' },
        { title: 'Atención adaptada a tu vida', text: 'Conversamos sobre las visitas, el cuidado de los aparatos y cómo integrar el tratamiento a tu rutina.' },
        { title: 'Una base saludable', text: 'Cuando sea necesario, coordinamos con tu dentista general u otros profesionales antes y durante el tratamiento.' },
      ],
      nextTitle: 'Planifiquemos tu tratamiento',
      next: 'En la consulta revisaremos tus metas, las opciones disponibles y los pasos previos para comenzar.',
    },
  },
  retainers: {
    en: {
      title: 'Retainers',
      summary: 'Keep the smile you worked for with a retainer plan made for you.',
      introTitle: 'Your result needs a maintenance plan',
      intro: 'Teeth can shift after braces or aligners. A properly fitted retainer helps hold them in their new positions. We can discuss clear or other retainer styles and a wear schedule suited to your treatment.',
      highlights: [
        { title: 'Made to fit', text: 'We use current dental records to make a retainer that seats properly and feels comfortable.' },
        { title: 'A routine that lasts', text: 'Consistent wear matters. We will explain when and how long to wear your retainer.' },
        { title: 'Help when things change', text: 'If a retainer is lost, cracked, or no longer fits, contact us rather than forcing it into place.' },
      ],
      nextTitle: 'Need a new retainer?',
      next: 'Whether you just finished treatment or need a replacement, we can review your teeth and recommend the next step.',
    },
    es: {
      title: 'Retenedores',
      summary: 'Conserva la sonrisa que lograste con un plan de retención adaptado a ti.',
      introTitle: 'Tu resultado necesita mantenimiento',
      intro: 'Los dientes pueden moverse después de los brackets o alineadores. Un retenedor bien ajustado ayuda a mantenerlos en su nueva posición. Podemos conversar sobre retenedores transparentes u otros estilos y un horario de uso adecuado.',
      highlights: [
        { title: 'Hecho a medida', text: 'Usamos registros dentales actuales para crear un retenedor que ajuste bien y sea cómodo.' },
        { title: 'Una rutina duradera', text: 'La constancia es importante. Te explicaremos cuándo y por cuánto tiempo usarlo.' },
        { title: 'Ayuda si algo cambia', text: 'Si se pierde, se rompe o deja de ajustar, contáctanos en lugar de forzarlo.' },
      ],
      nextTitle: '¿Necesitas un retenedor nuevo?',
      next: 'Si terminaste el tratamiento o necesitas reemplazarlo, podemos evaluar tus dientes y recomendar el siguiente paso.',
    },
  },
  'snoring-sleep-apnea': {
    sourceUrl: 'https://www.aadsm.org/standards_for_practice.php',
    en: {
      title: 'Snoring & Sleep Apnea',
      summary: 'Custom oral-appliance care for suitable adults, coordinated with a medical sleep provider.',
      introTitle: 'A dental option for selected patients',
      intro: 'Persistent snoring can be a sign of obstructive sleep apnea. A medical provider should evaluate and diagnose sleep apnea before treatment. When oral-appliance therapy is appropriate, we use the custom, adjustable TAP 3 device to hold the lower jaw forward during sleep.',
      highlights: [
        { title: 'Medical diagnosis first', text: 'A physician or qualified medical provider determines whether sleep apnea is present and discusses treatment options.' },
        { title: 'Custom TAP 3 appliance', text: 'The TAP 3 is a two-piece mandibular advancement appliance. We evaluate the teeth, jaw, and fit before providing it to a suitable adult.' },
        { title: 'Follow-up matters', text: 'Adjustments and dental checkups help monitor comfort and side effects. Your medical provider confirms whether treatment is effective.' },
      ],
      nextTitle: 'Start with the right evaluation',
      next: 'If you snore or suspect sleep apnea, talk with a medical provider. We can discuss whether a TAP 3 oral appliance may fit into your care plan after medical evaluation.',
    },
    es: {
      title: 'Ronquidos y apnea del sueño',
      summary: 'Terapia con dispositivo oral para adultos candidatos, coordinada con un profesional de medicina del sueño.',
      introTitle: 'Una opción dental para pacientes seleccionados',
      intro: 'Los ronquidos persistentes pueden ser una señal de apnea obstructiva del sueño. Un profesional médico debe evaluar y diagnosticar la apnea antes del tratamiento. Cuando la terapia oral es adecuada, usamos el dispositivo TAP 3, hecho a medida y ajustable, para adelantar la mandíbula inferior durante el sueño.',
      highlights: [
        { title: 'Primero, diagnóstico médico', text: 'Un médico u otro profesional médico calificado determina si existe apnea del sueño y conversa sobre las opciones de tratamiento.' },
        { title: 'Dispositivo TAP 3 a medida', text: 'El TAP 3 tiene dos piezas que adelantan la mandíbula. Evaluamos dientes, mandíbula y ajuste antes de ofrecerlo a un adulto candidato.' },
        { title: 'El seguimiento importa', text: 'Los ajustes y controles dentales ayudan a vigilar la comodidad y los efectos secundarios. El profesional médico confirma si el tratamiento es eficaz.' },
      ],
      nextTitle: 'Comienza con la evaluación adecuada',
      next: 'Si roncas o sospechas apnea del sueño, consulta con un profesional médico. Después podemos conversar sobre si el dispositivo TAP 3 encaja en tu plan de atención.',
    },
  },
};
