import React from './singledoc.scss'
import Chart from '../../components/chart/Chart';
import Sidebar  from '../../components/sidebar/Sidebar'
import Navbar  from '../../components/navbar/Navbar';
import List from '../../components/table/Table';


const Single = () => {
  return (
    <div className='singledoc'>
    <Sidebar/>
     <div className='singledocContainer'>
       <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
           <h1 className="title">Information</h1>
           <div className="item">
           
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
        <List/>
          </div>

     </div>

    </div>
  )
}

export default Single