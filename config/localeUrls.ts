type LocaleUrls = {
  [key: string]: string;
};

export const localeUrls: LocaleUrls = {
  about: 'about',
  appointment: 'appointment',
  services: 'services',
  blog: 'blog',
  contact: 'contact',
  // Services
  clearAligners: 'services/clear-aligners',
  clearBraces: 'services/clear-braces',
  conventionalBraces: 'services/conventional-braces',
  whitening: 'services/whitening',
};

export const getLocalizedUrl = (path: string): string => {
  return localeUrls[path] || path;
}; 