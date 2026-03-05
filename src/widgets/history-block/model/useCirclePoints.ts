export function useCirclePoints(count: number, radius: number) {
  const points = [];
  const startAngle = -Math.PI / 3;

  for (let i = 0; i < count; i++) {
    const angle = startAngle + ((2 * Math.PI) / count) * i;
    const x = Math.round(50 + radius * Math.cos(angle));
    const y = Math.round(50 + radius * Math.sin(angle));

    points.push({ x, y });
  }

  return points;
}
