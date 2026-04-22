export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export function whenMotionAllowed(fn: () => void): void {
  if (prefersReducedMotion()) return;
  fn();
}
