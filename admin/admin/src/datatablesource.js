




export const userRows = [
    { id: 1, lastname: 'Snow', firstname: 'Jon', age: 35 ,email:'Snow.Jon@gmail.com', status:'active'},
    { id: 2, lastname: 'Lannister', firstname: 'Cersei', age: 42,status:'pending' },
    { id: 3, lastname: 'Lannister', firstname: 'Jaime', age: 45,status:'passive' },
    { id: 4, lastname: 'Stark', firstname: 'Arya', age: 16 },
    { id: 5, lastname: 'Targaryen', firstname: 'Daenerys', age: 52},
    { id: 6, lastname: 'Melisandre', firstname: 30, age: 150 },
    { id: 7, lastname: 'Clifford', firstname: 'Ferrara', age: 44 },
    { id: 8, lastname: 'Frances', firstname: 'Rossini', age: 36 },
    { id: 9, lastname: 'Roxie', firstname: 'Harvey', age: 65 },
  ];
  export const rideColumns = [
    { field: 'id', headerName: 'ID', width: 95 },
    {
      field: 'Type',
      headerName: 'Type',
      width: 110,
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
      width: 115,
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
      width: 185,
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
      width: 145,
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
      width: 110,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
          <span>{params.row.cost}</span>
       
          </div>
        );
      },
    },
    {
      field: 'vehicule',
      headerName: 'Matricule vehicule',
      width: 195,
      renderCell:(params) =>{
        return (
          <div className="cellWithTable">
         
          <p>{params.row.phoned}</p>
          </div>
        );
      },},
      {
        field: 'client',
        headerName: 'Client Name',
        width: 155,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.phoned}</p>
            </div>
          );
        },}
    
  ];
    
    export const rideRows = [
      { id: 1, type: 'Ride', name: 'Jon',date: "35" ,Pick: 'jumpark to filege',cost:'200$', status:'active',vehicule:"",client:''},
      { id: 2, type: 'Ride', name: 'ghofrane',date:"35" , Pick:'zone indistruelle to hamadi abid sokra',cost:'200$', status:'active'},
      { id: 3, type: 'Ride', name: 'siwar', date: "35" , Pick:'elnasser to sidi bou',cost:'400$', status:'active'},
      { id: 4, type: 'Ride', name: 'wafa', date: "35" , Pick:'sokra1 to lac1',cost:'300$', status:'active'},
      { id: 5, type: 'Ride', name: 'hello',date:"35" , Pick:'Snow.Jon@gmail.com',cost:'175$', status:'active'},
    
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
    

    
    export const vehiculeColumns = [
      { field: 'id', headerName: 'ID_vehicule', width: 100 },
      {
        field: 'Matricule',
        headerName: 'matricule',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
            <span>{params.row.matricule}</span>
         
            </div>
          );
        },
      },
     
      {
        field: 'Categorie',
        headerName: 'categorie',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.categorie}</p>
            </div>
          );
        },
      },
  
      { 
        field : "Status",
        headerName:"status",
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
  
  
  export const vehiculeRows = [
      { id: 1, matricule: '150 Tunis 600', categorie: 'Polo', status: "active" }, 
      { id: 2, matricule: '160 Tunis 990', categorie: 'Cherry', status: "pending" }, 
      { id: 3, matricule: '203 Tunis 1950', categorie: 'Bmw', status: "active" }, 
      
    ];








    export const earningColumns = [
      { field: 'id', headerName: 'Ride_ID', width: 100 },
      {
        field: 'Ridetype',
        headerName: 'Ride type',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
            <span>{params.row.Ridetype}</span>
         
            </div>
          );
        },
      },
     
      {
        field: 'DriverName',
        headerName: 'Driver Name',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.drivername}</p>
            </div>
          );
        },
      },
  
      {
        field: 'RideName',
        headerName: 'Ride Name',
        width: 130,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.ridename}</p>
            </div>
          );
        },
        
  
      },
      { 
        field : "Total ride",
        headerName:"Total ride",
        width:160,
      renderCell:(params)=>{
         return(
          <div className="cellWithTable">
           
          <p>{params.row.totalride}</p>
          </div>
         );
       },
    
     },
      {
        field: 'Payment method',
        headerName: 'Payment method',
        width: 230,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.payementmethod}</p>
            </div>
          );
        },
        
  
      },
     
      
    ];
  
  
  export const earningRows = [
      { id: 1, Ridetype: 'Snow',drivername: 'Jssson', ridename: 35 ,totalride:'pdf',payementmethod:'active'}, 
      { id: 1, Ridetype: 'Siwar',drivername: 'achour', ridename: 35 ,totalride:'200$',payementmethod:'active'}, 
    
      
    ];











    export const promoColumns = [
      { field: 'id', headerName: 'Promo_id', width: 100 },
      {
        field: 'Code Name',
        headerName: 'Code Name',
        width: 150,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
            <span>{params.row.codename}</span>
         
            </div>
          );
        },
      },
     
      {
        field: 'Type',
        headerName: 'type',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.type}</p>
            </div>
          );
        },
      },
  
      {
        field: 'Value',
        headerName: 'Value',
        width: 120,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.value}</p>
            </div>
          );
        },
        
  
      },
      { 
        field : "Usage Limit",
        headerName:"Usage Limit",
        width:180,
      renderCell:(params)=>{
         return(
          <div className="cellWithTable">
           
          <p>{params.row.usage}</p>
          </div>
         );
       },
    
     },
      {
        field: 'User Used',
        headerName: 'User Used',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.userused}</p>
            </div>
          );
        },
        
  
      },
      {
        field: 'Expired Date',
        headerName: 'Expired Date',
        width: 200,
        renderCell:(params) =>{
          return (
            <div className="cellWithTable">
           
            <p>{params.row.date}</p>
            </div>
          );
        },
        
  
      },
     
      
    ];
  
  
  export const promoRows = [
      { id: 1, codename: 'Snow25',type: 'Percent',value: 15 ,usage:5,userused:6, date:'mars'}, 
      { id: 2,  codename: 'Siwar25',type: 'Amount', value: 5 ,usage:6,userused:10,date:'avril'}, 
    
      
    ];