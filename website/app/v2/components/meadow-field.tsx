import { PixelFlower } from "./pixel-flower";

export function MeadowField() {
  const poppies = [
    { x: 120, y: 190, s: 7, cls: "anim-sway" },
    { x: 260, y: 230, s: 9, cls: "anim-sway-d1" },
    { x: 420, y: 180, s: 7, cls: "anim-sway-d2" },
    { x: 590, y: 240, s: 9, cls: "anim-sway" },
    { x: 760, y: 195, s: 7, cls: "anim-sway-d1" },
    { x: 920, y: 235, s: 8, cls: "anim-sway-d2" },
    { x: 1080, y: 185, s: 7, cls: "anim-sway" },
    { x: 180, y: 260, s: 8, cls: "anim-sway-d1" },
    { x: 500, y: 270, s: 7, cls: "anim-sway-d2" },
    { x: 840, y: 265, s: 9, cls: "anim-sway" },
    { x: 1020, y: 255, s: 7, cls: "anim-sway-d1" },
  ];
  const purples = [
    { x: 90, y: 240, cls: "anim-sway-d2" },
    { x: 330, y: 210, cls: "anim-sway" },
    { x: 670, y: 225, cls: "anim-sway-d1" },
    { x: 990, y: 215, cls: "anim-sway-d2" },
    { x: 460, y: 250, cls: "anim-sway" },
    { x: 730, y: 250, cls: "anim-sway-d1" },
  ];
  const grass = [
    [60, 285], [150, 295], [240, 288], [360, 300], [450, 290], [560, 298],
    [640, 286], [740, 296], [830, 289], [950, 300], [1050, 292], [1150, 298],
  ];
  const pollen = [
    { x: 200, y: 150, cls: "anim-pollen" },
    { x: 550, y: 120, cls: "anim-pollen-d1" },
    { x: 850, y: 170, cls: "anim-pollen-d2" },
    { x: 350, y: 190, cls: "anim-pollen" },
    { x: 1050, y: 140, cls: "anim-pollen-d1" },
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2ecd9" />
          <stop offset="55%" stopColor="#e3e8c8" />
          <stop offset="100%" stopColor="#b9c98f" />
        </linearGradient>
        <linearGradient id="mf-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8aa465" />
          <stop offset="100%" stopColor="#5c7a44" />
        </linearGradient>
        <filter id="mf-brush">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
      </defs>

      <rect width="1200" height="320" fill="url(#mf-sky)" />

      {/* Rolling ground */}
      <g filter="url(#mf-brush)">
        <path
          d="M0 220 C 200 180, 400 240, 600 210 C 800 180, 1000 235, 1200 205 L1200 320 L0 320 Z"
          fill="url(#mf-ground)"
        />
      </g>

      {/* Swaying grass */}
      {grass.map(([x, y], i) => (
        <g
          key={`g${i}`}
          className={i % 3 === 0 ? "anim-sway" : i % 3 === 1 ? "anim-sway-d1" : "anim-sway-d2"}
        >
          <path
            d={`M${x} ${y} q 3 -14 6 -18 M${x + 4} ${y} q 1 -10 -2 -16`}
            fill="none"
            stroke="#55763e"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      ))}

      {/* Poppies with stems — whole plant sways */}
      {poppies.map((p, i) => (
        <g key={`p${i}`} className={p.cls}>
          <path
            d={`M${p.x} ${p.y + 55} C ${p.x - 4} ${p.y + 30}, ${p.x + 4} ${p.y + 15}, ${p.x} ${p.y}`}
            fill="none"
            stroke="#4c6a38"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <circle cx={p.x} cy={p.y} r={p.s} fill="#e0a437" opacity="0.95" />
          <circle cx={p.x} cy={p.y} r={2.5} fill="#7a4a12" />
        </g>
      ))}

      {/* Purple flowers */}
      {purples.map((p, i) => (
        <g key={`pu${i}`} className={p.cls}>
          <path
            d={`M${p.x} ${p.y + 50} C ${p.x - 4} ${p.y + 28}, ${p.x + 4} ${p.y + 14}, ${p.x} ${p.y}`}
            fill="none"
            stroke="#4c6a38"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          {[0, 72, 144, 216, 288].map((a) => (
            <circle
              key={a}
              cx={p.x + Math.cos((a * Math.PI) / 180) * 6}
              cy={p.y + Math.sin((a * Math.PI) / 180) * 6}
              r="3.2"
              fill="#8f6db8"
              opacity="0.9"
            />
          ))}
          <circle cx={p.x} cy={p.y} r="2.4" fill="#5a3f7a" />
        </g>
      ))}

      {/* Drifting pollen */}
      {pollen.map((p, i) => (
        <circle
          key={`po${i}`}
          cx={p.x}
          cy={p.y}
          r="2"
          fill="#f5e9c8"
          className={p.cls}
        />
      ))}
    </svg>
  );
}
