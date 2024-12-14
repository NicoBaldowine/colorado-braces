import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import Basic from "@/components/Basic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Whitening() {
  const benefitsContent = [
    {
      title: "Professional-Grade Results",
      description: "Experience dramatic smile brightening with our professional teeth whitening treatments, providing superior results compared to over-the-counter options.",
      icon: "invisible"
    },
    {
      title: "Safe and Comfortable",
      description: "Our whitening treatments are carefully monitored by dental professionals, ensuring both safety and comfort throughout the process.",
      icon: "comfort"
    },
    {
      title: "Long-Lasting Effects",
      description: "Achieve a brighter smile that lasts, with results that can be maintained through simple touch-up treatments and good oral hygiene.",
      icon: "hygiene"
    }
  ];

  const processContent = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough examination to determine the cause of discoloration and create a personalized whitening plan for optimal results.",
      icon: "tech"
    },
    {
      title: "Custom Treatment",
      description: "Using professional-grade whitening agents and custom-fitted trays, we ensure even coverage and maximum effectiveness.",
      icon: "treatment"
    },
    {
      title: "Maintenance Plan",
      description: "We provide detailed instructions and a customized maintenance plan to help you maintain your bright smile for years to come.",
      icon: "monitoring"
    }
  ];

  const advantagesContent = [
    {
      title: "Immediate Results",
      description: "See a noticeable difference in the brightness of your smile after just one professional whitening session.",
      icon: "invisalign"
    },
    {
      title: "Customized Solutions",
      description: "Whether you choose in-office treatment or professional take-home kits, we tailor our whitening solutions to your needs.",
      icon: "orthofx"
    },
    {
      title: "Boost Your Confidence",
      description: "A brighter smile can enhance your appearance and boost your self-confidence in both personal and professional settings.",
      icon: "payment"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero 
          title="Professional Teeth Whitening in Denver"
          description="Transform your smile with our advanced teeth whitening treatments at Colorado Braces. Using the latest whitening technology and professional-grade products, we help Denver residents achieve brilliantly white smiles safely and effectively."
        />
        <Basic 
          imageUrl="/images/whitening-benefits.jpg"
          title="Benefits of Professional Whitening"
          description={benefitsContent}
          reverse
          withIcons
        />
        <Basic 
          imageUrl="/images/whitening-process.jpg"
          title="Our Whitening Process"
          description={processContent}
          withIcons
        />
        <Basic 
          imageUrl="/images/whitening-advantages.jpg"
          title="Advantages of Professional Whitening"
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