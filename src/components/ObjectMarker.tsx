import React from "react";
import { Marker, Popup } from "react-leaflet";
import { ObjectType } from "../stores/objectStore";

interface ObjectMarkerProps {
  object: ObjectType;
}

export const ObjectMarker: React.FC<ObjectMarkerProps> = ({ object }) => {
  return (
    <Marker position={object.coordinates}>
      <Popup>
        <div>
          <strong>Coordinates:</strong> {object.coordinates}
        </div>
      </Popup>
    </Marker>
  );
};
