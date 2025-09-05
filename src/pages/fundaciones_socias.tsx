import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { COLORS } from "../constants";

const FundacionesSociasPage: React.FC<PageProps> = () => {
  return (
    <Layout darkMode>
      <ContentSection
        bgColor={COLORS.primary}
        content={`
          <p class="text-white text-xl sm:text-2xl font-light">
            Somos la única red con <span class="font-semibold">13 años  fortaleciendo fundaciones  comunitarias</span> para la transformación social en México. 
          </p>
        `}
        mediaType="image"
        mediaSrc="images/mapa.png"
        mediaAlign="center"
      />
    </Layout>
  );
};

export default FundacionesSociasPage;

export const Head: HeadFC = () => <title>Fundaciones Socias</title>;
