import * as React from 'react';
import Map, { Source, Layer } from 'react-map-gl';


const TOKEN = 'pk.eyJ1IjoicGFvbG9kZWRvbWluaSIsImEiOiJjbDJrNm44Mm4wMTk0M2xwY3FvbTBqNndmIn0.kkd8SXEw3FO1wmmytYcgLg'

const geojson = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', geometry: { type: 'Point', coordinates: [-122.4, 37.8] } },
    { type: 'Feature', geometry: { type: 'Point', coordinates: [-122.5, 37.8] } }
  ]
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#ff0000'
  }
};

export default function MapBX() {
  return <Map
    mapboxAccessToken={TOKEN}
    initialViewState={{
      longitude: -122.45,
      latitude: 37.78,
      zoom: 10
    }}
    style={{ width: '100%', height: 600 }}

    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
       <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
  </Map>;
}

