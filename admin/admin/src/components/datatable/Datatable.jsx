import React from 'react'
import './datatable.scss'
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Datatable = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
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

  function handleFilter(event) {
    const newData = filterRecords.filter(row => {
      return (row.firstname.toLowerCase().includes(event.target.value.toLowerCase()) || row.lastname.toLowerCase().includes(event.target.value.toLowerCase())
        || row.email.toLowerCase().includes(event.target.value.toLowerCase()))
    });
    setRecords(newData)
  }





  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <ul>
              <i>
                <Link to='test' style={{ textDecoration: "none" }}>
                  <button onClick={() => navigate('new')} style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
                    <div className="viewButton" style={{ height: '60%' }} >    View</div>
                  </button>
                </Link>
              </i>
              <i>
                <button onClick={() => navigate('new')} style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
                  <div className="updateButton" style={{ height: '60%' }} > update</div>
                </button>
              </i>
              <i>
                <button onClick={() => navigate('new')} style={{ border: 'none', background: 'transparent', margin: '1.2em -2em auto' }}>
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
      <div>
        <input type='text' onChange={handleFilter} placeholder='Search' ></input>
      </div>
      <DataGrid className='datagrid'
        columns={Columns.concat(actionColumn)}
        rows={records}
        getRowId={(row) => row.id}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick

      />

    </div>




  )
}

export default Datatable







