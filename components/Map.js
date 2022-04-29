import { useState } from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { Result } from "postcss";

function Map({ searchResults }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  //   transform the search results object into the
  //   { latitude: 52.516272, longitude: 13.377722 }
  //   object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  console.log(coordinates);

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ervinndemmeze/cl1w8x07b002q14nuekhhryuw"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onDrag={(nextViewport) => setViewport(nextViewport)}
      onZoom={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
