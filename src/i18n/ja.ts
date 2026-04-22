import type { SiteDictionary } from "./types";

export const ja: SiteDictionary = {
  meta: {
    title: "神山まるごと高専 | 編集的スタイルの学校紹介",
    description: "神山まるごと高専の概要、学び、学生生活、アクセスを日英で紹介する静的サイトです。"
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
    title: "地域とテクノロジーを接続する、5年一貫の学び。",
    body: "神山まるごと高専は、徳島県神山町を拠点に 2023 年に開校した高等専門学校です。一般公開情報をもとに、学校の輪郭を編集的な1ページに再構成しました。",
    quote: "Technology, Design, and Entrepreneurship in one continuous studio-like environment.",
    ctaLabel: "公式サイトを見る",
    imageAlt: "校舎を抽象化したモノクロのヒーローイメージ"
  },
  about: {
    eyebrow: "02 / About",
    title: "神山から、社会実装までを見据える。",
    lead: "神山まるごと高専は、テクノロジーとデザインを横断しながら、社会に接続する実践的な学びを重視しています。",
    body: "公開情報では、徳島県名西郡神山町にキャンパスを置き、商業・工業・情報の枠をまたぐ『テクノロジー×デザイン×起業家精神』を軸にした教育を掲げています。本ページの学校情報は公式サイトの一般公開内容を要約して掲載しています。",
    facts: [
      { label: "開校", value: "2023年" },
      { label: "所在地", value: "徳島県名西郡神山町" },
      { label: "学科", value: "テクノロジー&デザイン学科" }
    ],
    sourceLabel: "出典: 神山まるごと高専 公式サイト",
    imageAlt: "キャンパス周辺の地形を想起させるモノクロ図版"
  },
  curriculum: {
    eyebrow: "03 / Curriculum",
    title: "専門を分けるより、横断して深める。",
    intro: "学びはテクノロジー、デザイン、起業家精神を行き来しながら構成され、実装と発信の両方を鍛える設計になっています。",
    items: [
      {
        title: "Technology",
        body: "ソフトウェア、データ、デジタルものづくりなど、技術を使って課題を具体化する力を培います。"
      },
      {
        title: "Design",
        body: "視覚表現だけでなく、観察、構造化、体験設計まで含めて、問いの立て方そのものを学びます。"
      },
      {
        title: "Entrepreneurship",
        body: "小さく試し、社会との接点を持ちながら価値を検証する起業家的な態度を実践に結びつけます。"
      }
    ],
    imageAlt: "教室と制作机を示す線画風のモノクロ図版"
  },
  life: {
    eyebrow: "04 / Student Life",
    title: "学内外の境界がゆるやかにつながる生活。",
    body: "町と学校が近く、制作・対話・共同生活が重なり合う環境は、この学校の大きな特徴のひとつです。日々の学びは教室内に閉じず、地域やプロジェクトと接続しながら進みます。",
    highlights: [
      "少人数環境での密度の高いフィードバック",
      "地域との接点を持つプロジェクトベースの経験",
      "寮や生活圏を含むコミュニティの近さ"
    ],
    imageAlt: "学生寮と生活導線を示すモノクロのプレースホルダ"
  },
  access: {
    eyebrow: "05 / Access",
    title: "徳島県神山町からアクセスする。",
    address: "徳島県名西郡神山町",
    transport: "詳しい所在地、交通案内、入学関連情報は公式サイトで最新情報を確認してください。",
    note: "このページでは連絡先フォームや独自の窓口は設けず、公式情報への導線に絞っています。",
    officialUrl: "https://kamiyama.ac.jp/",
    officialLabel: "公式サイトへ",
    imageAlt: "アクセス情報を示す地図風のモノクロ図版"
  },
  footer: {
    copyright: "Unofficial study project for GitHub Pages.",
    officialLabel: "神山まるごと高専 公式サイト"
  }
};