const translations = {
  en: {
    home: {
      services: {
        title: "Our Orthodontic Services",
        description: "Comprehensive orthodontic care for every smile",
        learnMore: "More about {{service}}",
        clearAligners: {
          title: "Clear Aligners",
          description: "Straighten your teeth invisibly with our Clear Aligners in Denver. As Invisalign and OrthoFX providers, we offer cutting-edge clear aligners that fit your lifestyle."
        },
        clearBraces: {
          title: "Clear Braces",
          description: "Achieve a perfect smile with our Clear Braces in Denver—a nearly invisible option for those seeking invisible braces in Denver."
        },
        conventionalBraces: {
          title: "Conventional Braces",
          description: "Our Conventional Braces in Denver provide a reliable way to straighten teeth. Trust us for expert care in braces Denver residents rely on."
        },
        whitening: {
          title: "Whitening",
          description: "Brighten your smile with our professional Whitening services in Denver. Enhance your natural beauty after braces or aligners."
        }
      }
    }
  },
  es: {
    home: {
      services: {
        title: "Nuestros Servicios de Ortodoncia",
        description: "Cuidado ortodóntico integral para cada sonrisa",
        learnMore: "Más sobre {{service}}",
        clearAligners: {
          title: "Alineadores Transparentes",
          description: "Endereza tus dientes de forma invisible con nuestros Alineadores Transparentes en Denver. Como proveedores de Invisalign y OrthoFX, ofrecemos alineadores transparentes de última generación que se adaptan a tu estilo de vida."
        },
        clearBraces: {
          title: "Brackets Transparentes",
          description: "Logra una sonrisa perfecta con nuestros Brackets Transparentes en Denver—una opción casi invisible para quienes buscan brackets invisibles en Denver."
        },
        conventionalBraces: {
          title: "Brackets Convencionales",
          description: "Nuestros Brackets Convencionales en Denver proporcionan una forma confiable de enderezar los dientes. Confía en nosotros para el cuidado experto en brackets que los residentes de Denver confían."
        },
        whitening: {
          title: "Blanqueamiento",
          description: "Ilumina tu sonrisa con nuestros servicios profesionales de Blanqueamiento en Denver. Mejora tu belleza natural después de brackets o alineadores."
        }
      }
    }
  }
};

export function getTranslations(lang: string) {
  const t = (key: string) => {
    try {
      const [namespace, ...keys] = key.split('.');
      let value = translations[lang as keyof typeof translations][namespace];
      
      for (const k of keys) {
        if (!value || !value[k]) {
          console.warn(`Translation missing for key: ${key}`);
          return key;
        }
        value = value[k];
      }
      
      return value;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return t;
} 