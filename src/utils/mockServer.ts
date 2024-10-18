import { objectStore, ObjectType } from "../stores/objectStore";
import { calculateDirection } from "./calculateDirection";

export const runMockServer = () => {
  let previousCoordinates: [number, number] | null = null;

  // Simulate object updates every 5 seconds
  setInterval(() => {
    const newCoordinates: [number, number] = [
      48.4634073870808 + Math.random() * 0.01,
      35.04224011940537 + Math.random() * 0.01,
    ];

    const direction = previousCoordinates
      ? calculateDirection(previousCoordinates, newCoordinates)
      : "Start position";

    const newObject: ObjectType = {
      id: Math.random().toString(36).substring(7),
      coordinates: newCoordinates,
      direction,
      isLost: false,
    };

    objectStore.addObject(newObject);

    // Update the previous coordinates for the next iteration
    previousCoordinates = newCoordinates;
  }, 5000);

  // marking the loss of data from the server (mark it as lost)
  setInterval(() => {
    if (objectStore.objects.length > 0) {
      const objectToLose = objectStore.objects[0].id;
      objectStore.markAsLost(objectToLose);
    }
  }, 15000);
};
