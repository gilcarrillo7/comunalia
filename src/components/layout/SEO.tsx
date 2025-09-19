// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string; // puede ser absoluta o relativa a la raíz (ej. /images/foo.jpg)
  url?: string; // absoluta; si no, se construye con siteUrl + pathname
  type?: "website" | "article";
  locale?: string; // ej. "es_MX"
};

export default function SEO({
  title = "Comunalia",
  description = "Somos una alianza de Fundaciones Comunitarias de México , que impulsa el desarrollo sostenible local, mediante el fortalecimiento de capacidades y movilización de recursos.",
  image = "/comunalia.jpg",
  url = "https://comunalia.org.mx/",
  type = "website",
  locale = "es_MX",
}: SEOProps) {
  const meta = { title, siteUrl: url, description, image };
  const finalTitle = title ? `${title} | ${meta.title}` : meta.title;
  const finalDesc = description || meta.description;

  // Asegura URLs absolutas (requisito de OG)
  const toAbs = (maybeAbs?: string) =>
    maybeAbs?.startsWith("http")
      ? maybeAbs
      : new URL(maybeAbs || meta.image, meta.siteUrl).toString();

  const finalUrl = url?.startsWith("http")
    ? url
    : new URL(url || "/", meta.siteUrl).toString();
  const finalImage = toAbs(image);

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:site_name" content={meta.title} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* {meta.twitterHandle && (
        <meta name="twitter:site" content={meta.twitterHandle} />
      )} */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />

      {/* (Opcional) canónica */}
      <link rel="canonical" href={finalUrl} />
    </Helmet>
  );
}
