"use client";

const nodes = [
  { x: 20, y: 25, r: 6 },
  { x: 50, y: 12, r: 4 },
  { x: 80, y: 30, r: 7 },
  { x: 32, y: 55, r: 5 },
  { x: 65, y: 58, r: 9 },
  { x: 18, y: 82, r: 4 },
  { x: 52, y: 85, r: 6 },
  { x: 86, y: 78, r: 3 },
  { x: 38, y: 38, r: 2.5 },
  { x: 70, y: 44, r: 2.5 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 6],
  [4, 7],
  [5, 6],
  [0, 8],
  [8, 3],
  [2, 9],
  [9, 4],
];

export function GeometricMolecule() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#bbc7c6"
          strokeOpacity="0.35"
          strokeWidth="0.4"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 1.5} fill="#edfffe" fillOpacity="0.08" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke="#edfffe" strokeOpacity="0.7" strokeWidth="0.5" />
          <circle cx={n.x} cy={n.y} r={n.r * 0.35} fill="#edfffe" fillOpacity="0.9" />
        </g>
      ))}
    </svg>
  );
}
