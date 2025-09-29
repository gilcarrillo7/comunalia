export const QUERY_HOME = `
query HomeByUri {
  pageBy(uri: "home") {
    home {
      secciones {
        edges {
          node {
            ...SectionContent
            ...SectionImpacto
            ...SectionImpactoDesarrollo
            ...SectionStories
            ...SectionDonantes
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
  categories: categories(where: {nameLike: "seccion"}, first: 1) {
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
  categories: categories(where: {nameLike: "seccion"}, first: 1) {
    nodes {
      slug
    }
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
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  categories: categories(where: {nameLike: "seccion"}, first: 1) {
    nodes {
      slug
    }
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
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  categories: categories(where: {nameLike: "seccion"}, first: 1) {
    nodes {
      slug
    }
  }
}

fragment SectionStories on Post {
  seccionhistoriasdeexito {
    title
    buttontext
  }
  categories: categories(where: {nameLike: "seccion"}, first: 1) {
    nodes {
      slug
    }
  }
}
`;
export const QUERY_HISTORIAS = `
query HomeByUri {
  posts(where: {categoryName: "historias-de-exito"}, first: 100) {
    edges {
      node {
        databaseId
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
}`;
export const QUERY_HISTORIA = `
  query HistoriaById($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      databaseId
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
        categoryName: "historias-de-exito"
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
        categoryName: "historias-de-exito"
        orderby: { field: DATE, order: DESC }
      }
      first: 1
    ) {
      nodes { databaseId date }
    }
  }
`;
