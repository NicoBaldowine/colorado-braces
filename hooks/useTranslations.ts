'use client';
import { usePathname } from 'next/navigation';

export const translations = {
  en: {
    common: {
      navigation: {
        home: "Home",
        about: "About Us",
        services: "Services",
        blog: "Blog",
        contact: "Contact Us",
        appointment: "Make an Appointment"
      },
      services: {
        clearAligners: "Clear Aligners",
        clearBraces: "Clear Braces",
        conventionalBraces: "Conventional Braces",
        whitening: "Whitening"
      },
      languages: {
        english: "English",
        spanish: "Español"
      },
      learnMore: "More about {{service}}"
    },
    home: {
      hero: {
        title: "Transform Your Smile with Colorado Braces",
        description: "Experience exceptional orthodontic care in Denver with our expert team. Specializing in Invisalign & OrthoFX, we're dedicated to creating beautiful, healthy smiles that last a lifetime.",
        cta: "Schedule Free Consultation"
      },
      benefits: {
        title: "Why Choose Colorado Braces?",
        items: [
          {
            title: "Expert Care",
            description: "Our experienced orthodontists provide personalized treatment using the latest technology"
          },
          {
            title: "Affordable Options",
            description: "Flexible payment plans and insurance options to make treatment accessible"
          },
          {
            title: "Convenient Location",
            description: "Easily accessible office in Denver with comfortable amenities"
          }
        ]
      },
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
      },
      blog: {
        title: "Latest from Our Blog",
        readMore: "Read More",
        readArticle: "Read Article",
        seeAll: "See All Articles",
        posts: [
          {
            title: "Invisible Braces vs. Traditional Braces: Which is Better for Your Lifestyle?",
            description: "Compare the advantages of invisible braces with conventional braces. Learn about aesthetics, comfort, maintenance, and how each option fits into a busy lifestyle to help you make an informed decision.",
            date: "March 15, 2024",
            readTime: "5 min read",
            slug: "benefits-early-orthodontic-treatment",
            content: [
              {
                type: "paragraph",
                content: "Early orthodontic treatment can play a crucial role in your child's dental development and overall oral health. The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7, when their permanent teeth begin to emerge."
              },
              {
                type: "heading",
                content: "Why Early Intervention Matters"
              },
              {
                type: "paragraph",
                content: "Early orthodontic intervention allows specialists to identify and address potential issues before they become more serious. This proactive approach can often reduce the need for more extensive treatment later in life."
              },
              {
                type: "heading",
                content: "Key Benefits of Early Treatment"
              },
              {
                type: "list",
                items: [
                  "Guides proper jaw growth and development",
                  "Creates space for crowded, erupting teeth",
                  "Reduces the risk of trauma to protruding front teeth",
                  "Preserves space for unerupted teeth",
                  "Reduces the likelihood of tooth extraction"
                ]
              }
            ]
          },
          {
            title: "Can Clear Aligners Fix My Bite? Understanding Malocclusion Treatment Options",
            description: "Discover whether clear aligners can fix bite issues caused by malocclusion. This article explores the effectiveness of clear aligners in treating various bite problems, helping you decide if they're the right solution for your orthodontic needs in Denver.",
            date: "March 10, 2024",
            readTime: "6 min read",
            slug: "clear-aligners-vs-traditional-braces",
            content: [
              {
                type: "paragraph",
                content: "Clear aligners are a popular orthodontic treatment option for adults and teenagers. They are removable, transparent, and made of smooth plastic. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
              },
              {
                type: "heading",
                content: "How Clear Aligners Work"
              },
              {
                type: "paragraph",
                content: "Clear aligners are worn over the teeth and are replaced every two weeks. They are removed for eating, drinking, and cleaning. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
              },
              {
                type: "heading",
                content: "Benefits of Clear Aligners"
              },
              {
                type: "list",
                items: [
                  "Clear aligners are removable, allowing for easier cleaning and maintenance",
                  "Clear aligners are transparent, making them less noticeable than traditional metal braces",
                  "Clear aligners are comfortable and can be removed for eating and drinking",
                  "Clear aligners are effective in correcting bite issues caused by malocclusion"
                ]
              }
            ]
          },
          {
            title: "How Do Braces Work? A Simple Guide to Fixing Crooked Teeth and Misaligned Bites",
            description: "Learn how braces straighten crooked teeth and fix misaligned bites in this simple guide. Understand the orthodontic process and how Colorado Braces in Denver can help you achieve a healthy, confident smile.",
            date: "March 5, 2024",
            readTime: "4 min read",
            slug: "tips-maintaining-braces-oral-hygiene",
            content: [
              {
                type: "paragraph",
                content: "Braces are a common orthodontic treatment option for adults and teenagers. They are made of metal or ceramic brackets and wires that are attached to the teeth. Braces work by applying gentle pressure to the teeth, gradually moving them into their correct positions."
              },
              {
                type: "heading",
                content: "How Braces Work"
              },
              {
                type: "paragraph",
                content: "Braces are worn for an average of 2-3 years. During this time, the teeth are gradually moved into their correct positions. Braces are removed for eating, drinking, and cleaning. Braces are effective in correcting crooked teeth and misaligned bites."
              },
              {
                type: "heading",
                content: "Benefits of Braces"
              },
              {
                type: "list",
                items: [
                  "Braces are effective in correcting crooked teeth and misaligned bites",
                  "Braces are durable and can be used for an extended period",
                  "Braces are removable, allowing for easier cleaning and maintenance",
                  "Braces are visible, making them less noticeable than clear aligners"
                ]
              }
            ]
          }
        ]
      },
      whyChoose: {
        title: "Why Choose Us",
        description: "We provide comprehensive orthodontic care with a focus on patient comfort and satisfaction",
        cards: {
          expert: {
            title: "Expert Orthodontic Care",
            description: "Over 10 Years of Exceptional Orthodontic Experience"
          },
          providers: {
            title: "Invisalign, OrthoFX & Angel Aligners Providers",
            description: "Offering the latest in invisible braces technology for discreet treatment."
          },
          location: {
            title: "Convenient and Accessible",
            description: "Central Denver Location: Easy to reach with flexible scheduling options."
          }
        }
      },
      testimonials: {
        title: "What Our Patients Say",
        items: [
          {
            title: "Loving My Clear Aligners",
            description: "Colorado Braces made my smile transformation easy. The clear aligners are virtually invisible and simple to use—no one even notices them!",
            author: "Jessica H.",
            location: "Lowry Denver",
            initials: "JH"
          },
          {
            title: "Perfect for My Busy Schedule",
            description: "The clear aligners fit perfectly into my hectic life. They're fast, efficient, and I didn't have to change my routine at all.",
            author: "Michael T.",
            location: "Central Park, Denver",
            initials: "MT"
          },
          {
            title: "Exceptional Service at Colorado Braces",
            description: "The team at Colorado Braces exceeded my expectations. Their friendly staff made the entire process smooth and stress-free. I love my new smile!",
            author: "Emily R.",
            location: "Park Hill, Denver",
            initials: "ER"
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "How long does treatment with clear aligners take?",
            answer: "Treatment time varies per individual but typically ranges from 3 to 18 months. We'll provide a personalized timeline during your consultation."
          },
          {
            question: "How much do clear aligners cost?",
            answer: "The cost of clear aligners typically ranges from $3,000 to $7,000, depending on your specific treatment needs. We offer flexible payment plans and financing options to make treatment more accessible. Schedule a consultation for a precise quote."
          },
          {
            question: "Does insurance cover clear aligners or braces?",
            answer: "Many dental insurance plans cover orthodontic treatment, including clear aligners and braces, up to 50% of the cost. We work with most major insurance providers and can help verify your coverage and benefits during your consultation."
          },
          {
            question: "Do I need to wear the aligners all day?",
            answer: "For optimal results, clear aligners should be worn 20-22 hours per day, only removing them for eating, drinking hot beverages, and cleaning. This consistent wear ensures your treatment stays on schedule and delivers the best possible results."
          },
          {
            question: "How do I care for my clear aligners?",
            answer: "Clean your aligners daily with lukewarm water and gentle soap or specialized aligner cleaner. Avoid hot water, which can warp the plastic. Brush and floss your teeth before reinserting aligners, and store them in their case when not in use."
          },
          {
            question: "What's the difference between clear braces and clear aligners?",
            answer: "Clear braces are fixed ceramic brackets attached to your teeth, while clear aligners are removable transparent trays. Aligners offer more flexibility and discretion, but clear braces might be more effective for complex orthodontic issues."
          },
          {
            question: "How often do I need to visit during treatment?",
            answer: "Most patients visit us every 6-8 weeks for progress checks and to receive new sets of aligners. These brief appointments ensure your treatment is progressing as planned and allow us to make any necessary adjustments."
          },
          {
            question: "How do I schedule an appointment?",
            answer: "Scheduling is easy! You can call our office directly, use our online booking system, or fill out our contact form. We offer flexible appointment times, including early morning and evening slots to accommodate your busy schedule."
          }
        ]
      },
      contact: {
        title: "Contact Us",
        info: {
          title: "Contact Information",
          address: {
            line1: "3955 E Exposition Ave. #310,",
            line2: "Denver, CO 80209"
          },
          phone: "(303) 991-4455",
          email: "Office@colorado-braces.com"
        },
        hours: {
          title: "Office Hours",
          weekdays: {
            days: "Monday - Thursday",
            hours: "9:00 AM - 5:00 PM"
          },
          friday: {
            days: "Friday",
            hours: "9:00 AM - 2:00 PM"
          },
          weekend: {
            days: "Saturday - Sunday",
            hours: "Closed"
          }
        }
      }
    },
    footer: {
      tagline: "Transforming smiles with expert orthodontic care in Denver.",
      columns: {
        ourSite: {
          title: "Our Site",
          links: {
            home: "Home",
            about: "About Us",
            testimonials: "Testimonials",
            blog: "Blog",
            contact: "Contact Us",
            privacy: "Privacy Policy"
          }
        },
        services: {
          title: "Services",
          links: {
            clearAligners: "Clear Aligners",
            clearBraces: "Clear Braces",
            conventionalBraces: "Conventional Braces",
            whitening: "Whitening"
          }
        },
        resources: {
          title: "Resources",
          links: {
            blog: "Blog",
            instagram: "Instagram",
            facebook: "Facebook"
          }
        }
      },
      copyright: "© {{year}} Colorado Braces. All rights reserved."
    },
    about: {
      commitment: {
        title: "Our Commitment to Excellence",
        content: [
          "Patient-Centered Care: Your comfort and satisfaction are our top priorities. We take the time to listen to your concerns and create personalized treatment plans that meet your individual needs.",
          "Advanced Orthodontic Solutions: Staying up-to-date with the latest techniques and technologies, we offer a range of services including clear braces, conventional braces, and clear aligners like Invisalign and OrthoFX.",
          "Improving Oral Health and Well-being: We believe that orthodontic treatment is not just about straightening teeth but enhancing overall oral health and boosting confidence."
        ]
      },
      whyChoose: {
        title: "Why Choose Colorado Braces",
        content: [
          "Over 10 Years of Experience: With more than a decade of expertise, we have transformed countless smiles in the Denver area.",
          "Compassionate Team: Our dedicated staff is here to support you every step of the way, building lasting relationships with our patients and their families.",
          "State-of-the-Art Facility: We utilize cutting-edge technology to provide efficient and effective treatments in a comfortable environment."
        ]
      },
      hero: {
        title: "Welcome to Colorado Braces: Your Trusted Orthodontic Care in Denver",
        description: "At Colorado Braces, we pride ourselves on providing the highest quality orthodontic treatments coupled with compassionate care. Serving the Denver community, our mission is to ensure that every patient feels comfortable and supported throughout their orthodontic journey."
      },
      mission: {
        title: "Our Mission & Vision",
        items: [
          {
            title: "Our Mission",
            description: "To provide exceptional orthodontic care with a personal touch, ensuring each patient achieves their perfect smile."
          },
          {
            title: "Patient-Centered Care",
            description: "We prioritize your comfort and satisfaction throughout your orthodontic journey."
          },
          {
            title: "Expert Treatment",
            description: "Using the latest technology and techniques to deliver outstanding results."
          },
          {
            title: "Welcoming Environment",
            description: "Creating a friendly and comfortable atmosphere for all our patients."
          }
        ]
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Excellence",
            description: "Committed to delivering the highest quality orthodontic care."
          },
          {
            title: "Compassion",
            description: "Treating each patient with understanding and personal attention."
          },
          {
            title: "Innovation",
            description: "Staying at the forefront of orthodontic technology and techniques."
          },
          {
            title: "Community",
            description: "Building lasting relationships with our patients and community."
          }
        ]
      },
      doctor: {
        title: "Meet Dr. Eduardo Garcia, DDS",
        subtitle: "Your Expert Orthodontist in Denver",
        introduction: "Dr. Eduardo Garcia brings a wealth of experience and a compassionate approach to orthodontic care at Colorado Braces.",
        education: {
          title: "Educational Background:",
          items: [
            "Dental Degree: Universidad Santa Maria, Venezuela",
            "Orthodontic Residency: Universidad de Carabobo, Venezuela",
            "International Student Program: University of Colorado, 2022"
          ]
        },
        experience: {
          title: "Professional Experience:",
          items: [
            "Over 15 years of practicing dentistry",
            "Lectured and shared expertise in several countries",
            "Dedicated to extending his services to the Denver Metro community"
          ]
        },
        personal: {
          title: "Personal Life:",
          items: [
            "Originally from Venezuela, Dr. Garcia relocated to Colorado with his talented wife, Gabriela, and their two lovely boys.",
            "Enjoys practicing soccer, hiking, and camping with his family in his free time."
          ]
        }
      }
    },
    services: {
      clearAligners: {
        hero: {
          title: "Clear Aligners Treatment",
          description: "Experience the modern way to straighten your teeth with nearly invisible aligners. Comfortable, removable, and customized just for you."
        },
        benefits: {
          title: "Benefits of Clear Aligners",
          mainPoints: {
            aesthetic: {
              title: "Nearly Invisible Treatment",
              description: "Straighten your teeth discreetly with clear aligners that are virtually invisible, allowing you to smile confidently throughout your treatment."
            },
            comfort: {
              title: "Superior Comfort",
              description: "Enjoy a comfortable orthodontic experience with smooth, custom-fitted aligners that don't irritate your mouth like traditional braces."
            },
            convenience: {
              title: "Lifestyle Friendly",
              description: "Remove your aligners for eating, drinking, and special occasions. Maintain your oral hygiene routine without any complications."
            }
          }
        },
        process: {
          title: "Treatment Process",
          steps: [
            {
              title: "1. Initial Consultation",
              description: "We'll examine your teeth and discuss your smile goals to determine if clear aligners are right for you."
            },
            {
              title: "2. Digital Scanning",
              description: "We create precise 3D digital impressions of your teeth to plan your custom treatment."
            },
            {
              title: "3. Custom Treatment Plan",
              description: "You'll receive a series of custom-made aligners designed to gradually move your teeth into position."
            },
            {
              title: "4. Regular Check-ups",
              description: "We'll monitor your progress and provide new sets of aligners every few weeks."
            }
          ]
        },
        cta: {
          title: "Ready to Transform Your Smile?",
          description: "Start your journey to a confident smile with Colorado Braces today.",
          button: "Schedule Your Consultation"
        }
      },
      clearBraces: {
        hero: {
          title: "Clear Braces Treatment",
          description: "Experience effective orthodontic treatment with our advanced ceramic braces. Nearly invisible on your teeth, they provide the perfect balance of aesthetics and performance."
        },
        benefits: {
          title: "Benefits of Clear Braces",
          mainPoints: {
            aesthetic: {
              title: "Discreet Appearance",
              description: "Our ceramic braces blend naturally with your teeth, making them much less noticeable than traditional metal braces while providing the same effective treatment."
            },
            durability: {
              title: "Strong and Reliable",
              description: "Made from high-quality ceramic materials, these braces are designed to withstand your treatment journey while resisting staining and discoloration."
            },
            efficiency: {
              title: "Effective Treatment",
              description: "Clear braces work as efficiently as traditional braces, allowing for precise control over tooth movement while maintaining a more aesthetic appearance."
            }
          }
        },
        process: {
          title: "Treatment Process",
          steps: [
            {
              title: "1. Initial Consultation",
              description: "We'll examine your teeth and discuss whether clear braces are the right choice for your orthodontic needs."
            },
            {
              title: "2. Custom Treatment Planning",
              description: "We create a detailed treatment plan tailored to your specific needs and goals."
            },
            {
              title: "3. Braces Placement",
              description: "Your clear braces are carefully placed using advanced bonding techniques to ensure optimal positioning and comfort."
            },
            {
              title: "4. Regular Adjustments",
              description: "You'll visit us periodically for adjustments to ensure your treatment progresses as planned."
            }
          ]
        },
        cta: {
          title: "Ready to Start Your Smile Journey?",
          description: "Transform your smile with clear braces at Colorado Braces.",
          button: "Schedule Your Consultation"
        }
      },
      conventionalBraces: {
        hero: {
          title: "Traditional Braces Treatment in Denver",
          description: "Experience proven orthodontic care with conventional braces at Colorado Braces. Our expert team delivers reliable, effective treatment using the latest techniques in traditional orthodontics, helping Denver residents achieve their perfect smile with confidence."
        },
        benefits: {
          title: "Benefits of Traditional Braces",
          mainPoints: {
            effectiveness: {
              title: "Proven Effectiveness",
              description: "Traditional metal braces remain one of the most reliable and effective methods for correcting complex orthodontic issues and achieving optimal tooth alignment."
            },
            durability: {
              title: "Durable Treatment",
              description: "Made from high-grade stainless steel, conventional braces are extremely durable and can handle the full scope of orthodontic corrections."
            },
            costEffective: {
              title: "Cost-Effective Solution",
              description: "Traditional braces often represent the most economical choice for comprehensive orthodontic treatment, making them an excellent value for patients."
            }
          }
        },
        process: {
          title: "Treatment Process",
          steps: [
            {
              title: "1. Comprehensive Evaluation",
              description: "We begin with a thorough examination and digital imaging to create a customized treatment plan that addresses your specific orthodontic needs."
            },
            {
              title: "2. Expert Installation",
              description: "Our skilled orthodontists carefully place each bracket and wire, ensuring maximum comfort and optimal positioning for effective treatment."
            },
            {
              title: "3. Regular Adjustments",
              description: "Through periodic appointments, we adjust your braces to maintain steady progress toward your ideal smile, tracking your transformation every step of the way."
            }
          ]
        },
        cta: {
          title: "Ready to Start Your Smile Journey?",
          description: "Transform your smile with traditional braces at Colorado Braces.",
          button: "Schedule Your Consultation"
        }
      },
      whitening: {
        hero: {
          title: "Professional Teeth Whitening in Denver",
          description: "Transform your smile with our advanced teeth whitening treatments at Colorado Braces. Using the latest whitening technology and professional-grade products, we help Denver residents achieve brilliantly white smiles safely and effectively."
        },
        benefits: {
          title: "Benefits of Professional Whitening",
          mainPoints: {
            professional: {
              title: "Professional-Grade Results",
              description: "Experience dramatic smile brightening with our professional teeth whitening treatments, providing superior results compared to over-the-counter options."
            },
            safety: {
              title: "Safe and Comfortable",
              description: "Our whitening treatments are carefully monitored by dental professionals, ensuring both safety and comfort throughout the process."
            },
            lasting: {
              title: "Long-Lasting Effects",
              description: "Achieve a brighter smile that lasts, with results that can be maintained through simple touch-up treatments and good oral hygiene."
            }
          }
        },
        process: {
          title: "Treatment Process",
          steps: [
            {
              title: "1. Initial Consultation",
              description: "We begin with a thorough examination to determine the cause of discoloration and create a personalized whitening plan for optimal results."
            },
            {
              title: "2. Custom Treatment",
              description: "Using professional-grade whitening agents and custom-fitted trays, we ensure even coverage and maximum effectiveness."
            },
            {
              title: "3. Maintenance Plan",
              description: "We provide detailed instructions and a customized maintenance plan to help you maintain your bright smile for years to come."
            }
          ]
        },
        cta: {
          title: "Ready to Brighten Your Smile?",
          description: "Transform your smile with professional teeth whitening at Colorado Braces.",
          button: "Schedule Your Consultation"
        }
      }
    },
    blog: {
      hero: {
        title: "Orthodontic Insights & Tips",
        description: "Stay informed with the latest orthodontic news, treatment insights, and oral health tips from the experts at Colorado Braces."
      },
      posts: [
        {
          title: "The Benefits of Early Orthodontic Treatment for Children",
          description: "Learn why early intervention can make a significant difference in your child's orthodontic journey and overall oral health.",
          date: "March 15, 2024",
          readTime: "5 min read",
          slug: "benefits-early-orthodontic-treatment",
          content: [
            {
              type: "paragraph",
              content: "Early orthodontic treatment can play a crucial role in your child's dental development and overall oral health. The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7, when their permanent teeth begin to emerge."
            },
            {
              type: "heading",
              content: "Why Early Intervention Matters"
            },
            {
              type: "paragraph",
              content: "Early orthodontic intervention allows specialists to identify and address potential issues before they become more serious. This proactive approach can often reduce the need for more extensive treatment later in life."
            },
            {
              type: "heading",
              content: "Key Benefits of Early Treatment"
            },
            {
              type: "list",
              items: [
                "Guides proper jaw growth and development",
                "Creates space for crowded, erupting teeth",
                "Reduces the risk of trauma to protruding front teeth",
                "Preserves space for unerupted teeth",
                "Reduces the likelihood of tooth extraction"
              ]
            }
          ]
        },
        {
          title: "Clear Aligners vs Traditional Braces: Making the Right Choice",
          description: "Explore the pros and cons of different orthodontic treatments to help you make an informed decision about your smile journey.",
          date: "March 10, 2024",
          readTime: "6 min read",
          slug: "clear-aligners-vs-traditional-braces",
          content: [
            {
              type: "paragraph",
              content: "Clear aligners are a popular orthodontic treatment option for adults and teenagers. They are removable, transparent, and made of smooth plastic. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
            },
            {
              type: "heading",
              content: "How Clear Aligners Work"
            },
            {
              type: "paragraph",
              content: "Clear aligners are worn over the teeth and are replaced every two weeks. They are removed for eating, drinking, and cleaning. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
            },
            {
              type: "heading",
              content: "Benefits of Clear Aligners"
            },
            {
              type: "list",
              items: [
                "Clear aligners are removable, allowing for easier cleaning and maintenance",
                "Clear aligners are transparent, making them less noticeable than traditional metal braces",
                "Clear aligners are comfortable and can be removed for eating and drinking",
                "Clear aligners are effective in correcting bite issues caused by malocclusion"
              ]
            }
          ]
        },
        {
          title: "Tips for Maintaining Your Braces and Oral Hygiene",
          description: "Essential care tips and best practices for keeping your braces clean and maintaining excellent oral hygiene throughout your treatment.",
          date: "March 5, 2024",
          readTime: "4 min read",
          slug: "tips-maintaining-braces-oral-hygiene",
          content: [
            {
              type: "paragraph",
              content: "Braces are a common orthodontic treatment option for adults and teenagers. They are made of metal or ceramic brackets and wires that are attached to the teeth. Braces work by applying gentle pressure to the teeth, gradually moving them into their correct positions."
            },
            {
              type: "heading",
              content: "How Braces Work"
            },
            {
              type: "paragraph",
              content: "Braces are worn for an average of 2-3 years. During this time, the teeth are gradually moved into their correct positions. Braces are removed for eating, drinking, and cleaning. Braces are effective in correcting crooked teeth and misaligned bites."
            },
            {
              type: "heading",
              content: "Benefits of Braces"
            },
            {
              type: "list",
              items: [
                "Braces are effective in correcting crooked teeth and misaligned bites",
                "Braces are durable and can be used for an extended period",
                "Braces are removable, allowing for easier cleaning and maintenance",
                "Braces are visible, making them less noticeable than clear aligners"
              ]
            }
          ]
        },
        {
          title: "Alineadores vs Brackets Tradicionales: ¿Cuál es la Mejor Opción?",
          description: "Compara las ventajas de los alineadores transparentes con los brackets tradicionales. Aprende sobre estética, comodidad, mantenimiento y cómo cada opción se adapta a un estilo de vida ocupado.",
          date: "10 de marzo de 2024",
          readTime: "6 min de lectura",
          slug: "alineadores-vs-brackets-tradicionales",
          content: [
            {
              type: "paragraph",
              content: "Los alineadores transparentes son una opción de tratamiento ortodóntico popular para adultos y adolescentes. Son removibles, transparentes y están hechos de plástico suave. Los alineadores están diseñados para mover gradualmente los dientes a su posición correcta, corrigiendo problemas de mordida causados por la maloclusión."
            },
            {
              type: "heading",
              content: "Cómo Funcionan los Alineadores Transparentes"
            },
            {
              type: "paragraph",
              content: "Los alineadores se usan sobre los dientes y se reemplazan cada dos semanas. Se pueden quitar para comer, beber y limpiar. Los alineadores están diseñados para mover gradualmente los dientes a su posición correcta, corrigiendo problemas de mordida causados por la maloclusión."
            },
            {
              type: "heading",
              content: "Beneficios de los Alineadores Transparentes"
            },
            {
              type: "list",
              items: [
                "Los alineadores son removibles, permitiendo una limpieza y mantenimiento más fácil",
                "Los alineadores son transparentes, haciéndolos menos notables que los brackets metálicos tradicionales",
                "Los alineadores son cómodos y se pueden quitar para comer y beber",
                "Los alineadores son efectivos para corregir problemas de mordida causados por la maloclusión"
              ]
            }
          ]
        }
      ]
    },
    appointment: {
      title: "Schedule Your Free Consultation",
      description: "Take the first step towards your perfect smile. Schedule a consultation with our experienced orthodontic team to discuss your treatment options and create a personalized plan.",
      expectations: {
        title: "What to Expect",
        items: [
          "Comprehensive oral examination",
          "Discussion of your smile goals",
          "Treatment options explanation",
          "Cost and insurance review",
          "Flexible scheduling options"
        ]
      },
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        service: "Interested Service",
        preferredDate: "Preferred Date",
        preferredTime: "Preferred Time",
        submit: "Schedule Appointment",
        submitting: "Submitting...",
        selectService: "Select a service",
        selectTime: "Select a time",
        timeMorning: "Morning (9AM - 12PM)",
        timeAfternoon: "Afternoon (12PM - 5PM)",
        notSure: "Not sure yet",
        dateHint: "Please select a date starting from tomorrow"
      },
      successMessage: "Thank you! We'll contact you shortly to confirm your appointment.",
      errorMessage: "There was an error submitting your request. Please try again."
    }
  },
  es: {
    common: {
      navigation: {
        home: "Inicio",
        about: "Nosotros",
        services: "Servicios",
        blog: "Blog",
        contact: "Contáctenos",
        appointment: "Agendar Cita"
      },
      services: {
        clearAligners: "Alineadores Transparentes",
        clearBraces: "Brackets Transparentes",
        conventionalBraces: "Brackets Tradicionales",
        whitening: "Blanqueamiento"
      },
      languages: {
        english: "English",
        spanish: "Español"
      },
      learnMore: "Más sobre {{service}}"
    },
    home: {
      hero: {
        title: "Transforma Tu Sonrisa con Colorado Braces",
        description: "Experimenta un cuidado ortodóntico excepcional en Denver con nuestro equipo experto. Especializados en Invisalign y OrthoFX, nos dedicamos a crear sonrisas hermosas y saludables que duran toda la vida.",
        cta: "Agenda una Consulta Gratis"
      },
      benefits: {
        title: "¿Por Qué Elegir Colorado Braces?",
        items: [
          {
            title: "Cuidado Experto",
            description: "Nuestros ortodoncistas experimentados brindan tratamiento personalizado usando la última tecnología"
          },
          {
            title: "Opciones Accesibles",
            description: "Planes de pago flexibles y opciones de seguro para hacer el tratamiento accesible"
          },
          {
            title: "Ubicación Conveniente",
            description: "Oficina de fácil acceso en Denver con comodidades confortables"
          }
        ]
      },
      services: {
        title: "Nuestros Servicios de Ortodoncia",
        description: "Cuidado ortodóntico integral para cada sonrisa",
        learnMore: "Más sobre {{service}}",
        clearAligners: {
          title: "Alineadores Transparentes",
          description: "Endereza tus dientes de forma invisible con nuestros Alineadores Transparentes en Denver. Como proveedores de Invisalign y OrthoFX, ofrecemos alineadores de última generación que se adaptan a tu estilo de vida."
        },
        clearBraces: {
          title: "Brackets Transparentes",
          description: "Logra una sonrisa perfecta con nuestros Brackets Transparentes en Denver—una opción casi invisible para quienes buscan brackets invisibles en Denver."
        },
        conventionalBraces: {
          title: "Brackets Convencionales",
          description: "Nuestros Brackets Convencionales en Denver proporcionan una forma confiable de enderezar los dientes. Confía en nosotros para el cuidado experto en brackets que los residentes de Denver eligen."
        },
        whitening: {
          title: "Blanqueamiento",
          description: "Ilumina tu sonrisa con nuestros servicios profesionales de Blanqueamiento en Denver. Realza tu belleza natural después de los brackets o alineadores."
        }
      },
      blog: {
        title: "Últimas Publicaciones del Blog",
        readMore: "Leer Más",
        readArticle: "Leer Artículo",
        seeAll: "Ver Todos los Artículos",
        posts: [
          {
            title: "Brackets Invisibles vs. Brackets Tradicionales: ¿Cuál es Mejor para Tu Estilo de Vida?",
            description: "Compara las ventajas de los brackets invisibles con los brackets convencionales. Aprende sobre estética, comodidad, mantenimiento y cómo cada opción se adapta a un estilo de vida ocupado para ayudarte a tomar una decisión informada.",
            date: "March 15, 2024",
            readTime: "5 min read",
            slug: "benefits-early-orthodontic-treatment",
            content: [
              {
                type: "paragraph",
                content: "Early orthodontic treatment can play a crucial role in your child's dental development and overall oral health. The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7, when their permanent teeth begin to emerge."
              },
              {
                type: "heading",
                content: "Why Early Intervention Matters"
              },
              {
                type: "paragraph",
                content: "Early orthodontic intervention allows specialists to identify and address potential issues before they become more serious. This proactive approach can often reduce the need for more extensive treatment later in life."
              },
              {
                type: "heading",
                content: "Key Benefits of Early Treatment"
              },
              {
                type: "list",
                items: [
                  "Guides proper jaw growth and development",
                  "Creates space for crowded, erupting teeth",
                  "Reduces the risk of trauma to protruding front teeth",
                  "Preserves space for unerupted teeth",
                  "Reduces the likelihood of tooth extraction"
                ]
              }
            ]
          },
          {
            title: "¿Pueden los Alineadores Transparentes Corregir Mi Mordida? Entendiendo las Opciones de Tratamiento de Maloclusión",
            description: "Descubre si los alineadores transparentes pueden corregir problemas de mordida causados por maloclusión. Este artículo explora la efectividad de los alineadores transparentes en el tratamiento de varios problemas de mordida, ayudándote a decidir si son la solución correcta para tus necesidades ortodónticas en Denver.",
            date: "March 10, 2024",
            readTime: "6 min read",
            slug: "clear-aligners-vs-traditional-braces",
            content: [
              {
                type: "paragraph",
                content: "Clear aligners are a popular orthodontic treatment option for adults and teenagers. They are removable, transparent, and made of smooth plastic. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
              },
              {
                type: "heading",
                content: "How Clear Aligners Work"
              },
              {
                type: "paragraph",
                content: "Clear aligners are worn over the teeth and are replaced every two weeks. They are removed for eating, drinking, and cleaning. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
              },
              {
                type: "heading",
                content: "Benefits of Clear Aligners"
              },
              {
                type: "list",
                items: [
                  "Clear aligners are removable, allowing for easier cleaning and maintenance",
                  "Clear aligners are transparent, making them less noticeable than traditional metal braces",
                  "Clear aligners are comfortable and can be removed for eating and drinking",
                  "Clear aligners are effective in correcting bite issues caused by malocclusion"
                ]
              }
            ]
          },
          {
            title: "¿Cómo Funcionan los Brackets? Una Guía Simple para Corregir Dientes Torcidos y Mordidas Desalineadas",
            description: "Aprende cómo los brackets enderezan los dientes torcidos y corrigen las mordidas desalineadas en esta guía simple. Comprende el proceso ortodóntico y cómo Colorado Braces en Denver puede ayudarte a lograr una sonrisa saludable y confiada.",
            date: "March 5, 2024",
            readTime: "4 min read",
            slug: "tips-maintaining-braces-oral-hygiene",
            content: [
              {
                type: "paragraph",
                content: "Braces are a common orthodontic treatment option for adults and teenagers. They are made of metal or ceramic brackets and wires that are attached to the teeth. Braces work by applying gentle pressure to the teeth, gradually moving them into their correct positions."
              },
              {
                type: "heading",
                content: "How Braces Work"
              },
              {
                type: "paragraph",
                content: "Braces are worn for an average of 2-3 years. During this time, the teeth are gradually moved into their correct positions. Braces are removed for eating, drinking, and cleaning. Braces are effective in correcting crooked teeth and misaligned bites."
              },
              {
                type: "heading",
                content: "Benefits of Braces"
              },
              {
                type: "list",
                items: [
                  "Braces are effective in correcting crooked teeth and misaligned bites",
                  "Braces are durable and can be used for an extended period",
                  "Braces are removable, allowing for easier cleaning and maintenance",
                  "Braces are visible, making them less noticeable than clear aligners"
                ]
              }
            ]
          },
          {
            title: "Alineadores vs Brackets Tradicionales: ¿Cuál es la Mejor Opción?",
            description: "Compara las ventajas de los alineadores transparentes con los brackets tradicionales. Aprende sobre estética, comodidad, mantenimiento y cómo cada opción se adapta a un estilo de vida ocupado.",
            date: "10 de marzo de 2024",
            readTime: "6 min de lectura",
            slug: "alineadores-vs-brackets-tradicionales",
            content: [
              {
                type: "paragraph",
                content: "Los alineadores transparentes son una opción de tratamiento ortodóntico popular para adultos y adolescentes. Son removibles, transparentes y están hechos de plástico suave. Los alineadores están diseñados para mover gradualmente los dientes a su posición correcta, corrigiendo problemas de mordida causados por la maloclusión."
              },
              {
                type: "heading",
                content: "Cómo Funcionan los Alineadores Transparentes"
              },
              {
                type: "paragraph",
                content: "Los alineadores se usan sobre los dientes y se reemplazan cada dos semanas. Se pueden quitar para comer, beber y limpiar. Los alineadores están diseñados para mover gradualmente los dientes a su posición correcta, corrigiendo problemas de mordida causados por la maloclusión."
              },
              {
                type: "heading",
                content: "Beneficios de los Alineadores Transparentes"
              },
              {
                type: "list",
                items: [
                  "Los alineadores son removibles, permitiendo una limpieza y mantenimiento más fácil",
                  "Los alineadores son transparentes, haciéndolos menos notables que los brackets metálicos tradicionales",
                  "Los alineadores son cómodos y se pueden quitar para comer y beber",
                  "Los alineadores son efectivos para corregir problemas de mordida causados por la maloclusión"
                ]
              }
            ]
          }
        ]
      },
      whyChoose: {
        title: "¿Por Qué Elegir Colorado Braces?",
        expert: {
          title: "Atención Ortodóntica\nExperto",
          description: "Más de 10 Años de Experiencia Ortodóntica Excepcional"
        },
        invisalign: {
          title: "Proveedores de\nInvisalign, OrthoFX y\nAngel Aligners",
          description: "Ofrecemos lo último en tecnología de brackets invisibles para un tratamiento discreto."
        },
        location: {
          title: "Conveniente y\nAccesible",
          description: "Ubicación Central en Denver: Fácil de llegar con opciones de horarios flexibles."
        }
      },
      testimonials: {
        title: "Lo Que Dicen Nuestros Pacientes",
        items: [
          {
            title: "Encantada con Mis Alineadores Transparentes",
            description: "Colorado Braces hizo que la transformación de mi sonrisa fuera fácil. ¡Los alineadores son prácticamente invisibles y fáciles de usar, nadie los nota!",
            author: "Jessica H.",
            location: "Lowry Denver",
            initials: "JH"
          },
          {
            title: "Perfecto para Mi Agenda Ocupada",
            description: "Los alineadores transparentes se adaptan perfectamente a mi vida agitada. Son rápidos, eficientes y no tuve que cambiar mi rutina en absoluto.",
            author: "Michael T.",
            location: "Central Park, Denver",
            initials: "MT"
          },
          {
            title: "Servicio Excepcional en Colorado Braces",
            description: "El equipo de Colorado Braces superó mis expectativas. Su personal amable hizo que todo el proceso fuera fluido y sin estrés. ¡Me encanta mi nueva sonrisa!",
            author: "Emily R.",
            location: "Park Hill, Denver",
            initials: "ER"
          }
        ]
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Cuánto dura el tratamiento con alineadores transparentes?",
            answer: "El tiempo de tratamiento varía según cada individuo, pero generalmente oscila entre 3 y 18 meses. Proporcionaremos un cronograma personalizado durante tu consulta."
          },
          {
            question: "¿Cuánto cuestan los alineadores transparentes?",
            answer: "El costo de los alineadores transparentes generalmente oscila entre $3,000 y $7,000, dependiendo de tus necesidades específicas de tratamiento. Ofrecemos planes de pago flexibles y opciones de financiamiento para hacer el tratamiento más accesible. Programa una consulta para obtener un presupuesto preciso."
          },
          {
            question: "¿El seguro cubre los alineadores transparentes o brackets?",
            answer: "Muchos planes de seguro dental cubren el tratamiento ortodóntico, incluyendo alineadores transparentes y brackets, hasta el 50% del costo. Trabajamos con la mayoría de los proveedores de seguros principales y podemos ayudarte a verificar tu cobertura y beneficios durante tu consulta."
          },
          {
            question: "¿Necesito usar los alineadores todo el día?",
            answer: "Para obtener resultados óptimos, los alineadores transparentes deben usarse de 20 a 22 horas al día, quitándolos solo para comer, beber bebidas calientes y limpiarlos. Este uso constante asegura que tu tratamiento se mantenga en horario y brinde los mejores resultados posibles."
          },
          {
            question: "¿Cómo cuido mis alineadores transparentes?",
            answer: "Limpia tus alineadores diariamente con agua tibia y jabón suave o limpiador especializado para alineadores. Evita el agua caliente, que puede deformar el plástico. Cepilla y usa hilo dental antes de reinsertar los alineadores, y guárdalos en su estuche cuando no los uses."
          },
          {
            question: "¿Cuál es la diferencia entre brackets transparentes y alineadores transparentes?",
            answer: "Los brackets transparentes son brackets cerámicos fijos adheridos a tus dientes, mientras que los alineadores transparentes son bandejas transparentes removibles. Los alineadores ofrecen más flexibilidad y discreción, pero los brackets transparentes pueden ser más efectivos para problemas ortodónticos complejos."
          },
          {
            question: "¿Con qué frecuencia necesito visitar durante el tratamiento?",
            answer: "La mayoría de los pacientes nos visitan cada 6-8 semanas para controles de progreso y recibir nuevos juegos de alineadores. Estas breves citas aseguran que tu tratamiento progrese según lo planeado y nos permiten hacer los ajustes necesarios."
          },
          {
            question: "¿Cómo programo una cita?",
            answer: "¡Programar es fácil! Puedes llamar a nuestra oficina directamente, usar nuestro sistema de reservas en línea o completar nuestro formulario de contacto. Ofrecemos horarios de citas flexibles, incluyendo horarios temprano en la mañana y en la tarde para adaptarnos a tu agenda ocupada."
          }
        ]
      },
      contact: {
        title: "Contáctenos",
        info: {
          title: "Información de Contacto",
          address: {
            line1: "3955 E Exposition Ave. #310,",
            line2: "Denver, CO 80209"
          },
          phone: "(303) 991-4455",
          email: "Office@colorado-braces.com"
        },
        hours: {
          title: "Horario de Atención",
          weekdays: {
            days: "Lunes - Jueves",
            hours: "9:00 AM - 5:00 PM"
          },
          friday: {
            days: "Viernes",
            hours: "9:00 AM - 2:00 PM"
          },
          weekend: {
            days: "Sábado - Domingo",
            hours: "Cerrado"
          }
        }
      }
    },
    footer: {
      tagline: "Transformando sonrisas con atención ortodóntica experta en Denver.",
      columns: {
        ourSite: {
          title: "Nuestro Sitio",
          links: {
            home: "Inicio",
            about: "Sobre Nosotros",
            testimonials: "Testimonios",
            blog: "Blog",
            contact: "Contáctenos",
            privacy: "Política de Privacidad"
          }
        },
        services: {
          title: "Servicios",
          links: {
            clearAligners: "Alineadores Transparentes",
            clearBraces: "Brackets Transparentes",
            conventionalBraces: "Brackets Convencionales",
            whitening: "Blanqueamiento"
          }
        },
        resources: {
          title: "Recursos",
          links: {
            blog: "Blog",
            instagram: "Instagram",
            facebook: "Facebook"
          }
        }
      },
      copyright: "© {{year}} Colorado Braces. Todos los derechos reservados."
    },
    about: {
      commitment: {
        title: "Nuestro Compromiso con la Excelencia",
        content: [
          "Atención Centrada en el Paciente: Su comodidad y satisfacción son nuestras principales prioridades. Nos tomamos el tiempo para escuchar sus preocupaciones y crear planes de tratamiento personalizados que satisfagan sus necesidades individuales.",
          "Soluciones Ortodónticas Avanzadas: Manteniéndonos actualizados con las últimas técnicas y tecnologías, ofrecemos una variedad de servicios que incluyen brackets transparentes, brackets convencionales y alineadores transparentes como Invisalign y OrthoFX.",
          "Mejorando la Salud Oral y el Bienestar: Creemos que el tratamiento ortodóntico no solo se trata de enderezar los dientes, sino de mejorar la salud oral general y aumentar la confianza."
        ]
      },
      whyChoose: {
        title: "Por Qué Elegir Colorado Braces",
        content: [
          "Más de 10 Años de Experiencia: Con más de una década de experiencia, hemos transformado innumerables sonrisas en el área de Denver.",
          "Equipo Compasivo: Nuestro personal dedicado está aquí para apoyarlo en cada paso del camino, construyendo relaciones duraderas con nuestros pacientes y sus familias.",
          "Instalaciones de Última Generación: Utilizamos tecnología de vanguardia para proporcionar tratamientos eficientes y efectivos en un ambiente cómodo."
        ]
      },
      hero: {
        title: "Bienvenido a Colorado Braces: Tu Cuidado Ortodóntico de Confianza en Denver",
        description: "En Colorado Braces, nos enorgullece proporcionar tratamientos ortodónticos de la más alta calidad junto con una atención compasiva. Sirviendo a la comunidad de Denver, nuestra misión es asegurar que cada paciente se sienta cómodo y apoyado durante todo su tratamiento ortodóntico."
      },
      mission: {
        title: "Nuestra Misión y Visión",
        items: [
          {
            title: "Nuestra Misión",
            description: "Brindar atención ortodóntica excepcional con un toque personal, asegurando que cada paciente logre su sonrisa perfecta."
          },
          {
            title: "Atención Personalizada",
            description: "Priorizamos tu comodidad y satisfacción durante todo tu tratamiento ortodóntico."
          },
          {
            title: "Tratamiento Experto",
            description: "Utilizando la última tecnología y técnicas para ofrecer resultados extraordinarios."
          },
          {
            title: "Ambiente Acogedor",
            description: "Creando un ambiente amigable y cómodo para todos nuestros pacientes."
          }
        ]
      },
      values: {
        title: "Nuestros Valores",
        items: [
          {
            title: "Excelencia",
            description: "Comprometidos con brindar la más alta calidad en atención ortodóntica."
          },
          {
            title: "Compasión",
            description: "Tratando a cada paciente con comprensión y atención personalizada."
          },
          {
            title: "Innovación",
            description: "Manteniéndonos a la vanguardia de la tecnología y técnicas ortodónticas."
          },
          {
            title: "Comunidad",
            description: "Construyendo relaciones duraderas con nuestros pacientes y la comunidad."
          }
        ]
      },
      doctor: {
        title: "Conozca al Dr. Eduardo Garcia, DDS",
        subtitle: "Su Ortodoncista Experto en Denver",
        introduction: "El Dr. Eduardo Garcia aporta una gran experiencia y un enfoque compasivo al cuidado ortodóntico en Colorado Braces.",
        education: {
          title: "Formación Académica:",
          items: [
            "Título de Odontología: Universidad Santa María, Venezuela",
            "Residencia en Ortodoncia: Universidad de Carabobo, Venezuela",
            "Programa de Estudiantes Internacionales: Universidad de Colorado, 2022"
          ]
        },
        experience: {
          title: "Experiencia Profesional:",
          items: [
            "Más de 15 años practicando odontología",
            "Ha dado conferencias y compartido su experiencia en varios países",
            "Dedicado a extender sus servicios a la comunidad del área metropolitana de Denver"
          ]
        },
        personal: {
          title: "Vida Personal:",
          items: [
            "Originario de Venezuela, el Dr. García se mudó a Colorado con su talentosa esposa, Gabriela, y sus dos encantadores hijos.",
            "Disfruta practicando fútbol, senderismo y acampando con su familia en su tiempo libre."
          ]
        }
      }
    },
    services: {
      clearAligners: {
        hero: {
          title: "Tratamiento con Alineadores Transparentes",
          description: "Experimenta la forma moderna de enderezar tus dientes con alineadores casi invisibles. Cómodos, removibles y personalizados solo para ti."
        },
        benefits: {
          title: "Beneficios de los Alineadores Transparentes",
          mainPoints: {
            aesthetic: {
              title: "Tratamiento Casi Invisible",
              description: "Endereza tus dientes discretamente con alineadores transparentes que son prácticamente invisibles, permitiéndote sonreír con confianza durante todo tu tratamiento."
            },
            comfort: {
              title: "Comodidad Superior",
              description: "Disfruta de una experiencia ortodóntica cómoda con alineadores suaves y personalizados que no irritan tu boca como los brackets tradicionales."
            },
            convenience: {
              title: "Adaptable a tu Estilo de Vida",
              description: "Retira tus alineadores para comer, beber y en ocasiones especiales. Mantén tu rutina de higiene oral sin complicaciones."
            }
          }
        },
        process: {
          title: "Proceso de Tratamiento",
          steps: [
            {
              title: "1. Consulta Inicial",
              description: "Examinaremos tus dientes y discutiremos tus objetivos de sonrisa para determinar si los alineadores transparentes son adecuados para ti."
            },
            {
              title: "2. Escaneo Digital",
              description: "Creamos impresiones digitales 3D precisas de tus dientes para planificar tu tratamiento personalizado."
            },
            {
              title: "3. Plan de Tratamiento Personalizado",
              description: "Recibirás una serie de alineadores hechos a medida diseñados para mover gradualmente tus dientes a su posición."
            },
            {
              title: "4. Chequeos Regulares",
              description: "Monitoreamos tu progreso y proporcionamos nuevos juegos de alineadores cada pocas semanas."
            }
          ]
        },
        cta: {
          title: "¿Listo para Transformar tu Sonrisa?",
          description: "Comienza tu camino hacia una sonrisa confiada con Colorado Braces hoy.",
          button: "Programa tu Consulta"
        }
      },
      clearBraces: {
        hero: {
          title: "Tratamiento con Brackets Transparentes",
          description: "Experimenta un tratamiento ortodóntico efectivo con nuestros avanzados brackets cerámicos. Casi invisibles en tus dientes, proporcionan el equilibrio perfecto entre estética y rendimiento."
        },
        benefits: {
          title: "Beneficios de los Brackets Transparentes",
          mainPoints: {
            aesthetic: {
              title: "Apariencia Discreta",
              description: "Nuestros brackets cerámicos se mezclan naturalmente con tus dientes, haciéndolos mucho menos notables que los brackets metálicos tradicionales mientras proporcionan el mismo tratamiento efectivo."
            },
            durability: {
              title: "Fuertes y Confiables",
              description: "Fabricados con materiales cerámicos de alta calidad, estos brackets están diseñados para resistir tu proceso de tratamiento mientras resisten las manchas y la decoloración."
            },
            efficiency: {
              title: "Tratamiento Efectivo",
              description: "Los brackets transparentes funcionan tan eficientemente como los brackets tradicionales, permitiendo un control preciso del movimiento dental mientras mantienen una apariencia más estética."
            }
          }
        },
        process: {
          title: "Proceso de Tratamiento",
          steps: [
            {
              title: "1. Consulta Inicial",
              description: "Examinaremos tus dientes y discutiremos si los brackets transparentes son la opción correcta para tus necesidades ortodónticas."
            },
            {
              title: "2. Planificación Personalizada",
              description: "Creamos un plan de tratamiento detallado adaptado a tus necesidades y objetivos específicos."
            },
            {
              title: "3. Colocación de Brackets",
              description: "Tus brackets transparentes son cuidadosamente colocados usando técnicas avanzadas de adhesión para asegurar un posicionamiento y comodidad óptimos."
            },
            {
              title: "4. Ajustes Regulares",
              description: "Nos visitarás periódicamente para ajustes que aseguren que tu tratamiento progrese según lo planeado."
            }
          ]
        },
        cta: {
          title: "¿Listo para Comenzar el Viaje hacia tu Nueva Sonrisa?",
          description: "Transforma tu sonrisa con brackets transparentes en Colorado Braces.",
          button: "Programa tu Consulta"
        }
      },
      conventionalBraces: {
        hero: {
          title: "Tratamiento con Brackets Tradicionales en Denver",
          description: "Experience proven orthodontic care with conventional braces at Colorado Braces. Our expert team delivers reliable, effective treatment using the latest techniques in traditional orthodontics, helping Denver residents achieve their perfect smile with confidence."
        },
        benefits: {
          title: "Benefits of Traditional Braces",
          mainPoints: {
            effectiveness: {
              title: "Proven Effectiveness",
              description: "Traditional metal braces remain one of the most reliable and effective methods for correcting complex orthodontic issues and achieving optimal tooth alignment."
            },
            durability: {
              title: "Durable Treatment",
              description: "Made from high-grade stainless steel, conventional braces are extremely durable and can handle the full scope of orthodontic corrections."
            },
            costEffective: {
              title: "Cost-Effective Solution",
              description: "Traditional braces often represent the most economical choice for comprehensive orthodontic treatment, making them an excellent value for patients."
            }
          }
        },
        process: {
          title: "Treatment Process",
          steps: [
            {
              title: "1. Comprehensive Evaluation",
              description: "We begin with a thorough examination and digital imaging to create a customized treatment plan that addresses your specific orthodontic needs."
            },
            {
              title: "2. Expert Installation",
              description: "Our skilled orthodontists carefully place each bracket and wire, ensuring maximum comfort and optimal positioning for effective treatment."
            },
            {
              title: "3. Regular Adjustments",
              description: "Through periodic appointments, we adjust your braces to maintain steady progress toward your ideal smile, tracking your transformation every step of the way."
            }
          ]
        },
        cta: {
          title: "Ready to Start Your Smile Journey?",
          description: "Transform your smile with traditional braces at Colorado Braces.",
          button: "Schedule Your Consultation"
        }
      },
      whitening: {
        hero: {
          title: "Blanqueamiento Dental Profesional en Denver",
          description: "Transforma tu sonrisa con nuestros tratamientos avanzados de blanqueamiento dental en Colorado Braces. Utilizando la última tecnología y productos profesionales, ayudamos a los residentes de Denver a lograr sonrisas brillantemente blancas de manera segura y efectiva."
        },
        benefits: {
          title: "Beneficios del Blanqueamiento Profesional",
          mainPoints: {
            professional: {
              title: "Resultados Profesionales",
              description: "Experience dramatic smile brightening with our professional teeth whitening treatments, providing superior results compared to over-the-counter options."
            },
            safety: {
              title: "Safe and Comfortable",
              description: "Our whitening treatments are carefully monitored by dental professionals, ensuring both safety and comfort throughout the process."
            },
            lasting: {
              title: "Long-Lasting Effects",
              description: "Achieve a brighter smile that lasts, with results that can be maintained through simple touch-up treatments and good oral hygiene."
            }
          }
        },
        process: {
          title: "Treatment Process",
          steps: [
            {
              title: "1. Initial Consultation",
              description: "We begin with a thorough examination to determine the cause of discoloration and create a personalized whitening plan for optimal results."
            },
            {
              title: "2. Custom Treatment",
              description: "Using professional-grade whitening agents and custom-fitted trays, we ensure even coverage and maximum effectiveness."
            },
            {
              title: "3. Maintenance Plan",
              description: "We provide detailed instructions and a customized maintenance plan to help you maintain your bright smile for years to come."
            }
          ]
        },
        cta: {
          title: "Ready to Brighten Your Smile?",
          description: "Transform your smile with professional teeth whitening at Colorado Braces.",
          button: "Schedule Your Consultation"
        }
      }
    },
    blog: {
      hero: {
        title: "Consejos e Información de Ortodoncia",
        description: "Mantente informado con las últimas noticias de ortodoncia, información sobre tratamientos y consejos de salud oral de los expertos de Colorado Braces."
      },
      posts: [
        {
          title: "The Benefits of Early Orthodontic Treatment for Children",
          description: "Learn why early intervention can make a significant difference in your child's orthodontic journey and overall oral health.",
          date: "March 15, 2024",
          readTime: "5 min read",
          slug: "benefits-early-orthodontic-treatment",
          content: [
            {
              type: "paragraph",
              content: "Early orthodontic treatment can play a crucial role in your child's dental development and overall oral health. The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7, when their permanent teeth begin to emerge."
            },
            {
              type: "heading",
              content: "Why Early Intervention Matters"
            },
            {
              type: "paragraph",
              content: "Early orthodontic intervention allows specialists to identify and address potential issues before they become more serious. This proactive approach can often reduce the need for more extensive treatment later in life."
            },
            {
              type: "heading",
              content: "Key Benefits of Early Treatment"
            },
            {
              type: "list",
              items: [
                "Guides proper jaw growth and development",
                "Creates space for crowded, erupting teeth",
                "Reduces the risk of trauma to protruding front teeth",
                "Preserves space for unerupted teeth",
                "Reduces the likelihood of tooth extraction"
              ]
            }
          ]
        },
        {
          title: "Clear Aligners vs Traditional Braces: Making the Right Choice",
          description: "Explore the pros and cons of different orthodontic treatments to help you make an informed decision about your smile journey.",
          date: "March 10, 2024",
          readTime: "6 min read",
          slug: "clear-aligners-vs-traditional-braces",
          content: [
            {
              type: "paragraph",
              content: "Clear aligners are a popular orthodontic treatment option for adults and teenagers. They are removable, transparent, and made of smooth plastic. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
            },
            {
              type: "heading",
              content: "How Clear Aligners Work"
            },
            {
              type: "paragraph",
              content: "Clear aligners are worn over the teeth and are replaced every two weeks. They are removed for eating, drinking, and cleaning. Clear aligners are designed to gradually move teeth into their correct positions, correcting bite issues caused by malocclusion."
            },
            {
              type: "heading",
              content: "Benefits of Clear Aligners"
            },
            {
              type: "list",
              items: [
                "Clear aligners are removable, allowing for easier cleaning and maintenance",
                "Clear aligners are transparent, making them less noticeable than traditional metal braces",
                "Clear aligners are comfortable and can be removed for eating and drinking",
                "Clear aligners are effective in correcting bite issues caused by malocclusion"
              ]
            }
          ]
        },
        {
          title: "Tips for Maintaining Your Braces and Oral Hygiene",
          description: "Essential care tips and best practices for keeping your braces clean and maintaining excellent oral hygiene throughout your treatment.",
          date: "March 5, 2024",
          readTime: "4 min read",
          slug: "tips-maintaining-braces-oral-hygiene",
          content: [
            {
              type: "paragraph",
              content: "Braces are a common orthodontic treatment option for adults and teenagers. They are made of metal or ceramic brackets and wires that are attached to the teeth. Braces work by applying gentle pressure to the teeth, gradually moving them into their correct positions."
            },
            {
              type: "heading",
              content: "How Braces Work"
            },
            {
              type: "paragraph",
              content: "Braces are worn for an average of 2-3 years. During this time, the teeth are gradually moved into their correct positions. Braces are removed for eating, drinking, and cleaning. Braces are effective in correcting crooked teeth and misaligned bites."
            },
            {
              type: "heading",
              content: "Benefits of Braces"
            },
            {
              type: "list",
              items: [
                "Braces are effective in correcting crooked teeth and misaligned bites",
                "Braces are durable and can be used for an extended period",
                "Braces are removable, allowing for easier cleaning and maintenance",
                "Braces are visible, making them less noticeable than clear aligners"
              ]
            }
          ]
        },
        {
          title: "Los Beneficios del Tratamiento Ortodóntico Temprano",
          description: "Descubre por qué la intervención temprana puede marcar una diferencia significativa en el viaje ortodóntico de tu hijo y su salud oral general.",
          date: "15 de marzo de 2024",
          readTime: "5 min de lectura",
          slug: "beneficios-tratamiento-ortodontico-temprano",
          content: [
            {
              type: "paragraph",
              content: "El tratamiento ortodóntico temprano puede jugar un papel crucial en el desarrollo dental y la salud oral general de tu hijo. La Asociación Americana de Ortodoncistas recomienda que los niños tengan su primera evaluación ortodóntica a los 7 años, cuando sus dientes permanentes comienzan a emerger."
            },
            {
              type: "heading",
              content: "Por Qué es Importante la Intervención Temprana"
            },
            {
              type: "paragraph",
              content: "La intervención ortodóntica temprana permite a los especialistas identificar y abordar posibles problemas antes de que se vuelvan más serios. Este enfoque proactivo a menudo puede reducir la necesidad de un tratamiento más extenso más adelante en la vida."
            },
            {
              type: "heading",
              content: "Beneficios Clave del Tratamiento Temprano"
            },
            {
              type: "list",
              items: [
                "Guía el crecimiento y desarrollo adecuado de la mandíbula",
                "Crea espacio para los dientes permanentes que están saliendo",
                "Reduce el riesgo de trauma en los dientes frontales prominentes",
                "Preserva el espacio para los dientes que aún no han salido",
                "Reduce la probabilidad de necesitar extracciones dentales"
              ]
            }
          ]
        }
      ]
    },
    appointment: {
      title: "Programa tu Consulta Gratuita",
      description: "Da el primer paso hacia tu sonrisa perfecta. Programa una consulta con nuestro experimentado equipo de ortodoncia para discutir tus opciones de tratamiento y crear un plan personalizado.",
      expectations: {
        title: "Qué Esperar",
        items: [
          "Examen oral completo",
          "Discusión de tus objetivos de sonrisa",
          "Explicación de opciones de tratamiento",
          "Revisión de costos y seguro",
          "Opciones flexibles de programación"
        ]
      },
      form: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo Electrónico",
        phone: "Teléfono",
        service: "Servicio de Interés",
        preferredDate: "Fecha Preferida",
        preferredTime: "Hora Preferida",
        submit: "Programar Cita",
        submitting: "Enviando...",
        selectService: "Selecciona un servicio",
        selectTime: "Selecciona un horario",
        timeMorning: "Mañana (9AM - 12PM)",
        timeAfternoon: "Tarde (12PM - 5PM)",
        notSure: "No estoy seguro aún",
        dateHint: "Por favor selecciona una fecha a partir de mañana"
      },
      successMessage: "¡Gracias! Nos pondremos en contacto contigo pronto para confirmar tu cita.",
      errorMessage: "Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo."
    }
  }
};

export function useTranslations() {
  const pathname = usePathname() || '';
  const lang = pathname.startsWith('/es') ? 'es' : 'en';

  const t = (key: string): string => {
    try {
      const [namespace, ...keys] = key.split('.');
      let value = translations[lang][namespace];
      
      for (const k of keys) {
        if (!value || !value[k]) {
          return key;
        }
        value = value[k];
      }
      
      return value as string;
    } catch (error) {
      return key;
    }
  };

  return { t, lang };
} 