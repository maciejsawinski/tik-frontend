import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Flex, Icon } from "@chakra-ui/react";

const Map = ({ alerts }) => {
  const config = {
    mapStyle: "mapbox://styles/maciejsawinski/cl4vevdq1004914qr7af0i81p",
    mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
    width: "100%",
    height: "100%",
    latitude: 51.0196,
    longitude: 16.75396,
    zoom: 8.3,
    style: { borderRadius: "0.5rem" },
    antialias: true,
    attributionControl: false,
    interactive: false,
  };

  return (
    <ReactMapGL {...config}>
      {alerts.map((alert, i) => (
        <Marker
          key={i}
          latitude={alert.geo_lat}
          longitude={alert.geo_long}
          anchor="bottom"
          offset={[0, 2]}
        >
          <Flex
            color={alert.typ === "W" ? "#ff3333" : "#a181ff"}
            fontSize="6xl"
          >
            <span className="icon-location"></span>
          </Flex>
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;
