import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="bg-light min-h-screen flex flex-col items-center justify-center">
        <p className="mt-32 font-bold text-3xl text-primary">hola</p>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
