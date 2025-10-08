import { FoundationItem } from "../components/sections/FoundationsGrid";

export interface HomeResponse {
  pageBy: PageBy;
  page: PageBy;
}

export interface PageBy {
  home: Home;
  translations: PageBy[];
}

export interface Home {
  secciones: Secciones;
  ingles: boolean;
}

export interface Secciones {
  edges: Edge[];
}

export interface Edge {
  node: EdgeNode;
}

export interface EdgeNode {
  seccioncontenido: SectionContent;
  seccionimpactoresumen: SeccionImpactoResumen;
  seccionmisionvisionvalores: SeccionMisionVisionValores;
}

export interface SeccionMisionVisionValores {
  titlemision: string;
  textmision: string;
  titlevision: string;
  textvision: string;
  titlevalores: string;
  misionimg: Mediasrc;
  visionimg: Mediasrc;
  valores: string;
}

export interface SeccionImpactoResumen {
  title: string;
  buttontext: string;
  buttonurl: null;
  beneficiarios: NumberText;
  estadosimpactados: NumberText;
  money: NumberText;
}

export interface NumberText {
  number: string;
  text: string;
}

export interface SectionContent {
  title?: string | null;
  content?: string | null;
  button1text?: null | string;
  button1href?: null | string;
  button1variant?: string | null;
  button2text?: null | string;
  button2href?: null | string;
  mediasrc?: Mediasrc | null;
  reverse?: boolean;
  leaves?: boolean;
  tree?: boolean;
  mediasrcmob?: Mediasrc | null;
  mediatype?: string | null;
  reversemobile?: boolean;
  titleclassname?: null | string;
  bgcolor?: string;
  containerclassname?: null | string;
  mediaalign?: string | null;
  mediaclassname?: null | string;
  video?: null | string;
}

export interface Mediasrc {
  node: MediasrcNode;
}

export interface MediasrcNode {
  sourceUrl: string;
}

export interface FeatImageEdges {
  edges: FeatImage[];
}

export interface FeatImage {
  node: {
    title: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
  };
}
export interface SeccionHistoriasDeExito {
  title: string;
  buttontext: string;
}

export interface SeccionImpactoDesarrollo {
  title: string;
  description: string;
  buttontext: string;
  buttonurl: null;
  images: FeatImageEdges;
}

export interface NumberText {
  number: string;
  text: string;
}

export interface PostsResponse {
  data: DataPosts;
}

export interface DataPosts {
  posts: Posts;
}
export interface DataPost {
  post: EdgeNodeHistoria;
}

export interface Posts {
  edges: EdgeHistoria[];
}

export interface EdgeHistoria {
  node: EdgeNodeHistoria;
}

export interface EdgeNodeHistoria {
  databaseId: number;
  categories: { nodes: { slug: string }[] };
  historiasdeexito: Historiasdeexito;
}

export interface Historiasdeexito {
  title: string;
  preview: string;
  content: string;
  buttontext: string;
  thumb: Image;
  image: Image;
  databaseId?: number;
}

export interface Image {
  node: ImageNode;
}

export interface ImageNode {
  sourceUrl: string;
}

export interface SeccionConsejo {
  title: string;
  equipo: FeatImageEdges;
  consejo: FeatImageEdges;
}
export interface SeccionBannerFucAsociada {
  title: string;
  button1text: string;
  button1href: string;
  button2text: string;
  button2href: string;
  image: Image;
}
export interface SeccionAccordeon {
  title: string;
  caracteristicas: string;
}
export interface SeccionFundaciones {
  title: string;
  image: Image;
  fundaciones: {
    edges: {
      node: {
        fundacionasociada: FoundationItem;
      };
    }[];
  };
}
