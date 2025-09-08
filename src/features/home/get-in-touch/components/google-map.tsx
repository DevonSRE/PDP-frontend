'use client';

import { Map,  } from "@vis.gl/react-google-maps";
import React from "react";
import { GoogleMapProvider } from "./google-map-provider";

const GoogleMap = () => {
  return (
    <div className="w-full h-[500px] ">
        <GoogleMapProvider>
         <Map
        defaultZoom={13}
        defaultCenter={{ lat: 10.4811, lng: 7.4403 }}
        gestureHandling={"cooperative"}
        disableDefaultUI={false}
        className="h-full w-full"
      />
      </GoogleMapProvider>
    </div>
  );
};

export default GoogleMap;