import React from "react";

import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const location = route.params.coords;
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
};

export default MapScreen;
