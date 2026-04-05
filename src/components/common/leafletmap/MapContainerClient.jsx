"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapContainerClient = ({ destinationsList, setDestination }) => {
  return (
    <div className="min-h-[200px] max-h-[450px] h-[30vh] max-w-100 rounded-xl overflow-hidden shadow-xl">
      <MapContainer
        center={[7.5, 80.7]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {destinationsList.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            eventHandlers={{
              click: () => {
                setDestination(place);
              },
            }}
          >
            <Popup>{place.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapContainerClient;
