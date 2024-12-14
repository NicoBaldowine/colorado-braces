'use client';

import { useTranslations } from '@/hooks/useTranslations';

export default function BlogClient({ params }: { params: { lang: string; slug: string } }) {
  const { t } = useTranslations();

  // Move your client-side logic and rendering here
  return (
    <div>
      {/* Your existing blog post content */}
    </div>
  );
} 