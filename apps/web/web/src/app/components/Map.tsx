"use client";

import React from "react";
import Map, { Marker } from "react-map-gl/mapbox";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@/app/styles/marker.css';

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function Mapbox({ locations }: { locations: Location[] }) {
  return (
    <div className="w-full h-full">
      <Map
        initialViewState={{ // downtown vancouver
          latitude: 49.2790,
          longitude: -123.1207,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/motionubc/cmclcp797003401sq22ec2if1"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100%", height: "85%" }}
      >
        {locations.map((loc) => (
          <Marker key={loc.id} latitude={loc.latitude} longitude={loc.longitude} anchor="center">
            <div className="marker">
              {loc.id}
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default Mapbox;