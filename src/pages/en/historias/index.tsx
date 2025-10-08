import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { request } from "graphql-request";
import Layout from "../../../components/layout/Layout";
import StoryDetail from "../../../components/layout/StoryDetail";
import FullLoader from "../../../components/layout/FullLoader";
import { ENDPOINT } from "../../../constants";
import { DataPost, Historiasdeexito } from "../../../types/homeType";
import {
  QUERY_HISTORIA,
  QUERY_HISTORIA_DATE,
  QUERY_LAST_HISTORIA_ID,
  QUERY_PREV_HISTORIA_CANDIDATES,
} from "../../../utils/querys";
import { useEffect, useState } from "react";

/** Convierte ISO date -> partes (solo Y/M/D) para dateQuery */
function toDateParts(iso: string) {
  const d = new Date(iso);
  return {
    beforeYear: d.getFullYear(),
    beforeMonth: d.getMonth() + 1,
    beforeDay: d.getDate(),
  };
}

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState<Historiasdeexito>();
  const [nextId, setNextId] = useState<number | null>(null); // "siguiente" = anterior en fecha

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const search = new URLSearchParams(location?.search ?? "");
        const idParam = search.get("id");
        if (!idParam) throw new Error("Falta el parámetro ?id");

        // 1) Post actual (y su fecha)
        const variables = { id: idParam };
        const storyRes = (await request(
          ENDPOINT,
          QUERY_HISTORIA,
          variables
        )) as unknown as DataPost;

        // Traer 'date' si no viene en QUERY_HISTORIA
        // @ts-expect-error acceso defensivo si el tipo no incluye 'date'
        let currentDate: string | undefined = storyRes?.post?.date;
        if (!currentDate) {
          const dateRes = await request<{ post: { date: string } }>(
            ENDPOINT,
            QUERY_HISTORIA_DATE,
            variables
          );
          currentDate = dateRes.post.date;
        }
        if (!currentDate) throw new Error("No se pudo obtener la fecha actual");

        const storyNode = (storyRes as any).post;
        const { historiasdeexito, databaseId } = storyNode;
        setStory({ ...historiasdeexito, databaseId });

        // 2) Candidatos anteriores por día (incluye mismo día)
        const parts = toDateParts(currentDate);
        const candRes = await request<{
          posts: { nodes: { databaseId: number; date: string }[] };
        }>(ENDPOINT, QUERY_PREV_HISTORIA_CANDIDATES, parts);

        // 3) Elegir el primero con fecha estrictamente menor
        const currentTs = new Date(currentDate).getTime();
        const prevCandidate =
          candRes.posts.nodes.find(
            (n) => new Date(n.date).getTime() < currentTs
          )?.databaseId ?? null;

        let finalPrevId = prevCandidate;

        // 4) Wrap-around: si no hay anterior, usar el último de la categoría
        if (!finalPrevId) {
          const lastRes = await request<{
            posts: { nodes: { databaseId: number }[] };
          }>(ENDPOINT, QUERY_LAST_HISTORIA_ID);
          finalPrevId = lastRes.posts.nodes[0]?.databaseId ?? null;
        }

        setNextId(finalPrevId);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <>
      {loading ? (
        <FullLoader />
      ) : (
        <Layout darkMode lang english>
          <StoryDetail
            databaseId={story?.databaseId || 0}
            titulo={`${story?.title}:`}
            imagen={story?.image?.node?.sourceUrl || ""}
            content={story?.content || ""}
            next={nextId || 0} // ID de la historia anterior (en fecha)
            english
          />
        </Layout>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Historias de éxito</title>;
