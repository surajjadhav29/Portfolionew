export function rgbToRgba(rgb: string, alpha: number = 0.1): string {
  const match = rgb.match(/\d+/g);

  if (!match || match.length < 3) {
    throw new Error("Invalid RGB format. Expected format: 'rgb(r, g, b)'.");
  }
  const [r, g, b] = match.map(Number);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
