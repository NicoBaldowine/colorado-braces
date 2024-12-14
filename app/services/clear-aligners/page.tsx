import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import Basic from "@/components/Basic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ClearAligners() {
  const benefitsContent = [
    {
      title: "Virtually Invisible Treatment",
      description: "Clear aligners are nearly invisible, allowing you to straighten your teeth discreetly without the noticeable appearance of traditional braces.",
      icon: "invisible"
    },
    {
      title: "Comfortable and Removable",
      description: "Made from smooth, medical-grade plastic, clear aligners can be removed for eating, drinking, and special occasions.",
      icon: "comfort"
    },
    {
      title: "Easier Oral Hygiene",
      description: "Unlike traditional braces, you can brush and floss normally by simply removing your aligners.",
      icon: "hygiene"
    }
  ];

  const processContent = [
    {
      title: "Advanced 3D Technology",
      description: "Using state-of-the-art digital scanning and treatment planning, we create a precise, customized plan for your smile transformation.",
      icon: "tech"
    },
    {
      title: "Progressive Treatment",
      description: "You'll receive a series of custom-made aligners, each gradually shifting your teeth into their ideal position.",
      icon: "treatment"
    },
    {
      title: "Regular Monitoring",
      description: "We'll track your progress with periodic check-ups to ensure your treatment stays on schedule and meets our high standards.",
      icon: "monitoring"
    }
  ];

  const choicesContent = [
    {
      title: "Invisalign®",
      description: "The world's most recognized clear aligner system, backed by decades of research and millions of successful cases.",
      icon: "invisalign"
    },
    {
      title: "OrthoFX",
      description: "A cutting-edge aligner system offering premium comfort and faster treatment times with innovative materials.",
      icon: "orthofx"
    },
    {
      title: "Flexible Payment Options",
      description: "We offer various financing plans to make your clear aligner treatment more affordable.",
      icon: "payment"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero 
          title="Transform Your Smile with Clear Aligners in Denver"
          description="Transform your smile discreetly with our advanced clear aligner treatments. We offer both Invisalign® and OrthoFX solutions, providing you with flexible, comfortable, and effective options for achieving the straight, confident smile you deserve. Our experienced team will guide you through every step of your orthodontic journey."
        />
        <Basic 
          imageUrl="/images/clear-aligners-benefits.jpg"
          title="Benefits of Clear Aligners"
          description={benefitsContent}
          reverse
          withIcons
        />
        <Basic 
          imageUrl="/images/clear-aligners-process.jpg"
          title="Our Treatment Process"
          description={processContent}
          withIcons
        />
        <Basic 
          imageUrl="/images/clear-aligners-options.jpg"
          title="Your Clear Aligner Options"
          description={choicesContent}
          reverse
          withIcons
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 