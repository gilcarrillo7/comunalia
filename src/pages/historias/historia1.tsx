import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../../components/layout/Layout";
import StoryDetail from "../../components/layout/StoryDetail";

const IndexPage: React.FC<PageProps> = () => {
  const content = `
    <p class="mb-4">
      Ante la crisis provocada por el Covid-19, Comunalia activó en 2020 un modelo de intervención ágil y colaborativo: el Fondo Comunidades Activas. La iniciativa reunió a donantes nacionales e internacionales —Fundación Interamericana, Fundación Mott y Fundación Coca-Cola— junto con 16 fundaciones comunitarias mexicanas, para impulsar dos fases de proyectos de desarrollo local entre 2020 y 2022.
    </p>
    <p class="mb-4">
      Esta coinversión no solo potenció el alcance de los proyectos, sino que fortaleció redes comunitarias y contribuyó a la reactivación de la vida económica y social en los territorios.
    </p>
    <p class="mb-4">
      Comunalia diseñó y coordinó el fondo, convocando a los donantes, deﬁniendo lineamientos en conjunto con las fundaciones, y acompañando el proceso con asesoría técnica, espacios de formación entre pares y una estrategia de monitoreo, evaluación y sistematización. Este modelo muestra la capacidad de la Alianza para canalizar recursos nacionales e internacionales de manera efectiva hacia soluciones locales, con transparencia, rendición de cuentas y visión de largo plazo.
    </p>
    <p class="mb-4">
      El Fondo Comunidades Activas es un ejemplo de lo que Comunalia puede articular con nuevos aliados. 
    </p>
    <div class="w-full flex flex-col md:flex-row gap-12 md:gap-6 justify-between">
      <img src="/historias/img12.jpg" alt="" class="max-w-full md:max-w-[45%]" />
      <img src="/historias/img13.jpg" alt="" class="max-w-full md:max-w-[45%]" />
    </div>
  `;

  return (
    <Layout darkMode>
      <StoryDetail
        slug="circulos-de-dar"
        titulo="Fondo Comunidades Activas:"
        imagen="/historias/img11.jpg"
        content={content}
        next="/historias/historia2"
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Historias de éxito</title>;
