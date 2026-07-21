"use client";

import { useEffect, useRef } from "react";

export function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const N = 700;
    const pts: { theta: number; phi: number }[] = [];
    for (let i = 0; i < N; i++) {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / N);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push({ theta, phi });
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    let t = 0;
    const render = () => {
      t += 0.0035;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.38;
      const tilt = 0.4;
      const cosTilt = Math.cos(tilt);
      const sinTilt = Math.sin(tilt);

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < N; i++) {
        const { theta, phi } = pts[i];
        const p = phi + t;
        const x = Math.sin(theta) * Math.cos(p);
        const y = Math.cos(theta);
        const z = Math.sin(theta) * Math.sin(p);

        const y2 = y * cosTilt - z * sinTilt;
        const z2 = y * sinTilt + z * cosTilt;

        const depth = (z2 + 1) / 2;
        const px = cx + x * R;
        const py = cy + y2 * R;

        const size = (0.7 + depth * 1.5) * dpr;
        const alpha = 0.12 + depth * 0.55;

        const rim = Math.max(0, Math.abs(x) - 0.55) * 1.6;
        if (rim > 0.35) {
          ctx.fillStyle = `rgba(253, 233, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(203, 255, 252, ${alpha})`;
        }
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block h-full w-full"
      aria-hidden="true"
    />
  );
}
