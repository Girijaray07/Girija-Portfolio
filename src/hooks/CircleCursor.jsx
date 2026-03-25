import { useEffect, useRef } from 'react';
import './CircleCursor.css';

export default function CircleCursor({ size = 28, borderWidth = 2, color = 'rgba(0, 220, 255, 0.6)', trailColor = 'rgba(0, 220, 255, 0.15)', delay = 0.08 }) {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => {
      if (cursorRef.current) cursorRef.current.classList.add('cursor-click');
      if (trailRef.current) trailRef.current.classList.add('trail-click');
    };

    const onUp = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-click');
      if (trailRef.current) trailRef.current.classList.remove('trail-click');
    };

    const onEnterInteractive = () => {
      if (cursorRef.current) cursorRef.current.classList.add('cursor-hover');
      if (trailRef.current) trailRef.current.classList.add('trail-hover');
    };

    const onLeaveInteractive = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-hover');
      if (trailRef.current) trailRef.current.classList.remove('trail-hover');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    // Track interactive elements
    const attachInteractive = () => {
      document.querySelectorAll('a, button, .cursor-target, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };

    attachInteractive();
    const observer = new MutationObserver(attachInteractive);
    observer.observe(document.body, { childList: true, subtree: true });

    let raf;
    const animate = () => {
      trailPos.current.x += (pos.current.x - trailPos.current.x) * delay;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * delay;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - size * 1.5}px, ${trailPos.current.y - size * 1.5}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [size, delay]);

  return (
    <>
      <div
        ref={cursorRef}
        className="circle-cursor"
        style={{
          width: size,
          height: size,
          border: `${borderWidth}px solid ${color}`,
        }}
      />
      <div
        ref={trailRef}
        className="circle-cursor-trail"
        style={{
          width: size * 3,
          height: size * 3,
          background: `radial-gradient(circle, ${trailColor} 0%, transparent 70%)`,
        }}
      />
    </>
  );
}
