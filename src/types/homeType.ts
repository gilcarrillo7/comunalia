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

export interface FeatImageEdges {
  edges: FeatImage[];
}

export interface FeatImage {
  node: {
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
