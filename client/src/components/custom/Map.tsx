import React, { useEffect, useRef, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";

const Map = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const mapContainer = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (location.latitude !== null && location.longitude !== null) {
      const map = tt.map({
        key: "2eAD8IKdfZoW06dVQzBRqi59sQSggZjT",
        container: mapContainer.current,
        center: [location.longitude, location.latitude],
        zoom: 14,
      });

      const marker = new tt.Marker().setLngLat([location.longitude, location.latitude]).addTo(map);

      // Add navigation control
      map.addControl(new tt.NavigationControl());

      return () => {
        map.remove();
      };
    }
  }, [location]);

  return (
    <div className="flex justify-center items-center rounded-xl bg-slate-300 w-[800px]">
      <div ref={mapContainer} className="map-container h-[400px] w-full" />
    </div>
  );
};

export default Map;
