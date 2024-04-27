import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyMap() {
  const defaultLocation = [36.7517, 5.0557]; // Coordinates for Bejaia, Algeria

  const locations1 = [
    { name: "Location 1", coords: [36.7517, 5.0557] },
    { name: "Location 2", coords: [36.7528, 5.0568] },
    { name: "Location 3", coords: [36.7539, 5.0579] },
    // Add me locations as needed
  ];

  const locations2 = [
    { name: "Location 4", coords: [36.784, 5.058] },
    { name: "Location 5", coords: [36.7547, 5.0583] },
    { name: "Location 6", coords: [36.7544, 5.0588] },
  ];

  const locations3 = [
    { name: "Location 6", coords: [36.794, 5.068] },
    { name: "Location 7", coords: [36.847, 5.0883] },
    { name: "Location 8", coords: [36.7344, 5.0988] },
  ];

  return (
    <MapContainer
      center={defaultLocation}
      zoom={13}
      style={{ height: "400px" }}
      className="rounded-lg shadow-2xl w-[1000px] mx-auto"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations1.map((location, index) => (
        <Marker key={index} position={location.coords}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      {locations2.map((location, index) => (
        <Marker key={index} position={location.coords}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
      {locations3.map((location, index) => (
        <Marker key={index} position={location.coords}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MyMap;
