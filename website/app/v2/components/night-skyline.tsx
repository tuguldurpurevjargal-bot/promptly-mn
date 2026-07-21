export function NightSkyline() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ns-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1b2e" />
          <stop offset="45%" stopColor="#1b2f4a" />
          <stop offset="75%" stopColor="#2c4a6b" />
          <stop offset="100%" stopColor="#3d5f82" />
        </linearGradient>
        <radialGradient id="ns-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fdf6e3" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#f5ead0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f5ead0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ns-city" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16233a" />
          <stop offset="100%" stopColor="#0b1420" />
        </linearGradient>
        <filter id="ns-brush">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" />
        </filter>
        <filter id="ns-soft">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="1200" height="800" fill="url(#ns-sky)" />

      {/* Stars */}
      <g fill="#fdf6e3">
        {[
          [80, 90], [220, 60], [340, 140], [480, 70], [610, 110], [740, 50],
          [860, 130], [990, 80], [1120, 150], [150, 220], [300, 260], [530, 200],
          [700, 240], [930, 210], [1080, 280], [420, 320], [60, 330], [1170, 60],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.1} opacity={0.5 + (i % 4) * 0.12} />
        ))}
      </g>

      {/* Moon */}
      <circle cx="880" cy="180" r="150" fill="url(#ns-moon)" />
      <circle cx="880" cy="180" r="52" fill="#f7edd6" opacity="0.9" filter="url(#ns-soft)" />

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
      <g fill="#f5d98a" opacity="0.75">
        {[
          [75, 570], [95, 600], [200, 530], [220, 560], [240, 590], [365, 585],
          [385, 610], [435, 510], [455, 540], [580, 570], [605, 595], [665, 570],
          [745, 550], [770, 585], [825, 570], [905, 590], [930, 615], [975, 585],
          [1065, 570], [1090, 600], [1140, 580],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="5" height="7" rx="1" opacity={0.4 + (i % 5) * 0.12} />
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
        {[
          [70, 90], [120, 120], [170, 160], [210, 210], [95, 140], [145, 185],
          [1050, 100], [1100, 130], [1145, 90], [1000, 170], [1060, 200], [990, 130],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5 + (i % 3) * 2} />
        ))}
      </g>

      {/* Atmospheric haze at bottom */}
      <rect y="600" width="1200" height="200" fill="#0b1420" opacity="0.25" />
    </svg>
  );
}
