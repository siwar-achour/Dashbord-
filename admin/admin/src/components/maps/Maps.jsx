import "mapbox-gl/dist/mapbox-gl.css"
import Map, { FullscreenControl,GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import React, {useState} from 'react';
import './redloc.jpg';
 function Maps() {
  const [lng,setLng]=useState(9.400138);
  const [lat,setLat]=useState(33.8439408);
 
// Set marker options.


  return (
    
      <Map 
      mapboxAccessToken="pk.eyJ1Ijoic2l3YXI0NCIsImEiOiJjbGhrc2dleHAwajBwM2RzMXFmMHN3Z3dyIn0.DwGm2V9r12GMMozAntZXKQ"
      style={{
        width:"100%",
        height: "700px",
        borderRadius:"8px",
        border:"2px solid transparent"}}
        projection="globe"
        zoom='8'
      initialViewState={{
        latitude : lat,
        longitude:lng,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    
      >
        <Marker
       
          longitude={lng}
          latitude={lat}
          anchor="bottom"
          draggable
      />
        <button className="btn-marker">
        <img src="/redloc.jpg" alt="" />
      </button> 
      
      <NavigationControl
      position="bottom-right"
      />
     
      <FullscreenControl/>
      <GeolocateControl/>
      </Map>
   
  );
}
export default Maps;