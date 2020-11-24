import React from "react";
import { Location } from "../../model/Location";

export interface OpenStreetMapFrameProps {
  location: Location;
}

export function OpenStreetMapFrame(props: OpenStreetMapFrameProps) {
  const { location } = props;

  const bBox = calcBoundingBox(location);

  return (
    <iframe
      title="open-steet-map-frame"
      width="350"
      height="275"
      frameBorder="0"
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${bBox.minLon}%2C${bBox.minLat}%2C${bBox.maxLon}%2C${bBox.maxLat}&layer=mapnik&marker=${location.latitude}%2C${location.longitude}`}
    ></iframe>
  );
}

interface BoundingBox {
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
}

const calcBoundingBox = (location: Location): BoundingBox => {
  const halfMile = 0.00753;

  return {
    minLat: location.latitude - halfMile,
    minLon: location.longitude - halfMile,
    maxLat: location.latitude + halfMile,
    maxLon: location.longitude + halfMile,
  };
};
