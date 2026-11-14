const publishedReferralFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdWZqQZqAjcTTB0_MZGnqchlsl1qVfYb6tuTPVNp2S1i-s1Gw/viewform';
const publishedReferralWebAppUrl =
  'https://script.google.com/macros/s/AKfycbzZAEN2xRUIP27p5ZzdnLIQ3eNojzglEnleRoqnx9BrMeHVWF35bVvfRyLdHUygX1TN/exec';

export function getBrandedReferralUrl(lang: string): string | null {
  const configured = process.env.REFERRAL_WEB_APP_URL || publishedReferralWebAppUrl;
  if (!configured) return null;

  try {
    const url = new URL(configured);
    if (
      url.protocol !== 'https:' ||
      url.hostname !== 'script.google.com' ||
      !/^\/macros\/s\/[^/]+\/exec\/?$/.test(url.pathname) ||
      url.username ||
      url.password
    ) {
      return null;
    }
    url.searchParams.set('lang', lang === 'es' ? 'es' : 'en');
    return url.toString();
  } catch {
    return null;
  }
}

export function getReferralFormUrl(lang: string): string | null {
  const configured = lang === 'es'
    ? process.env.REFERRAL_FORM_URL_ES
    : process.env.REFERRAL_FORM_URL_EN;

  const formUrl = configured || publishedReferralFormUrl;

  try {
    const url = new URL(formUrl);
    if (
      url.protocol !== 'https:' ||
      url.hostname !== 'docs.google.com' ||
      !/^\/forms\/d\/(?:e\/)?[^/]+\/viewform\/?$/.test(url.pathname) ||
      url.username ||
      url.password
    ) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}
