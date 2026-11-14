const publishedReferralFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdWZqQZqAjcTTB0_MZGnqchlsl1qVfYb6tuTPVNp2S1i-s1Gw/viewform';

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
