export interface HomeType {
  seccion1: SectionContent | null;
  seccion2: SectionContent | null;
  seccion3: SectionContent | null;
}

export interface HomeResponse {
  pageBy: PageBy;
}

export interface PageBy {
  home: Home;
}

export interface Home {
  secciones: Secciones;
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
}

export interface Mediasrc {
  node: MediasrcNode;
}

export interface MediasrcNode {
  sourceUrl: string;
}
