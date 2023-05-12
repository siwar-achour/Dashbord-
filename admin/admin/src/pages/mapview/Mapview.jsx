import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
//import Datatable from "../../components/datatable/Datatable"
import Maps from "../../components/maps/Maps";

const Mapview = () => {
  return (
   <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Maps/>
   </div>
   
  </div>
  )
}

export default Mapview