import React from "react";
import ContentSection from "../components/layout/ContentSection";
import Accordion from "../components/sections/Accordion";
import {
  mapSectionContentToProps,
  mapAccordeon,
  mapBannerFucSocia,
  mapFundaciones,
  mapBannerFucAsociada,
  mapConsejoToProps,
  mapEquipoToProps,
  mapMisionVisitonToProps,
  mapValoresToProps,
  mapDontantesAliadosToProps,
  mapHistoriasDeExitoToProps,
  mapImpactoDesarrolloToProps,
  mapImpactoResumenToProps,
} from "../utils/componentsUtils";
import {
  pickSectionObjectByCategory,
  type WPNode,
} from "../utils/graphqlUtils";
import { motion } from "framer-motion";
import { navigate } from "gatsby";
import FoundationsGrid, {
  FoundationItem,
} from "../components/sections/FoundationsGrid";
import Button from "../components/shared/Button";
import OpeningLeaves from "../components/shared/OpeningLeaves";
import { COLORS } from "../constants";
import Textura from "../images/textura2.png";
import Board from "../components/sections/Board";
import MissionVision from "../components/sections/MissionVision";
import Team from "../components/sections/Team";
import Values from "../components/sections/Values";
import SuccessStories from "../components/layout/SuccessStories";
import DonorsAndAllies from "../components/sections/DonorsAndAllies";
import ImpactoODS from "../components/sections/ImpactoODS";
import ImpactoResumen from "../components/sections/ImpactoResumen";

const Banner = ({
  title,
  button1href,
  button1text,
  image,
}: {
  title: string;
  button1text: string;
  button1href: string;
  image: string;
}) => {
  return (
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
        <img src={image} className="h-full w-full object-cover md:h-[380px]" />
      </motion.figure>
      <div className="relative p-4 overflow-hidden bg-secondary basis-2/3 flex flex-col gap-4 justify-center items-center">
        <img
          src={Textura}
          alt="Textura"
          className="absolute top-0 left-0 h-full z-0"
        />
        <div className="z-10 flex flex-col gap-4 justify-center items-center">
          <p className="text-white text-base sm:text-xl md:text-2xl text-center sm:text-left">
            {title}
          </p>
          <Button variant="outline" onClick={() => navigate(button1href)}>
            {button1text}
          </Button>
        </div>
      </div>
    </div>
  );
};

const FundacionesSocias = ({
  title,
  image,
  foundations,
}: {
  title: string;
  image: string;
  foundations: FoundationItem[];
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex bg-tertiary justify-center items-center px-12 py-16">
          <p className="text-primary font-light text-2xl md:text-2xl lg:text-4xl">
            {title}
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
              src={image}
              className="h-full w-full object-cover md:h-[400px]"
            />
          </motion.figure>
        </div>
      </div>

      <FoundationsGrid items={foundations} />
    </>
  );
};

const BannerFunAsociada = ({
  title,
  button1href,
  button1text,
  button2href,
  button2text,
  image,
}: {
  title: string;
  button1text: string;
  button1href: string;
  button2text: string;
  button2href: string;
  image: string;
}) => {
  return (
    <div className="flex">
      <div className="relative basis-2/3 md:basis-3/4 bg-secondary flex items-center pt-4">
        <img src={Textura} className="absolute left-0 top-0 z-0" />
        <div className="container z-10">
          <p className="text-white text-base md:text-xl lg:text-2xl mb-4 md:mb-8 text-center md:text-left">
            {title}
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:justify-around">
            <Button variant="outline" onClick={() => window.open(button1href)}>
              {button1text}
            </Button>
            <Button variant="outline" onClick={() => navigate(button2href)}>
              {button2text}
            </Button>
          </div>
        </div>
      </div>
      <div className="basis-1/3 md:basis-1/4 bg-primary flex items-center justify-center p-4">
        <img src={image} className="w-48" />
      </div>
    </div>
  );
};

type RenderCtx = { stories?: Array<any> };
type PayloadRenderer = (
  payload: any,
  index: number,
  ctx: RenderCtx
) => React.ReactNode;
const getRenderers = (ctx: RenderCtx): Record<string, PayloadRenderer> => ({
  seccioncontenido: (payload, i) => (
    <ContentSection
      key={`sec-seccioncontenido-${i}`}
      {...mapSectionContentToProps(payload)}
    />
  ),
  seccioncaracteristicasfundaciones: (payload, i) => (
    <Accordion key={`sec-seccionaccordion-${i}`} {...mapAccordeon(payload)} />
  ),
  seccionbannerfcsocia: (payload, i) => (
    <Banner key={`sec-seccioncontenido-${i}`} {...mapBannerFucSocia(payload)} />
  ),
  seccionfundacionesasociadas: (payload, i) => (
    <FundacionesSocias
      key={`sec-seccionfundacionesasociadas-${i}`}
      {...mapFundaciones(payload)}
    />
  ),
  seccionbannerfundacionasociada: (payload, i) => (
    <BannerFunAsociada
      key={`sec-seccioncontenido-${i}`}
      {...mapBannerFucAsociada(payload)}
    />
  ),
  seccionmisionvisionvalores: (payload, i) => (
    <React.Fragment key={`sec-seccionmisionvisionvalores-${i}`}>
      <MissionVision {...mapMisionVisitonToProps(payload)} />
      <Values {...mapValoresToProps(payload)} />
    </React.Fragment>
  ),
  seccionconsejo: (payload, i) => (
    <Board key={`sec-seccionconsejo-${i}`} {...mapConsejoToProps(payload)} />
  ),
  seccionequipo: (payload, i) => (
    <Team key={`sec-seccionequipo-${i}`} {...mapEquipoToProps(payload)} />
  ),
  seccionimpactoresumen: (payload, i) => (
    <ImpactoResumen
      key={`sec-seccionimpactoresumen-${i}`}
      {...mapImpactoResumenToProps(payload)}
    />
  ),
  seccionimpactodesarrollo: (payload, i) => (
    <ImpactoODS
      key={`sec-seccionimpactodesarrollo-${i}`}
      {...mapImpactoDesarrolloToProps(payload)}
    />
  ),
  secciondonantesaliados: (payload, i) => (
    <React.Fragment key={`sec-secciondonantesaliados-${i}`}>
      <div id="donantes_y_aliados" />
      <DonorsAndAllies {...mapDontantesAliadosToProps(payload)} />
    </React.Fragment>
  ),
  seccionhistoriasdeexito: (payload, i, ctx) => {
    return (
      <React.Fragment key={`sec-seccionhistoriasdeexito-${i}`}>
        <div id="historias_de_exito" />
        <SuccessStories
          items={ctx?.stories ?? []}
          english={ctx?.stories?.[0].english ?? false}
          {...mapHistoriasDeExitoToProps(payload)}
        />
      </React.Fragment>
    );
  },
});

export const renderSection = ({
  edges,
  stories,
}: {
  edges: Array<any>;
  stories?: Array<any>;
}) => {
  const renderers = getRenderers({ stories }); // ← inyectas stories aquí

  return edges?.length
    ? edges.map(({ node }: { node: WPNode }, index: number) => {
        const picked = pickSectionObjectByCategory(node, { exclude: ["home"] });
        if (!picked) return null;

        const render = renderers[picked.key];
        return render ? render(picked.payload, index, { stories }) : null;
      })
    : null;
};
