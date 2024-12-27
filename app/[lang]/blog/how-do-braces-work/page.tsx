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
      introduction: 
`Braces have long been a trusted solution for patients of all ages seeking a straighter, healthier smile. Understanding how they work can help ease any concerns you may have before starting treatment. At their core, braces rely on applying steady, gentle pressure to guide your teeth into better alignment over time.

While this might sound straightforward, the underlying mechanics are quite remarkable. As brackets, wires, and bands work together, your bone structure subtly adapts, allowing teeth to move into their ideal positions. This controlled movement improves not only the look of your smile but also how your teeth come together when you bite, chew, and speak.

Braces can address a wide range of orthodontic issues, from minor crowding to severe malocclusions. By following your orthodontist’s instructions and attending periodic adjustments, you’ll gradually see your smile transform—often within a matter of months to a few years, depending on your unique situation. The end result is a smile that’s not just straighter, but also healthier and more functional.`,
      process: {
        title: "The Process of Orthodontic Treatment",
        content: 
`The process of moving teeth with braces is rooted in biology. When gentle, continuous pressure is applied to a tooth, the underlying bone and supportive tissues begin to remodel. Cells called osteoclasts break down bone on the side toward which the tooth is moving, while osteoblasts build new bone behind it. This cellular dance ensures that teeth shift without becoming loose or unstable.

Your orthodontist carefully plans each stage of movement using detailed examinations, X-rays, and digital models of your teeth. Over time, small changes in wire tension and elastic placement guide teeth toward their new positions. Although it may feel like a slow process, each step is crucial for achieving long-lasting, stable results. Consistency is key—following your orthodontist’s advice, attending scheduled appointments, and maintaining proper oral hygiene all play an essential role in ensuring success.

Additionally, braces help correct the way your upper and lower teeth fit together. By fine-tuning your bite, braces reduce unnecessary wear and tear on your enamel, lower the risk of jaw discomfort, and make it easier to keep your teeth and gums clean. Understanding this process can help you appreciate that each adjustment, slight pressure, or momentary discomfort is contributing to the steady progress toward your perfect smile.`
      },
      components: {
        title: "Key Components of Braces",
        items: [
          "Brackets: These small attachments, often made of metal or ceramic, are bonded directly to each tooth. They act like tiny handles, holding the archwire in place and allowing precise control over tooth movement.",
          "Archwires: Running through the brackets, these flexible wires apply continuous, gentle pressure to guide teeth into proper alignment. As your treatment progresses, your orthodontist may change to thicker or differently shaped wires to refine your smile.",
          "Elastic Bands: Also known as ligatures, these small rubber bands hold the archwire securely against the brackets. Some patients also use interarch elastics, which stretch between the upper and lower jaws to help correct bite issues.",
          "Periodic Adjustments: During regular visits, your orthodontist may tighten or replace wires, adjust elastic band configurations, or add special attachments. These fine-tunings ensure you stay on track toward your ideal smile.",
          "Spacers and Separators: In some cases, small rubber or metal spacers are placed between teeth to create room for bands or other components, laying the groundwork for more complex corrections.",
          "Retainers (Post-Treatment): Although not worn during active treatment, retainers become critical once braces are removed. They help maintain the new positions of your teeth, ensuring that all the effort invested in treatment endures long after the braces come off."
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
      introduction: 
`Los brackets han sido durante mucho tiempo una solución de confianza para pacientes de todas las edades que buscan una sonrisa más alineada y saludable. Entender cómo funcionan puede ayudarte a sentir más confianza antes de iniciar el tratamiento. En esencia, los brackets aplican una presión constante y suave para guiar los dientes hacia una mejor posición con el paso del tiempo.

Si bien esto puede sonar sencillo, la mecánica subyacente es realmente fascinante. A medida que los brackets, alambres y bandas elásticas trabajan en conjunto, la estructura ósea se adapta sutilmente, permitiendo que los dientes se muevan. Este movimiento controlado no solo mejora la apariencia de tu sonrisa, sino también la forma en que encajan tus dientes al morder, masticar y hablar.

Los brackets pueden abordar una amplia gama de problemas ortodónticos, desde apiñamiento leve hasta maloclusiones severas. Siguiendo las indicaciones de tu ortodoncista y asistiendo a los ajustes periódicos, verás cómo tu sonrisa se transforma gradualmente—a menudo en cuestión de meses a algunos años, según tu caso particular. El resultado final es una sonrisa no solo más recta, sino también más funcional y saludable.`,
      process: {
        title: "El Proceso del Tratamiento Ortodóntico",
        content: 
`El proceso de mover los dientes con brackets se basa en la biología. Cuando se aplica una presión suave y constante sobre un diente, el hueso y los tejidos de soporte comienzan a remodelarse. Las células llamadas osteoclastos descomponen el hueso en el lado hacia el que se mueve el diente, mientras que los osteoblastos construyen hueso nuevo detrás de él. Esta interacción celular asegura que los dientes se desplacen sin aflojarse ni perder estabilidad.

Tu ortodoncista planifica cuidadosamente cada etapa del movimiento utilizando exámenes detallados, radiografías y modelos digitales de tus dientes. Con el tiempo, pequeños cambios en la tensión del arco y la colocación de elásticos guían a los dientes hacia sus nuevas posiciones. Aunque el proceso pueda parecer lento, cada paso es esencial para obtener resultados duraderos y estables. La constancia es clave—seguir las recomendaciones de tu ortodoncista, asistir a las citas programadas y mantener una buena higiene bucal son fundamentales para el éxito.

Además, los brackets ayudan a corregir la forma en que encajan los dientes superiores e inferiores. Al afinar la mordida, se reduce el desgaste excesivo del esmalte, se minimiza el malestar en la mandíbula y se facilita la limpieza de dientes y encías. Comprender este proceso puede ayudarte a apreciar que cada ajuste, cada ligera presión o cada pequeña incomodidad contribuyen al progreso constante hacia tu sonrisa perfecta.`
      },
      components: {
        title: "Componentes Clave de los Brackets",
        items: [
          "Brackets: Estos pequeños aditamentos, a menudo de metal o cerámica, se adhieren directamente a cada diente. Actúan como asas diminutas que sostienen el arco y permiten un control preciso del movimiento dental.",
          "Arcos (Archwires): Estos alambres flexibles, que pasan a través de los brackets, aplican presión suave y constante para guiar los dientes hacia la alineación adecuada. A medida que avanza el tratamiento, el ortodoncista puede cambiar a arcos más gruesos o con diferente forma para refinar tu sonrisa.",
          "Bandas Elásticas: También conocidas como ligaduras, estas pequeñas bandas de goma mantienen el arco firmemente contra los brackets. Algunos pacientes también utilizan elásticos intermaxilares, que se estiran entre la mandíbula superior e inferior para corregir problemas de mordida.",
          "Ajustes Periódicos: Durante las visitas regulares, el ortodoncista puede tensar o reemplazar alambres, ajustar la configuración de las bandas elásticas o agregar accesorios especiales. Estos ajustes finos aseguran que avances hacia la sonrisa ideal.",
          "Separadores y Espaciadores: En algunos casos, se colocan pequeños separadores de goma o metal entre los dientes para crear espacio y permitir la colocación de bandas u otros componentes necesarios para correcciones más complejas.",
          "Retenedores (Después del Tratamiento): Aunque no se usan durante el tratamiento activo con brackets, los retenedores se vuelven esenciales una vez que se retiran. Estos mantienen la nueva posición de tus dientes, asegurando que todo el esfuerzo invertido persista mucho después de haber terminado el tratamiento."
        ]
      },
      cta: "Programar una Consulta",
      backToBlog: "← Volver al Blog"
    }
  };

  const currentContent = content[lang];

  // Function to handle multi-paragraph content
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
              src={blogpost3}
              alt={currentContent.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-lg text-gray-600 mb-8 space-y-4">
            {formatText(currentContent.introduction)}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {currentContent.process.title}
          </h2>
          <div className="text-lg text-gray-600 mb-8 space-y-4">
            {formatText(currentContent.process.content)}
          </div>

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
