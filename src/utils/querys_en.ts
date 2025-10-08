export const QUERY_HISTORIAS = `
query HomeByUri {
  posts(where: {categoryName: "historias-de-exito-en"}, first: 100) {
    edges {
      node {
        databaseId
        categories{ nodes { slug } }
        historiasdeexito {
          title
          preview
          content
          buttontext
          thumb {
            node {
              sourceUrl
            }
          }
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`;
export const QUERY_HISTORIA = `
  query HistoriaById($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      databaseId
    	categories{ nodes{slug}}
      historiasdeexito {
        title
        preview
        content
        buttontext
        thumb { node { sourceUrl } }
        image { node { sourceUrl } }
      }
    }
  }
`;
export const QUERY_HISTORIA_DATE = `
  query HistoriaDate($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      date
    }
  }
`;
export const QUERY_PREV_HISTORIA_CANDIDATES = `
  query PrevHistoriaCandidates(
    $beforeYear: Int!
    $beforeMonth: Int!
    $beforeDay: Int!
  ) {
    posts(
      where: {
        categoryName: "historias-de-exito-en"
        orderby: { field: DATE, order: DESC }
        dateQuery: {
          before: { year: $beforeYear, month: $beforeMonth, day: $beforeDay }
          inclusive: true
        }
      }
      first: 10
    ) {
      nodes { databaseId date }
    }
  }
`;
export const QUERY_LAST_HISTORIA_ID = `
  query LastHistoriaId {
    posts(
      where: {
        categoryName: "historias-de-exito-en"
        orderby: { field: DATE, order: DESC }
      }
      first: 1
    ) {
      nodes { databaseId date }
    }
  }
`;
export const QUERY_PAGE_BY_URI = `
query PageAllSections($uri: ID! ) {
  page: page(id: $uri, idType: URI) {
    id
    uri
    language { code locale }
    translations {
      id
      uri
      language { code locale }
      ... on Page {
        home {
          secciones {
            edges {
              node {
                id
                __typename
                ...SectionContent
                ...SectionImpacto
                ...SectionImpactoDesarrollo
                ...SectionStories
                ...SectionDonantes
                ...VisionMision
                ...SeccionConsejo
                ...SeccionEquipo
                ...SectionBanner
                ...SectionCaracteristicas
                ...SeccionFundaciones
                ...SectionBannerFCSocia
              }
            }
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
    mediasrc { node { sourceUrl } }
    reverse
    leaves
    tree
    mediasrcmob { node { sourceUrl } }
    mediatype
    reversemobile
    titleclassname
    containerclassname
    mediaalign
    mediaclassname
    bgcolor
    video
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SectionImpacto on Post {
  seccionimpactoresumen {
    title
    buttontext
    buttonurl
    estadosimpactados { number text }
    beneficiarios { number text }
    money { number text }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SectionImpactoDesarrollo on Post {
  seccionimpactodesarrollo {
    title
    description
    buttontext
    buttonurl
    images {
      edges {
        node {
          __typename
          id
          ... on Impacto {
            id
            featuredImage { node { sourceUrl } }
          }
        }
      }
    }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SectionDonantes on Post {
  secciondonantesaliados {
    title
    description
    buttontext
    buttonurl
    images(first: 100) {
      edges {
        node {
          __typename
          id
          ... on Alianza {
            id
            featuredImage { node { sourceUrl } }
          }
        }
      }
    }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SectionStories on Post {
  seccionhistoriasdeexito {
    title
    buttontext
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment VisionMision on Post {
  seccionmisionvisionvalores {
    titlemision
    textmision
    titlevision
    textvision
    titlevalores
    valores
    misionimg { node { sourceUrl } }
    visionimg { node { sourceUrl } }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SeccionConsejo on Post {
  seccionconsejo {
    title
    consejo {
      edges {
        node {
          __typename
          ... on Consejo {
            title
            featuredImage { node { sourceUrl } }
          }
        }
      }
    }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SeccionEquipo on Post {
  seccionequipo {
    title
    equipo {
      edges {
        node {
          __typename
          ... on Consejo {
            title
            featuredImage { node { sourceUrl } }
          }
        }
      }
    }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SectionBanner on Post {
  seccionbannerfundacionasociada {
    title
    button1text
    button1href
    button2text
    button2href
    image { node { sourceUrl } }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SectionCaracteristicas on Post {
  seccioncaracteristicasfundaciones {
    title
    caracteristicas
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SeccionFundaciones on Post {
  seccionfundacionesasociadas {
    title
    image { node { sourceUrl } }
    fundaciones(first: 100) {
      edges {
        node {
          ... on Post {
            fundacionasociada {
              title
              description
              href { url }
              image { node { sourceUrl } }
            }
          }
        }
      }
    }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}

fragment SectionBannerFCSocia on Post {
  seccionbannerfcsocia {
    title
    button1text
    button1href
    image { node { sourceUrl } }
  }
  categories: categories(where: { nameLike: "seccion" }, first: 1) {
    nodes { slug }
  }
}
`;
