import { SCHOOL } from '../data/school';

const BASE = import.meta.env.BASE_URL;

const NAV_ITEMS: { label: string; labelEn: string; href: string }[] = [
  { label: 'トップ', labelEn: 'Home', href: 'index.html' },
  { label: '学校について', labelEn: 'About', href: 'about.html' },
  { label: 'カリキュラム', labelEn: 'Curriculum', href: 'curriculum.html' },
  { label: 'キャンパス', labelEn: 'Campus', href: 'campus.html' },
  { label: '入試・募集', labelEn: 'Admissions', href: 'admissions.html' },
];

function isActive(activePath: string | undefined, href: string): boolean {
  if (!activePath) return false;
  const path = activePath.split('/').pop() || 'index.html';
  const target = path === '' ? 'index.html' : path;
  return target === href;
}

export function mountHeader(root: HTMLElement, opts?: { activePath?: string }): void {
  const links = NAV_ITEMS.map((item) => {
    const active = isActive(opts?.activePath, item.href) ? ' aria-current="page"' : '';
    return `<a href="${BASE}${item.href}"${active}>${item.labelEn}</a>`;
  }).join('');

  root.innerHTML = `
    <header class="site-header" data-site-header>
      <div class="site-header__inner">
        <a class="site-logo" href="${BASE}index.html" aria-label="${SCHOOL.name}">
          <span class="site-logo__mark" aria-hidden="true"></span>
          <span>KAMIYAMA</span>
        </a>
        <nav class="site-nav" aria-label="グローバルナビゲーション">${links}</nav>
        <a class="site-header__entry" href="${BASE}admissions.html">Entry<span aria-hidden="true">→</span></a>
        <button class="site-header__burger" type="button" aria-label="メニューを開閉" data-burger>
          <span></span><span></span>
        </button>
      </div>
    </header>
  `;

  const header = root.querySelector('[data-site-header]') as HTMLElement | null;
  const burger = root.querySelector('[data-burger]') as HTMLButtonElement | null;
  burger?.addEventListener('click', () => {
    header?.classList.toggle('is-open');
  });
  // ナビ内のリンクをクリックしたら閉じる
  root.querySelectorAll('.site-nav a').forEach((a) => {
    a.addEventListener('click', () => header?.classList.remove('is-open'));
  });
}
