import type { Metadata } from 'next';

export const siteUrl = 'https://colorado-braces.com';

type Language = 'en' | 'es';

type SeoCopy = {
  en: { title: string; description: string };
  es: { title: string; description: string };
};

const normalizePath = (path: string) => {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  return cleanPath ? `/${cleanPath}/` : '/';
};

const absoluteUrl = (path: string) => `${siteUrl}${path}`;

export function localizedMetadata(
  lang: string,
  path: string,
  copy: SeoCopy,
): Metadata {
  const language: Language = lang === 'es' ? 'es' : 'en';
  const normalizedPath = normalizePath(path);
  const localizedPath = `/${language}${normalizedPath}`.replace(/\/+/g, '/');
  const otherLanguage: Language = language === 'en' ? 'es' : 'en';
  const alternatePath = `/${otherLanguage}${normalizedPath}`.replace(/\/+/g, '/');
  const content = copy[language];

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: absoluteUrl(localizedPath),
      languages: {
        en: absoluteUrl(language === 'en' ? localizedPath : alternatePath),
        es: absoluteUrl(language === 'es' ? localizedPath : alternatePath),
        'x-default': absoluteUrl(`/en${normalizedPath}`.replace(/\/+/g, '/')),
      },
    },
    openGraph: {
      type: 'website',
      url: absoluteUrl(localizedPath),
      siteName: 'Colorado Braces',
      title: content.title,
      description: content.description,
      locale: language === 'es' ? 'es_US' : 'en_US',
      alternateLocale: language === 'es' ? ['en_US'] : ['es_US'],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
    },
  };
}

export const seoCopy = {
  home: {
    en: {
      title: 'Colorado Braces | Denver Orthodontist',
      description: 'Orthodontic care in Denver for clear aligners, Invisalign, OrthoFX, Angel Aligners, clear braces, and traditional braces.',
    },
    es: {
      title: 'Colorado Braces | Ortodoncista en Denver',
      description: 'Atención ortodóntica en Denver con alineadores transparentes, Invisalign, OrthoFX, Angel Aligners y brackets.',
    },
  },
  about: {
    en: {
      title: 'About Colorado Braces | Orthodontist in Denver',
      description: 'Meet Dr. Eduardo Garcia and learn about Colorado Braces, our orthodontic approach, and our Denver office.',
    },
    es: {
      title: 'Sobre Colorado Braces | Ortodoncista en Denver',
      description: 'Conoce al Dr. Eduardo Garcia y nuestro enfoque de ortodoncia en Colorado Braces, con consultorio en Denver.',
    },
  },
  appointment: {
    en: {
      title: 'Schedule an Orthodontic Consultation in Denver | Colorado Braces',
      description: 'Request a free orthodontic consultation in Denver for aligners, braces, and personalized treatment options.',
    },
    es: {
      title: 'Programa tu Consulta de Ortodoncia en Denver | Colorado Braces',
      description: 'Solicita una consulta gratuita de ortodoncia en Denver para alineadores, brackets y opciones de tratamiento personalizadas.',
    },
  },
  blog: {
    en: {
      title: 'Orthodontic Tips and Insights | Colorado Braces Denver',
      description: 'Helpful orthodontic guides from Colorado Braces about aligners, braces, bite correction, and smile care.',
    },
    es: {
      title: 'Consejos de Ortodoncia | Colorado Braces Denver',
      description: 'Guías útiles de Colorado Braces sobre alineadores, brackets, corrección de mordida y cuidado de tu sonrisa.',
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy | Colorado Braces',
      description: 'Read the Colorado Braces privacy policy for website visitors and appointment requests.',
    },
    es: {
      title: 'Política de Privacidad | Colorado Braces',
      description: 'Consulta la política de privacidad de Colorado Braces para visitantes y solicitudes de citas.',
    },
  },
  services: {
    clearAligners: {
      en: { title: 'Clear Aligners in Denver | Colorado Braces', description: 'Explore comfortable, discreet clear aligner treatment in Denver from Colorado Braces.' },
      es: { title: 'Alineadores Transparentes en Denver | Colorado Braces', description: 'Conoce el tratamiento con alineadores transparentes, cómodos y discretos de Colorado Braces en Denver.' },
    },
    clearBraces: {
      en: { title: 'Clear Braces in Denver | Colorado Braces', description: 'Learn about discreet ceramic clear braces and personalized orthodontic care in Denver.' },
      es: { title: 'Brackets Transparentes en Denver | Colorado Braces', description: 'Conoce los brackets cerámicos discretos y la atención ortodóntica personalizada en Denver.' },
    },
    conventionalBraces: {
      en: { title: 'Traditional Braces in Denver | Colorado Braces', description: 'Explore reliable traditional braces and personalized orthodontic treatment in Denver.' },
      es: { title: 'Brackets Convencionales en Denver | Colorado Braces', description: 'Conoce los brackets convencionales y el tratamiento ortodóntico personalizado en Denver.' },
    },
    whitening: {
      en: { title: 'Professional Teeth Whitening in Denver | Colorado Braces', description: 'Learn about professional teeth whitening services from Colorado Braces in Denver.' },
      es: { title: 'Blanqueamiento Dental en Denver | Colorado Braces', description: 'Conoce los servicios profesionales de blanqueamiento dental de Colorado Braces en Denver.' },
    },
    invisalign: {
      en: { title: 'Invisalign Provider in Denver | Colorado Braces', description: 'Learn about Invisalign treatment options with Colorado Braces in Denver.' },
      es: { title: 'Proveedor de Invisalign en Denver | Colorado Braces', description: 'Conoce las opciones de tratamiento Invisalign con Colorado Braces en Denver.' },
    },
    orthofx: {
      en: { title: 'OrthoFX Provider in Denver | Colorado Braces', description: 'Learn about OrthoFX clear aligner treatment with Colorado Braces in Denver.' },
      es: { title: 'Proveedor de OrthoFX en Denver | Colorado Braces', description: 'Conoce el tratamiento con alineadores OrthoFX de Colorado Braces en Denver.' },
    },
  },
} satisfies Record<string, unknown>;
