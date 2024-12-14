import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Blog Post Hero */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="max-w-[800px] mx-auto">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <span>March 5, 2024</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Tips for Maintaining Your Braces and Oral Hygiene
              </h1>
              <p className="text-xl text-gray-600">
                Essential care tips and best practices for keeping your braces clean and maintaining excellent oral hygiene throughout your treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-24">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="max-w-[800px] mx-auto">
              {/* Featured Image Placeholder */}
              <div className="bg-gray-200 w-full aspect-[16/9] rounded-lg mb-12"></div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <h2>Daily Cleaning Routine</h2>
                <p>
                  Maintaining proper oral hygiene with braces requires extra attention and care. Following a consistent cleaning routine is essential for preventing cavities and ensuring the best possible treatment outcomes.
                </p>

                <h2>Essential Cleaning Steps</h2>
                <ul>
                  <li>Brush after every meal (at least 3 times daily)</li>
                  <li>Use a soft-bristled toothbrush at a 45-degree angle</li>
                  <li>Clean thoroughly around brackets and wires</li>
                  <li>Floss daily using a floss threader or water flosser</li>
                  <li>Rinse with a fluoride mouthwash</li>
                </ul>

                <h2>Foods to Avoid</h2>
                <p>
                  Protect your braces by avoiding these types of foods:
                </p>
                <ul>
                  <li>Hard candies and nuts</li>
                  <li>Sticky or chewy foods</li>
                  <li>Popcorn and hard chips</li>
                  <li>Whole apples and raw carrots (cut into small pieces instead)</li>
                  <li>Chewing gum</li>
                </ul>

                <h2>Signs That Need Attention</h2>
                <p>
                  Contact your orthodontist if you experience:
                </p>
                <ul>
                  <li>Loose or broken brackets</li>
                  <li>Poking wires</li>
                  <li>Persistent discomfort</li>
                  <li>Difficulty cleaning certain areas</li>
                  <li>Changes in bite or fit of elastics</li>
                </ul>

                <div className="bg-[#023A65]/5 p-8 rounded-lg my-8">
                  <h3 className="text-[#023A65] mb-4">Need Additional Support?</h3>
                  <p className="mb-4">
                    If you're having trouble maintaining your braces or need a refresher on proper cleaning techniques, our team is here to help. Schedule an appointment for personalized guidance.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-12 pt-12 border-t">
                <Link 
                  href="/blog"
                  className="text-[#023A65] hover:text-[#034b82] transition-colors"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Contact />
      </main>
      <Footer />
    </div>
  );
} 