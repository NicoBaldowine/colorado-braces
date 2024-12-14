import '@/app/globals.css';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Colorado Braces',
  description: 'Expert orthodontic care in Denver',
};
