import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
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
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Blog Hero */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="max-w-[800px] mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Orthodontic Insights & Tips
              </h1>
              <p className="text-xl text-gray-600">
                Stay informed with the latest orthodontic news, treatment insights, and oral health tips from the experts at Colorado Braces.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link 
                  href={`/blog/${post.slug}`} 
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
      <Footer />
    </div>
  );
} 