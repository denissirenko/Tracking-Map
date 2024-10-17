import { makeAutoObservable } from "mobx";

export interface ObjectType {
  id: string;
  coordinates: [number, number];
  direction: string | null;
  isLost: boolean;
}

class ObjectStore {
  objects: ObjectType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addObject(object: ObjectType) {
    this.objects.push(object);
  }

  updateObject(
    id: string,
    newCoordinates: [number, number],
    newDirection: string
  ) {
    const obj = this.objects.find((o) => o.id === id);
    if (obj) {
      obj.coordinates = newCoordinates;
      obj.direction = newDirection;
    }
  }

  markAsLost(id: string) {
    const obj = this.objects.find((o) => o.id === id);
    if (obj) {
      obj.isLost = true;
      setTimeout(() => {
        this.removeObject(id);
      }, 300000);
    }
  }

  removeObject(id: string) {
    this.objects = this.objects.filter((o) => o.id !== id);
  }
}

export const objectStore = new ObjectStore();
