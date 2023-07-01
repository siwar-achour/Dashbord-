import React from './single.scss'
import Chart from '../../components/chart/Chart';
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar  from '../../components/navbar/Navbar';
import List from '../../components/table/Table';
import img1 from './photo.jpg';
import './photo.jpg';
const Single = () => {
  return (
    <div className='single'>
    <Sidebar/>
     <div className='singleContainer'>
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
       

     </div>

    </div>
  )
}

export default Single