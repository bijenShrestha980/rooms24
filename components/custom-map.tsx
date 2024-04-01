"use client";
import ReactMapboxGl, {
  Layer,
  Feature,
  ZoomControl,
  ScaleControl,
} from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import logo from "@/assets/images/logo.png";
import Image from "next/image";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYmlqZW4iLCJhIjoiY2w0ODJldHRmMDJsNDNpcnk5MndpNTVwOCJ9.oI1lm1fea7Ktv4XqZbOSTg",
});

const CustomMap = () => {
  return (
    <Map
      style="mapbox://styles/bijen/cl4887nzz003u15p1s53vhbhy"
      containerStyle={{
        height: "90vh",
        width: "90vw",
      }}
      center={[85.352, 27.721]}
      zoom={[13]}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "harbor-15" }}>
        <Feature coordinates={[85.352, 27.721]} />
      </Layer>

      <ZoomControl />
      <ScaleControl />
    </Map>
  );
};

export default CustomMap;
