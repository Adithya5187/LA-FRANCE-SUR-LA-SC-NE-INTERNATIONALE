/**
 * Calculate the scroll progress of an individual element relative to viewport.
 * When top of element hits top/middle of viewport -> 0%
 * When bottom of element leaves viewport -> 100%
 */
export function calculateElementProgress(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // The total scroll distance within this chapter
  const totalDistance = rect.height - windowHeight * 0.3;
  if (totalDistance <= 0) return 0;

  // Distance scrolled from when the top of the chapter enters viewport upper third
  const scrolledDistance = (windowHeight * 0.3) - rect.top;

  const progress = scrolledDistance / totalDistance;
  return Math.min(1, Math.max(0, progress));
}

