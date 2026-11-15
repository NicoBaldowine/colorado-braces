export type ServiceLanguage = 'en' | 'es';

export type ServiceCard = {
  slug: string;
  featured: boolean;
  en: { title: string; summary: string };
  es: { title: string; summary: string };
};

// The first four cards mirror the services already shown on the homepage.
export const serviceCards: ServiceCard[] = [
  {
    slug: 'clear-aligners', featured: true,
    en: { title: 'Clear Aligners', summary: 'Discreet, removable aligner treatment tailored to your smile. We work with Invisalign, OrthoFX, and Angel Aligners.' },
    es: { title: 'Alineadores transparentes', summary: 'Tratamiento discreto con alineadores removibles adaptados a tu sonrisa. Trabajamos con Invisalign, OrthoFX y Angel Aligners.' },
  },
  {
    slug: 'clear-braces', featured: true,
    en: { title: 'Clear Braces', summary: 'Ceramic braces offer a lower-profile look with the control of fixed orthodontic treatment.' },
    es: { title: 'Brackets transparentes', summary: 'Los brackets cerámicos ofrecen una apariencia más discreta y el control de un tratamiento fijo.' },
  },
  {
    slug: 'conventional-braces', featured: true,
    en: { title: 'Conventional Braces', summary: 'Time-tested metal braces can address a wide range of tooth and bite alignment needs.' },
    es: { title: 'Brackets convencionales', summary: 'Los brackets metálicos son una opción versátil para alinear los dientes y corregir la mordida.' },
  },
  {
    slug: 'whitening', featured: true,
    en: { title: 'Teeth Whitening', summary: 'Professional whitening options to brighten your smile, including after orthodontic treatment.' },
    es: { title: 'Blanqueamiento dental', summary: 'Opciones de blanqueamiento profesional para iluminar tu sonrisa, incluso después de la ortodoncia.' },
  },
  {
    slug: 'nightguards', featured: false,
    en: { title: 'Nightguards', summary: 'Custom-fitted guards designed to help protect teeth from wear related to nighttime grinding or clenching.' },
    es: { title: 'Protectores nocturnos', summary: 'Protectores hechos a medida para ayudar a reducir el desgaste dental relacionado con rechinar o apretar los dientes.' },
  },
  {
    slug: 'sports-guards', featured: false,
    en: { title: 'Sports Guards', summary: 'A custom sports mouthguard helps protect teeth and orthodontic appliances during athletic activity.' },
    es: { title: 'Protectores deportivos', summary: 'Un protector bucal a medida ayuda a proteger los dientes y los aparatos de ortodoncia durante el deporte.' },
  },
  {
    slug: 'phase-1-treatment', featured: false,
    en: { title: 'Phase 1 Treatment', summary: 'Early orthodontic care for children when a specific growth or bite concern benefits from treatment now.' },
    es: { title: 'Tratamiento de fase 1', summary: 'Atención ortodóntica temprana cuando un problema específico de crecimiento o mordida requiere intervenir ahora.' },
  },
  {
    slug: 'teen-orthodontics', featured: false,
    en: { title: 'Teen Orthodontics', summary: 'Braces and aligner options planned around growing smiles, school, sports, and everyday life.' },
    es: { title: 'Ortodoncia para adolescentes', summary: 'Opciones de brackets y alineadores adaptadas al crecimiento, la escuela, el deporte y la vida diaria.' },
  },
  {
    slug: 'adult-orthodontics', featured: false,
    en: { title: 'Adult Orthodontics', summary: 'Personalized tooth and bite alignment for adults, with discreet treatment options when appropriate.' },
    es: { title: 'Ortodoncia para adultos', summary: 'Tratamiento personalizado para alinear dientes y mordida, con opciones discretas cuando sean adecuadas.' },
  },
  {
    slug: 'retainers', featured: false,
    en: { title: 'Retainers', summary: 'Clear and other retainer options help maintain your result after braces or aligners.' },
    es: { title: 'Retenedores', summary: 'Los retenedores transparentes y otras opciones ayudan a conservar el resultado después de brackets o alineadores.' },
  },
  {
    slug: 'snoring-sleep-apnea', featured: false,
    en: { title: 'Snoring & Sleep Apnea', summary: 'For suitable adults, we offer custom oral-appliance care using the TAP 3 device in coordination with a medical provider.' },
    es: { title: 'Ronquidos y apnea del sueño', summary: 'Para adultos candidatos, ofrecemos terapia con el dispositivo oral TAP 3 en coordinación con un profesional médico.' },
  },
];
