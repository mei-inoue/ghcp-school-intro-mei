import '../main';
import { initHero } from '../scripts/animations';
import { whenMotionAllowed } from '../scripts/a11y';
import '../styles/pages/index.css';

window.addEventListener('app:ready', () => {
  whenMotionAllowed(() => {
    initHero(document.querySelector<HTMLElement>('[data-hero]'));
  });
});
