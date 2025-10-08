import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { request } from "graphql-request";

import Layout from "../../components/layout/Layout";
import { ENDPOINT } from "../../constants";
import { useEffect, useState } from "react";
import { DataPosts, HomeResponse } from "../../types/homeType";
import { QUERY_HISTORIAS, QUERY_PAGE_BY_URI } from "../../utils/querys_en";
import FullLoader from "../../components/layout/FullLoader";
import { renderSection } from "../../utils/renderer";

const IndexPage: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState(true);
  const [edges, setEdges] = useState<Array<any>>([]);
  const [stories, setStories] = useState<Array<any>>([]);

  useEffect(() => {
    let active = true;
    setLoading(true);

    (async () => {
      try {
        const [homeRes, historiasRes] = await Promise.all([
          request<HomeResponse>(ENDPOINT, QUERY_PAGE_BY_URI, { uri: "home" }),
          request<DataPosts>(ENDPOINT, QUERY_HISTORIAS),
        ]);

        if (!active) return;

        const edges = homeRes?.page?.translations[0]?.home?.secciones?.edges ?? [];
        const storiesEdges = historiasRes?.posts?.edges ?? [];

        setEdges(edges);
        setStories(
          storiesEdges.map(({ node }) => ({
            databaseId: node.databaseId,
            english: true,
            ...node.historiasdeexito,
          }))
        );
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

  useEffect(() => {
    if (!loading) {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView();
        }
      }
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <FullLoader />
      ) : (
        <Layout lang english>
          {renderSection({ edges, stories })}
        </Layout>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
