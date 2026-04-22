import { gsap } from 'gsap';

const CURTAIN_ID = 'page-curtain';

function ensureCurtain(): HTMLElement {
  let el = document.getElementById(CURTAIN_ID);
  if (!el) {
    el = document.createElement('div');
    el.id = CURTAIN_ID;
    el.className = 'curtain';
    document.body.appendChild(el);
  }
  return el;
}

function isInternal(href: string): boolean {
  try {
    const url = new URL(href, location.href);
    return url.origin === location.origin;
  } catch {
    return false;
  }
}

export function initPageTransitions(): void {
  const curtain = ensureCurtain();

  // 初回ロード: 黒幕を上に逃がす
  gsap.set(curtain, { yPercent: -100 });

  document.addEventListener(
    'click',
    (event) => {
      const target = (event.target as HTMLElement | null)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;
      if (target.target === '_blank') return;
      if (target.hasAttribute('download')) return;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (!isInternal(href)) return;
      // 同じページ内ハッシュ
      const url = new URL(href, location.href);
      if (url.pathname === location.pathname && url.search === location.search) return;

      event.preventDefault();
      curtain.classList.add('is-active');
      gsap.fromTo(
        curtain,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.45,
          ease: 'power3.inOut',
          onComplete: () => {
            location.assign(url.toString());
          },
        }
      );
    },
    true
  );
}

export function playCurtainOut(): void {
  const curtain = document.getElementById(CURTAIN_ID);
  if (!curtain) return;
  gsap.fromTo(
    curtain,
    { yPercent: 0 },
    {
      yPercent: -100,
      duration: 0.5,
      ease: 'power3.inOut',
      onComplete: () => curtain.classList.remove('is-active'),
    }
  );
}
