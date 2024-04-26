import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainer = useRef(null); // Use null instead of an empty string

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
        container: mapContainer.current, // Use current ref value
        style: "mapbox://styles/mapbox/light-v11",
        center: [longitude, latitude],
        zoom: 16,
      });

      // Add navigation control
      map.addControl(new mapboxgl.NavigationControl());
    });

    return () => {
      // Clean up map instance
      if (mapContainer.current) {
        mapContainer.current.innerHTML = ""; // Clear container HTML
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center rounded-xl bg-slate-300">
      <div ref={mapContainer} className="map-container h-[400px] w-[600px]" />
      <div className="w-[30%] bg-white p-4">
        <div className="flex items-center">
          <img src="../../public/recycle-bin (1).png" className="w-6 h-6" />
          <h1 className="text-xl font-bold">Trash 1</h1>
        </div>

        <p>
          <span className="font-bold">Address:</span>
        </p>
      </div>
    </div>
  );
};

export default Map;
