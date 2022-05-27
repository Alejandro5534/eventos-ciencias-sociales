import React from 'react';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import 'maplibre-gl/dist/maplibre-gl.css';


export const MapView= ()=> {

    return <Map 
    initialViewState={{
        latitude: 19.645119,
        longitude: -101.225130,
        zoom: 14
      }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        mapLib={maplibregl} 
        style={{
                margin:'40px',
                height: '50vh',
                left: '10vw',
                position: 'sticky',
                top: '20vh',
                width: '30vw',
    }} />;
}

export default MapView

