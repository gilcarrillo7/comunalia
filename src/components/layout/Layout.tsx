import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

export default function Layout({
  children,
  darkMode = false,
  lang,
  english,
}: {
  darkMode?: boolean;
  children: React.ReactNode;
  hideFooter?: boolean;
  lang: boolean;
  english: boolean;
}) {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Header darkMode={darkMode} lang={lang} english={english} />
        {children}
        <Footer english={english} />
      </div>
    </>
  );
}
