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
                <span>March 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                The Benefits of Early Orthodontic Treatment for Children
              </h1>
              <p className="text-xl text-gray-600">
                Learn why early intervention can make a significant difference in your child's orthodontic journey and overall oral health.
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
                <h2>Why Early Orthodontic Treatment Matters</h2>
                <p>
                  Early orthodontic treatment, also known as interceptive orthodontics, can help address dental issues before they become more serious. The American Association of Orthodontists recommends that children have their first orthodontic check-up no later than age 7.
                </p>

                <h2>Key Benefits of Early Treatment</h2>
                <ul>
                  <li>Guide proper jaw growth</li>
                  <li>Correct harmful oral habits</li>
                  <li>Improve appearance and self-esteem</li>
                  <li>Guide permanent teeth into better positions</li>
                  <li>Reduce the risk of trauma to protruded teeth</li>
                </ul>

                <h2>When to Consider Early Treatment</h2>
                <p>
                  Early treatment may be beneficial if your child shows signs of:
                </p>
                <ul>
                  <li>Difficulty chewing or biting</li>
                  <li>Mouth breathing</li>
                  <li>Thumb sucking beyond age 5</li>
                  <li>Crowded, misplaced, or blocked-out teeth</li>
                  <li>Jaws that shift, make sounds, protrude, or are recessed</li>
                </ul>

                <h2>The Treatment Process</h2>
                <p>
                  Early orthodontic treatment typically occurs in two phases. Phase One begins around age 7-8, while Phase Two typically begins around age 11-12. This approach allows us to take advantage of your child's natural growth patterns to achieve the best possible results.
                </p>

                <div className="bg-[#023A65]/5 p-8 rounded-lg my-8">
                  <h3 className="text-[#023A65] mb-4">Schedule a Consultation</h3>
                  <p className="mb-4">
                    If you're considering early orthodontic treatment for your child, we invite you to schedule a consultation with our experienced team at Colorado Braces.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors"
                  >
                    Book Your Consultation
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