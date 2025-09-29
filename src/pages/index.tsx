import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { request, gql } from "graphql-request";

import Layout from "../components/layout/Layout";
import ContentSection from "../components/layout/ContentSection";
import { ENDPOINT } from "../constants";
import ImpactoODS from "../components/sections/ImpactoODS";
import ImpactoResumen from "../components/sections/ImpactoResumen";
import DonorsAndAllies from "../components/sections/DonorsAndAllies";
import SuccessStories from "../components/layout/SuccessStories";
import { useEffect, useState } from "react";
import { DataPosts, HomeResponse } from "../types/homeType";
import {
  mapDontantesAliadosToProps,
  mapHistoriasDeExitoToProps,
  mapImpactoDesarrolloToProps,
  mapImpactoResumenToProps,
  mapSectionContentToProps,
} from "../utils/componentsUtils";
import {
  pickSectionObjectByCategory,
  type WPNode,
} from "../utils/graphqlUtils";
import { QUERY_HISTORIAS, QUERY_HOME } from "../utils/querys";
import FullLoader from "../components/layout/FullLoader";

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
          request<HomeResponse>(ENDPOINT, QUERY_HOME),
          request<DataPosts>(ENDPOINT, QUERY_HISTORIAS),
        ]);

        if (!active) return;

        const edges = homeRes?.pageBy?.home?.secciones?.edges ?? [];
        const storiesEdges = historiasRes?.posts?.edges ?? [];

        setEdges(edges);
        setStories(
          storiesEdges.map(({ node }) => ({
            databaseId: node.databaseId,
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

  type PayloadRenderer = (payload: any, index: number) => React.ReactNode;

  const RENDERERS: Record<string, PayloadRenderer> = {
    seccioncontenido: (payload, i) => (
      <ContentSection
        key={`sec-seccioncontenido-${i}`}
        {...mapSectionContentToProps(payload)}
      />
    ),
    seccionimpactoresumen: (payload, i) => (
      <ImpactoResumen
        key={`sec-seccionimpactoresumen-${i}`}
        {...mapImpactoResumenToProps(payload)}
      />
    ),
    seccionimpactodesarrollo: (payload, i) => (
      <ImpactoODS
        key={`sec-seccionimpactodesarrollo-${i}`}
        {...mapImpactoDesarrolloToProps(payload)}
      />
    ),
    secciondonantesaliados: (payload, i) => (
      <React.Fragment key={`sec-secciondonantesaliados-${i}`}>
        <div id="donantes_y_aliados" />
        <DonorsAndAllies {...mapDontantesAliadosToProps(payload)} />
      </React.Fragment>
    ),
    seccionhistoriasdeexito: (payload, i) => (
      <React.Fragment key={`sec-seccionhistoriasdeexito-${i}`}>
        <div id="historias_de_exito" />
        <SuccessStories
          items={stories}
          {...mapHistoriasDeExitoToProps(payload)}
        />
      </React.Fragment>
    ),
  };

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
        <Layout>
          {edges?.length
            ? edges.map(({ node }: { node: WPNode }, index: number) => {
                const picked = pickSectionObjectByCategory(node, {
                  exclude: ["home"],
                });
                if (!picked) return null;

                const render = RENDERERS[picked.key];
                return render ? render(picked.payload, index) : null;
              })
            : null}
        </Layout>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
