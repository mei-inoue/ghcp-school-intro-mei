export type Locale = "ja" | "en";

export type NavItem = {
  id: string;
  label: string;
};

export type FactItem = {
  label: string;
  value: string;
};

export type CurriculumItem = {
  title: string;
  body: string;
};

export type SiteDictionary = {
  meta: {
    title: string;
    description: string;
  };
  header: {
    brand: string;
    nav: NavItem[];
  };
  langSwitch: {
    ja: string;
    en: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    quote: string;
    ctaLabel: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    facts: FactItem[];
    sourceLabel: string;
    imageAlt: string;
  };
  curriculum: {
    eyebrow: string;
    title: string;
    intro: string;
    items: CurriculumItem[];
    imageAlt: string;
  };
  life: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: string[];
    imageAlt: string;
  };
  access: {
    eyebrow: string;
    title: string;
    address: string;
    transport: string;
    note: string;
    officialUrl: string;
    officialLabel: string;
    imageAlt: string;
  };
  footer: {
    copyright: string;
    officialLabel: string;
  };
};