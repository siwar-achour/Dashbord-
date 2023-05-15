import React from 'react';
import './login.scss';
import { Button } from '@mui/material';
import  Box  from '@mui/material/Box';

//import { Link} from "react-router-dom";

const Login  = () => {


  return(
   
    
    <div className='login'>
     
    <form action='POST'>
    <Box
    sx={{
        width: 350,
        height: 350,
        backgroundColor: 'lightgrey',
      }}
    >
          <h1>Login</h1>
          <table>
            <tr>
              <th><label htmlfor="email">E-mail:</label></th>
              <th><input type="email" placeholder="youremail@gmail.com " id="email" 
              className="name" name="email"/>
        
              </th>
           </tr>
           <tr>
             <th><label htmlfor="password">password:</label></th>
             <th><input type="password" placeholder="********" id="password" 
             className="name" name="password"  />
              
             </th>
           </tr>
         
           </table>
           <div className='button'>
         
          <Button variant="contained"  loadingPosition='center' >Login</Button>
         
         
           </div>
            </Box>
 
</form>

</div>
  );
};
export default Login;


