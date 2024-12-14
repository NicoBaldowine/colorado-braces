'use client';
import Contact from "@/components/Contact";
import Link from "next/link";
import { useTranslations } from '@/hooks/useTranslations';

type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function Blog() {
  const { t, lang } = useTranslations();

  const blogPosts: Record<string, BlogPost[]> = {
    en: [
      {
        title: "The Benefits of Early Orthodontic Treatment for Children",
        description: "Learn why early intervention can make a significant difference in your child's orthodontic journey and overall oral health.",
        date: "March 15, 2024",
        readTime: "5 min read",
        slug: "benefits-early-orthodontic-treatment"
      },
      {
        title: "Clear Aligners vs Traditional Braces: Making the Right Choice",
        description: "Explore the pros and cons of different orthodontic treatments to help you make an informed decision about your smile journey.",
        date: "March 10, 2024",
        readTime: "6 min read",
        slug: "clear-aligners-vs-traditional-braces"
      },
      {
        title: "Tips for Maintaining Your Braces and Oral Hygiene",
        description: "Essential care tips and best practices for keeping your braces clean and maintaining excellent oral hygiene throughout your treatment.",
        date: "March 5, 2024",
        readTime: "4 min read",
        slug: "tips-maintaining-braces-oral-hygiene"
      }
    ],
    es: [
      {
        title: "Los Beneficios del Tratamiento Ortodóntico Temprano para Niños",
        description: "Aprende por qué la intervención temprana puede hacer una diferencia significativa en el viaje ortodóntico de tu hijo y su salud oral general.",
        date: "15 de marzo, 2024",
        readTime: "5 min de lectura",
        slug: "beneficios-tratamiento-ortodontico-temprano"
      },
      {
        title: "Alineadores Transparentes vs Brackets Tradicionales: Tomando la Decisión Correcta",
        description: "Explora los pros y contras de diferentes tratamientos ortodónticos para ayudarte a tomar una decisión informada sobre el viaje de tu sonrisa.",
        date: "10 de marzo, 2024",
        readTime: "6 min de lectura",
        slug: "alineadores-vs-brackets-tradicionales"
      },
      {
        title: "Consejos para Mantener tus Brackets y la Higiene Oral",
        description: "Consejos esenciales de cuidado y mejores prácticas para mantener tus brackets limpios y mantener una excelente higiene oral durante tu tratamiento.",
        date: "5 de marzo, 2024",
        readTime: "4 min de lectura",
        slug: "consejos-mantenimiento-brackets-higiene-oral"
      }
    ]
  };

  const currentPosts = blogPosts[lang as keyof typeof blogPosts] || blogPosts['en'];

  return (
    <main>
      {/* Blog Hero */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('blog.hero.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('blog.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <Link 
                href={`/${lang}/blog/${post.slug}`}
                key={index}
                className="group"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-gray-200 h-[240px]"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#023A65] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}