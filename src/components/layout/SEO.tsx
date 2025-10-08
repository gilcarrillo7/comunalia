// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";
// opcional: usa useStaticQuery para siteMetadata

type SEOProps = {
  title?: string;
  description?: string;
  image?: string; // puede ser relativa
  pathname?: string; // p.ej. "/quienes_somos/"
  url?: string; // si prefieres pasar la absoluta directamente
  type?: "website" | "article";
  locale?: string; // "es_MX"
  lang?: string; // "es" | "en" (para <html lang>)
  siteUrl?: string; // "https://comunalia.org.mx"
  siteName?: string; // "Comunalia"
  alternates?: Array<{ hrefLang: string; href: string }>;
  robots?: string; // "index,follow" | "noindex,nofollow"
  jsonLd?: Record<string, any>; // schema.org opcional
};

export default function SEO({
  title = "Comunalia",
  description = "Somos una alianza de Fundaciones Comunitarias de México...",
  image = "/comunalia.jpg",
  pathname,
  url,
  type = "website",
  locale = "es_MX",
  lang,
  siteUrl = "https://comunalia.org.mx",
  siteName = "Comunalia",
  alternates = [],
  robots = "index,follow",
  jsonLd,
}: SEOProps) {
  // 1) Construye canónica
  const canonical = url
    ? url.startsWith("http")
      ? url
      : new URL(url, siteUrl).toString()
    : new URL(pathname || "/", siteUrl).toString();

  // 2) Asegura imagen absoluta
  const absoluteImage = image?.startsWith("http")
    ? image
    : new URL(image || "/comunalia.jpg", siteUrl).toString();

  // 3) Title template SiteName
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // 4) Alternates → og:locale:alternate
  const ogLocaleAlternates = alternates
    .map((a) => a.hrefLang)
    .filter(Boolean)
    .map((l) => l.replace("-", "_").toUpperCase()); // en_US / es_MX

  const htmlLang = lang || locale.split("_")[0] || "es";

  return (
    <Helmet htmlAttributes={{ lang: htmlLang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {ogLocaleAlternates.map((l) => (
        <meta key={l} property="og:locale:alternate" content={l} />
      ))}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* hreflang alternates */}
      {alternates.map((a) => (
        <link
          key={a.hrefLang}
          rel="alternate"
          hrefLang={a.hrefLang}
          href={a.href}
        />
      ))}

      {/* JSON-LD opcional */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
