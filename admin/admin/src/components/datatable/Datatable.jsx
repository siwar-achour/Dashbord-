import React from './datatable.scss'
import { DataGrid } from '@material-ui/data-grid';
import  {userColumns, userRows} from "../../datatablesource";
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';

const Datatable = () => {
  const navigate = useNavigate();
  const[records,setRecords]=useState(userRows);

  
  
  function handleFilter(event){
        const newData = records.filter(row => 
          {return row.lastName.toLowerCase().includes(event.target.value.toLowerCase())
         
            
          } );
          setRecords(newData) }
       

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
           <button onClick={()=>navigate('new')} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
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
    <div className='datatable' style={ {height: '90%', width: '95%'}}>
  <div className="dataTableTitle">
    Add New User
    <Link to="new" 
    style={{textDecoration:"none"}}
    className='link'>
    Add New 
    </Link>
    </div>
    <div>
      <input type='text' onChange={handleFilter} placeholder='Search' ></input>
    </div>
  <DataGrid
        records={userRows}
        columns={userColumns.concat(actionColumn)}
        rows={records}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
       
          />
        
    </div>
  )
}

export default Datatable