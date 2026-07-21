export function MeadowField() {
  const poppies = [
    [120, 190], [260, 230], [420, 180], [590, 240], [760, 195], [920, 235], [1080, 185],
    [180, 260], [500, 270], [840, 265], [1020, 255],
  ];
  const purples = [
    [90, 240], [330, 210], [670, 225], [990, 215], [460, 250], [730, 250],
  ];
  const stems = [
    [120, 190], [260, 230], [420, 180], [590, 240], [760, 195], [920, 235], [1080, 185],
    [180, 260], [500, 270], [840, 265], [1020, 255], [90, 240], [330, 210], [670, 225],
    [990, 215], [460, 250], [730, 250],
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

      {/* Stems */}
      <g stroke="#4c6a38" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
        {stems.map(([x, y], i) => (
          <path key={i} d={`M${x} ${y + 55} C ${x - 4} ${y + 30}, ${x + 4} ${y + 15}, ${x} ${y}`} fill="none" />
        ))}
      </g>

      {/* Poppies */}
      <g fill="#e0a437" opacity="0.95">
        {poppies.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={7 + (i % 3) * 2} />
            <circle cx={x} cy={y} r={2.5} fill="#7a4a12" />
          </g>
        ))}
      </g>

      {/* Purple flowers */}
      <g fill="#8f6db8" opacity="0.9">
        {purples.map(([x, y], i) => (
          <g key={i}>
            {[0, 72, 144, 216, 288].map((a) => (
              <circle
                key={a}
                cx={x + Math.cos((a * Math.PI) / 180) * 6}
                cy={y + Math.sin((a * Math.PI) / 180) * 6}
                r="3.2"
              />
            ))}
            <circle cx={x} cy={y} r="2.4" fill="#5a3f7a" />
          </g>
        ))}
      </g>

      {/* Grass tufts */}
      <g stroke="#55763e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i * 97) % 1200;
          const y = 250 + ((i * 53) % 60);
          return <path key={i} d={`M${x} ${y} q 3 -14 6 -18 M${x + 4} ${y} q 1 -10 -2 -16`} fill="none" />;
        })}
      </g>
    </svg>
  );
}
