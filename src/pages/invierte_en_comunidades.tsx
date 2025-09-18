import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";
import Button from "../components/shared/Button";
import Textura from "../images/textura3.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ContentSection
        bgColor={COLORS.light}
        titleClassname="text-primary -mb-4 sm:!text-4xl"
        title="1. Fondo de fortalecimiento para las Fundaciones Comunitarias"
        content={`
        <div class="text-primary font-light">
        <p class="text-lg md:text-xl mb-6">Este fondo impulsa las capacidades operativas y estratégicas de las fundaciones comunitarias, permitiéndoles ser más eficientes, efectivas y resilientes en su labor de generar desarrollo comunitario sostenible.</p>
        
        <p class="mb-4 text-secondary text-base md:text-lg">
        ¿Qué se financia?<br/>
        • Fortalecimiento individual<br/>
        • Fortalecimiento colectivo<br/>
        • Comunicación y conexiones del movimiento de fundaciones comunitarias
        </p>
        </div>
        `}
        button1Text="Quiero invertir"
        button1Href="mailto:anakaren.perales@comunalia.org.mx"
        mediaType="image"
        mediaSrc="/images/invierte1.png"
        mediaClassname="md:w-[80%]"
      />
      <ContentSection
        bgColor="white"
        title="2. Fondos temáticos de inversión social"
        titleClassname="text-primary -mb-4 sm:!text-4xl"
        content={`
        <div class="text-primary font-light">
        <p class="text-lg md:text-2xl mb-6">
            <span class="font-medium">Invierte en soluciones locales con impacto tangible</span>
            <br/>
            A través de nuestros fondos temáticos, las empresas pueden financiar proyectos directamente ejecutados por las fundaciones comunitarias o sus aliados locales, respondiendo a necesidades reales de los territorios.
        </p>
        <p class="mb-4 text-base md:text-lg text-secondary">
        ¿Qué se financia?<br/>
        • Contamos con una cartera de proyectos listos para ejecutar.<br/>
        • Gestionamos convocatorias para proyectos con aliados locales.<br/>
        • Trabajamos en temas estratégicos como: salud, educación, trabajo digno, desarrollo económico, movilidad y migración y adaptación al cambio climático (desastres naturales)
        </p>
        <p class="mb-4 text-base md:text-lg text-secondary">
        Con un enfoque transversal en:<br/>
        • Desarrollo comunitario<br/>
        • Filantropía comunitaria
        </p>
        </div>
        `}
        button1Text="Quiero invertir"
        button1Href="mailto:anakaren.perales@comunalia.org.mx"
        mediaAlign="border"
        mediaType="image"
        mediaSrc="/images/invierte3.png"
        mediaSrcMob="/images/invierte3Mob.jpg"
        containerClassname="!pb-0 md:!pb-8"
        reverse
      />
      <ContentSection
        bgColor={COLORS.secondary}
        title="3. Servicios de Localización"
        titleClassname="text-primary -mb-4 sm:!text-4xl"
        content={`
        <div class="text-white font-light">
        <p class="text-lg md:text-2xl font-medium">Canaliza recursos de forma estratégica con asesoría experta.</p>
        <p class="text-lg md:text-2xl mb-6">
            Apoyamos a las empresas en el diseño e implementación de proyectos alineados a sus objetivos de responsabilidad social y al contexto de los territorios
        </p>
        <p class="mb-4 text-base md:text-lg">
            Ofrecemos:
        </p>
        <p class="mb-4 text-base md:text-lg">
        • Diagnóstico comunitario en zonas de interés <br/>
        • Mapeo de aliados locales<br/>
        • Co-diseño e implementación de proyectos<br/>
        • Seguimiento, monitoreo y rendición de cuentas
        </p>
        </div>
        `}
        button1Text="Quiero invertir"
        button1Href="mailto:anakaren.perales@comunalia.org.mx"
        button1Variant="outline"
        mediaType="image"
        mediaSrc="/images/invierte2.png"
        mediaAlign="border-bottom"
        containerClassname="pb-0"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Invierte en comunidades</title>;
