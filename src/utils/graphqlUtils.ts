export type WPNode = {
  __typename?: string;
  categories?: { nodes?: Array<{ slug?: string | null } | null> | null } | null;
  [key: string]: any; // para indexar dinámicamente (seccioncontenido, seccionimpactoresumen, etc.)
};

/** 1) Regresa el slug de categoría "válido" (excluyendo 'home' por defecto) */
export function getCategorySlug(
  node: WPNode,
  exclude: string[] = ["home"]
): string | null {
  const slugs =
    node?.categories?.nodes
      ?.map((n) => (n?.slug || "").toLowerCase())
      .filter(Boolean) ?? [];
  if (!slugs.length) return null;
  const chosen = slugs.find((s) => !exclude.includes(s)) ?? slugs[0];
  return chosen || null;
}

/** 2) Convierte 'seccion-impacto-resumen' -> 'seccionimpactoresumen' */
export function slugToPropKey(slug: string): string {
  // 1) Normaliza y quita diacríticos
  let s = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 2) Normaliza espacios/slashes y minúsculas
  s = s.trim().toLowerCase().replace(/\/+$/, ""); // quita slashes finales por si acaso

  // 3) Si el slug termina en "-en", elimínalo
  s = s.replace(/-en$/, "");

  // 4) Quita todo lo no alfanumérico (incluye guiones)
  return s.replace(/[^a-z0-9]/g, "");

}

/**
 * 3) Devuelve el objeto del nodo según la categoría.
 *    Ej: para 'seccion-contenido' regresa node.seccioncontenido
 *        para 'seccion-impacto-resumen' regresa node.seccionimpactoresumen
 */
export function pickSectionObjectByCategory(
  node: WPNode,
  opts?: { exclude?: string[] }
): { slug: string; key: string; payload: any } | null {
  const slug = getCategorySlug(node, opts?.exclude ?? ["home"]);
  if (!slug) return null;
  const key = slugToPropKey(slug);
  const payload = (node as Record<string, any>)[key] ?? null;
  if (payload == null) return null;
  return { slug, key, payload };
}
