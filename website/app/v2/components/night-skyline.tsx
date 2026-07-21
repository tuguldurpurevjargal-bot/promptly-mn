export function NightSkyline() {
  const starsA = [
    [80, 90], [340, 140], [610, 110], [860, 130], [1120, 150], [530, 200], [1080, 280],
  ];
  const starsB = [
    [220, 60], [480, 70], [740, 50], [990, 80], [150, 220], [700, 240], [420, 320],
  ];
  const starsC = [
    [610, 40], [300, 260], [930, 210], [60, 330], [1170, 60], [780, 160],
  ];
  const windowsA = [
    [75, 570], [200, 530], [365, 585], [435, 510], [580, 570], [745, 550], [905, 590], [1065, 570],
  ];
  const windowsB = [
    [95, 600], [220, 560], [385, 610], [455, 540], [605, 595], [770, 585], [930, 615], [1090, 600],
  ];
  const windowsC = [
    [240, 590], [665, 570], [825, 570], [975, 585], [1140, 580],
  ];
  const blossoms = [
    [70, 90], [120, 120], [170, 160], [210, 210], [95, 140], [145, 185],
    [1050, 100], [1100, 130], [1145, 90], [1000, 170], [1060, 200], [990, 130],
  ];
  const petals = [
    { x: 150, delay: 0 },
    { x: 260, delay: 4 },
    { x: 1040, delay: 9 },
    { x: 940, delay: 13 },
  ];

  return (
    <svg
      className="anim-kenburns absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ns-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1626" />
          <stop offset="42%" stopColor="#14294a" />
          <stop offset="72%" stopColor="#25456b" />
          <stop offset="100%" stopColor="#3a5d84" />
        </linearGradient>
        <radialGradient id="ns-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fdf6e3" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#f5ead0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f5ead0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ns-city" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16233a" />
          <stop offset="100%" stopColor="#0b1420" />
        </linearGradient>
        <linearGradient id="ns-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a5d84" stopOpacity="0" />
          <stop offset="100%" stopColor="#7fa3c8" stopOpacity="0.22" />
        </linearGradient>
        <filter id="ns-brush">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" />
        </filter>
        <filter id="ns-soft">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id="ns-cloud-blur">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="ns-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1200" height="800" fill="url(#ns-sky)" />

      {/* Drifting clouds */}
      <g className="anim-cloud-a" filter="url(#ns-cloud-blur)" opacity="0.35">
        <ellipse cx="0" cy="150" rx="220" ry="42" fill="#4a6b96" />
        <ellipse cx="140" cy="130" rx="160" ry="32" fill="#54749f" />
      </g>
      <g className="anim-cloud-b" filter="url(#ns-cloud-blur)" opacity="0.28">
        <ellipse cx="0" cy="300" rx="260" ry="48" fill="#3d5c85" />
        <ellipse cx="-160" cy="280" rx="180" ry="34" fill="#48668f" />
      </g>

      {/* Stars */}
      <g fill="#fdf6e3">
        {starsA.map(([x, y], i) => (
          <circle key={`a${i}`} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.1} className="anim-twinkle" />
        ))}
        {starsB.map(([x, y], i) => (
          <circle key={`b${i}`} cx={x} cy={y} r={i % 3 === 0 ? 1.7 : 1.1} className="anim-twinkle-d1" />
        ))}
        {starsC.map(([x, y], i) => (
          <circle key={`c${i}`} cx={x} cy={y} r={i % 3 === 0 ? 1.6 : 1} className="anim-twinkle-d2" />
        ))}
      </g>

      {/* Moon */}
      <g className="anim-moon-pulse">
        <circle cx="880" cy="180" r="150" fill="url(#ns-moon)" />
      </g>
      <circle cx="880" cy="180" r="52" fill="#f7edd6" opacity="0.92" filter="url(#ns-soft)" />
      <circle cx="866" cy="168" r="10" fill="#e8dbba" opacity="0.5" filter="url(#ns-soft)" />
      <circle cx="892" cy="196" r="7" fill="#e8dbba" opacity="0.45" filter="url(#ns-soft)" />

      {/* Distant mountains */}
      <g filter="url(#ns-brush)" opacity="0.5">
        <path
          d="M0 520 C 180 460, 320 500, 480 470 C 640 440, 800 490, 960 465 C 1080 448, 1160 470, 1200 460 L1200 800 L0 800 Z"
          fill="#1c2d47"
        />
      </g>

      {/* Horizon haze */}
      <rect y="420" width="1200" height="220" fill="url(#ns-haze)" />

      {/* Distant skyline */}
      <g filter="url(#ns-brush)" opacity="0.55">
        <path
          d="M0 560 L60 560 L60 480 L110 480 L110 540 L170 540 L170 440 L230 440 L230 520 L290 520 L290 470 L350 470 L350 560 L420 560 L420 420 L480 420 L480 500 L540 500 L540 460 L600 460 L600 560 L680 560 L680 490 L740 490 L740 540 L800 540 L800 450 L870 450 L870 530 L930 530 L930 480 L990 480 L990 560 L1060 560 L1060 500 L1120 500 L1120 560 L1200 560 L1200 800 L0 800 Z"
          fill="#22344f"
        />
      </g>

      {/* Near skyline */}
      <g filter="url(#ns-brush)">
        <path
          d="M0 640 L50 640 L50 540 L120 540 L120 620 L180 620 L180 500 L260 500 L260 640 L330 640 L330 560 L400 560 L400 480 L470 480 L470 640 L560 640 L560 540 L640 540 L640 620 L720 620 L720 520 L800 520 L800 640 L880 640 L880 560 L960 560 L960 640 L1040 640 L1040 540 L1110 540 L1110 640 L1200 640 L1200 800 L0 800 Z"
          fill="url(#ns-city)"
        />
      </g>

      {/* Window lights */}
      <g fill="#f5d98a">
        {windowsA.map(([x, y], i) => (
          <rect key={`wa${i}`} x={x} y={y} width="5" height="7" rx="1" className="anim-flicker" />
        ))}
        {windowsB.map(([x, y], i) => (
          <rect key={`wb${i}`} x={x} y={y} width="5" height="7" rx="1" opacity="0.55" className="anim-flicker-d1" />
        ))}
        {windowsC.map(([x, y], i) => (
          <rect key={`wc${i}`} x={x} y={y} width="5" height="7" rx="1" opacity="0.65" />
        ))}
      </g>

      {/* Cherry blossom branches */}
      <g filter="url(#ns-soft)" stroke="#1a1218" strokeWidth="7" fill="none" strokeLinecap="round">
        <path d="M-20 40 C 120 80, 200 160, 260 240" />
        <path d="M60 90 C 130 130, 170 190, 200 250" strokeWidth="5" />
        <path d="M1220 30 C 1080 70, 1000 150, 940 230" />
        <path d="M1150 80 C 1080 120, 1040 180, 1010 240" strokeWidth="5" />
      </g>
      <g fill="#e8b4c8" opacity="0.85">
        {blossoms.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5 + (i % 3) * 2} />
        ))}
      </g>

      {/* Falling petals */}
      {petals.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={120}
          r="4"
          fill="#e8b4c8"
          opacity="0.8"
          className="anim-petal"
          style={{ animationDelay: `${p.delay}s` }}
        />
      ))}

      {/* Atmospheric haze at bottom */}
      <rect y="600" width="1200" height="200" fill="#0b1420" opacity="0.25" />

      {/* Painterly grain */}
      <rect width="1200" height="800" filter="url(#ns-grain)" opacity="0.5" pointerEvents="none" />
    </svg>
  );
}
