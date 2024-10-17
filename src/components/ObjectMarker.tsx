import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { ObjectType } from "../stores/objectStore";

interface ObjectMarkerProps {
  object: ObjectType;
}

export const ObjectMarker: React.FC<ObjectMarkerProps> = ({ object }) => {
  const icon = new L.Icon({
    iconUrl: "/images/marker.png",
    iconSize: [18, 25],
  });

  return (
    <Marker position={object.coordinates} icon={icon}>
      <Popup>
        <div>
          <strong>Id:</strong> {object.id}
          <br />
          <strong>Coordinates:</strong> {object.coordinates}
          <br />
          <strong>Direction:</strong> {object.direction}
        </div>
      </Popup>
    </Marker>
  );
};
