import type { SiteDictionary } from "./types";

export const en: SiteDictionary = {
  meta: {
    title: "Kamiyama College | Editorial School Introduction",
    description: "A bilingual static site introducing Kamiyama College, its curriculum, student life, and access information."
  },
  header: {
    brand: "Kamiyama College",
    nav: [
      { id: "about", label: "About" },
      { id: "curriculum", label: "Curriculum" },
      { id: "life", label: "Student Life" },
      { id: "access", label: "Access" }
    ]
  },
  langSwitch: {
    ja: "JP",
    en: "EN"
  },
  hero: {
    eyebrow: "01 / School Introduction",
    title: "A five-year education that connects community and technology.",
    body: "Kamiyama College of Design, Technology and Entrepreneurship opened in Kamiyama, Tokushima in 2023. This page reorganizes publicly available information from the official site into a compact bilingual editorial layout.",
    quote: "Technology, Design, and Entrepreneurship in one continuous studio-like environment.",
    ctaLabel: "Visit official site",
    imageAlt: "Monochrome hero illustration abstracting the school building"
  },
  about: {
    eyebrow: "02 / About",
    title: "Learning from Kamiyama, with implementation in view.",
    lead: "The school emphasizes practical learning that moves across technology and design while staying connected to society.",
    body: "According to public information, the campus is located in Kamiyama, Tokushima, and its educational approach is framed around technology, design, and entrepreneurship rather than a single narrow discipline. The school information on this page is summarized from official public sources.",
    facts: [
      { label: "Opened", value: "2023" },
      { label: "Location", value: "Kamiyama, Tokushima" },
      { label: "Department", value: "Technology and Design" }
    ],
    sourceLabel: "Source: Official Kamiyama site",
    imageAlt: "Monochrome artwork suggesting the campus landscape"
  },
  curriculum: {
    eyebrow: "03 / Curriculum",
    title: "Not separated majors, but layered disciplines.",
    intro: "The curriculum is shaped by movement across technology, design, and entrepreneurship, training students to build, test, and communicate ideas in public.",
    items: [
      {
        title: "Technology",
        body: "Students develop the ability to turn questions into working systems through software, data, and digital fabrication."
      },
      {
        title: "Design",
        body: "Design is treated as a way of observing, structuring, and shaping experience, not only as visual styling."
      },
      {
        title: "Entrepreneurship",
        body: "Students are encouraged to experiment, validate ideas, and connect their work to real social contexts."
      }
    ],
    imageAlt: "Monochrome line drawing of a classroom and making space"
  },
  life: {
    eyebrow: "04 / Student Life",
    title: "A daily life where campus and town stay close.",
    body: "One of the distinctive qualities of the school is the overlap between learning, making, dialogue, and life in the local community. Study does not stay inside a single classroom; it continues through projects and relationships around town.",
    highlights: [
      "Dense feedback in a small-scale learning environment",
      "Project-based experiences connected to the local community",
      "A close residential and social community"
    ],
    imageAlt: "Monochrome placeholder representing dormitory life and circulation"
  },
  access: {
    eyebrow: "05 / Access",
    title: "Access from Kamiyama, Tokushima.",
    address: "Kamiyama, Myozai District, Tokushima",
    transport: "Please check the official website for the latest address details, transportation guidance, and admissions information.",
    note: "This page intentionally omits any independent contact form and links directly to the official source instead.",
    officialUrl: "https://kamiyama.ac.jp/",
    officialLabel: "Go to official site",
    imageAlt: "Monochrome map-like illustration for access information"
  },
  footer: {
    copyright: "Unofficial study project for GitHub Pages.",
    officialLabel: "Official Kamiyama site"
  }
};