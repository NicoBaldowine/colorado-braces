import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'appointment', seoCopy.appointment);
}

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
