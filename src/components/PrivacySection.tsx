import React from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030712] min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6 text-cyan-400">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Privacidad</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Última actualización: 17 de agosto de 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-cyan max-w-none text-slate-300 bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md prose-headings:text-white prose-a:text-cyan-400"
        >
          <p className="lead text-lg mb-8">
            En <strong>GraphixGlow</strong> nos comprometemos a proteger la privacidad y seguridad de los datos personales de nuestros clientes, prospectos, visitantes y usuarios de nuestros servicios digitales.
          </p>
          <p className="mb-8">
            La presente Política de Privacidad explica qué información podemos recopilar, cómo la utilizamos, con quién podemos compartirla y cuáles son los derechos que usted puede ejercer respecto de sus datos personales.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">1. Responsable del tratamiento de los datos personales</h2>
          <p><strong>GraphixGlow</strong> es responsable del tratamiento y protección de los datos personales que sean recopilados a través de nuestro sitio web, formularios de contacto, redes sociales, servicios de mensajería, WhatsApp y demás medios de comunicación utilizados para prestar nuestros servicios.</p>
          <p>Para cualquier asunto relacionado con esta Política de Privacidad o con el tratamiento de sus datos personales, puede comunicarse con nosotros a través de:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
            <li><strong>Empresa:</strong> GraphixGlow</li>
            <li><strong>Sitio web:</strong> graphixglow.com</li>
            <li><strong>Correo electrónico:</strong> graphixglow.2024@gmail.com</li>
            <li><strong>WhatsApp:</strong> +52 55 3946 9253</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">2. Datos personales que podemos recopilar</h2>
          <p>Dependiendo de la interacción que tenga con GraphixGlow, podemos recopilar los siguientes datos:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
            <li>Nombre y apellidos.</li>
            <li>Número telefónico.</li>
            <li>Correo electrónico.</li>
            <li>Nombre de empresa o negocio.</li>
            <li>Información relacionada con los servicios que solicita.</li>
            <li>Información necesaria para elaborar cotizaciones y propuestas comerciales.</li>
            <li>Datos de facturación cuando sean necesarios.</li>
            <li>Información proporcionada voluntariamente mediante formularios, WhatsApp, correo electrónico o redes sociales.</li>
            <li>Información relacionada con proyectos, diseños, campañas publicitarias, páginas web y demás servicios contratados.</li>
          </ul>
          <p>GraphixGlow procurará recopilar únicamente los datos que sean necesarios para las finalidades descritas en esta Política de Privacidad.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">3. Finalidades del tratamiento de los datos personales</h2>
          <p>Los datos personales podrán ser utilizados para las siguientes finalidades:</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Finalidades principales</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-400">
            <li>Atender solicitudes de información.</li>
            <li>Contactar a clientes y prospectos.</li>
            <li>Elaborar cotizaciones y propuestas comerciales.</li>
            <li>Prestar y administrar los servicios contratados.</li>
            <li>Dar seguimiento a proyectos.</li>
            <li>Mantener comunicación con nuestros clientes.</li>
            <li>Gestionar pagos y procesos administrativos.</li>
            <li>Emitir comprobantes fiscales cuando corresponda.</li>
            <li>Brindar soporte y atención al cliente.</li>
            <li>Cumplir obligaciones legales y contractuales.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Finalidades secundarias</h3>
          <p>Cuando corresponda y de acuerdo con la legislación aplicable, podremos utilizar determinados datos para:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-400">
            <li>Enviar información sobre servicios, promociones y novedades de GraphixGlow.</li>
            <li>Realizar comunicaciones comerciales.</li>
            <li>Solicitar opiniones o comentarios sobre nuestros servicios.</li>
            <li>Mejorar nuestros servicios y experiencia de usuario.</li>
            <li>Desarrollar estrategias de marketing y comunicación.</li>
          </ul>
          <p>Usted podrá solicitar en cualquier momento que dejemos de utilizar sus datos para finalidades secundarias.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">4. Datos proporcionados mediante WhatsApp y redes sociales</h2>
          <p>Cuando usted se comunica con GraphixGlow mediante <strong>WhatsApp, Facebook, Instagram u otras plataformas</strong>, la información que proporcione voluntariamente podrá ser utilizada para atender su solicitud, proporcionar información, elaborar cotizaciones y prestar nuestros servicios.</p>
          <p>Estas plataformas cuentan además con sus propias políticas de privacidad y términos de uso, por lo que recomendamos consultar sus respectivas políticas.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">5. Información de proyectos y archivos proporcionados</h2>
          <p>Cuando un cliente contrata nuestros servicios, puede proporcionarnos fotografías, logotipos, documentos, textos, información empresarial, material gráfico, accesos o archivos necesarios para desarrollar un proyecto.</p>
          <p>GraphixGlow utilizará esta información únicamente para las finalidades relacionadas con el servicio contratado y procurará mantener medidas razonables para evitar accesos, usos o divulgaciones no autorizadas.</p>
          <p>El cliente es responsable de contar con las autorizaciones necesarias para proporcionarnos materiales, imágenes, textos, marcas, fotografías o cualquier otro contenido perteneciente a terceros.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">6. Cookies y tecnologías similares</h2>
          <p>Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el funcionamiento del sitio y, cuando corresponda, medir campañas publicitarias.</p>
          <p>Las cookies pueden permitirnos conocer información como:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-400">
            <li>Tipo de dispositivo.</li>
            <li>Navegador utilizado.</li>
            <li>Páginas visitadas.</li>
            <li>Tiempo de navegación.</li>
            <li>Fuente de procedencia.</li>
            <li>Interacciones realizadas dentro del sitio.</li>
          </ul>
          <p>El usuario puede configurar su navegador para bloquear o eliminar determinadas cookies. Sin embargo, esto podría afectar algunas funcionalidades del sitio web.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">7. Herramientas y proveedores externos</h2>
          <p>Para proporcionar nuestros servicios y operar determinados elementos de nuestro negocio, GraphixGlow puede utilizar servicios tecnológicos de terceros, tales como plataformas de alojamiento web, herramientas de analítica, sistemas de comunicación, servicios de correo electrónico, plataformas publicitarias, procesadores de pago y herramientas de gestión empresarial.</p>
          <p>Estos proveedores podrán tener acceso únicamente a la información necesaria para proporcionar sus servicios, de acuerdo con sus propias condiciones y políticas de privacidad.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">8. Protección de los datos personales</h2>
          <p>GraphixGlow adopta medidas administrativas, técnicas y razonables de seguridad destinadas a proteger los datos personales contra pérdida, daño, alteración, acceso, uso o divulgación no autorizada.</p>
          <p>No obstante, ningún sistema de almacenamiento o transmisión de información por Internet puede garantizar una seguridad absoluta.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">9. Conservación de los datos</h2>
          <p>Los datos personales serán conservados durante el tiempo que resulte necesario para cumplir con las finalidades para las cuales fueron recopilados, atender obligaciones contractuales, administrativas, fiscales o legales, y posteriormente serán eliminados o bloqueados cuando corresponda, de conformidad con la legislación aplicable.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">10. Derechos ARCO</h2>
          <p>De conformidad con la legislación mexicana aplicable, el titular de los datos personales puede ejercer sus derechos de:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-400">
            <li><strong>Acceso:</strong> conocer qué datos personales tenemos y cómo los utilizamos.</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos personales que sean incorrectos, incompletos o estén desactualizados.</li>
            <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos personales cuando resulte procedente.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos personales para determinadas finalidades.</li>
          </ul>
          <p>Para ejercer estos derechos, puede enviar una solicitud a:</p>
          <p><strong>Correo electrónico:</strong> graphixglow.2024@gmail.com</p>
          <p>La solicitud deberá incluir la información necesaria para identificar al titular y permitirnos atender adecuadamente su petición.</p>
          <p>GraphixGlow podrá solicitar documentación o información adicional para verificar la identidad del solicitante y procesar la solicitud correspondiente.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">11. Revocación del consentimiento</h2>
          <p>Cuando el tratamiento de los datos personales requiera consentimiento, el titular podrá solicitar su revocación.</p>
          <p>La revocación podrá estar sujeta a las limitaciones establecidas por la legislación aplicable y no necesariamente podrá aplicarse de manera retroactiva.</p>
          <p>Para solicitar la revocación del consentimiento, puede comunicarse mediante:</p>
          <p><strong>Correo:</strong> graphixglow.2024@gmail.com</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">12. Limitación del uso o divulgación</h2>
          <p>El titular puede solicitar la limitación del uso o divulgación de sus datos personales para determinadas finalidades, especialmente aquellas relacionadas con comunicaciones promocionales o comerciales.</p>
          <p>Para ello puede comunicarse con GraphixGlow mediante los medios indicados en esta Política de Privacidad.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">13. Transferencia de datos personales</h2>
          <p>GraphixGlow no comercializa ni vende los datos personales de sus clientes.</p>
          <p>En determinados casos, los datos podrán ser compartidos con proveedores o terceros que sean necesarios para prestar servicios, procesar información, gestionar comunicaciones, realizar operaciones administrativas o cumplir obligaciones legales.</p>
          <p>Cuando sea necesario, dichas transferencias se realizarán de conformidad con la legislación aplicable y procurando mantener medidas adecuadas de protección.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">14. Datos de menores de edad</h2>
          <p>Nuestros servicios y canales de comunicación no están dirigidos específicamente a menores de edad.</p>
          <p>En caso de que sea necesario tratar datos personales de un menor, dicho tratamiento deberá realizarse mediante las autorizaciones y mecanismos correspondientes de acuerdo con la legislación aplicable.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">15. Cambios a esta Política de Privacidad</h2>
          <p>GraphixGlow podrá modificar o actualizar esta Política de Privacidad cuando resulte necesario debido a cambios legales, regulatorios, tecnológicos o en nuestros servicios.</p>
          <p>La versión actualizada será publicada en nuestro sitio web indicando la fecha de su última actualización.</p>
          <p>Recomendamos revisar periódicamente esta política para conocer cualquier modificación.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">16. Aceptación</h2>
          <p>Al utilizar nuestro sitio web, proporcionar voluntariamente sus datos personales o comunicarse con GraphixGlow a través de nuestros canales de atención, usted reconoce haber leído esta Política de Privacidad.</p>
          <p>Cuando la legislación aplicable requiera consentimiento expreso para determinado tratamiento, se solicitará dicho consentimiento mediante los mecanismos correspondientes.</p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-white border-b border-white/10 pb-4">17. Contacto</h2>
          <p>Si tiene preguntas, comentarios o solicitudes relacionadas con el tratamiento de sus datos personales, puede comunicarse con nosotros:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-400">
            <li><strong>GraphixGlow</strong></li>
            <li><strong>Sitio web:</strong> graphixglow.com</li>
            <li><strong>Correo electrónico:</strong> graphixglow.2024@gmail.com</li>
            <li><strong>WhatsApp:</strong> +52 55 3946 9253</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
