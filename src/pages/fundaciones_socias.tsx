import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";
import Accordion from "../components/sections/Accordion";
import { motion } from "framer-motion";
import OpeningLeaves from "../components/shared/OpeningLeaves";
import Button from "../components/shared/Button";

import Textura from "../images/textura2.png";
import FoundationsGrid, {
  FoundationItem,
} from "../components/sections/FoundationsGrid";

const accordionData = [
  {
    title: "Territorio",
    content:
      "Conocimiento profundo de la identidad,  contexto y dinámicas sociales de un espacio geográfico específico. Esto permite tomar decisiones informadas, proponer programas y acciones pertinentes y establecer alianzas efectivas.",
  },
  {
    title: "Legalidad",
    content:
      "Constitución como organizaciones no lucrativas. Mantienen una base institucional sólida, cumpliendo con las normativas fiscales y legales mexicanas.",
  },
  {
    title: "Transparencia",
    content:
      "Informa y presenta resultados de gestión de recursos a donantes, aliados, comunidades con las que colaboran, autoridades y sociedad en general, fortaleciendo la confianza y legitimidad en su labor.",
  },
  {
    title: "Autonomía",
    content:
      "Busca incluir las voces de la comunidad a través de mecanismos de consulta y participación y diversifican sus fuentes de financiamiento para mantenerse independientes de intereses particulares, de un solo donante o grupo de interés.",
  },
  {
    title: "Desarrollo Comunitario",
    content:
      "Genera capacidades y autonomía a largo plazo en sus comunidades. Impulsan la participación de la comunidad para resolver y atender los problemas locales.",
  },
  {
    title: "Intervención Integral",
    content:
      "Responden de manera proactiva y estratégica a las necesidades de la comunidad.",
  },
  {
    title: "Filantropía Comunitaria",
    content:
      "Reconocen y activan el valor de los recursos de la comunidad y los conectan con personas, donantes y empresas con iniciativas sociales para  gestionar la inversión social en una variedad de causas.",
  },
];

const foundations: FoundationItem[] = [
  {
    image: "/fundaciones/fundacion1.png",
    imageAlt: "Fundación Comunidad",
    title: "Fundación Comunidad • Siembra tu capacidad",
    description:
      "Impulsa iniciativas locales con participación ciudadana y enfoque de fortalecimiento comunitario. Promueve proyectos que generan capacidades y bienestar sostenible.",
    href: "https://www.comunidad.org.mx/",
  },
  {
    image: "/fundaciones/fundacion2.png",
    imageAlt: "Comunidar",
    title: "Comunidar",
    description:
      "Articula donantes y organizaciones para detonar proyectos estratégicos con impacto medible en Nuevo León y la región. Transparencia y alianzas como eje de acción.",
    href: "https://www.comunidar.org/",
  },
  {
    image: "/fundaciones/fundacion3.png",
    imageAlt: "FEYAC",
    title: "FEYAC",
    description:
      "Fundación del Empresariado Yucateco A.C. que canaliza recursos y conocimiento del sector empresarial hacia iniciativas sociales de alto impacto en Yucatán.",
    href: "https://feyac.org/",
  },
  {
    image: "/fundaciones/fundacion4.png",
    imageAlt: "Merced Coahuila",
    title: "Merced Coahuila",
    description:
      "Fomenta la inversión social, la cultura de la filantropía y el fortalecimiento institucional de OSC para mejorar la calidad de vida en Coahuila.",
    href: "https://mercedcoahuila.org/",
  },
  {
    image: "/fundaciones/fundacion5.png",
    imageAlt: "Corporativa de Fundaciones",
    title: "Corporativa de Fundaciones",
    description:
      "Plataforma que fortalece a organizaciones y donantes con modelos de inversión social, evaluación de impacto y desarrollo institucional en Jalisco.",
    href: "https://corporativadefundaciones.org/",
  },
  {
    image: "/fundaciones/fundacion6.png",
    imageAlt: "Fundación Cozumel",
    title: "Fundación Cozumel",
    description:
      "Promueve el desarrollo integral de Cozumel a través de programas comunitarios, ambientales y educativos, impulsando la participación ciudadana.",
    href: "https://fundacioncozumel.org/",
  },
  {
    image: "/fundaciones/fundacion7.png",
    imageAlt: "Fundación Merced Querétaro",
    title: "Fundación Merced Querétaro",
    description:
      "Moviliza recursos y alianzas para fortalecer a las OSC y atender causas prioritarias en Querétaro con enfoque de resultados y transparencia.",
    href: "https://mercedqueretaro.org.mx/",
  },
  {
    image: "/fundaciones/fundacion8.png",
    imageAlt: "FECHAC",
    title: "FECHAC",
    description:
      "Fundación del Empresariado Chihuahuense A.C. que invierte en educación, salud y desarrollo social mediante alianzas público-privadas y participación empresarial.",
    href: "https://fechac.org.mx/",
  },
  {
    image: "/fundaciones/fundacion9.png",
    imageAlt: "Fundación Comunitaria Malinalco",
    title: "Fundación Comunitaria Malinalco",
    description:
      "Acompaña procesos locales de organización y cuidado del territorio. Impulsa proyectos culturales, ambientales y de economía solidaria en Malinalco.",
    href: "https://fundacioncomunitariamalinalco.org/",
  },
  {
    image: "/fundaciones/fundacion10.png",
    imageAlt: "Fundación Punta de Mita",
    title: "Fundación Punta Mita",
    description:
      "Promueve la participación comunitaria y la conservación ambiental en Bahía de Banderas, con programas educativos y de desarrollo económico local.",
    href: "https://fundacionpuntamita.org/",
  },
  {
    image: "/fundaciones/fundacion11.png",
    imageAlt: "Amigos de San Cristóbal A.C.",
    title: "Amigos de San Cristóbal A.C.",
    description:
      "Canaliza recursos a proyectos de educación, salud y desarrollo en comunidades de Los Altos de Chiapas, fortaleciendo a organizaciones locales.",
    href: "https://amigosdesancristobal.org/",
  },
  {
    image: "/fundaciones/fundacion12.png",
    imageAlt: "FESAC",
    title: "FESAC",
    description:
      "Fundación del Empresariado Sonorense A.C. que invierte en capital social y proyectos de desarrollo para mejorar la calidad de vida en Sonora.",
    href: "https://fesac.org/",
  },
  {
    image: "/fundaciones/fundacion13.png",
    imageAlt: "Fundación Internacional de la Comunidad A.C.",
    title: "Fundación Internacional de la Comunidad A.C.",
    description:
      "Fortalece a OSC y liderazgos comunitarios en Baja California, movilizando recursos locales e internacionales para el bien común.",
    href: "https://ficbc.org/",
  },
  {
    image: "/fundaciones/fundacion14.png",
    imageAlt: "Fundación Comunitaria Oaxaca",
    title: "Fundación Comunitaria Oaxaca",
    description:
      "Impulsa la filantropía comunitaria en Oaxaca con programas de becas, desarrollo económico y reconstrucción del tejido social.",
    href: "https://fundacion-oaxaca.org/",
  },
  {
    image: "/fundaciones/fundacion15.png",
    imageAlt: "Fundación Comunitaria Puebla I.A.P.",
    title: "Fundación Comunitaria Puebla I.A.P.",
    description:
      "Promueve la participación social y el fortalecimiento de OSC para atender problemáticas prioritarias en el estado de Puebla.",
    href: "https://fundacionpuebla.org/",
  },
  {
    image: "/fundaciones/fundacion16.png",
    imageAlt: "Fondo de Inversión Social Potosino",
    title: "Fondo de Inversión Social Potosino",
    description:
      "Conecta donantes con proyectos sociales en San Luis Potosí, priorizando el desarrollo comunitario y la rendición de cuentas.",
    href: "https://fisp.org.mx/",
  },
];

const FundacionesSociasPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Accordion
        title="Conoce las características del modelo de Fundaciones Comunitarias de México"
        items={accordionData}
      />

      <ContentSection
        bgColor={COLORS.primary}
        content={`
          <p class="text-white">
            Somos la única red con <span class="font-semibold">13 años  fortaleciendo fundaciones  comunitarias</span> para la transformación social en México. 
          </p>
        `}
        mediaType="image"
        mediaSrc="/images/mapa.png"
        mediaAlign="center"
      />

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex bg-tertiary justify-center items-center px-12 py-16">
          <p className="text-primary font-light text-2xl md:text-2xl lg:text-4xl">
            Conoce nuestras 16 fundaciones asociadas:
          </p>
        </div>
        <div className="w-full md:w-1/2 flex">
          <div className="bg-complementary md:basis-2/5 flex flex-col justify-center items-center">
            <OpeningLeaves
              position="relative"
              flipY
              leftColor={COLORS.tertiary}
              rightColor="white"
              top={-80}
              left={15}
              scale={0.6}
              spread={65}
              tilt={0}
              duration={0.9}
              delay={0.1}
              open
            />
            <div className="bg-primary h-[80px] w-[160px] rounded-t-full " />
          </div>
          <motion.figure
            variants={{
              hidden: { opacity: 0, scale: 0.98 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full basis-3/5 md:flex-1"
          >
            <img
              src="/images/fsocias.png"
              className="h-full w-full object-cover md:h-[400px]"
              loading="lazy"
            />
          </motion.figure>
        </div>
      </div>

      <FoundationsGrid items={foundations} />

      <div className="flex w-full">
        <motion.figure
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.55, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full basis-1/3 flex-1"
        >
          <img
            src="/images/fsocias2.png"
            className="h-full w-full object-cover md:h-[380px]"
            loading="lazy"
          />
        </motion.figure>
        <div className="relative p-4 overflow-hidden bg-secondary basis-2/3 flex flex-col gap-4 justify-center items-center">
          <p className="text-white text-base sm:text-xl md:text-2xl text-center sm:text-left">
            Sé parte de una red de impacto local y alcance global.
          </p>
          <Button variant="outline">Quiero ser una FC socia</Button>
          <img
            src={Textura}
            alt="Textura"
            className="absolute top-0 left-0 h-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default FundacionesSociasPage;

export const Head: HeadFC = () => <title>Fundaciones Socias</title>;
