import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";

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
        mediaSrc="https://vimeo.com/904069720"
      />
    </Layout>
  );
};

export default QuienesSomosPage;

export const Head: HeadFC = () => <title>Quienes somos</title>;
