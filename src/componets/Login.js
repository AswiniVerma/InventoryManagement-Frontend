import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './AddTool.css'
import { api_endpoints } from './api'

function Login() {
  const url = api_endpoints.Login
  const navigate = useNavigate();
  const [data, setData] = useState({
    username:"",
    password:"",
  })

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      username:data.username,
      password:data.password
    })
    .then(res=>{
      console.log(res.data);
      if(res.data === "Success"){
         navigate('/Home')
      }
      else{
        alert("Invalid username password");
        window.location.reload();
      }
    
    })

    
    
  }

  return (
    <div className='text-center'>
        <h1 className='text-4xl flex justify-center font-bold'>Rights Power </h1>
        <p>Please login!</p>
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="username" value={data.username} placeholder="username" type="text" required />
          <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="password" type="password" required/>
          <button>Login</button>
        </form>
    </div>
  )
}

export default Login
