# Referring-doctor form setup

The `/en/referrals/` and `/es/referrals/` pages are prepared locally. They do not collect or submit patient information on the Colorado Braces server. Both pages can embed the same bilingual Google Form once its responder URL is configured.

## Google Workspace configuration

1. The Google Workspace HIPAA Business Associate Amendment was shown as accepted by `office@colorado-braces.com` on November 14, 2026. Keep the form, its responses, Apps Script, generated PDF, and recipient mailbox within this Workspace account. Review Workspace access and retention settings with the practice's administrator before accepting real referrals.
2. Published form: `https://docs.google.com/forms/d/1hb5vX3qNYZ4ozn1Q_5cYevTyxiJctiRmZjg0VE2XZ8Q/edit`. It has eight fields: referring doctor, patient name, gender, age, parent/guardian, phone number, panoramic radiograph availability/date, and comments/notes. Only patient name, phone number, and comments/notes are required. There are no file uploads. Google Forms records the submission time automatically, so there is no date question.
3. The code in `docs/referral-google-workspace.gs` is saved in the form-bound Apps Script project with an installable **On form submit** trigger for `sendReferralPdf`. Review and authorize the Google permissions in the office account. The script adds the submission timestamp to the PDF, emails it to `office@colorado-braces.com` without patient information in the subject or body, and trashes its temporary Google Doc after sending. Google Forms retains the original response in the covered Workspace account.
4. Confirm the Google Form accepts responses from outside the organization without requiring Google sign-in, and review its sharing and response settings. Do not use third-party add-ons for patient information.
5. Test with dummy data. Confirm the email arrives with the PDF attached and that only the intended account can view form responses.
6. The published Google Form responder URL is the website default for both languages. Optional `REFERRAL_FORM_URL_EN` and `REFERRAL_FORM_URL_ES` overrides must be `https://docs.google.com/forms/d/e/.../viewform` URLs. The website rejects other hosts and paths. The referral URLs are included in the sitemap.
7. After review, deploy the website and confirm the embedded form on the live URLs.

Do not put patient information, Workspace credentials, or authentication tokens in the repository or Vercel environment variables. The PDF is attached to an internal email, but it is not password protected by Apps Script; rely on Workspace access and email controls and the practice's HIPAA policies.
