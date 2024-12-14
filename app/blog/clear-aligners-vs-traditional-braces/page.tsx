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
                <span>March 10, 2024</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Clear Aligners vs Traditional Braces: Making the Right Choice
              </h1>
              <p className="text-xl text-gray-600">
                Explore the pros and cons of different orthodontic treatments to help you make an informed decision about your smile journey.
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
                <h2>Understanding Your Options</h2>
                <p>
                  When it comes to orthodontic treatment, patients today have more choices than ever before. The two main options—clear aligners and traditional braces—each offer unique advantages. Understanding these differences is crucial in making the right choice for your specific needs.
                </p>

                <h2>Clear Aligners: Advantages</h2>
                <ul>
                  <li>Nearly invisible appearance</li>
                  <li>Removable for eating and cleaning</li>
                  <li>No food restrictions</li>
                  <li>Generally more comfortable</li>
                  <li>Fewer in-office visits required</li>
                </ul>

                <h2>Traditional Braces: Advantages</h2>
                <ul>
                  <li>Typically more effective for complex cases</li>
                  <li>Cannot be lost or forgotten</li>
                  <li>Often more affordable</li>
                  <li>May work faster for certain corrections</li>
                  <li>Suitable for all age groups</li>
                </ul>

                <h2>Factors to Consider</h2>
                <p>
                  When choosing between clear aligners and traditional braces, consider:
                </p>
                <ul>
                  <li>Severity of your orthodontic issues</li>
                  <li>Lifestyle and daily routine</li>
                  <li>Budget and insurance coverage</li>
                  <li>Treatment timeline preferences</li>
                  <li>Compliance level (ability to wear aligners consistently)</li>
                </ul>

                <div className="bg-[#023A65]/5 p-8 rounded-lg my-8">
                  <h3 className="text-[#023A65] mb-4">Get Professional Guidance</h3>
                  <p className="mb-4">
                    Still unsure which option is right for you? Schedule a consultation with our experienced orthodontic team to discuss your specific case and receive personalized recommendations.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors"
                  >
                    Schedule a Consultation
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