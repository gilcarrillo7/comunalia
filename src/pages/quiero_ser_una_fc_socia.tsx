import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout darkMode>
      <div className="flex flex-col items-center">
        <ContentSection
          containerClassname="lg:pt-40"
          bgColor={COLORS.primary}
          title="Impulsamos nuevas Fundaciones Comunitarias en México"
          titleClassname="text-2xl md:text-3xl text-tertiary"
          content={`
        <div class="text-white font-light text-base md:text-lg">
        <p>Creemos en el poder de las comunidades para transformar su entorno.</p>
        <p class="mb-4">
          Por eso, impulsamos un programa dirigido a fortalecer e integrar nuevas fundaciones comunitarias al ecosistema social del país.
        </p>
        <p class="mb-4">
        <span class="font-semibold">Este programa está dirigido a:</span>
        <br/>
        • Grupos promotores que deseen apoyar a sus comunidades
        <br/>
        • Organizaciones de la sociedad civil ya constituidas
        </p>
        <p class="mb-4 text-tertiary">
        <span class="font-semibold">A través de un proceso integral de acompañamiento, ofrecemos:</span>
        <br/>
        • Identificación, consolidación e integración a la alianza Comunalia
        <br/>
        • Orientación estratégica y fortalecimiento institucional
        <br/>
        • Estímulos económicos para impulsar su crecimiento en las áreas donde más lo necesitan
        </p>
        <p>
        Al unirse a la alianza, las organizaciones acceden a formación, recursos, redes y oportunidades de colaboración que amplifican su impacto y fortalecen su compromiso con el desarrollo comunitario
        </p>
        </div>
        `}
          button1Text="Quiero más información"
          button1Href="/"
          mediaType="image"
          mediaSrc="/images/fcsocia.png"
          mediaClassname="w-[80%] md:w-auto"
          reverseMobile
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Quiero ser una FC socia</title>;
