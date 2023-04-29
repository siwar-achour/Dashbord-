export const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 130,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.firstName}</span>
          <p>{params.row.age}</p>
          </div>
        );
      },
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 130,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.firstName}</span>
         
          </div>
        );
      },
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 130,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
         
          <p>{params.row.lastName}</p>
          </div>
        );
      },
    },

    {
      field: 'Age',
      headerName: 'Age',
      width: 130,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
         
          <p>{params.row.age}</p>
          </div>
        );
      },
      

    },
    {
      field: 'Mail',
      headerName: 'Mail',
      width: 230,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
         
          <p>{params.row.mail}</p>
          </div>
        );
      },
      

    },
    { 
      field : "status",
      headerName:"Status",
      width:160,
    renderCell:(params)=>{
       return(
         <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
         </div>
       );
     },
  
   },
    
  ];


export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,mail:'Snow.Jon@gmail.com', status:'active'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,status:'pending' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,status:'passive' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];