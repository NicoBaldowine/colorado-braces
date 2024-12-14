import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import Basic from "@/components/Basic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ConventionalBraces() {
  const benefitsContent = [
    {
      title: "Proven Effectiveness",
      description: "Traditional metal braces remain one of the most reliable and effective methods for correcting complex orthodontic issues and achieving optimal tooth alignment.",
      icon: "invisible"
    },
    {
      title: "Durable Treatment",
      description: "Made from high-grade stainless steel, conventional braces are extremely durable and can handle the full scope of orthodontic corrections.",
      icon: "comfort"
    },
    {
      title: "Cost-Effective Solution",
      description: "Traditional braces often represent the most economical choice for comprehensive orthodontic treatment, making them an excellent value for patients.",
      icon: "hygiene"
    }
  ];

  const processContent = [
    {
      title: "Comprehensive Evaluation",
      description: "We begin with a thorough examination and digital imaging to create a customized treatment plan that addresses your specific orthodontic needs.",
      icon: "tech"
    },
    {
      title: "Expert Installation",
      description: "Our skilled orthodontists carefully place each bracket and wire, ensuring maximum comfort and optimal positioning for effective treatment.",
      icon: "treatment"
    },
    {
      title: "Regular Adjustments",
      description: "Through periodic appointments, we adjust your braces to maintain steady progress toward your ideal smile, tracking your transformation every step of the way.",
      icon: "monitoring"
    }
  ];

  const advantagesContent = [
    {
      title: "Versatile Treatment",
      description: "Conventional braces can address a wide range of orthodontic issues, from simple alignment to complex bite corrections.",
      icon: "invisalign"
    },
    {
      title: "Consistent Results",
      description: "With braces working 24/7, you can expect reliable progress and predictable outcomes throughout your treatment journey.",
      icon: "orthofx"
    },
    {
      title: "Suitable for All Ages",
      description: "Traditional braces are an excellent option for children, teenagers, and adults alike, providing effective treatment regardless of age.",
      icon: "payment"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero 
          title="Traditional Braces Treatment in Denver"
          description="Experience proven orthodontic care with conventional braces at Colorado Braces. Our expert team delivers reliable, effective treatment using the latest techniques in traditional orthodontics, helping Denver residents achieve their perfect smile with confidence."
        />
        <Basic 
          imageUrl="/images/conventional-braces-benefits.jpg"
          title="Benefits of Traditional Braces"
          description={benefitsContent}
          reverse
          withIcons
        />
        <Basic 
          imageUrl="/images/conventional-braces-process.jpg"
          title="Our Treatment Process"
          description={processContent}
          withIcons
        />
        <Basic 
          imageUrl="/images/conventional-braces-advantages.jpg"
          title="Advantages of Traditional Braces"
          description={advantagesContent}
          reverse
          withIcons
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 