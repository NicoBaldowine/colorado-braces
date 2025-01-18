'use client';
import { useTranslations } from '@/hooks/useTranslations';

export default function Privacy() {
  const { lang } = useTranslations();
  
  const content = lang === 'es' ? (
    // Spanish content
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      
      <p className="mb-6">
        Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información que nos proporciona a través de nuestro formulario de contacto en nuestra página web.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Información que recopilamos</h2>
      <p className="mb-6">
        Recopilamos su nombre, número de teléfono y dirección de correo electrónico cuando decide completar nuestro formulario de contacto.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Uso de la información</h2>
      <p className="mb-6">
        Utilizamos la información que nos proporciona a través del formulario de contacto únicamente con el propósito de responder a su consulta. No compartimos esta información con terceros, excepto cuando lo requiera la ley.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Protección de la información</h2>
      <p className="mb-6">
        Tomamos medidas razonables para proteger su información contra acceso, divulgación, alteración y destrucción no autorizados. Utilizamos medidas de seguridad estándar de la industria para garantizar la confidencialidad e integridad de su información.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Retención de la información</h2>
      <p className="mb-6">
        Conservaremos su información durante el tiempo necesario para cumplir con el propósito para el que fue recopilada o según lo requiera la ley.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sus derechos</h2>
      <p className="mb-6">
        Tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Puede hacer esto contactándonos a través del formulario de contacto en nuestra página web.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Cambios en esta Política de Privacidad</h2>
      <p className="mb-6">
        Nos reservamos el derecho de cambiar esta Política de Privacidad en cualquier momento. Publicaremos cualquier cambio en nuestra página web y, si los cambios son significativos, proporcionaremos un aviso destacado.
      </p>

      <p className="mb-12">
        Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos a través del formulario de contacto en nuestra página web.
      </p>

      <div className="text-sm text-gray-600 border-t pt-8">
        <p>
          Copyright © 2023 Colorado Braces LLC. Todo el contenido, incluyendo pero no limitado a texto, gráficos, fotografías, videos y audio, es propiedad de Colorado Braces LLC o sus proveedores de contenido y está protegido por leyes internacionales de derechos de autor. El uso o reproducción no autorizada de cualquier contenido en este sitio web está estrictamente prohibido y puede resultar en acciones legales.
        </p>
      </div>
    </div>
  ) : (
    // English content
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <p className="mb-6">
        This Privacy Policy explains how we collect, use, and protect information that you provide to us through our contact form on our webpage.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Information we collect</h2>
      <p className="mb-6">
        We collect your name, phone number, and email address when you choose to fill out our contact form.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Use of information</h2>
      <p className="mb-6">
        We use the information you provide us through the contact form solely for the purpose of responding to your inquiry. We do not share this information with any third parties, except as required by law.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Protection of information</h2>
      <p className="mb-6">
        We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. We use industry-standard security measures to ensure the confidentiality and integrity of your information.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Retention of information</h2>
      <p className="mb-6">
        We will retain your information for as long as necessary to fulfill the purpose for which it was collected or as required by law.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Your rights</h2>
      <p className="mb-6">
        You have the right to access, correct, or delete your personal information at any time. You can do this by contacting us through the contact form on our webpage.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Changes to this Privacy Policy</h2>
      <p className="mb-6">
        We reserve the right to change this Privacy Policy at any time. We will post any changes to our webpage and, if the changes are significant, we will provide a prominent notice.
      </p>

      <p className="mb-12">
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us through the contact form on our webpage.
      </p>

      <div className="text-sm text-gray-600 border-t pt-8">
        <p>
          Copyright © 2023 Colorado Braces LLC. All content, including but not limited to text, graphics, photographs, videos, and audio, is the property of Colorado Braces LLC or its content suppliers and is protected by international copyright laws. Unauthorized use or reproduction of any content on this website is strictly prohibited and may result in legal action.
        </p>
      </div>
    </div>
  );

  return (
    <main className="py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        {content}
      </div>
    </main>
  );
} 