import { MediaType, MediaAlignType } from "../components/layout/ContentSection";
import { ButtonVariant } from "../components/shared/Button";
import {
  SeccionHistoriasDeExito,
  SeccionImpactoDesarrollo,
  SeccionImpactoResumen,
  SectionContent,
} from "../types/homeType";

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
    mediaSrc: s?.mediasrc?.node?.sourceUrl,
    mediaSrcMob: s?.mediasrcmob?.node?.sourceUrl,
    mediaType: s?.mediatype as MediaType,
    mediaAlign: s?.mediaalign as MediaAlignType,
    mediaClassname: s?.mediaclassname,

    // layout/estilos
    reverse: s?.reverse,
    reverseMobile: s?.reversemobile,
    bgColor: s?.bgcolor,
    titleClassname: s?.titleclassname,
    containerClassname: s?.containerclassname,

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
