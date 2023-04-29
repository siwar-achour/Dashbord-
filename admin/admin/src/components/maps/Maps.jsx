import React from './maps.scss'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
 
function Map() {
   return (
    <GoogleMap
    defaultZoom={10}
    defaultCenter={{lat:50.436321,lng:4.366430}}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function maps (){
  return(
    <div style={{width:'100%', height:'100vh'}}>
   <WrappedMap
   googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
    process.env.REACT_APP_GOOGLE_KEY
   }`}
   loadingElement={<div  style={{height:"100%"}}/>}
   containerElement={<div  style={{height:"100%"}}/>}
   mapElement={<div  style={{height:"100%"}}/>}
   
   />
    </div>
  )
  }
