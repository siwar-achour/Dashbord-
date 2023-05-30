import React from "./listcomminuty.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Chartcomminuty from "../../components/chartcomminuty/Chartcomminuty"
import Linecomminuty from "../../components/linecomminuty/Linecomminuty";
//import Maps from "../../components/maps/Maps";
const Listcomminuty = () => {
  return (
    <div className="listcomminuty">
      <Sidebar />
      <div className="listcomminutyContainer">
        <Navbar />
        <form action="">
        <h1 className='static1'>Age Occurrences Chart</h1>
    
          <div className="type" style={{ display: 'flex' }}>
            <div >
              <Chartcomminuty style={{ marginBottom: '0px' }} />
            </div>
            <div className="com">
              <Linecomminuty />
            </div>
          </div>
        </form>






      </div>
    </div>

  )
}

export default Listcomminuty




