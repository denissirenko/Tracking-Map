export const calculateDirection = (
  previousCoordinates: [number, number],
  currentCoordinates: [number, number]
): string | null => {
  const [prevLat, prevLng] = previousCoordinates;
  const [currLat, currLng] = currentCoordinates;

  const deltaLat = currLat - prevLat;
  const deltaLng = currLng - prevLng;

  const angle = Math.atan2(deltaLng, deltaLat) * (180 / Math.PI);

  if (angle >= -22.5 && angle < 22.5) return "North";
  if (angle >= 22.5 && angle < 67.5) return "North-East";
  if (angle >= 67.5 && angle < 112.5) return "East";
  if (angle >= 112.5 && angle < 157.5) return "South-East";
  if (angle >= 157.5 || angle < -157.5) return "South";
  if (angle >= -157.5 && angle < -112.5) return "South-West";
  if (angle >= -112.5 && angle < -67.5) return "West";
  if (angle >= -67.5 && angle < -22.5) return "North-West";

  return null;
};
