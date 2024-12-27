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
      introduction: "Many patients wonder if clear aligners can do more than just straighten crooked teeth—they want to know if these innovative devices can also address bite issues. While traditionally associated with mild to moderate alignment corrections, today’s clear aligner technology has advanced significantly, allowing many types of malocclusion (bite problems) to be treated effectively. From subtle adjustments in how your teeth fit together to more noticeable improvements in jaw alignment, clear aligners can often be part of a comprehensive approach to achieving a balanced, healthy bite.",
      understanding: {
        title: "Understanding Malocclusion",
        content: "Malocclusion refers to a misalignment in the way your upper and lower teeth come together when you bite down. Common types include:\n• Overbites: When the upper front teeth overlap the lower front teeth too much.\n• Underbites: When the lower front teeth protrude past the upper front teeth.\n• Crossbites: When some upper teeth sit inside the lower teeth rather than outside.\n• Open Bites: When the upper and lower front teeth don’t meet, leaving a gap even when the back teeth are together.\n\nEach type of malocclusion can affect more than just aesthetics—it can influence how you chew, speak, and maintain proper oral hygiene. Left untreated, bite issues may contribute to excessive wear on your teeth, jaw discomfort, and even headaches. Understanding your specific type of malocclusion is the first step in choosing the right treatment approach."
      },
      whatAlignersCanDoTitle: "What Types of Bite Issues Can Clear Aligners Address?",
      whatAlignersCanDoContent: "Clear aligners have evolved far beyond simple cosmetic improvements. Modern aligner systems are designed using advanced 3D imaging and computer modeling to plan each stage of tooth movement. This level of precision means that many mild to moderate bite issues can be corrected, including:\n• Mild Overbites and Underbites: Aligners can gradually shift the position of your teeth, helping to reduce the overlap in overbites or bring the lower jaw forward in mild underbites.\n• Certain Crossbites: By carefully applying pressure to specific teeth, aligners may help correct bite discrepancies where upper and lower teeth don’t align properly.\n• Slight Open Bites: Strategic tooth movements can encourage the upper and lower teeth to meet, closing the gap and improving overall function.\n\nWhile not every bite problem can be addressed solely by aligners, they can play a significant role in a comprehensive treatment plan. In more complex cases, your orthodontist might combine aligners with other appliances or techniques for the best outcome.",
      treatment: {
        title: "How Clear Aligners Address Bite Issues",
        items: [
          "Precise 3D Treatment Planning: Advanced software allows your orthodontist to virtually map out each step of the alignment process, ensuring targeted bite correction.",
          "Gradual and Controlled Movements: Each new set of aligners applies gentle pressure to guide teeth and, in some cases, subtly influence jaw positioning over time.",
          "Use of Attachments and Elastics: Small, tooth-colored attachments or elastic bands can be added to enhance aligner grip and leverage, making bite correction more effective.",
          "Regular Check-Ins and Adjustments: Your orthodontist will monitor your progress, ensuring your bite is improving as planned and making adjustments if needed."
        ]
      },
      areAlignersRightTitle: "Are Clear Aligners Right for Your Malocclusion?",
      areAlignersRightContent: "Clear aligners can be a convenient and discreet solution, but they’re not always the best choice for every bite issue. Severe malocclusion or cases requiring significant jaw realignment may still be better served by traditional braces or even surgical intervention. Additionally, aligners require consistent wear—typically 20-22 hours a day—to achieve optimal results. Patients who value flexibility and aesthetics but can commit to wearing their aligners diligently often find them an excellent match for their needs.",
      choosingTitle: "Choosing the Right Treatment for Your Bite",
      choosingContent: "Determining whether clear aligners can address your specific bite concerns starts with a professional evaluation. An experienced orthodontist will assess your bite, discuss your goals, and recommend the most effective course of treatment. Sometimes, a combination approach—such as using aligners for certain corrections and braces for others—might provide the best outcome.\n\nUltimately, the key to a healthier, more functional bite lies in understanding the nature of your malocclusion and working closely with a qualified orthodontic professional. By exploring clear aligners and other treatment options, you can find a path forward that aligns with your lifestyle, comfort, and long-term oral health.",
      cta: "Schedule a Consultation",
      backToBlog: "← Back to Blog"
    },
    es: {
      title: "¿Pueden los Alineadores Transparentes Corregir mi Mordida? Entendiendo las Opciones de Tratamiento para la Maloclusión",
      author: "Por Dr. Eduardo García",
      date: "10 de marzo de 2024",
      readTime: "6 min de lectura",
      introduction: "Muchos pacientes se preguntan si los alineadores transparentes pueden hacer algo más que enderezar dientes torcidos: quieren saber si estas innovadoras férulas también pueden abordar problemas de mordida. Aunque tradicionalmente se han asociado con correcciones leves a moderadas de alineación, la tecnología de los alineadores modernos ha avanzado significativamente, permitiendo tratar diversos tipos de maloclusión (problemas en la mordida) de manera efectiva. Desde ajustes sutiles en cómo encajan los dientes hasta mejoras más notorias en la alineación de la mandíbula, los alineadores transparentes pueden ser parte de un enfoque integral para lograr una mordida equilibrada y saludable.",
      understanding: {
        title: "Entendiendo la Maloclusión",
        content: "La maloclusión se refiere a un desalineamiento en la forma en que los dientes superiores e inferiores encajan al morder. Los tipos más comunes incluyen:\n• Sobremordida: Cuando los dientes superiores frontales cubren en exceso a los inferiores.\n• Submordida: Cuando los dientes inferiores frontales sobresalen más allá de los superiores.\n• Mordida Cruzada: Cuando algunos dientes superiores quedan por dentro de los inferiores en lugar de por fuera.\n• Mordida Abierta: Cuando los dientes frontales superiores e inferiores no se tocan, dejando un espacio incluso con las muelas juntas.\n\nCada tipo de maloclusión afecta más que la estética: puede influir en la forma de masticar, hablar y mantener una higiene oral adecuada. Si no se trata, la maloclusión puede contribuir al desgaste excesivo de los dientes, malestar en la mandíbula e incluso dolores de cabeza. Comprender tu tipo específico de maloclusión es el primer paso para elegir el tratamiento adecuado."
      },
      whatAlignersCanDoTitle: "¿Qué Tipos de Problemas de Mordida Pueden Abordar los Alineadores Transparentes?",
      whatAlignersCanDoContent: "Los alineadores transparentes han evolucionado más allá de las simples mejoras estéticas. Los sistemas modernos utilizan imágenes 3D avanzadas y modelado por computadora para planificar cada etapa del movimiento dental. Este nivel de precisión significa que muchos problemas leves a moderados de mordida pueden corregirse, incluyendo:\n• Sobremordidas y Submordidas Leves: Los alineadores pueden desplazar gradualmente la posición de los dientes, reduciendo la superposición en la sobremordida o ayudando a adelantar la mandíbula inferior en submordidas leves.\n• Ciertas Mordidas Cruzadas: Aplicando presión estratégica en dientes específicos, los alineadores pueden corregir la desalineación en la que los dientes superiores e inferiores no encajan adecuadamente.\n• Mordidas Abiertas Leves: Movimientos dentales bien planificados pueden lograr que los dientes superiores e inferiores se encuentren, cerrando el espacio y mejorando la función.\n\nNo todos los problemas de mordida se pueden solucionar solo con alineadores, pero pueden ser una parte fundamental de un plan de tratamiento integral. En casos más complejos, el ortodoncista podría combinar alineadores con otros aparatos o técnicas para lograr el mejor resultado.",
      treatment: {
        title: "Cómo los Alineadores Transparentes Corrigen Problemas de Mordida",
        items: [
          "Planificación Precisa en 3D: Software avanzado permite al ortodoncista mapear virtualmente cada paso, asegurando una corrección específica de la mordida.",
          "Movimientos Graduales y Controlados: Cada nuevo juego de alineadores aplica presión suave, guiando los dientes y, a veces, influenciando ligeramente la posición de la mandíbula con el tiempo.",
          "Uso de Accesorios y Elásticos: Pequeños aditamentos del color del diente o ligas elásticas pueden añadirse para mejorar la eficacia de la corrección de la mordida.",
          "Monitoreo Regular: El ortodoncista supervisará tu progreso, asegurando que la mordida mejore según lo planeado y realizando ajustes de ser necesario."
        ]
      },
      areAlignersRightTitle: "¿Son los Alineadores Transparentes Adecuados para tu Maloclusión?",
      areAlignersRightContent: "Los alineadores transparentes pueden ser una solución cómoda y discreta, pero no siempre son la mejor opción para cada problema de mordida. Las maloclusiones severas o casos que requieren un realineamiento significativo de la mandíbula pueden abordar mejorse con brackets tradicionales o incluso intervención quirúrgica. Además, los alineadores requieren un uso constante—generalmente de 20 a 22 horas diarias—para obtener resultados óptimos. Los pacientes que valoran la flexibilidad y la estética, y que pueden comprometerse a llevar los alineadores responsablemente, suelen encontrar en ellos una excelente opción.",
      choosingTitle: "Eligiendo el Tratamiento Adecuado para tu Mordida",
      choosingContent: "Determinar si los alineadores transparentes pueden abordar tus problemas específicos de mordida comienza con una evaluación profesional. Un ortodoncista experimentado evaluará tu mordida, discutirá tus objetivos y recomendará el curso de tratamiento más eficaz. En algunos casos, una combinación de métodos—por ejemplo, usar alineadores para ciertas correcciones y brackets para otras—podría proporcionar el mejor resultado.\n\nAl final, la clave para una mordida más saludable y funcional radica en comprender la naturaleza de tu maloclusión y trabajar de cerca con un profesional ortodoncista calificado. Al explorar los alineadores transparentes y otras opciones de tratamiento, podrás encontrar un camino que se ajuste a tu estilo de vida, comodidad y salud bucal a largo plazo.",
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
          <div className="text-lg text-gray-600 mb-8 space-y-2">
            {formatText(currentContent.understanding.content)}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.whatAlignersCanDoTitle}
          </h2>
          <div className="text-lg text-gray-600 mb-8 space-y-2">
            {formatText(currentContent.whatAlignersCanDoContent)}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.treatment.title}
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-12 space-y-4">
            {currentContent.treatment.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.areAlignersRightTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {currentContent.areAlignersRightContent}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.choosingTitle}
          </h2>
          <div className="text-lg text-gray-600 mb-12 space-y-2">
            {formatText(currentContent.choosingContent)}
          </div>

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
