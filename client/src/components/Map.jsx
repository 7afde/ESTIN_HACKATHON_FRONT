import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFyd2FuZWJlbnNhZGEiLCJhIjoiY2x2ZzFzMXIyMHI1cDJrbzUyeGowOHNhMCJ9.pYrg9BsipWuw0R8n_T3KKw";

    if (!mapboxgl.supported()) {
      alert("Your browser does not support Mapbox GL");
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [longitude, latitude],
        zoom: 14,
      });
    });

    return () => {
      if (mapContainer.current) {
        mapContainer.current.innerHTML = ""; // Clear the map container
      }
    };
  }, []);

  return (
      <div className="flex justify-center">
         <div ref={mapContainer} className="map-container" />
      </div>
  );
};

export default Map;
