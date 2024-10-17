import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { ObjectType } from "../stores/objectStore";

import marker from "../../public/images/marker-icon.png";

interface ObjectMarkerProps {
  object: ObjectType;
}

export const ObjectMarker: React.FC<ObjectMarkerProps> = ({ object }) => {
  const icon = new L.Icon({
    iconUrl: marker,
    iconSize: [20, 25],
  });

  return (
    <Marker position={object.coordinates} icon={icon}>
      <Popup>
        <div>
          <strong>Coordinates:</strong> {object.coordinates}
        </div>
      </Popup>
    </Marker>
  );
};
