import React from "react";
import { createRoot } from 'react-dom/client';
import EventosApp from "./EventosApp";
// import 'mapbox-gl/dist/mapbox-gl-csp';
// import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
// mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleDU1MzQiLCJhIjoiY2t3MnYyMzdiMDBmZDJ4b3lqNWRiM2NlMCJ9.9j8v2hJJ8meQHE6g54x6BA';

const divRoot= document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<EventosApp />);
