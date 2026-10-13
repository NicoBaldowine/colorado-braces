import type { Metadata } from 'next';

const metadataByLanguage = {
  en: {
    title: 'Clear Aligners in Denver | Free Consultation | Colorado Braces',
    description: 'Explore clear aligners with Dr. Eduardo Garcia in Denver. Request a free consultation at Colorado Braces.',
  },
  es: {
    title: 'Alineadores transparentes en Denver | Colorado Braces',
    description: 'Conoce tus opciones de alineadores transparentes con el Dr. Eduardo Garcia en Denver. Solicita una consulta gratuita.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = params.lang === 'es' ? 'es' : 'en';

  return {
    ...metadataByLanguage[lang],
    robots: { index: false, follow: true },
  };
}

export default function ClearAlignersAdsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
