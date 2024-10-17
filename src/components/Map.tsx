import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { observer } from "mobx-react-lite";
import { objectStore } from "../stores/objectStore";
import { ObjectMarker } from "./ObjectMarker";
import { runMockServer } from "../utils/mockServer";

export const MapComponent: React.FC = observer(() => {
  useEffect(() => {
    runMockServer();
  }, []);

  return (
    <MapContainer
      center={[48.4634073870808, 35.04224011940537]}
      zoom={13}
      style={{ height: "500px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {objectStore.objects.map((obj) => (
        <ObjectMarker key={obj.id} object={obj} />
      ))}
    </MapContainer>
  );
});
