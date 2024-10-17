import { objectStore, ObjectType } from "../stores/objectStore";

export const runMockServer = () => {
  // Simulate object updates every 5 seconds
  setInterval(() => {
    const newObject: ObjectType = {
      id: Math.random().toString(36).substring(7),
      coordinates: [
        48.4634073870808 + Math.random() * 0.01,
        35.04224011940537 + Math.random() * 0.01,
      ],
      lastUpdate: Date.now(),
      isLost: false,
    };
    objectStore.addObject(newObject);
  }, 5000);

  // marking the loss of data from the server (mark it as lost)
  setInterval(() => {
    if (objectStore.objects.length > 0) {
      const objectToLose = objectStore.objects[0].id;
      objectStore.markAsLost(objectToLose);
    }
  }, 15000);
};
