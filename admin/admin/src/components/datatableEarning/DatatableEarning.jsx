import React from './datatableEarning.scss'
import { DataGrid } from '@material-ui/data-grid';
import  {earningColumns, earningRows} from "../../datatablesource";
import {Link, useNavigate} from "react-router-dom";

const DatatableEarning = () => {
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
           <Link to='singledriver' style={{textDecoration:"none"}}>
           <button onClick={()=>navigate('new')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
            <div className="viewButton"style={ {height: '60%'}} >    View</div>
           </button>
           </Link>
           </i>
           <i>
           <Link to='viewdriver' style={{textDecoration:"none"}}>
           <button onClick={()=>navigate('new')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
            <div className="updateButton"style={ {height: '60%'}} > update</div>
           </button>
           </Link>
           </i>
           <i>
           <button onClick={()=>navigate('new')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
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
    <div className='datatableEarning' style={ {height: '90%', width: '95%'}}>
  <div className="dataTableEarningTitle">
    List Admin Earnings
    <Link to="/" 
    style={{textDecoration:"none"}}
    className='link'>
    Back
    </Link>
  </div>
  <DataGrid
        rows={earningRows}
        columns={earningColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
     
    </div>
  )
}

export default DatatableEarning