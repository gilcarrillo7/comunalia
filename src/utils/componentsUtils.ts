import { title } from "process";
import { MediaType, MediaAlignType } from "../components/layout/ContentSection";
import { ButtonVariant } from "../components/shared/Button";
import {
  SeccionAccordeon,
  SeccionBannerFucAsociada,
  SeccionConsejo,
  SeccionFundaciones,
  SeccionHistoriasDeExito,
  SeccionImpactoDesarrollo,
  SeccionImpactoResumen,
  SeccionMisionVisionValores,
  SectionContent,
} from "../types/homeType";
import { FoundationItem } from "../components/sections/FoundationsGrid";

export const mapSectionContentToProps = (s?: SectionContent | null) => {
  return {
    // básicos
    title: s?.title,
    content: s?.content,

    // botones
    button1Text: s?.button1text,
    button1Href: s?.button1href,
    button1Variant: s?.button1variant as ButtonVariant,
    button2Text: s?.button2text,
    button2Href: s?.button2href,

    // media
    mediaSrc: s?.mediasrc?.node?.sourceUrl ?? "",
    mediaSrcMob: s?.mediasrcmob?.node?.sourceUrl ?? "",
    mediaType: (s?.mediatype as MediaType) ?? "image",
    mediaAlign: (s?.mediaalign as MediaAlignType) ?? "center",
    mediaClassname: s?.mediaclassname ?? "",
    video: s?.video ?? "",

    // layout/estilos
    reverse: s?.reverse,
    reverseMobile: s?.reversemobile,
    bgColor: s?.bgcolor,
    titleClassname: s?.titleclassname ?? "text-tertiary",
    containerClassname: s?.containerclassname ?? "",

    // decorativos
    leaves: s?.leaves,
    tree: s?.tree,
  };
};

export const mapImpactoResumenToProps = (s?: SeccionImpactoResumen | null) => {
  return {
    // básicos
    title: s?.title ?? "",
    buttonText: s?.buttontext ?? "",
    buttonUrl: s?.buttonurl ?? "",

    // indicadores
    items: [s?.beneficiarios!, s?.estadosimpactados!, s?.money!],
  };
};

export const mapImpactoDesarrolloToProps = (
  s?: SeccionImpactoDesarrollo | null
) => {
  return {
    // básicos
    title: s?.title ?? "",
    description: s?.description ?? "",
    buttonText: s?.buttontext ?? "",
    buttonUrl: s?.buttonurl ?? "",
    items:
      s?.images.edges?.map((edge) => edge.node.featuredImage.node.sourceUrl) ??
      [],
  };
};

export const mapDontantesAliadosToProps = (
  s?: SeccionImpactoDesarrollo | null
) => {
  return {
    // básicos
    title: s?.title ?? "",
    bottomText: s?.description ?? "",
    ctaText: s?.buttontext ?? "",
    ctaHref: s?.buttonurl ?? "",
    images:
      s?.images.edges?.map((edge) => edge.node.featuredImage.node.sourceUrl) ??
      [],
  };
};

export const mapHistoriasDeExitoToProps = (
  s?: SeccionHistoriasDeExito | null
) => {
  return {
    // básicos
    title: s?.title ?? "",
    ctaText: s?.buttontext ?? "",
  };
};

export const mapMisionVisitonToProps = (
  s?: SeccionMisionVisionValores | null
) => {
  return {
    // básicos
    missionTitle: s?.titlemision ?? "",
    missionDescription: s?.textmision ?? "",
    visionTitle: s?.titlevision ?? "",
    visionDescription: s?.textvision ?? "",
    missionImage: s?.misionimg?.node?.sourceUrl ?? "",
    visionImage: s?.visionimg?.node?.sourceUrl ?? "",
  };
};

export const mapValoresToProps = (s?: SeccionMisionVisionValores | null) => {
  return {
    // básicos
    title: s?.titlevalores ?? "",
    values: s?.valores.split("\r\n").map((v) => v.trim()) ?? [],
  };
};

export const mapConsejoToProps = (s?: SeccionConsejo | null) => {
  return {
    // básicos
    title: s?.title ?? "",
    members:
      s?.consejo.edges?.map((edge) => ({
        image: edge.node.featuredImage.node.sourceUrl,
        name: edge.node.title.split("–")[1] ?? "",
        role: edge.node.title.split("–")[0] ?? "",
      })) ?? [],
  };
};

export const mapEquipoToProps = (s?: SeccionConsejo | null) => {
  return {
    // básicos
    title: s?.title ?? "",
    members:
      s?.equipo.edges?.map((edge) => ({
        image: edge.node.featuredImage.node.sourceUrl,
        name: edge.node.title ?? "",
      })) ?? [],
  };
};

export const mapBannerFucAsociada = (s?: SeccionBannerFucAsociada | null) => {
  return {
    title: s?.title ?? "",
    button1text: s?.button1text ?? "",
    button1href: s?.button1href ?? "",
    button2text: s?.button2text ?? "",
    button2href: s?.button2href ?? "",
    image: s?.image.node.sourceUrl ?? "",
  };
};

export const mapBannerFucSocia = (s?: SeccionBannerFucAsociada | null) => {
  return {
    title: s?.title ?? "",
    button1text: s?.button1text ?? "",
    button1href: s?.button1href ?? "",
    image: s?.image.node.sourceUrl ?? "",
  };
};

export const mapAccordeon = (s?: SeccionAccordeon | null) => {
  return {
    title: s?.title ?? "",
    items:
      s?.caracteristicas?.split("\r\n").map((car) => ({
        title: car.split(":")[0].trim() ?? "",
        content: car.split(":")[1].trim() ?? "",
      })) ?? [],
  };
};

export const mapFundaciones = (s?: SeccionFundaciones | null) => {
  return {
    title: s?.title ?? "",
    image: s?.image.node.sourceUrl ?? "",
    foundations:
      (s?.fundaciones.edges.map((f) => ({
        image: f.node.fundacionasociada.image,
        title: f.node.fundacionasociada.title,
        description: f.node.fundacionasociada.description,
        href: f.node.fundacionasociada.href,
      })) as FoundationItem[]) ?? [],
  };
};
