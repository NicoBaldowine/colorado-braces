'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';

type Language = 'en' | 'es';

const copy = {
  en: {
    title: 'Request your free consultation',
    intro: 'Tell us how to reach you. Our office will follow up to help you get started.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    phone: 'Phone number',
    button: 'Request my consultation',
    submitting: 'Sending…',
    success: 'Thank you! Your request has been sent. Our office will be in touch.',
    error: 'We could not send your request. Please try again or call (303) 991-4455.',
    privacy: 'By submitting, you agree that Colorado Braces may contact you about your request. Read our',
    privacyLink: 'Privacy Policy',
  },
  es: {
    title: 'Solicita tu consulta gratuita',
    intro: 'Dinos cómo contactarte. Nuestro consultorio te ayudará a dar el primer paso.',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    button: 'Solicitar mi consulta',
    submitting: 'Enviando…',
    success: '¡Gracias! Recibimos tu solicitud. Nuestro consultorio se comunicará contigo.',
    error: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o llama al (303) 991-4455.',
    privacy: 'Al enviar este formulario, aceptas que Colorado Braces te contacte sobre tu solicitud. Lee nuestra',
    privacyLink: 'Política de privacidad',
  },
};

const emptyForm = { firstName: '', lastName: '', email: '', phone: '' };

export default function AdsClearAlignersForm({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          service: 'Clear aligners — Google Ads landing page',
          preferredDate: '',
          preferredTime: '',
        }),
      });

      if (!response.ok) throw new Error('Appointment request failed');
      setForm(emptyForm);
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass = 'mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#023A65] focus:ring-2 focus:ring-[#023A65]/20';

  return (
    <section id="consultation" className="scroll-mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-36px_rgba(2,58,101,0.45)] sm:p-8" aria-labelledby="ads-form-title">
      <h2 id="ads-form-title" className="text-2xl font-bold leading-tight text-[#023A65] sm:text-[28px]">{t.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.intro}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-700">
            {t.firstName} <span aria-hidden="true">*</span>
            <input name="firstName" autoComplete="given-name" required maxLength={80} value={form.firstName} onChange={(event) => setForm({ ...form, firstName: event.target.value })} className={fieldClass} />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            {t.lastName} <span aria-hidden="true">*</span>
            <input name="lastName" autoComplete="family-name" required maxLength={80} value={form.lastName} onChange={(event) => setForm({ ...form, lastName: event.target.value })} className={fieldClass} />
          </label>
        </div>
        <label className="block text-sm font-semibold text-slate-700">
          {t.email} <span aria-hidden="true">*</span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold text-slate-700">
          {t.phone} <span aria-hidden="true">*</span>
          <input name="phone" type="tel" autoComplete="tel" required maxLength={40} value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={fieldClass} />
        </label>

        {status !== 'idle' && (
          <p role="status" className={`rounded-xl px-4 py-3 text-sm ${status === 'success' ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-800'}`}>
            {status === 'success' ? t.success : t.error}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#023A65] px-6 py-3 text-center font-bold text-white transition hover:bg-[#03528f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#023A65] disabled:cursor-wait disabled:opacity-60">
          {isSubmitting ? t.submitting : t.button}
        </button>
        <p className="text-xs leading-relaxed text-slate-500">
          {t.privacy} <Link href={`/${lang}/privacy/`} className="font-semibold text-[#023A65] underline underline-offset-2">{t.privacyLink}</Link>.
        </p>
      </form>
    </section>
  );
}
