import React from './featured.scss'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { ResponsiveGeoMap } from '@nivo/geo';

// import { CircularProgress } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import "react-circular-progressbar/dist/styles.css";


const featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Payment chart</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
              
            <CircularProgressbarWithChildren value={70} text={"70%"} strokeWidth={4}/> 
            </div>
            <p className='title'>Total sales made today </p>
            <p className="amount">$500</p>
            <p className="desc">Previous transactions processing Last payments may not included</p>
             <div className="summary">
                  <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult positive">
                      <ExpandLessIcon fontSize='small'/>
                      </div>
                    <div className="resultAmount">$12.4K</div>
                  </div>
                  <div className="item">
                    <div className="itemTitle">Last Mounth</div>
                    <div className="itemResult positive">
                    <ExpandLessIcon fontSize='small'/>
                    </div>
                    <div className="resultAmount">$12.4K</div>
                  </div>
                  <div className="item">
                    <div className="itemTitle">This week</div>
                    <div className="itemResult negative">
                    <ExpandMoreIcon fontSize='small'/>
                    </div>
                    <div className="resultAmount">$-1K</div>
                  </div>
              </div>
             
        </div>
       
    </div>
  )
}

export default featured