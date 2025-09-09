'use client';

import { APIProvider } from "@vis.gl/react-google-maps";
import { ReactNode } from "react";

export function GoogleMapProvider({ children }: { children: ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error("Google Maps API key is not set.");
    return null;
  }

  return (
    <APIProvider apiKey={apiKey}>
      {children}
    </APIProvider>
  );
}