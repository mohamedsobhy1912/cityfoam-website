export const asset = path => `${import.meta.env.BASE_URL}${path}`;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
