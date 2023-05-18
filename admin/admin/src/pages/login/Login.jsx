import React from 'react';
import './login.scss';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import axios from "axios";
import {useEffect ,useState} from "react";
import { useNavigate} from "react-router-dom";
//import { Link} from "react-router-dom";

function Login () {
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const navigate=useNavigate();
  async function login(event)
{
  event.preventDefault();
  try{
    await axios.post("http://localhost:3010/user/signin",
    {
      email:email,
      password:password,
    }).then((res)=>
    {
      console.log(res)
      const data=res.data;
      if (data.status === true)
      {
        alert("Login successfly");
        navigate("/");
      }
      else
      {
        alert("Login failed")
      }
    },fail=>{
      console.error(fail);
    });
  }
    catch(err){alert(err);}
}  


return (


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
                className="name" name="email" 
                value={email}
                onChange={(event)=>{
                  setEmail(event.target.value);
                }}
                
                />

              </th>
            </tr>
            <tr>
              <th><label htmlfor="password">password:</label></th>
              <th><input type="password" placeholder="********" id="password"
                className="name" name="password"
                value={password}
                onChange={(event)=>{
                  setPassword(event.target.value);
                }}
                />

              </th>
            </tr>

          </table>
          <div className='button'>

            <Button variant="contained" loadingPosition='center' onclick={login}>Login</Button>


          </div>
        </Box>

      </form>

    </div>
  );
};
export default Login;


