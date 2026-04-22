import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initGlobalAnimations(): void {
  // fade-up reveal for [data-reveal] / .reveal elements
  const targets = gsap.utils.toArray<HTMLElement>('[data-reveal], .reveal');
  ScrollTrigger.batch(targets, {
    start: 'top 80%',
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
      }),
    once: true,
  });

  // initial state for reveal targets
  gsap.set(targets, { opacity: 0, y: 40 });

  // magnetic buttons
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, { x: dx * 0.25, y: dy * 0.25, duration: 0.4, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

export function initHero(target: HTMLElement | null): void {
  if (!target) return;
  const splitTargets = target.querySelectorAll<HTMLElement>('[data-split]');
  splitTargets.forEach((node) => {
    const text = node.textContent ?? '';
    node.textContent = '';
    const frag = document.createDocumentFragment();
    [...text].forEach((ch) => {
      const span = document.createElement('span');
      span.className = 'split-char';
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      frag.appendChild(span);
    });
    node.appendChild(frag);
  });

  const chars = target.querySelectorAll<HTMLElement>('.split-char');
  gsap.from(chars, {
    yPercent: 120,
    opacity: 0,
    duration: 1.1,
    ease: 'power4.out',
    stagger: 0.025,
    delay: 0.2,
  });

  const parallax = target.querySelector<HTMLElement>('[data-parallax]');
  if (parallax) {
    gsap.to(parallax, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: target,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
}

export function initCountUp(scope: ParentNode = document): void {
  const items = scope.querySelectorAll<HTMLElement>('[data-count]');
  items.forEach((el) => {
    const target = Number(el.dataset.count ?? '0');
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(obj.v).toString();
          },
        });
      },
    });
  });
}

export function initImageHover(): void {
  // ベース CSS で対応済 (.frame:hover) なので拡張のみ。何もしない。
}
