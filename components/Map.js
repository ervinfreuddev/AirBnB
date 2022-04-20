import ReactMapGL from "react-map-gl";
import { useState } from "react";

function Map() {
  const [viewport, setviewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ervinndemmeze/cl1w8x07b002q14nuekhhryuw"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    ></ReactMapGL>
  );
}

export default Map;
