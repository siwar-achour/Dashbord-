import React from './singleride.scss'
import Chart from '../../components/chart/Chart';
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar  from '../../components/navbar/Navbar';
import Listride from '../../components/tableride/Tableride';
import img1 from './photo.jpg';
import './photo.jpg';
const Singleride = () => {
  return (
    <div className='singleride'>
    <Sidebar/>
     <div className='singlerideContainer'>
       <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
           <h1 className="title">Information</h1>
           <div className="item">
            <img src={img1}
             alt=""
              className="itemImg" />
              <div className="details">
                 <h1 className="itemTitle">Siwar Achour</h1>
                <div className="detailItem">
                <span className="itemkey">Email:</span>
                <span className="detailValue">siwarachour999@gmail.com</span>
                </div> 
                <div className="detailItem">
                <span className="itemkey">Phone:</span>
                <span className="detailValue">+216 26 986 405</span>
                </div>
                <div className="detailItem">
                <span className="itemkey">Adress:</span>
                <span className="detailValue">Avenue Habib bourguiba</span>
                </div>
                <div className="detailItem">
                <span className="itemkey">Country:</span>
                <span className="detailValue">Sokra</span>
                </div>
              </div>
           </div>
           
          </div>
          <div className="right">
           <Chart aspect={4 / 1} title= "User Spending last 6 Months"/> 
          
          </div>
        
        </div>
        <div className="bottom">
        <h1 className="title">Last transactions</h1>
        <Listride/>
          </div>

     </div>

    </div>
  )
}

export default Singleride