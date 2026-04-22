export interface SchoolInfo {
  name: string;
  nameEn: string;
  established: number;
  location: { prefecture: string; city: string; address: string };
  mission: string;
  philosophy: string;
  pillars: { id: string; title: string; titleEn: string; description: string }[];
  stats: { label: string; value: number; suffix: string }[];
  timeline: { year: string; title: string; description: string }[];
  campusFeatures: { title: string; description: string }[];
  scholarship: { title: string; summary: string; conditions: string[] };
  admissions: { type: string; schedule: string; description: string }[];
  faq: { q: string; a: string }[];
  sns: { name: 'X' | 'Instagram' | 'YouTube' | 'Facebook'; url: string }[];
  contactEmail: string;
}

// TODO(Q-03): 公式サイトから取得しきれない数値・本文は適宜差し替え
export const SCHOOL: SchoolInfo = {
  name: '神山まるごと高専',
  nameEn: 'Kamiyama Marugoto College of Technology',
  established: 2023,
  location: {
    prefecture: '徳島県',
    city: '名西郡神山町',
    address: '徳島県名西郡神山町神領字本野間 100',
  },
  mission: 'テクノロジー × デザイン × 起業家精神で、人間の未来を変える人を育てる。',
  philosophy:
    '山あいの小さな町から、世界を変える起業家を生み出す。15歳から始める5年間の私立高専で、つくる力・問いを立てる力・仲間と踏み出す力を育みます。',
  pillars: [
    {
      id: '01',
      title: 'テクノロジー',
      titleEn: 'Technology',
      description:
        'プログラミング、AI、ハードウェア。手を動かして仕組みを理解し、自分でつくれるエンジニアになる。',
    },
    {
      id: '02',
      title: 'デザイン',
      titleEn: 'Design',
      description:
        'ビジュアル、UX、ストーリーテリング。人と社会のために、ものごとを形にする力を育てる。',
    },
    {
      id: '03',
      title: '起業家精神',
      titleEn: 'Entrepreneurship',
      description:
        '問いを立て、仲間を集め、ゼロから事業をつくる。失敗を糧に何度でも挑戦する姿勢を身につける。',
    },
  ],
  stats: [
    { label: '5年間の一貫教育', value: 5, suffix: '年' },
    { label: '1学年の定員', value: 40, suffix: '名' },
    { label: '全寮制で過ごす日々', value: 100, suffix: '%' },
    { label: '創立年', value: 2023, suffix: '' },
  ],
  timeline: [
    {
      year: '1〜2年',
      title: '基礎をつくる',
      description: '数学・科学・プログラミング・デザインの基礎を、プロジェクト型学習で身につける。',
    },
    {
      year: '3年',
      title: '専門を深める',
      description: 'テクノロジーとデザインの専門領域を選び、自分の興味を掘り下げる。',
    },
    {
      year: '4〜5年',
      title: 'つくって、出す',
      description: 'チームでプロダクトや事業を立ち上げ、社会に向けてリリースする。',
    },
  ],
  campusFeatures: [
    {
      title: '神山町という教室',
      description:
        '人口5千人、徳島県の山間にある神山町。アーティスト・イン・レジデンスや IT 企業のサテライトオフィスが集う、創造の最前線。',
    },
    {
      title: '全寮制で過ごす5年間',
      description:
        '寮は学びの延長。仲間と暮らし、議論し、夜中まで作り続ける。生活そのものがプロジェクトになる。',
    },
    {
      title: '木と土と風の校舎',
      description:
        '地域の木材と職人の技で建てられた校舎。自然と接続するワークスペースが、思考の質を変える。',
    },
  ],
  scholarship: {
    title: '実質無償の奨学金制度',
    summary:
      '世帯所得に応じて、授業料・寮費の全額〜一部を給付型奨学金で支援。「お金を理由に進学を諦めない」を実現する。',
    conditions: [
      '入学者全員が対象 (世帯収入により給付額を決定)',
      '返済不要の給付型',
      '企業・個人サポーターからの寄付で運営',
    ],
  },
  admissions: [
    {
      type: '総合型選抜',
      schedule: '夏〜秋 (例年7〜10月)',
      description: '書類・面談・グループワークで「つくる人」のポテンシャルを多面的に評価。',
    },
    {
      type: '一般入試',
      schedule: '冬 (例年1〜2月)',
      description: '基礎学力と作文・面接で評価。学力試験は中学レベルの数学・国語・英語。',
    },
  ],
  faq: [
    {
      q: '中学校の評定が高くなくても出願できますか?',
      a: 'はい。神山まるごと高専は学校の評定だけで判断しません。何を作ってきたか、何に夢中になってきたかを見ます。',
    },
    {
      q: '途中で進路を変えたくなったら?',
      a: '5年間の中で複数の専門に触れる設計になっています。進路選択は無理に固定しません。',
    },
    {
      q: '保護者の費用負担はどれくらい?',
      a: '世帯収入に応じた奨学金制度により、多くの家庭で実質無償に近い形で進学可能です。',
    },
    {
      q: '寮生活が不安です',
      a: 'ハウスマスター・カウンセラー・OB/OG メンターが日常的にサポートします。安心して学びに集中できます。',
    },
  ],
  sns: [
    { name: 'X', url: 'https://x.com/kamiyamacollege' },
    { name: 'Instagram', url: 'https://www.instagram.com/kamiyamacollege/' },
    { name: 'YouTube', url: 'https://www.youtube.com/@kamiyamacollege' },
    { name: 'Facebook', url: 'https://www.facebook.com/kamiyamacollege' },
  ],
  contactEmail: 'info@example.kamiyama.ac.jp', // TODO(Q-03): 公式問い合わせアドレスに差し替え
};
