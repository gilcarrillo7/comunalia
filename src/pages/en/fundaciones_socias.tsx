import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../../components/layout/Layout";
import { ENDPOINT } from "../../constants";
import { request } from "graphql-request";
import FullLoader from "../../components/layout/FullLoader";
import { HomeResponse } from "../../types/homeType";
import { QUERY_PAGE_BY_URI } from "../../utils/querys_en";
import { renderSection } from "../../utils/renderer";
import { useState } from "react";

const FundacionesSociasPage: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState(true);
  const [edges, setEdges] = useState<Array<any>>([]);
  const [english, setEnglish] = useState(false);

  React.useEffect(() => {
    let active = true;
    setLoading(true);

    (async () => {
      try {
        const [response] = await Promise.all([
          request<HomeResponse>(ENDPOINT, QUERY_PAGE_BY_URI, { uri: "fundaciones-socias" }),
        ]);

        if (!active) return;

        const edges = response?.page?.translations[0]?.home?.secciones?.edges ?? [];
        const ingles = response?.page?.home?.ingles ?? false;

        setEdges(edges);
        setEnglish(ingles);
      } catch (error) {
        if (active) console.error("Error fetching data:", error);
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      {loading ? (
        <FullLoader />
      ) : (
        <Layout darkMode lang english>
          {renderSection({ edges })}
        </Layout>
      )}
    </>
  );
};

export default FundacionesSociasPage;

export const Head: HeadFC = () => <title>Fundaciones Socias</title>;
