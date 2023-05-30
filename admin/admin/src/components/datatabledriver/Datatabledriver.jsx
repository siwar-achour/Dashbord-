import React from './datatabledriver.scss'
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { useState ,useEffect} from 'react';

const Datatabledriver = () => {
  const navigate = useNavigate();
  const[records,setRecords]=useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  
  const Columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      renderCell: (params) => <span>{params.id}</span>,


    },
  
    {
      field: 'firstname',
      headerName: 'First Name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'lastname',
      headerName: 'Last name',
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 130,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'documents',
      headerName: 'Documents',
      width: 230,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'documents',
      headerName: 'Documents',
      width: 230,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'vehiculeId',
      headerName: 'vehicule_id',
      width: 230,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 230,
      renderCell: (params) => <span
      className={params.value ? 'active' : 'blocked'}
    >
      {params.value ? 'Active' : 'Blocked'}
    </span>,
    },
  ];

  useEffect(() => {
    const getDrivers = async () => {

      axios.get('/drivers')
        .then(res => {
          console.log(res.data); // Check the response data in the console
          setRecords(res.data,);
          setFilterRecords(res.data);

        })
        .catch(err => { console.log(err) });
    };
    getDrivers()
  }, [])
  function handleDelete(_id) {
    // Envoyer une requête DELETE à votre backend
    axios.delete(`/drivers/${_id}`)
      .then(res => {
        // Mettre à jour les enregistrements après la suppression
        const updatedRecords = records.filter(record => record.id !== _id);
        setRecords(updatedRecords);
      })
      .catch(err => {
        console.log(err);
        // Gérer les erreurs de suppression
      });
  }

  const handleUpdate = (driverId) => {
    // Retrieve the driver information that needs to be updated
    const updatedDriver = {
      // Include the updated fields here (e.g., firstname, lastname, phone, etc.)
    };
  
    // Send a PUT request to update the driver information in the database
    axios.put(`/drivers/${driverId}`, updatedDriver)
      .then(res => {
        // Handle the successful update (e.g., show a success message, redirect, etc.)
      })
      .catch(err => {
        console.log(err);
        // Handle update errors
      });
  };


  function handleFilter(event) {
    const newData = filterRecords.filter(row => {
      return (row.firstname.toLowerCase().includes(event.target.value.toLowerCase()) || row.lastname.toLowerCase().includes(event.target.value.toLowerCase())
        || row.status.toLowerCase().includes(event.target.value.toLowerCase()))
    });
    setRecords(newData)
  }




 
   
  const actionColumn =[
    
    { 
      field : "action",
      headerName:"Action",
      width:250,
    
      renderCell: (params) => {
        const driverId = params.row.id;
   
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
           <button  onClick={() => handleUpdate(driverId)} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
            <div className="updateButton"style={ {height: '60%'}} > update</div>
           </button>
           </Link>
           </i>
           <i>
           <button  onClick={() => handleDelete(driverId)} style={{border:'none', background:'transparent',margin:'1.2em -2em auto' }}>
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
    <div className='datatabledriver' style={ {height: '90%', width: '95%'}}>
  <div className="dataTabledriverTitle">
    Add New Driver
    <div className='espace'>
      <th> <Link to="viewdriver" 
    style={{textDecoration:"none"}}
    className='link'>
    Add New 
    </Link></th>
      <th>
      <Link to="/home" 
    style={{textDecoration:"none"}}
    className='link'>
     Back
    </Link>
      </th>
    </div>
   
  </div>
  <div>
      <input type='text' onChange={handleFilter} placeholder='Search' ></input>
    </div>
  <DataGrid className='datagrid'
        rows={records}
        columns={Columns.concat(actionColumn)}
        getRowId={(row) => row.id}
        pageSize={12}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
     
    </div>
  )
}

export default Datatabledriver