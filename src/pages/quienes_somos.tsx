import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";
import MissionVision from "../components/sections/MissionVision";
import Board from "../components/sections/Board";
import Team from "../components/sections/Team";
import Values from "../components/sections/Values";

const QuienesSomosPage: React.FC<PageProps> = () => {
  return (
    <Layout darkMode>
      <ContentSection
        bgColor={COLORS.primary}
        title="Propósito"
        content={`
          <p class="text-white text-xl sm:text-2xl font-light">
            En Comunalia conectamos lo local con lo global, fortaleciendo y visibilizando la contribución de las Fundaciones Comunitarias, a la mejora de la calidad de vida de las comunidades en pro del desarrollo sostenible de México.
          </p>
        `}
        mediaType="video"
        mediaSrc="https://www.youtube.com/watch?v=AEt0rsHZOac"
      />
      <MissionVision
        missionTitle="Misión"
        missionDescription="Fortalecer a las fundaciones comunitarias de México."
        visionTitle="Visión"
        visionDescription="Ser la Alianza de todas las Fundaciones Comunitarias de México que impacta en el ámbito nacional desde lo local, con proyección internacional. A través de nuestro trabajo y el de nuestros miembros, la identidad y modelo de fundación comunitaria es reconocido en el país."
        missionImage="/images/mision.jpg"
        visionImage="/images/vision.jpg"
      />
      <Values
        title="Valores"
        values={[
          "Equidad",
          "Congruencia",
          "Transparencia",
          "Unidad",
          "Subsidiariedad",
          "Innovación",
          "Compromiso",
          "Respeto",
        ]}
      />
      <Board
        title="Consejo"
        members={[
          {
            image: "/consejo1.jpg",
            name: "Carlos García Miranda",
            role: "Presidente del Consejo",
          },
          {
            image: "/consejo2.jpg",
            name: "David Pérez Rulfo",
            role: "Tesorero",
          },
          {
            image: "/consejo3.jpg",
            name: "Alberto Cárdenas Aldrete",
            role: "Secretario",
          },
          {
            image: "/consejo4.jpg",
            name: "Alejandra Rivera Casillas",
            role: "Vocal",
          },
          { image: "/consejo5.jpg", name: "Susana Móran", role: "Vocal" },
          { image: "/consejo6.jpg", name: "Luis Ruiz Saucedo", role: "Vocal" },
          {
            image: "/consejo7.jpg",
            name: "Erik Bruce Friend Drake",
            role: "Vocal",
          },
        ]}
      />
      <Team
        title="Equipo"
        members={[
          { image: "/team/daniella.jpg", name: "Daniella Undreiner Ponce" },
          { image: "/team/minerva.jpg", name: "Minerva Zamora Domínguez" },
          { image: "/team/anakarenn.jpg", name: "Anakaren Perales García" },
          { image: "/team/raquel.jpg", name: "Raquel Maldonado" },
        ]}
      />
    </Layout>
  );
};

export default QuienesSomosPage;

export const Head: HeadFC = () => <title>Quienes somos</title>;
