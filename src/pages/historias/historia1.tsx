import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../../components/layout/Layout";
import StoryDetail from "../../components/layout/StoryDetail";

const IndexPage: React.FC<PageProps> = () => {
  const content = `
    <p class="mb-4">
      En Comunalia creemos que impulsar la filantropía comunitaria es clave en
      crear la participación, involucrar a ciudadanos...
    </p>
    <p class="mb-4">
      Por eso, desde 2022 y en alianza con Philanthropy Together, impulsamos la
      creación de Círculos de Dar, una metodología que permite a grupos de
      personas reunirse, conocer causas cercanas a la comunidad y decidir en
      conjunto a qué proyectos destinar sus donativos.
    </p>
    <p class="mb-4">
      Gracias a esta iniciativa, nueve fundaciones comunitarias han iniciado sus
      propios grupos de Círculos de Dar, movilizando recursos locales,
      involucrando nuevos filántropos, impulsando vínculos con donantes locales y
      generando nuevas alianzas.
    </p>
    <p class="mb-4">
      Comunalia continúa impulsando este modelo. En 2024 acompañamos de cerca el
      proceso de cuatro fundaciones en la implementación de sus programas:
      creando reuniones periódicas, realizando ejercicios participativos,
      fortaleciendo el vínculo con donantes y adaptando la metodología al
      contexto y trayectoria institucional de cada fundación.
    </p>
    <p class="mb-12 md:mb-16">
      Hoy, Círculos de Dar son una herramienta viva que las fundaciones
      comunitarias mexicanas aplicamos y seguiremos aplicando para crear, hacer
      y vivir juntos, construyendo un cultura de donación colectiva en México.
    </p>
    <div class="w-full flex flex-col md:flex-row gap-12 md:gap-6 justify-between">
      <img src="/historias/img7.jpg" alt="" class="max-w-full md:max-w-[45%]" />
      <img src="/historias/img8.jpg" alt="" class="max-w-full md:max-w-[45%]" />
    </div>
  `;

  return (
    <Layout darkMode>
      <StoryDetail
        slug="circulos-de-dar"
        titulo="Círculos de Dar"
        imagen="/historias/img6.jpg"
        content={content}
        next="/historias/historia2"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Servicios</title>;
