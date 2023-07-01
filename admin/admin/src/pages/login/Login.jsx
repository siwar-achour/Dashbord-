import React, { useState } from 'react';
import './login.scss';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import axios from "axios";

import { useNavigate} from "react-router-dom";
//import { Link} from "react-router-dom";






import img from './logo.png';
import img1 from './back.png';
function Login () {
 
const[email,setEmail]=useState([]);
const[password,setPassword]=useState([]);

const navigate=useNavigate();
  async function login(event)
{
  event.preventDefault();
  try{
    const res =await axios
    .post("http://localhost:3010/user/Signin",
    {
      email:email,
      password:password,
    });
    const data = res.data;
    if (data.status === "SUCCESS") {
     
      
      console.log("Message:", data.message);
      navigate("/home");
     
      // Autres actions à effectuer en cas de connexion réussie
    } else {
      console.log("Signin failed");
      console.log("Message:", data.message);
      alert("Login Failed");
      // Autres actions à effectuer en cas d'échec de connexion
    
    }
    
  }
    catch(err){alert(err);}
}  



return (
  
    <div className='login' style={{ 
      backgroundImage: `url(${img1})`,backgroundsize: 'cover'  
    }}>
 
      <form >
    
        <Box className="box"
          sx={{
            width: 350,
            height: 350,
            backgroundColor: 'lightgrey',
          }}
        >
           <img src={img} alt="" className='image'/>
           <h1>Hello ! Let's start </h1>
           <h5>Login to continue</h5>
          <tbody>
            <tr>
       
               <th><input type="email" placeholder=" Your Email" 
               id="email"
               className="name" name="email" 
                value={email}
                onChange={(event)=>{
                  setEmail(event.target.value);
                }}
                 />
                </th>
            </tr>
            <tr>
              <th><input type="password" placeholder="    ********" id="password"
                className="name" name="password"
                value={password}
                onChange={(event)=>{
                  setPassword(event.target.value);
                }}
                />

              </th>
            </tr>

          </tbody>
          <div className='button'>

            <Button variant="contained" loadingPosition='center' onClick={login}>Login</Button>


          </div>
        </Box>
      
      </form>

    </div>
  );
};
export default Login;


