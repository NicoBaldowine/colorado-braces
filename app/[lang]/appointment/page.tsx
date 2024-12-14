"use client";
import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import Contact from "@/components/Contact";

interface TranslationFunction {
  (key: string): string | string[];
  (key: string, params: Record<string, string>): string;
}

interface UseTranslations {
  t: TranslationFunction;
  lang: string;
}

export default function Appointment() {
  const { t, lang } = useTranslations();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const services = [
    t('common.services.clearAligners'),
    t('common.services.clearBraces'),
    t('common.services.conventionalBraces'),
    t('common.services.whitening'),
    "Not sure yet"
  ];

  // Get today's date and format it for the date input min attribute
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t('appointment.successMessage')
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          preferredDate: "",
          preferredTime: ""
        });
      } else {
        throw new Error('Failed to send appointment request');
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t('appointment.errorMessage')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="py-24">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('appointment.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('appointment.description')}
              </p>
              <div className="bg-[#023A65]/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-[#023A65] mb-4">
                  {t('appointment.expectations.title')}
                </h2>
                <ul className="space-y-4 text-gray-600">
                  {t('appointment.expectations.items').map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('appointment.form.firstName')} *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('appointment.form.lastName')} *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('appointment.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('appointment.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Service Field */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('appointment.form.service')} *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">{t('appointment.form.selectService')}</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date Field */}
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('appointment.form.preferredDate')} *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    min={minDate}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {t('appointment.form.dateHint')}
                  </p>
                </div>

                {/* Preferred Time Field */}
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('appointment.form.preferredTime')} *
                  </label>
                  <select
                    id="preferredTime"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                  >
                    <option value="">{t('appointment.form.selectTime')}</option>
                    <option value="Morning">{t('appointment.form.timeMorning')}</option>
                    <option value="Afternoon">{t('appointment.form.timeAfternoon')}</option>
                  </select>
                </div>

                {submitStatus.type && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#023A65] text-white px-6 py-3 rounded-md hover:bg-[#034b82] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? t('appointment.form.submitting') : t('appointment.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
} 