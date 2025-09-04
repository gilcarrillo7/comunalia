import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../components/constants";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ContentSection
        bgColor={COLORS.light}
        content={`
          <p class="lg:pr-36 xl:pr-72 text-primary text-xl sm:text-2xl font-light">
            Somos una <span class="font-bold">
              alianza de Fundaciones Comunitarias de México
            </span>, que impulsa el desarrollo sostenible local, mediante el
            fortalecimiento de capacidades y movilización de recursos.
          </p>
        `}
        button1Text="Conoce más"
        button1Href="/proposito"
      />
      <ContentSection
        bgColor={COLORS.primary}
        content={`
          <p class="text-white text-xl sm:text-2xl font-light">
            Las Fundaciones Comunitarias (FC) son organizaciones especializadas en identificar las fortalezas y necesidades de un territorio especifíco. Su objetivo es impulsar soluciones sociales, mediante la creación de aliazas, coordinación de esfuerzos y movilización de recursos, para lograr desarrollo sostenible en la comunidad.
          </p>
        `}
        button1Text="Quiero ser una FC socia"
        button1Href="/"
        button2Text="Conoce a las FC socias"
        button2Href="/"
        mediaSrc="images/section2.png"
        leaves
      />
      <ContentSection
        bgColor={COLORS.secondary}
        content={`
          <p class="text-white text-xl sm:text-2xl font-light">
            Impulsa cambios sociales positivos en México apoyando la diversidad de territorios y causas locales. Conecta tu Responsabilidad Social Empresarial (RSE) con soluciones diseñadas desde las comunidades.
          </p>
          <p class="mt-6 text-white text-xl sm:text-2xl font-semibold">
            Haz de Comunalia tu aliado estratégico en la transformación socia
          </p>
        `}
        button1Text="Servicios"
        button1Href="/"
        mediaType="image"
        mediaSrc="images/section3.png"
        mediaAlign="border"
        reverse
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
