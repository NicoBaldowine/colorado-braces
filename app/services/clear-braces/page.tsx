import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import Basic from "@/components/Basic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ClearBraces() {
  const benefitsContent = [
    {
      title: "Aesthetic Appearance",
      description: "Clear ceramic braces blend naturally with your teeth, providing a discreet orthodontic solution that's barely noticeable in your everyday life.",
      icon: "invisible"
    },
    {
      title: "Durable Construction",
      description: "Made from high-quality ceramic materials, our clear braces are designed to withstand daily wear while maintaining their appearance.",
      icon: "comfort"
    },
    {
      title: "Effective Treatment",
      description: "Get the same reliable results as traditional braces with the added benefit of a more aesthetic appearance.",
      icon: "hygiene"
    }
  ];

  const processContent = [
    {
      title: "Customized Planning",
      description: "Each treatment begins with a detailed examination and personalized plan to ensure optimal results for your specific needs.",
      icon: "tech"
    },
    {
      title: "Precise Installation",
      description: "Using advanced bonding techniques, we carefully place each ceramic bracket for maximum comfort and effectiveness.",
      icon: "treatment"
    },
    {
      title: "Regular Adjustments",
      description: "Your progress is closely monitored with periodic adjustments to ensure your treatment stays on track.",
      icon: "monitoring"
    }
  ];

  const advantagesContent = [
    {
      title: "Immediate Results",
      description: "Unlike removable aligners, clear braces work continuously to straighten your teeth 24/7.",
      icon: "invisalign"
    },
    {
      title: "Stain-Resistant",
      description: "Our ceramic brackets are specially designed to resist staining and maintain their clear appearance throughout your treatment.",
      icon: "orthofx"
    },
    {
      title: "Cost-Effective",
      description: "Clear braces offer an aesthetic alternative while remaining more affordable than other cosmetic orthodontic options.",
      icon: "payment"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero 
          title="Advanced Clear Braces Treatment in Denver"
          description="Experience the perfect blend of traditional orthodontic reliability and modern aesthetics with our clear ceramic braces. At Colorado Braces, we provide Denver residents with a proven solution that's both effective and discreet, helping you achieve your perfect smile with confidence."
        />
        <Basic 
          imageUrl="/images/clear-braces-benefits.jpg"
          title="Benefits of Clear Braces"
          description={benefitsContent}
          reverse
          withIcons
        />
        <Basic 
          imageUrl="/images/clear-braces-process.jpg"
          title="Our Treatment Process"
          description={processContent}
          withIcons
        />
        <Basic 
          imageUrl="/images/clear-braces-advantages.jpg"
          title="Advantages of Clear Braces"
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