import React from "./listprice.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Chartprice from "../../components/chartprice/Chartprice"
import Chartprice2 from "../../components/chartprice2/Chartprice2"
import Charttheorical from "../../components/charttheorical/Charttheorical"
import Charttheorical1 from "../../components/charttheorical/Charttheorical1"
import Chartresult from "../../components/charttheorical/Chartresult"
import Lineresult from "../../components/charttheorical/Lineresult"

//import Maps from "../../components/maps/Maps";
const Listprice = () => {
  return (
    <div className="listprice">

      <Sidebar />

      <div className="listcomminutyContainer">
        <Navbar />

        <h1 className='static1'>Statistics of Theoritical and real price</h1>
       
        <div className="type" style={{ display: 'flex' }}>
          <div className="price">
            <div >
              <Chartprice style={{ marginBottom: '0px' }} />
            </div>
            <div className="com">
              <Chartprice2 />
            </div>
          </div>

        </div>


        <div className="type" style={{ display: 'flex' }}>
          <div className="price">
            <div >
              <Charttheorical style={{ marginBottom: '0px' }} />
            </div>
            <div className="com">
              <Charttheorical1 />
            </div>
          </div>
        </div>
        <div className="result">
        <Chartresult/>
        <Lineresult/>
        </div>
   <div>
 
   </div>
      </div>
     
    </div>
  )
}

export default Listprice




