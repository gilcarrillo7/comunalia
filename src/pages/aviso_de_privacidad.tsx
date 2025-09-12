import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout/Layout";

const AvisoPage: React.FC<PageProps> = () => {
  const content = `
        <p class="text-primary font-bold text-xl md:text-2xl">
          AVISO DE PRIVACIDAD VOLUNTARIOS O INTERESADOS
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">Alianza FC México, A.C.</span> (“Alianza FC México” o la
          “Institución”) ha creado este
          <em>
            <span class="text-primary font-semibold">
              Aviso de Privacidad en términos de lo previsto en la Ley Federal
              de Protección de Datos Personales en Posesión de los Particulares
            </span>
          </em>
          (la “Ley”), para demostrar su compromiso con la protección de su
          privacidad y de la información que usted nos proporcione.
        </p>
        <p>&nbsp;</p>
        <p>
          Solicitamos que lea cuidadosamente este Aviso de Privacidad, ya que la
          simple aportación que haga de sus datos personales, ya sea por medios
          físicos o digitales a través de las diferentes plataformas con las que
          cuenta, constituyen la aceptación expresa de este Aviso de Privacidad
          y, en consecuencia, una autorización expresa al tratamiento de sus
          datos personales.
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">
            1. Identidad y domicilio del responsable que trata los datos
            personales
          </span>
        </p>
        <p>
          Alianza FC México, A.C., con domicilio fiscal en Av. Del Estado 208,
          Col. Tecnológico, Monterrey, N.L., C.P. 64700, es responsable de
          recabar sus datos personales, del uso que se le dé a los mismos y de
          su protección.
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">2. Datos personales que se tratarán</span>
        </p>
        <p>
          Podremos recabar datos de identificación, datos de contacto, datos
          académicos, datos profesionales, datos laborales, datos fiscales y
          datos patrimoniales o financieros.
        </p>
        <p>&nbsp;</p>
        <p>
          Ocasionalmente y para fines específicos podremos recabar datos
          personales sensibles sobre su salud.
        </p>
        <p>&nbsp;</p>
        <p>
          Cuando se trate de datos personales sensibles y patrimoniales o
          financieros, para su tratamiento, la Institución deberá recabar el
          consentimiento respectivo, el cual, junto con el presente Aviso de
          Privacidad faculta a la Institución a darle el tratamiento que haya
          sido autorizado por el Titular.
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">3. Finalidades del tratamiento</span>
        </p>
        <p>
          Los datos personales y datos personales sensibles que voluntariamente
          proporcione a Alianza FC México serán utilizados para identificarlo,
          localizarlo y contactarlo; registro en base de datos de contactos; así
          como cualquier otra finalidad análoga a las aquí establecidas, y
          estarán protegidos por medidas de seguridad administrativas, técnicas
          y físicas, para evitar su daño, pérdida, alteración, destrucción, uso,
          acceso o divulgación indebida.
        </p>
        <p>&nbsp;</p>
        <p>
          La Institución no requerirá el consentimiento del Titular, para tratar
          datos personales cuando lo haga con fundamento en lo dispuesto en el
          Artículo 10 de la Ley.
        </p>
        <p>&nbsp;</p>
        <p>
          Adicionalmente, Alianza FC México, queda autorizada para tratar datos
          personales para cualquiera de los siguientes fines secundarios: Enviar
          por cualquier medio físico, electrónico o magnético, incluyendo de
          manera enunciativa y no limitativa, correo ordinario, correo
          electrónico, llamadas telefónicas, descargas electrónicas, o por
          personal autorizado por la Institución previamente identificado: a.
          Noticias y anuncios en general, que sean o puedan ser importantes o
          relacionados con la Institución. b. Campañas, beneficios o invitación
          a eventos.
        </p>
        <p>&nbsp;</p>
        <p>
          Si usted no desea que Alianza FC México trate sus datos personales
          para alguna de las finalidades secundarias descritas en este apartado,
          por favor envíe un correo electrónico a
          <a class="text-primary" href="mailto:contacto@comunalia.org.mx">
            contacto@comunalia.org.mx
          </a>
          . Usted podrá cambiar de opción en cualquier momento.
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">4. Transferencias de datos</span>
        </p>
        <p>
          No comercializaremos sus datos personales a otras empresas dentro del
          curso normal de nuestras actividades, sin embargo, es posible que
          ocasionalmente sus datos personales sean revelados a otra asociación o
          instituciones públicas como parte de un proceso asociación,
          colaboración, y/o proceso similar, en cuyo caso esa divulgación estará
          sujeta a nuestra política de privacidad que se encuentre en vigor en
          dicha fecha y mantendremos, respecto de dichos datos, el tratamiento
          de privacidad o confidencialidad que sea requerido en términos de la
          legislación aplicable y de dicha política.
        </p>
        <p>&nbsp;</p>
        <p>
          La Institución no requerirá el consentimiento del Titular, para
          transferir datos personales cuando lo haga con fundamento en lo
          dispuesto en el Artículo 37 de la Ley.
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">
            5. Medios para el ejercicio de los derechos ARCO y para limitar el
            uso o divulgación de sus datos personales y revocar su
            consentimiento.
          </span>
        </p>
        <p>
          Usted tiene derecho, conforme al Artículo 29 de la Ley, de acceder,
          rectificar y cancelar sus datos personales, así como de oponerse al
          tratamiento de los mismos o revocar el consentimiento que para tal fin
          nos haya otorgado, a través de los procedimientos que hemos
          implementado. Para ello, debe ponerse en contacto con nuestro
          responsable de datos personales en contacto@comunalia.org.mx
        </p>
        <p>&nbsp;</p>
        <p>
          Para que la Institución pueda darle seguimiento a su solicitud, usted
          o su representante legal, deberá acreditar correctamente su identidad
          con copia de alguna identificación oficial vigente.
          <br />
          En caso de que la información proporcionada sea errónea o
          insuficiente, o bien, no se acompañen los documentos de acreditación
          correspondientes, la Institución, dentro de los cinco (5) días hábiles
          siguientes a la recepción de la solicitud, podrá requerirle que aporte
          los elementos o documentos necesarios para dar trámite a la misma.
          Usted contará con diez (10) días hábiles para atender el
          requerimiento, contados a partir del día siguiente en que lo haya
          recibido. De no dar respuesta en dicho plazo, se tendrá por no
          presentada la solicitud correspondiente.
        </p>
        <p>&nbsp;</p>
        <p>
          Alianza FC México le comunicará la determinación adoptada, en un plazo
          máximo de veinte (20) días hábiles contados desde la fecha en que se
          recibió la solicitud, a efecto de que, si resulta procedente, haga
          efectiva la misma dentro de los quince (15) días hábiles siguientes a
          que se comunique la respuesta.
        </p>
        <p>&nbsp;</p>
        <p>
          Los Titulares de la información podrán en todo momento, salvo por las
          excepciones contenidas en la misma Ley, limitar el uso o divulgación
          de los datos personales previamente proporcionados a la Institución.
          Al efecto, el Titular deberá dirigirse al correo:
          <a class="text-primary" href="mailto:contacto@comunalia.org.mx">
            contacto@comunalia.org.mx
          </a>
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">
            6. Uso de cookies, web beacons y otras tecnologías de rastreo
          </span>
        </p>
        <p>
          El sitio web utiliza la tecnología denominada “cookie”. Una cookie es
          una pieza de información que se envía a su navegador web cuando visita
          un sitio web. Nuestras cookies son almacenadas por Google Analytics
          anonimizando la información y sin resguardar sus datos personales. La
          sección de Ayuda de su navegador puede indicarle como controlar el uso
          de cookies.
        </p>
        <p>&nbsp;</p>
        <p>
          <span class="text-primary font-semibold">
            7. Procedimiento y medio para comunicar los cambios en el aviso de
            privacidad
          </span>
        </p>
        <p>
          Para conocer cualquier modificación a este Aviso de Privacidad, puede
          consultar nuestra página de Internet www.comunalia.org.mx
        </p>
        <p>&nbsp;</p>
        <p>
          Se tendrá tácitamente por notificado al Titular de la información y se
          entenderá que el mismo acepta las modificaciones al presente Aviso de
          Privacidad, dentro de los tres días hábiles siguientes a la fecha en
          que se ponga a disposición del público la adecuación respectiva, si el
          Titular no manifiesta desacuerdo o rechazo alguno. A efectos de lo
          anterior, la Institución a su elección, podrá comunicar al Titular los
          cambios realizados al presente Aviso de Privacidad a través de
          cualquiera de los siguientes medios:
          <br />
          • Escrito enviado a cualquiera de los domicilios que se tengan del
          Titular.
          <br />
          • Correo electrónico enviado a cualquiera de las direcciones
          electrónicas que se tenga del Titular.
          <br />• Avisos colocados en el sitio de Internet de la Institución
          cuando se trate de cambios de carácter general y no particulares o
          cuando así sea requerido por la Ley o disposiciones de autoridad
          competente.
        </p>
        <p>&nbsp;</p>
        <p>
          Para Alianza FC México, mantener la privacidad y los procedimientos de
          seguridad que protegen sus datos personales es muy importante.
        </p>
        <p>&nbsp;</p>
        <p>
          Si tiene alguna duda sobre el contenido, interpretación o alcance de
          este Aviso y sobre cómo ejercer sus derechos de acceso, rectificación,
          cancelación u oposición, puede escribirnos al correo electrónico:
          <a class="text-primary" href="mailto:contacto@comunalia.org.mx">
            contacto@comunalia.org.mx
          </a>
          .
        </p>
        <p>&nbsp;</p>
        <p>
          La última actualización de este Aviso de Privacidad fue realizada en
          junio de 2022.
        </p>
  `;

  return (
    <Layout>
      <div className="container pt-24 pb-16 md:pt-40">
        <div className="" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export default AvisoPage;

export const Head: HeadFC = () => <title>Aviso de privacidad</title>;
