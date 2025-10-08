import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout lang={false} english={false}>
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Pagina no encontrada
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
