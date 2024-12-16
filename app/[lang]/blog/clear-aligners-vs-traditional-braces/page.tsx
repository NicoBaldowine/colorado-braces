'use client';
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import blogpost1 from '@/app/assets/blogpost1.jpg';
import { useTranslations } from '@/hooks/useTranslations';

export default function BlogPost() {
  const { t, lang } = useTranslations();
  
  const content = {
    en: {
      title: "Invisible Braces vs. Traditional Braces: Which is Better for Your Lifestyle?",
      author: "By Dr. Eduardo Garcia",
      date: "March 15, 2024",
      readTime: "5 min read",
      introduction: "When considering orthodontic treatment, one of the biggest decisions is choosing between invisible braces and traditional braces. Each option offers unique advantages, and the best choice depends on your lifestyle, preferences, and specific orthodontic needs.",
      comparing: {
        title: "Comparing Your Options",
        content: "Both invisible braces and traditional braces can effectively straighten your teeth, but they differ in terms of appearance, maintenance, and lifestyle impact. Understanding these differences is crucial for making an informed decision."
      },
      differences: {
        title: "Key Differences to Consider",
        items: [
          "Aesthetics: Invisible braces offer a nearly invisible appearance, while traditional braces are more noticeable",
          "Maintenance: Invisible braces are removable for eating and cleaning, traditional braces require more careful cleaning",
          "Lifestyle Impact: Invisible braces offer more flexibility for special occasions and activities",
          "Treatment Time: Treatment duration can vary depending on individual cases and compliance"
        ]
      },
      cta: "Schedule a Consultation",
      backToBlog: "← Back to Blog"
    },
    es: {
      title: "Brackets Invisibles vs. Brackets Tradicionales: ¿Cuál es Mejor para tu Estilo de Vida?",
      author: "Por Dr. Eduardo García",
      date: "15 de marzo de 2024",
      readTime: "5 min de lectura",
      introduction: "Al considerar un tratamiento ortodóntico, una de las decisiones más importantes es elegir entre brackets invisibles y brackets tradicionales. Cada opción ofrece ventajas únicas, y la mejor elección depende de tu estilo de vida, preferencias y necesidades ortodónticas específicas.",
      comparing: {
        title: "Comparando tus Opciones",
        content: "Tanto los brackets invisibles como los tradicionales pueden enderezar efectivamente tus dientes, pero difieren en términos de apariencia, mantenimiento e impacto en el estilo de vida. Entender estas diferencias es crucial para tomar una decisión informada."
      },
      differences: {
        title: "Diferencias Clave a Considerar",
        items: [
          "Estética: Los brackets invisibles ofrecen una apariencia casi invisible, mientras que los brackets tradicionales son más notorios",
          "Mantenimiento: Los brackets invisibles son removibles para comer y limpiar, los brackets tradicionales requieren una limpieza más cuidadosa",
          "Impacto en el Estilo de Vida: Los brackets invisibles ofrecen más flexibilidad para ocasiones especiales y actividades",
          "Tiempo de Tratamiento: La duración del tratamiento puede variar según los casos individuales y el cumplimiento"
        ]
      },
      cta: "Programar una Consulta",
      backToBlog: "← Volver al Blog"
    }
  };

  const currentContent = content[lang];

  return (
    <main>
      <section className="bg-gray-50 py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {currentContent.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{currentContent.author}</span>
            <span>•</span>
            <span>{currentContent.date}</span>
            <span>•</span>
            <span>{currentContent.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="w-full h-[400px] mb-12 rounded-lg overflow-hidden relative">
            <Image
              src={blogpost1}
              alt={currentContent.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-lg text-gray-600 mb-8">
            {currentContent.introduction}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.comparing.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.comparing.content}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.differences.title}
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-12 space-y-4">
            {currentContent.differences.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
            <Link 
              href={`/${lang}/appointment`}
              className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors"
            >
              {currentContent.cta}
            </Link>

            <Link 
              href={`/${lang}/blog`}
              className="text-[#023A65] hover:text-[#034b82] transition-colors"
            >
              {currentContent.backToBlog}
            </Link>
          </div>
        </div>
      </article>

      <Contact />
    </main>
  );
} 