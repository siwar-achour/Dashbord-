
import ReactMapGl from "react-map-gl";
import {useState} from 'react';


export default function Maps() {
  const [viewport , setViewport]= useState({
    latitude : 45.4211,
    longitude:-75.6903,
    with:'100vw',
    height:'100vh',
    zoom:10
  });
  return (
    <div>
      <ReactMapGl {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
        markers here
      </ReactMapGl>
    </div>
  )
}
