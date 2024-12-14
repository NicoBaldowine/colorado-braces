interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  benefits: Benefit[];
}

export default function Benefits({ title, benefits }: BenefitsProps) {
  return (
    <section className="py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 