import React from "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable"
//import Maps from "../../components/maps/Maps";
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
        
      
      </div>
    </div>
        
  )
}

export default List




