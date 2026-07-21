"use client";

import { useEffect, useRef } from "react";

export function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const bars = 90;
    const seeds = Array.from({ length: bars }, () => Math.random());
    let t = 0;

    const render = () => {
      t += 0.008;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const bw = w / bars;

      for (let i = 0; i < bars; i++) {
        const n = Math.sin(t + i * 0.35 + seeds[i] * 6.28) * 0.5 + 0.5;
        const n2 = Math.sin(t * 0.7 + i * 0.12 + seeds[i] * 3) * 0.5 + 0.5;
        const height = h * (0.06 + n * n2 * 0.6);
        const x = i * bw;
        const alpha = 0.06 + n * 0.28;
        ctx.fillStyle =
          i % 7 === 0
            ? `rgba(52, 213, 154, ${alpha})`
            : `rgba(40, 93, 73, ${alpha})`;
        ctx.fillRect(x, h - height, Math.max(1, bw * 0.45), height);
      }

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />;
}
