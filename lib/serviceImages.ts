import type { StaticImageData } from 'next/image';
import clearAligners from '@/app/assets/clear-aligners.jpg';
import clearBraces from '@/app/assets/clear-braces.jpg';
import conventionalBraces from '@/app/assets/conventional-braces.jpg';
import whitening from '@/app/assets/whitening.jpg';

export const serviceImages: Record<string, StaticImageData | string> = {
  'clear-aligners': clearAligners,
  'clear-braces': clearBraces,
  'conventional-braces': conventionalBraces,
  whitening,
  nightguards: '/service-images/night-guard-light.png',
  'sports-guards': '/service-images/sports-guard-light.png',
  'phase-1-treatment': '/age-seven-orthodontic-visit.jpg',
  'teen-orthodontics': '/service-images/teen-orthodontics.jpg',
  'adult-orthodontics': '/service-images/adult-orthodontics.jpeg',
  retainers: '/essix-retainer-original.png',
  'snoring-sleep-apnea': '/service-images/tap-3-official.png',
};

export const serviceImageClass = (slug: string) =>
  slug === 'snoring-sleep-apnea'
    ? 'object-contain bg-[#f2f2f2]'
    : slug === 'adult-orthodontics'
      ? 'object-cover scale-[1.4]'
      : 'object-cover';

export const serviceImageAlt: Record<string, { en: string; es: string }> = {
  nightguards: { en: 'Clear custom nightguard', es: 'Protector nocturno transparente hecho a medida' },
  'sports-guards': { en: 'Custom sports mouthguard in blue, white, and red', es: 'Protector deportivo a medida azul, blanco y rojo' },
  'phase-1-treatment': { en: 'Child at an early orthodontic visit', es: 'Niño en una consulta de ortodoncia temprana' },
  'teen-orthodontics': { en: 'Teen smiling outdoors with braces', es: 'Adolescente sonriendo al aire libre con brackets' },
  'adult-orthodontics': { en: 'Adult wearing clear aligners', es: 'Adulta usando alineadores transparentes' },
  retainers: { en: 'Clear Essix-style retainer', es: 'Retenedor transparente tipo Essix' },
  'snoring-sleep-apnea': { en: 'TAP 3 oral appliance', es: 'Dispositivo oral TAP 3' },
};
