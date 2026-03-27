import { useRef, useCallback } from 'react';

/**
 * useTilt — lightweight 3D tilt hook for project cards.
 * Returns a ref to attach to the element.
 * Applies CSS transform directly to the element for perf.
 */
function useTilt(maxDeg = 8) {
  const ref = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);   // -1 → 1
      const dy = (e.clientY - cy) / (rect.height / 2);  // -1 → 1

      const rotateX = -dy * maxDeg;
      const rotateY = dx * maxDeg;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
      el.style.transition = 'transform 0.08s ease-out';
    },
    [maxDeg]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    el.style.transition = 'transform 0.4s ease';
  }, []);

  const handleMouseEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.08s ease-out';
  }, []);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  };
}

export default useTilt;
