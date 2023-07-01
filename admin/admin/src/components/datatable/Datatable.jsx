import React from 'react'
import './datatable.scss'
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Datatable = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  const [redirect, setRedirect] = useState(false);

  const handleUpdateClick = (clientId ) => {
    return <Navigate to={`/update/${clientId}`} />;
  };

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
      field: 'age',
      headerName: 'Age',
      width: 130,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'email',
      headerName: 'Email',
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
    const getClients = async () => {

      axios.get('/clients')
        .then(res => {
          console.log(res.data); // Check the response data in the console
          setRecords(res.data,);
          setFilterRecords(res.data);

        })
        .catch(err => { console.log(err) });
    };
    getClients()
  }, [])
  function handleDelete(clientId) {
    // Send a DELETE request to your backend
    axios.delete(`/clients/${clientId}`)
      .then(res => {
        // Update the records after deletion
        const updatedRecords = records.filter(record => record.id !== clientId);
        setRecords(updatedRecords);
      })
      .catch(err => {
        console.log(err);
        // Handle deletion errors
      });
  }
  

  function handleFilter(event) {
    const searchValue = event.target.value.toLowerCase();
  
    const newData = filterRecords.filter((row) => {
      const { firstname, lastname, email } = row;
  
      return (
        (firstname && firstname.toLowerCase().includes(searchValue)) ||
        (lastname && lastname.toLowerCase().includes(searchValue)) ||
        (email && email.toLowerCase().includes(searchValue))
      );
    });
  
    setRecords(newData);
  }
 
  




  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <ul>
              <i>
                <Link to='test' style={{ textDecoration: "none" }}>
                  <button style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
                    <div className="viewButton" style={{ height: '60%' }} >    View</div>
                  </button>
                </Link>
              </i>
              <i>
              <Link to={`update/${params.row._id}`} style={{ textDecoration: "none" }}>
                <button style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
                  <div className="updateButton" style={{ height: '60%' }} > update</div>
                </button>
                </Link>
              </i>
              <i>
              <button onClick={() => handleDelete(params.row.id)} style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
  <div className="deleteButton" style={{ height: '60%' }}>Delete</div>
</button>
              </i>
            </ul>

          </div>
        );
      },

    },
  ];


  return (


    <div className='datatable' >
       <div className="dataTableTitle">
    Add New Client
    <div className='espace'>
      <th> <Link to="viewclient" 
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
      <input type="text" onChange={handleFilter} placeholder="Search" />

      </div>
      <DataGrid className='datagrid'
        columns={Columns.concat(actionColumn)}
        rows={records}
        getRowId={(row) => row.id}
        pageSize={30}
        rowsPerPageOptions={[40]}
        checkboxSelection
        disableSelectionOnClick

      />

    </div>




  )
}

export default Datatable







