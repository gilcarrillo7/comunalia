import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";
import ImpactoODS from "../components/sections/ImpactoODS";
import ImpactoResumen from "../components/sections/ImpactoResumen";
import DonorsAndAllies from "../components/sections/DonorsAndAllies";
import SuccessStories from "../SuccessStories";
import RamasHojasAnimadas from "../components/shared/RamasHojasAnimadas";

const logos = [
  "/alianzas/logo1.png",
  "/alianzas/logo2.png",
  "/alianzas/logo3.png",
  "/alianzas/logo4.png",
  "/alianzas/logo5.png",
  "/alianzas/logo6.png",
  "/alianzas/logo7.png",
  "/alianzas/logo8.png",
  "/alianzas/logo9.png",
  "/alianzas/logo10.png",
  "/alianzas/logo11.png",
  "/alianzas/logo12.png",
  "/alianzas/logo13.png",
  "/alianzas/logo14.png",
  "/alianzas/logo15.png",
  "/alianzas/logo16.png",
  "/alianzas/logo17.png",
  "/alianzas/logo18.png",
  "/alianzas/logo19.png",
  "/alianzas/logo20.png",
  "/alianzas/logo21.png",
  "/alianzas/logo22.png",
  "/alianzas/logo23.png",
  "/alianzas/logo24.png",
  "/alianzas/logo25.png",
  "/alianzas/logo26.png",
];

const stories = [
  {
    image: "images/img1.jpg",
    title: "Fondo Comunidades Activas",
    description:
      "Ante la crisis provocada por el Covid-19, Comunalia activó en 2020 un modelo de intervención ágil...",
    buttonText: "Leer",
    slug: "/historias/",
  },
  {
    image: "images/img2.png",
    title: "Signos vitales",
    description:
      "Uno de los mayores activos de las fundaciones comunitarias es su conocimiento profundo del territorio...",
    buttonText: "Leer",
    slug: "/historias/",
  },
  {
    image: "images/img3.jpg",
    title: "Círculos de Dar",
    description:
      "Impulsar la filantropía comunitaria es clave para crecer la participación e involucrar ciudadanos...",
    buttonText: "Leer",
    slug: "/historias/",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ContentSection
        bgColor={COLORS.light}
        content={`
          <p class="text-primary">
            Somos una <span class="font-bold">
              alianza de Fundaciones Comunitarias de México
            </span>, que impulsa el desarrollo sostenible local, mediante el
            fortalecimiento de capacidades y movilización de recursos.
          </p>
        `}
        button1Text="Conoce más"
        button1Href="/quienes_somos"
        tree
      />
      <ContentSection
        bgColor={COLORS.primary}
        content={`
          <p class="text-white">
            Las Fundaciones Comunitarias (FC) son organizaciones especializadas en identificar las fortalezas y necesidades de un territorio especifíco. Su objetivo es impulsar soluciones sociales, mediante la creación de aliazas, coordinación de esfuerzos y movilización de recursos, para lograr desarrollo sostenible en la comunidad.
          </p>
        `}
        button1Text="Quiero ser una FC socia"
        button1Href="/quiero_ser_una_fc_socia"
        button2Text="Conoce a las FC socias"
        button2Href="/fundaciones_socias"
        mediaSrc="images/section2.png"
        leaves
      />
      <ContentSection
        bgColor={COLORS.secondary}
        content={`
          <p class="text-white">
            Impulsa cambios sociales positivos en México apoyando la diversidad de territorios y causas locales. Conecta tu Responsabilidad Social Empresarial (RSE) con soluciones diseñadas desde las comunidades.
          </p>
          <p class="mt-6 text-white text-xl sm:text-2xl font-semibold">
            Haz de Comunalia tu aliado estratégico en la transformación socia
          </p>
        `}
        button1Text="Servicios"
        button1Href="/servicios"
        mediaType="image"
        mediaSrc="images/section3.png"
        mediaAlign="border"
        reverse
      />
      <ImpactoResumen />
      <ImpactoODS />
      <div id="historias_de_exito" />
      <SuccessStories
        title="Historias de éxito"
        ctaText="Ver todas"
        items={stories}
      />
      <div id="donantes_y_aliados" />
      <DonorsAndAllies
        title="Donantes y aliados"
        images={logos}
        ctaText="Contacto"
        ctaHref="/contacto"
        bottomText="Sé parte y apoya la diversidad de territorios y causas en México."
        bottomTextHiglight="¡Únete a Comunalia!"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
