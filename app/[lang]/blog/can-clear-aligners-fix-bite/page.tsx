'use client';
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import blogpost2 from '@/app/assets/blogpost2.jpg';
import { useTranslations } from '@/hooks/useTranslations';

export default function BlogPost() {
  const { t, lang } = useTranslations();
  
  const content = {
    en: {
      title: "Can Clear Aligners Fix My Bite? Understanding Malocclusion Treatment Options",
      author: "By Dr. Eduardo Garcia",
      date: "March 10, 2024",
      readTime: "6 min read",
      introduction: "Many patients wonder if clear aligners can effectively address bite issues. While traditionally associated with straightening teeth, modern clear aligner technology has evolved to treat various types of malocclusion (bite problems) with impressive results.",
      understanding: {
        title: "Understanding Malocclusion",
        content: "Malocclusion refers to misalignment between your upper and lower teeth. This can manifest as overbites, underbites, crossbites, or open bites. Each type presents unique challenges and requires specific treatment approaches."
      },
      treatment: {
        title: "How Clear Aligners Address Bite Issues",
        items: [
          "Precise 3D treatment planning allows for targeted bite correction",
          "Gradual adjustment of both teeth position and jaw alignment",
          "Custom attachments and buttons can enhance treatment effectiveness",
          "Regular monitoring ensures progress toward optimal bite alignment"
        ]
      },
      cta: "Schedule a Consultation",
      backToBlog: "← Back to Blog"
    },
    es: {
      title: "¿Pueden los Alineadores Transparentes Corregir mi Mordida? Entendiendo las Opciones de Tratamiento para la Maloclusión",
      author: "Por Dr. Eduardo García",
      date: "10 de marzo de 2024",
      readTime: "6 min de lectura",
      introduction: "Muchos pacientes se preguntan si los alineadores transparentes pueden tratar efectivamente problemas de mordida. Si bien tradicionalmente se asocian con enderezar los dientes, la tecnología moderna de alineadores transparentes ha evolucionado para tratar varios tipos de maloclusión (problemas de mordida) con resultados impresionantes.",
      understanding: {
        title: "Entendiendo la Maloclusión",
        content: "La maloclusión se refiere al desalineamiento entre los dientes superiores e inferiores. Esto puede manifestarse como sobremordida, submordida, mordida cruzada o mordida abierta. Cada tipo presenta desafíos únicos y requiere enfoques específicos de tratamiento."
      },
      treatment: {
        title: "Cómo los Alineadores Transparentes Corrigen Problemas de Mordida",
        items: [
          "La planificación precisa del tratamiento en 3D permite una corrección específica de la mordida",
          "Ajuste gradual tanto de la posición de los dientes como de la alineación de la mandíbula",
          "Accesorios y botones personalizados pueden mejorar la efectividad del tratamiento",
          "El monitoreo regular asegura el progreso hacia una alineación óptima de la mordida"
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
              src={blogpost2}
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
            {currentContent.understanding.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.understanding.content}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.treatment.title}
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-12 space-y-4">
            {currentContent.treatment.items.map((item, index) => (
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