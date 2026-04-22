import { SCHOOL } from '../data/school';

const BASE = import.meta.env.BASE_URL;

export function mountFooter(root: HTMLElement): void {
  const navLinks = [
    { label: 'About', href: 'about.html' },
    { label: 'Curriculum', href: 'curriculum.html' },
    { label: 'Campus', href: 'campus.html' },
    { label: 'Admissions', href: 'admissions.html' },
  ]
    .map((l) => `<li><a href="${BASE}${l.href}">${l.label}</a></li>`)
    .join('');

  const sns = SCHOOL.sns
    .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`)
    .join('');

  root.innerHTML = `
    <footer class="site-footer">
      <div class="site-footer__grid">
        <div>
          <p class="site-footer__brand">KAMIYAMA<br />Marugoto</p>
          <p class="site-footer__address">
            ${SCHOOL.location.address}<br />
            ${SCHOOL.nameEn}
          </p>
        </div>
        <div>
          <h3>Sitemap</h3>
          <ul class="site-footer__list">${navLinks}</ul>
        </div>
        <div>
          <h3>Follow</h3>
          <ul class="site-footer__list">${sns}</ul>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span>© ${new Date().getFullYear()} Unofficial Fan Site / Built with ♥ in Kamiyama</span>
        <span>${SCHOOL.name} 紹介サイト (非公式)</span>
      </div>
    </footer>
  `;
}
