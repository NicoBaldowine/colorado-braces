import AboutHero from "@/components/AboutHero";
import Basic from "@/components/Basic";
import Doctor from "@/components/Doctor";
import Contact from "@/components/Contact";

export default function About() {
  const commitmentContent = [
    "Patient-Centered Care: Your comfort and satisfaction are our top priorities. We take the time to listen to your concerns and create personalized treatment plans that meet your individual needs.",
    "Advanced Orthodontic Solutions: Staying up-to-date with the latest techniques and technologies, we offer a range of services including clear braces, conventional braces, and clear aligners like Invisalign and OrthoFX.",
    "Improving Oral Health and Well-being: We believe that orthodontic treatment is not just about straightening teeth but enhancing overall oral health and boosting confidence."
  ];

  const whyChooseContent = [
    "Over 10 Years of Experience: With more than a decade of expertise, we have transformed countless smiles in the Denver area.",
    "Compassionate Team: Our dedicated staff is here to support you every step of the way, building lasting relationships with our patients and their families.",
    "State-of-the-Art Facility: We utilize cutting-edge technology to provide efficient and effective treatments in a comfortable environment."
  ];

  return (
    <main>
      <AboutHero />
      <Basic 
        imageUrl="/images/commitment.jpg"
        title="Our Commitment to Excellence"
        description={commitmentContent}
      />
      <Basic 
        imageUrl="/images/why-choose.jpg"
        title="Why Choose Colorado Braces"
        description={whyChooseContent}
        reverse
      />
      <Doctor />
      <Contact />
    </main>
  );
} 