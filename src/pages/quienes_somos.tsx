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
          <p class="text-white">
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
            image: "/team/1.png",
            name: "Carlos García Miranda",
            role: "Presidente del Consejo",
          },
          {
            image: "/team/2.png",
            name: "David Pérez Rulfo",
            role: "Tesorero",
          },
          {
            image: "/team/3.png",
            name: "Alberto Cárdenas Aldrete",
            role: "Secretario",
          },
          {
            image: "/team/4.png",
            name: "Alejandra Rivera Casillas",
            role: "Vocal",
          },
          { image: "/team/5.png", name: "Susana Móran", role: "Vocal" },
          { image: "/team/6.png", name: "Luis Ruiz Saucedo", role: "Vocal" },
          {
            image: "/team/7.png",
            name: "Erik Bruce Friend Drake",
            role: "Vocal",
          },
        ]}
      />
      <Team
        title="Equipo"
        members={[
          { image: "/team/8.png", name: "Daniella Undreiner Ponce" },
          { image: "/team/9.png", name: "Minerva Zamora Domínguez" },
          { image: "/team/10.png", name: "Anakaren Perales García" },
          { image: "/team/11.png", name: "Raquel Maldonado" },
        ]}
      />
    </Layout>
  );
};

export default QuienesSomosPage;

export const Head: HeadFC = () => <title>Quienes somos</title>;
