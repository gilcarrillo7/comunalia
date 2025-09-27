import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { request, gql } from "graphql-request";

import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { ENDPOINT } from "../constants";
import ImpactoODS from "../components/sections/ImpactoODS";
import ImpactoResumen from "../components/sections/ImpactoResumen";
import DonorsAndAllies from "../components/sections/DonorsAndAllies";
import SuccessStories from "../SuccessStories";
import { useEffect, useState } from "react";
import { HomeResponse } from "../types/homeType";
import FullLoader from "../components/layout/FullLoader";
import {
  mapImpactoResumenToProps,
  mapSectionContentToProps,
} from "../utils/componentsUtils";
import {
  pickSectionObjectByCategory,
  type WPNode,
} from "../utils/graphqlUtils";

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
    slug: "/historias/historia1",
  },
  {
    image: "images/img2.png",
    title: "Signos vitales",
    description:
      "Uno de los mayores activos de las fundaciones comunitarias es su conocimiento profundo del territorio...",
    buttonText: "Leer",
    slug: "/historias/historia2",
  },
  {
    image: "images/img3.jpg",
    title: "Círculos de Dar",
    description:
      "Impulsar la filantropía comunitaria es clave para crecer la participación e involucrar ciudadanos...",
    buttonText: "Leer",
    slug: "/historias/historia3",
  },
];

const QUERY = gql`
  query HomeByUri {
    pageBy(uri: "home") {
      home {
        secciones {
          edges {
            node {
              __typename
              ...SectionContent
              ...SectionImpacto
            }
          }
        }
      }
    }
  }

  fragment SectionContent on Post {
    seccioncontenido {
      title
      content
      button1text
      button1href
      button1variant
      button2text
      button2href
      mediasrc {
        node {
          sourceUrl
        }
      }
      reverse
      leaves
      tree
      mediasrcmob {
        node {
          sourceUrl
        }
      }
      mediatype
      reversemobile
      titleclassname
      containerclassname
      mediaalign
      mediaclassname
      bgcolor
    }
    categories: categories(where: { nameLike: "seccion" }, first: 1) {
      nodes {
        slug
      }
    }
  }

  fragment SectionImpacto on Post {
    seccionimpactoresumen {
      title
      buttontext
      buttonurl
      estadosimpactados {
        number
        text
      }
      beneficiarios {
        number
        text
      }
      money {
        number
        text
      }
    }
    categories: categories(where: { nameLike: "seccion" }, first: 1) {
      nodes {
        slug
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState(true);
  const [edges, setEdges] = useState<Array<any>>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = (await request(ENDPOINT, QUERY, {})) as HomeResponse;
        console.log("Data fetched:", response);
        const edges = response.pageBy.home.secciones.edges;
        setEdges(edges);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setData({
        //   seccion1: {
        //     bgcolor: COLORS.light,
        //     button1text: "Conoce más",
        //     button1href: "/quienes_somos",
        //     tree: true,
        //     content: `
        //       <p class="text-primary">
        //         Somos una <span class="font-bold">
        //           alianza de Fundaciones Comunitarias de México
        //         </span>, que impulsa el desarrollo sostenible local, mediante el
        //         fortalecimiento de capacidades y movilización de recursos.
        //       </p>
        //     `,
        //   },
        //   seccion2: {
        //     bgcolor: COLORS.primary,
        //     button1text: "Quiero ser una FC socia",
        //     button1href: "/quiero_ser_una_fc_socia",
        //     button2text: "Conoce a las FC socias",
        //     button2href: "/fundaciones_socias",
        //     leaves: true,
        //     content: `
        //       <p class="text-white">
        //         Las Fundaciones Comunitarias (FC) son organizaciones especializadas en identificar las fortalezas y necesidades de un territorio especifíco. Su objetivo es impulsar soluciones sociales, mediante la creación de aliazas, coordinación de esfuerzos y movilización de recursos, para lograr desarrollo sostenible en la comunidad.
        //       </p>`,
        //   },
        //   seccion3: {
        //     bgcolor: COLORS.secondary,
        //     button1text: "Servicios",
        //     button1href: "/servicios",
        //     reverse: true,
        //     mediatype: "image",
        //     mediaalign: "border",
        //     content: `
        //       <div class="md:max-w-[700px]">
        //     <p class="text-white">
        //       Impulsa cambios sociales positivos en México apoyando la diversidad de territorios y causas locales. Conecta tu Responsabilidad Social Empresarial (RSE) con soluciones diseñadas desde las comunidades.
        //     </p>
        //     <p class="mt-6 text-white text-xl sm:text-2xl font-semibold">
        //       Haz de Comunalia tu aliado estratégico en la transformación social.
        //     </p>
        //   </div>`,
        //   },
        // });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  type PayloadRenderer = (payload: any, index: number) => React.ReactNode;

  const RENDERERS: Record<string, PayloadRenderer> = {
    seccioncontenido: (payload, i) => (
      <ContentSection
        key={`sec-seccioncontenido-${i}`}
        {...mapSectionContentToProps(payload)}
      />
    ),
    seccionimpactoresumen: (payload, i) => (
      <ImpactoResumen
        key={`sec-seccionimpactoresumen-${i}`}
        {...mapImpactoResumenToProps(payload)}
      />
    ),
  };

  return (
    <>
      {loading ? (
        <FullLoader />
      ) : (
        <Layout>
          {edges?.length
            ? edges.map(({ node }: { node: WPNode }, index: number) => {
                const picked = pickSectionObjectByCategory(node, {
                  exclude: ["home"],
                });
                if (!picked) return null;

                const render = RENDERERS[picked.key]; // p.ej. 'seccioncontenido'
                return render ? render(picked.payload, index) : null;
              })
            : null}
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
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
