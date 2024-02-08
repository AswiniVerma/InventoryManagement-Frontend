import React, { useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import './AddTool.css'
import Navbar from './Navbar';
import { api_endpoints } from './api';

function RemoveTool() {

  const { siteName } = useParams();  
  const url = api_endpoints.removeTool
  const [data, setData] = useState({
    siteName:siteName,
    toolName:"",
    
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
      siteName:data.siteName,
      toolName:data.toolName,
      
    })
    .then(res=>{
      console.log(res.data);
      alert(`${data.toolName} has been removed`);
    
    })

    
    
  }

  return (
    <>
      <Navbar/>
      <div className='text-center'>
        <h1 className='text-4xl flex justify-center font-bold'>Remove the Unwanted tool</h1>
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="siteName" value={data.siteName} placeholder="site name" type="text" readOnly />
          <input onChange={(e)=>handle(e)} id="toolName" value={data.toolName} placeholder=" Tool Name " type="text" required />
          
          <button>Remove Tool</button>
        </form>
    </div>
    </>
  )
}

export default RemoveTool
