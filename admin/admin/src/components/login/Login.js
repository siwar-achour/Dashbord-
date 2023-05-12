import React , {useEffect , useState} from 'react'

const Login = () => {
    const[email,setEmail]= useState('')
    const[password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http//localhost:3000/",
            {email,password})
        }
        catch(e){
            console.log(e)
        }
    }

    return (
    <div className='login'>
        <h1>login</h1>
        <from action="POST">
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""/>
            <input type="submit" onChange={submit}/>

        </from>


    </div>
  )
}

export default Login