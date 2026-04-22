import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';

import { gsap } from 'gsap';
import { mountHeader } from './components/header';
import { mountFooter } from './components/footer';
import { initLenis } from './scripts/lenis';
import { initGlobalAnimations, initCountUp } from './scripts/animations';
import { initPageTransitions, playCurtainOut } from './scripts/transitions';
import { whenMotionAllowed, prefersReducedMotion } from './scripts/a11y';

function mountChrome(): void {
  const headerHost = document.querySelector<HTMLElement>('[data-header]');
  const footerHost = document.querySelector<HTMLElement>('[data-footer]');
  if (headerHost) mountHeader(headerHost, { activePath: location.pathname });
  if (footerHost) mountFooter(footerHost);
}

function playIntroLoader(): Promise<void> {
  return new Promise((resolve) => {
    const loader = document.querySelector<HTMLElement>('[data-intro-loader]');
    if (!loader || prefersReducedMotion()) {
      loader?.remove();
      resolve();
      return;
    }
    const logo = loader.querySelector<HTMLElement>('.intro-loader__logo');
    const sub = loader.querySelector<HTMLElement>('.intro-loader__sub');
    const tl = gsap.timeline({
      onComplete: () => {
        loader.remove();
        resolve();
      },
    });
    tl.to(logo, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      .to(sub, { opacity: 0.7, duration: 0.3 }, '-=0.1')
      .to({}, { duration: 0.25 })
      .to(loader, { yPercent: -100, duration: 0.55, ease: 'power3.inOut' });
  });
}

function boot(): void {
  mountChrome();

  if (prefersReducedMotion()) {
    // モーション無し: 即時表示
    document.querySelector('[data-intro-loader]')?.remove();
    return;
  }

  whenMotionAllowed(() => {
    initLenis();
    initPageTransitions();
    playCurtainOut();
  });

  playIntroLoader().then(() => {
    initGlobalAnimations();
    initCountUp(document);
    // ページ固有 init はページ側で `window.dispatchEvent(new Event('app:ready'))` を待つ
    window.dispatchEvent(new Event('app:ready'));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
