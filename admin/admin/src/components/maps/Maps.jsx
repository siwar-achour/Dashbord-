import "mapbox-gl/dist/mapbox-gl.css"
import Map, { Popup,FullscreenControl,GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import React, {useEffect, useState} from 'react';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios";
import './maps.scss';
 function Maps() {
 const[pins,setPins]=useState([]);
 const[viewport,setViewport]=useState({
  
    width:"100px",
    height: "700px",
    borderRadius:"8px",
    border:"2px solid transparent",
    projection:"globe",
    lat : 35.52469159635259,
    long:11.038349313917042,
    //zoom:15
  
 })
// Set marker options.
useEffect(()=>{
  const getPins = async()=>{
    try{
      const res= await axios.get('/pins');
      setPins(res.data)
    }catch(err){
      console.log(err)
    }
  };
  getPins ()
},[])



  return (
 
      <Map 
      {...viewport}
       mapboxAccessToken="pk.eyJ1Ijoic2l3YXI0NCIsImEiOiJjbGhrc2dleHAwajBwM2RzMXFmMHN3Z3dyIn0.DwGm2V9r12GMMozAntZXKQ"
      onViewportChange={(nextViewport)=>setViewport(nextViewport)}
      mapStyle="mapbox://styles/siwar44/clhkr027h01oh01p641cp7sdt"
     
      >
   {pins.map(p=>(
          <>
   
     <Marker
          longitude={p.long}
          latitude={p.lat}
          offsetLeft={-20}
          offsetTop={-10}
       
       >
       
       <RoomIcon style={{fontSize:viewport.zoom*100}} />
      </Marker>
      
      <Popup 
        longitude={p.long} 
        latitude={p.lat}
        anchor="bottom"
       >
       <div className="card">
        <label>{p.title}</label>
        <h4 className="place">hi</h4>
        <label>Review</label>
        <p className="desc">good ride</p>
        <label>Rating</label>
        <div className="stars">
          <StarIcon className="star" />
          <StarIcon className="star"/>
          <StarIcon className="star"/>
          <StarIcon className="star"/>
          <StarIcon className="star"/>
        </div>
        <label>Information</label>
        <span className="username">Created by <b>{p.username}</b></span>
        <span className="date">1 hour ago</span>

       </div>
      </Popup>
   </>
   ))}
  
    
     <NavigationControl
      position="bottom-right"
     />
      <FullscreenControl/>
      <GeolocateControl/>
      
      </Map>
   
  );
}
export default Maps;