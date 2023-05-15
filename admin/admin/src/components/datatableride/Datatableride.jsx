import React from './datatableride.scss'
import { DataGrid } from '@material-ui/data-grid';
import  {rideColumns, rideRows} from "../../datatablesource";
import {Link, useNavigate} from "react-router-dom";

const Datatableride = () => {
  const navigate = useNavigate();
  const actionColumn =[
    { 
      field : "action",
      headerName:"Action",
      width:250,
     renderCell:()=>{
       return(
         <div className='cellAction'>
            <ul>
                <i>
           <Link to='test' style={{textDecoration:"none"}}>
           <button onClick={()=>navigate('/ride')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
            <div className="viewButton"style={ {height: '60%'}} >    View</div>
           </button>
           </Link>
           </i>
           <i>
           <button onClick={()=>navigate('new')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
            <div className="updateButton"style={ {height: '60%'}} > update</div>
           </button>
           </i>
           <i>
           <button onClick={()=>navigate('newr')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
           <div className="deleteButton"style={ {height: '60%'}}>Delete</div>
           </button>
           </i>
           </ul>
         </div>
       );
     },
  
   },
  ];
 
  return (
    <div className='datatableride' style={ {height: '90%', width: '95%'}}>
  <div className="dataTablerideTitle">
    Add New Ride
    <Link to="newride" 
    style={{textDecoration:"none"}}
    className='link'>
    Add New 
    </Link>
  </div>
  <DataGrid
        rows={rideRows}
        columns={rideColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
     
    </div>
  )
}

export default Datatableride