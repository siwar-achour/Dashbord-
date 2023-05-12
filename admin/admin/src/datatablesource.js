export const userColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 200,
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
      width: 200,
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
         
          <p>{params.row.email}</p>
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,email:'Snow.Jon@gmail.com', status:'active'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,status:'pending' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,status:'passive' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 52},
    { id: 6, lastName: 'Melisandre', firstName: 30, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  export const rideColumns = [
    { field: 'id_Ride', headerName: 'ID', width: 100 },
    {
      field: 'Type',
      headerName: 'Type',
      width: 200,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.type}</span>
       
          </div>
        );
      },
    },
    {
      field: 'Name',
      headerName: 'Name',
      width: 200,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.name}</span>
       
          </div>
        );
      },
    },
    {
      field: 'pick-drop adress',
      headerName: 'Pick/drop adress',
      width: 200,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.Pick}</span>
       
          </div>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date Time',
      width: 200,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.date}</span>
       
          </div>
        );
      },
    },
    {
      field: 'cost',
      headerName: 'Cost',
      width: 200,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.cost}</span>
       
          </div>
        );
      },
    },
  ];
    
    export const rideRows = [
      { id: 1, type: 'Ride', name: 'Jon', Pick: "35" ,date:'jumpark to filege',cost:'200$', status:'active'},
      { id: 2, type: 'Ride', name: 'ghofrane', Pick: "35" ,date:'zone indistruelle to hamadi abid sokra',cost:'200$', status:'active'},
      { id: 3, type: 'Ride', name: 'siwar', Pick: "35" ,date:'elnasser to sidi bou',cost:'400$', status:'active'},
      { id: 4, type: 'Ride', name: 'wafa', Pick: "35" ,date:'sokra1 to lac1',cost:'300$', status:'active'},
      { id: 5, type: 'Ride', name: 'hello', Pick: "35" ,date:'Snow.Jon@gmail.com',cost:'175$', status:'active'},
    
    ];


    export const driverColumns = [
      { field: 'id', headerName: 'ID', width: 100 },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
            <span>{params.row.firstNamed}</span>
         
            </div>
          );
        },
      },
     
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.lastNamed}</p>
            </div>
          );
        },
      },
  
      {
        field: 'Phone',
        headerName: 'Phone',
        width: 130,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.phoned}</p>
            </div>
          );
        },
        
  
      },
      {
        field: 'Documents',
        headerName: 'Documents',
        width: 230,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.documentsd}</p>
            </div>
          );
        },
        
  
      },
      { 
        field : "id_vehicules",
        headerName:"id_vehicules",
        width:160,
      renderCell:(params)=>{
         return(
           <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.statusd}
           </div>
         );
       },
    
     },
      
    ];
  
  
  export const driverRows = [
      { id: 1, lastNamed: 'Snow', firstNamed: 'Jssson', phoned: 35 ,documentsd:'pdf', id_vehicules:'active'}, 
      { id: 2, lastNamed: 'Siwar', firstNamed: 'achour', phoned: 3526986405 ,documentsd:'Siwar.Jon@gmail.com', id_vehicules:'active'},
      
    ];