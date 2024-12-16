'use client';
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import blogpost3 from '@/app/assets/blogpost3.jpg';
import { useTranslations } from '@/hooks/useTranslations';

export default function BlogPost() {
  const { t, lang } = useTranslations();
  
  const content = {
    en: {
      title: "How Do Braces Work? A Simple Guide to Fixing Crooked Teeth and Misaligned Bites",
      author: "By Dr. Eduardo Garcia",
      date: "March 5, 2024",
      readTime: "4 min read",
      introduction: "Understanding how braces work can help you feel more confident about your orthodontic treatment journey. From crooked teeth to misaligned bites, braces are a proven solution that has helped millions achieve their perfect smile through a fascinating process of gradual tooth movement.",
      process: {
        title: "The Process of Orthodontic Treatment",
        content: "Braces work by applying constant, gentle pressure to your teeth over time. This pressure gradually moves teeth into their proper positions by remodeling the bone structure beneath your gums. The process involves several key components working together to achieve optimal results."
      },
      components: {
        title: "Key Components of Braces",
        items: [
          "Brackets: Small attachments bonded to each tooth that hold the archwire",
          "Archwires: Flexible wires that guide teeth into proper alignment",
          "Elastic bands: Help coordinate upper and lower jaw alignment",
          "Periodic adjustments: Regular visits to ensure progress and make necessary modifications"
        ]
      },
      cta: "Schedule a Consultation",
      backToBlog: "← Back to Blog"
    },
    es: {
      title: "¿Cómo Funcionan los Brackets? Una Guía Simple para Corregir Dientes Torcidos y Problemas de Mordida",
      author: "Por Dr. Eduardo García",
      date: "5 de marzo de 2024",
      readTime: "4 min de lectura",
      introduction: "Entender cómo funcionan los brackets puede ayudarte a sentirte más seguro sobre tu tratamiento ortodóntico. Desde dientes torcidos hasta problemas de mordida, los brackets son una solución probada que ha ayudado a millones de personas a lograr su sonrisa perfecta a través de un fascinante proceso de movimiento dental gradual.",
      process: {
        title: "El Proceso del Tratamiento Ortodóntico",
        content: "Los brackets funcionan aplicando una presión constante y suave sobre tus dientes a lo largo del tiempo. Esta presión mueve gradualmente los dientes a sus posiciones correctas mediante la remodelación de la estructura ósea debajo de las encías. El proceso involucra varios componentes clave trabajando juntos para lograr resultados óptimos."
      },
      components: {
        title: "Componentes Clave de los Brackets",
        items: [
          "Brackets: Pequeños aditamentos adheridos a cada diente que sostienen el arco",
          "Arcos: Alambres flexibles que guían los dientes hacia una alineación correcta",
          "Bandas elásticas: Ayudan a coordinar la alineación de la mandíbula superior e inferior",
          "Ajustes periódicos: Visitas regulares para asegurar el progreso y hacer modificaciones necesarias"
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
              src={blogpost3}
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
            {currentContent.process.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.process.content}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.components.title}
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-12 space-y-4">
            {currentContent.components.items.map((item, index) => (
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