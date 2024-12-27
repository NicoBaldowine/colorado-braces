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
      introduction: "When you’re looking to improve your smile, one of the first choices you’ll face is how to straighten your teeth—often coming down to traditional metal braces, “invisible” braces, or removable clear aligners. Each has its own set of benefits and considerations, making it important to understand what sets them apart.",
      whatAreInvisibleBracesTitle: "What Are Invisible Braces?",
      whatAreInvisibleBracesContent: "Often referred to as ceramic or tooth-colored braces, invisible braces are similar to traditional metal braces but use brackets made from materials designed to blend with your natural tooth color. These braces remain fixed on your teeth throughout the treatment, just like traditional braces, but their subtler appearance can make them less noticeable. This is a great option for those who prefer the reliability of a fixed system without the obvious look of metal.",
      whatAreClearAlignersTitle: "What Are Clear Aligners?",
      whatAreClearAlignersContent: "Clear aligners, on the other hand, are a series of removable, transparent trays that fit snugly over your teeth. Instead of brackets and wires, each set of aligners is slightly adjusted to gradually move your teeth into the desired position. They can be taken out when you eat, brush, and floss, offering flexibility that braces—traditional or invisible—do not. This convenience can be a major plus, especially for those with active lifestyles or important social and professional commitments.",
      comparing: {
        title: "Comparing Your Options",
        content: "Let’s break down some key areas to consider when choosing the right option for you."
      },
      appearanceTitle: "Appearance",
      appearanceContent: "• Traditional Metal Braces: Visible metal brackets and wires.\n• Invisible (Ceramic) Braces: Less noticeable, thanks to tooth-colored or clear brackets.\n• Clear Aligners: Nearly invisible, with no brackets or wires.",
      lifestyleTitle: "Lifestyle and Maintenance",
      lifestyleContent: "• Traditional & Invisible Braces: Fixed to your teeth; you’ll need to be cautious with certain foods and spend extra time cleaning around brackets and wires.\n• Clear Aligners: Removable, allowing you to eat what you like and maintain your usual oral hygiene routine more easily—just remember to wear them 20-22 hours a day.",
      comfortTitle: "Comfort and Care",
      comfortContent: "• Braces (Traditional or Invisible): May cause some irritation and require special care during sports or when eating harder foods.\n• Clear Aligners: Smooth and custom-fitted, often more comfortable, but require diligent cleaning and handling.",
      complexityTitle: "Complexity of Treatment",
      complexityContent: "• Traditional or Invisible Braces: Suitable for a wide range of orthodontic issues, including complex cases.\n• Clear Aligners: Ideal for mild to moderate corrections, but very complex cases may still require braces.",
      choosingTitle: "Choosing the Right Option for You",
      choosingContent: "Deciding between traditional metal braces, invisible braces, or clear aligners depends on your preferences, the complexity of your orthodontic needs, and your lifestyle. Consulting with an experienced orthodontist will ensure you select the treatment best suited to your unique goals—leading to a healthier, more confident smile.",
      cta: "Schedule a Consultation",
      backToBlog: "← Back to Blog"
    },
    es: {
      title: "Brackets Invisibles vs. Brackets Tradicionales: ¿Cuál es Mejor para tu Estilo de Vida?",
      author: "Por Dr. Eduardo García",
      date: "15 de marzo de 2024",
      readTime: "5 min de lectura",
      introduction: "Cuando buscas mejorar tu sonrisa, una de las primeras decisiones que enfrentarás es cómo alinear tus dientes: por lo general, las opciones más comunes incluyen brackets metálicos tradicionales, brackets “invisibles” (cerámicos) o alineadores transparentes removibles. Cada opción tiene sus ventajas y consideraciones, así que es importante entender sus diferencias.",
      whatAreInvisibleBracesTitle: "¿Qué son los Brackets Invisibles?",
      whatAreInvisibleBracesContent: "A menudo conocidos como brackets cerámicos o del color del diente, los brackets invisibles son similares a los metálicos tradicionales, pero utilizan materiales que se mimetizan con el color natural de tus dientes. Permanecen fijos durante todo el tratamiento, igual que los tradicionales, pero su apariencia más discreta los hace menos notorios. Son ideales para quienes desean la confiabilidad de un sistema fijo sin el aspecto metálico evidente.",
      whatAreClearAlignersTitle: "¿Qué son los Alineadores Transparentes?",
      whatAreClearAlignersContent: "Por otro lado, los alineadores transparentes son férulas removibles y transparentes que se ajustan a tus dientes. En lugar de brackets y alambres, cada juego de alineadores mueve gradualmente tus dientes hacia la posición deseada. Puedes quitarlos para comer, cepillarte y usar hilo dental, brindando una flexibilidad que los brackets —tradicionales o invisibles— no ofrecen. Esta conveniencia es especialmente valiosa para quienes tienen un estilo de vida activo o compromisos sociales y profesionales importantes.",
      comparing: {
        title: "Comparando tus Opciones",
        content: "Analicemos algunos aspectos clave para elegir la opción correcta."
      },
      appearanceTitle: "Apariencia",
      appearanceContent: "• Brackets Metálicos Tradicionales: Brackets y alambres metálicos visibles.\n• Brackets Invisibles (Cerámicos): Menos notorios, gracias a brackets del color del diente o transparentes.\n• Alineadores Transparentes: Prácticamente invisibles, sin brackets ni alambres.",
      lifestyleTitle: "Estilo de Vida y Mantenimiento",
      lifestyleContent: "• Brackets Tradicionales e Invisibles: Fijos a tus dientes; debes tener cuidado con ciertos alimentos y dedicar más tiempo a la limpieza.\n• Alineadores Transparentes: Removibles, puedes comer lo que quieras y mantener tu rutina de higiene oral más fácilmente—solo recuerda usarlos 20-22 horas al día.",
      comfortTitle: "Comodidad y Cuidado",
      comfortContent: "• Brackets (Tradicionales o Invisibles): Pueden provocar irritación y requieren cuidados especiales al hacer deporte o comer alimentos duros.\n• Alineadores Transparentes: Suaves y hechos a medida, suelen ser más cómodos, pero requieren limpieza y manejo constantes.",
      complexityTitle: "Complejidad del Tratamiento",
      complexityContent: "• Brackets Tradicionales o Invisibles: Adecuados para una amplia gama de problemas ortodónticos, incluyendo casos complejos.\n• Alineadores Transparentes: Ideales para correcciones leves a moderadas, pero los casos muy complejos pueden requerir brackets.",
      choosingTitle: "Eligiendo la Opción Correcta para Ti",
      choosingContent: "Elegir entre brackets metálicos, brackets invisibles o alineadores transparentes depende de tus preferencias, la complejidad de tu caso y tu estilo de vida. Consultar con un ortodoncista experimentado te ayudará a seleccionar el tratamiento más adecuado, llevándote a una sonrisa más saludable y segura.",
      cta: "Programar una Consulta",
      backToBlog: "← Volver al Blog"
    }
  };

  const currentContent = content[lang];

  // Convert newline characters in content fields to <br/> for display
  const formatText = (text) => {
    return text.split('\n').map((line, i) => <p key={i}>{line}</p>);
  };

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
            {currentContent.whatAreInvisibleBracesTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.whatAreInvisibleBracesContent}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.whatAreClearAlignersTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.whatAreClearAlignersContent}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.comparing.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.comparing.content}
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {currentContent.appearanceTitle}
          </h3>
          <div className="text-lg text-gray-600 mb-8 space-y-2">
            {formatText(currentContent.appearanceContent)}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {currentContent.lifestyleTitle}
          </h3>
          <div className="text-lg text-gray-600 mb-8 space-y-2">
            {formatText(currentContent.lifestyleContent)}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {currentContent.comfortTitle}
          </h3>
          <div className="text-lg text-gray-600 mb-8 space-y-2">
            {formatText(currentContent.comfortContent)}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {currentContent.complexityTitle}
          </h3>
          <div className="text-lg text-gray-600 mb-8 space-y-2">
            {formatText(currentContent.complexityContent)}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.choosingTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            {currentContent.choosingContent}
          </p>

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
