export type HeroData = {
  title: string;
  highlight: string;
  buttontext: string;
  buttonlink: string;
};

export type AxisData = {
  axes: Axes[];
};

export type Axes = {
  section?: string;
  title: string;
  icon: string;
};

export type HomepageData = {
  hero: HeroData;
  axes: AxisData;
};

export type CivicData = {
  sections: {
    title: string;
    subtitle?: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
  image: string;
};
export type TeamMember = {
  name: string;
  role: string;
};

export type TeamData = {
  title: string;
  buttontext: string;
  buttonlink: string;
  image: string;
  content: string;
};
export type AlliancesData = {
  title: string;
  logo: string;
};
export type AboutData = {
  about: string;
  missionTitle?: string;
  mission: string;
  visionTitle?: string;
  vision: string;
};
export type ProgramsData = {
  sectionTitle?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
};
export type OrganigramData = {
  title?: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  subtitle?: string;
};
// types.ts
export type AxisItem = {
  title: string; // admite HTML (ej. <a ...>WhatsApp</a>)
  icon: string; // ruta a SVG/PNG, absoluta o relativa (ej. "/images/icon-saltillo1.svg")
};

export type AxesData = {
  title: string;
  theme?: "primary" | "secondary";
  axes: AxisItem[];
};
export type CentroData = {
  title: string;
  videoUrl: string; // Vimeo o YouTube; ReactPlayer lo maneja
  description: string; // índices de paragraphs que se renderizan en negritas y color secundario
  bottom: string;
};
export type ReportBreakdownItem = {
  label: string; // ej. "luminarias"
  value: number; // ej. 1381
  prefix?: string; // ej. "Mover " para "Mover 74 autos abandonados"
};
export type ReportStatsData = {
  period: string; // ej. "2022 a 2024"
  totalReports: number; // ej. 2700
  intro?: string; // texto antes del total (opcional)
  repairedTitle?: string; // "Gracias a nuestra intervención se han reparado:"
  breakdown: ReportBreakdownItem[];
  ctaLine?: string; // línea motivacional
  whatsappText?: string; // texto previo al link
  whatsappLink: string; // URL wa.me
};
