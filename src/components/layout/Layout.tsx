import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

export default function Layout({
  children,
  darkMode = false,
}: {
  darkMode?: boolean;
  children: React.ReactNode;
  hideFooter?: boolean;
}) {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Header darkMode={darkMode} />
        {children}
        <Footer />
      </div>
      <SEO />
    </>
  );
}
