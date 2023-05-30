import "mapbox-gl/dist/mapbox-gl.css"
import Map, { Popup,FullscreenControl,GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import React, {useEffect, useState} from 'react';
import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';
import axios from "axios";
import './mapinactifs.scss';
 function Maps() {
 const[rideinactifs,setPins]=useState([]);
 const[viewport,setViewport]=useState({
  
    width:"100px",
    height: "700px",
    borderRadius:"8px",
    border:"2px solid transparent",
    projection:"globe",
    latitude: 33.8869, // Latitude centrée sur la Tunisie
    longitude: 9.5375, // Longitude centrée sur la Tunisie
    zoom:6
  
 })
// Set marker options.
useEffect(()=>{
  const getRideinactifs = async()=>{
    try{
      const res= await axios.get('/rideinactifs');
      setPins(res.data)
    }catch(err){
      console.log(err)
    }
  };
  getRideinactifs ()
},[])



  return (
 
      <Map 
      {...viewport}
       mapboxAccessToken="pk.eyJ1Ijoic2l3YXI0NCIsImEiOiJjbGhrc2dleHAwajBwM2RzMXFmMHN3Z3dyIn0.DwGm2V9r12GMMozAntZXKQ"
      onViewportChange={(nextViewport)=>setViewport(nextViewport)}
      mapStyle="mapbox://styles/siwar44/clhkr027h01oh01p641cp7sdt"
     
      >
   {rideinactifs.map(p=>(
          <>
   
     <Marker
          longitude={p.long}
          latitude={p.lat}
          offsetLeft={-20}
          offsetTop={-10}
       
       >
       
       <RoomIcon style={{fontSize:viewport.zoom*4, color:"red"}} />
      </Marker>
      
      <Popup 
        longitude={p.long} 
        latitude={p.lat}
        anchor="bottom"
       >
       <div >
        <label>Title</label>
        <h4 className="place">{p.title}</h4>
        <div className="lab">
        <label>Matricule</label>
        </div>
        <p className="desc">{p.Matricule}</p>
        <div className="lab">
        <label>Rating</label>
        </div>
        <div className="stars">
          <StarIcon className="stars" />
          <StarIcon className="stars"/>
          <StarIcon className="stars"/>
          <StarIcon className="stars"/>
          <StarIcon className="stars"/>
        </div>
        <div className="lab">
        <label>Information</label>
        </div>
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