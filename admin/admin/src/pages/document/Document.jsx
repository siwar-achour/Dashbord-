import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";

const Document = () => {
  return (
   <div className="listdoc">
    <Sidebar/>
    <div className="listdocContainer">
      <Navbar/>
      
   </div>
   
  </div>
  )
}

export default Document