import React from './datatable.scss'
import { DataGrid } from '@material-ui/data-grid';
import  {userColumns, userRows} from "../../datatablesource";

const Datatable = () => {
  const actioncolumn =[
    { 
      field : "action",
      headerName:"Action",
      width:300,
     renderCell:()=>{
       return(
         <div className='cellAction'>
           <div className="viewButton">View</div>
           <div className="deleteButton">Delete</div>
         </div>
       );
     },
  
   },
  ]
 
  return (
    <div className='datatable' style={ {height: '100%', width: '100%'}}>
  <DataGrid
        rows={userRows}
        columns={userColumns.concat(actioncolumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
     
    </div>
  )
}

export default Datatable