import type { Metadata } from 'next';
import { getReferralFormUrl } from '@/lib/referrals';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Refer a Patient | Colorado Braces',
    description: 'Refer a patient to Colorado Braces in Denver using our doctor referral form.',
  },
  es: {
    title: 'Referir un paciente | Colorado Braces',
    description: 'Refiere un paciente a Colorado Braces en Denver con nuestro formulario de referencia profesional.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return {
    ...localizedMetadata(params.lang, 'referrals', copy),
    robots: getReferralFormUrl(params.lang) ? undefined : { index: false, follow: false },
  };
}

export default function ReferralsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
