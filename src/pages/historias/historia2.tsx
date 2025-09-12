import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../../components/layout/Layout";
import StoryDetail from "../../components/layout/StoryDetail";

const IndexPage: React.FC<PageProps> = () => {
  const content = `
    <p class="mb-4">
      Uno de los mayores activos de las fundaciones comunitarias es su conocimiento profundo del territorio y su capacidad para tener un diálogo directo con la comunidad. Por eso, desde 2021, Comunalia impulsa la metodología Signos Vitales —creada por Community Foundations of Canada— como una herramienta que permite consultar, visibilizar las fortalezas, necesidades y aspiraciones de cada comunidad, desde su propia voz.
    </p>
    <p class="mb-4">
      Hasta ahora, las Fundaciones Comunitarias han hecho 9 diagnósticos comunitarios y publicado los Reportes Vitales correspondientes en distintas regiones del país, y han sido un parteaguas para su trabajo: desde reorientar su estrategia institucional, hasta fortalecer programas de salud, educación o movilidad, e incluso activar comités comunitarios para atender los temas identificados.
    </p>
    <p class="mb-4">
      Comunalia acompaña a las fundaciones comunitarias en todas las etapas: brinda recursos económicos, ofrece asesoría técnica y retroalimentación individualizada, comparte metodologías a través de espacios de aprendizaje entre pares y apoya la difusión de los resultados.
    </p>
    <p class="mb-12 md:mb-16">
      Consulta la sistematización 2021- 2024 y Reportes Vitales en la <a href="https://comunalia.org.mx/biblioteca-virtual/" target="_blank">Biblioteca Digital</a>.
    </p>
    <div class="w-full flex flex-col md:flex-row gap-12 md:gap-6 justify-between">
      <img src="/historias/img9.jpg" alt="" class="max-w-full md:max-w-[45%]" />
      <img src="/historias/img10.jpg" alt="" class="max-w-full md:max-w-[45%]" />
    </div>
  `;

  return (
    <Layout darkMode>
      <StoryDetail
        slug="circulos-de-dar"
        titulo="Signos Vitales: conocimiento que moviliza"
        imagen="/historias/img1.png"
        content={content}
        next="/historias/historia3"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Historias de éxito</title>;
