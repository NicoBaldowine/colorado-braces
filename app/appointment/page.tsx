"use client";
import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import Contact from "@/components/Contact";

export default function Appointment() {
  const { t } = useTranslations();
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
    "Clear Aligners",
    "Clear Braces",
    "Conventional Braces",
    "Whitening",
    "Not sure yet"
  ];

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
          message: "Thank you! We'll contact you shortly to confirm your appointment."
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
        message: "There was an error submitting your request. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Content */}
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Schedule Your Free Consultation
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Take the first step towards your perfect smile. Schedule a consultation with our experienced orthodontic team to discuss your treatment options and create a personalized plan.
                </p>
                <div className="bg-[#023A65]/5 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-[#023A65] mb-4">
                    What to Expect
                  </h2>
                  <ul className="space-y-4 text-gray-600">
                    <li>• Comprehensive oral examination</li>
                    <li>• Discussion of your smile goals</li>
                    <li>• Treatment options explanation</li>
                    <li>• Cost and insurance review</li>
                    <li>• Flexible scheduling options</li>
                  </ul>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
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
                        Last Name *
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

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
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

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
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

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Service *
                    </label>
                    <select
                      id="service"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#023A65]"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    >
                      <option value="">Select a time</option>
                      <option value="Morning">Morning (9AM - 12PM)</option>
                      <option value="Afternoon">Afternoon (12PM - 5PM)</option>
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
                    {isSubmitting ? "Submitting..." : "Schedule Appointment"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 