export function PixelFlower({ className = "" }: { className?: string }) {
  const px = 10;
  const yellow = "#f5c93f";
  const yellowDark = "#e0a91f";
  const pink = "#e86aa8";
  const pinkDark = "#c94a86";
  const green = "#4c8a3f";
  const greenDark = "#3a6d30";

  // Pixel grid map (x, y) in units of px
  const petals: [number, number, string][] = [
    // top petal
    [3, 0, yellow], [4, 0, yellow], [3, 1, yellow], [4, 1, yellowDark],
    // left petal
    [0, 3, yellow], [1, 3, yellow], [0, 4, yellowDark], [1, 4, yellowDark],
    // right petal
    [6, 3, yellow], [7, 3, yellow], [6, 4, yellowDark], [7, 4, yellowDark],
    // bottom petal
    [3, 6, yellowDark], [4, 6, yellowDark], [3, 7, yellowDark], [4, 7, yellowDark],
    // diagonal accents
    [1, 1, yellowDark], [6, 1, yellowDark], [1, 6, yellowDark], [6, 6, yellowDark],
  ];

  const center: [number, number, string][] = [
    [3, 3, pink], [4, 3, pink], [3, 4, pinkDark], [4, 4, pinkDark],
  ];

  const stem: [number, number, string][] = [
    [3, 8, green], [4, 8, greenDark], [3, 9, green], [4, 9, greenDark],
    [3, 10, greenDark], [4, 10, green], [3, 11, green], [4, 11, greenDark],
  ];

  const leaf: [number, number, string][] = [
    [5, 9, green], [6, 9, greenDark], [2, 10, greenDark],
  ];

  const all = [...petals, ...center, ...stem, ...leaf];

  return (
    <svg
      className={className}
      width={8 * px}
      height={12 * px}
      viewBox={`0 0 ${8 * px} ${12 * px}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {all.map(([x, y, fill], i) => (
        <rect key={i} x={x * px} y={y * px} width={px} height={px} fill={fill} />
      ))}
    </svg>
  );
}
