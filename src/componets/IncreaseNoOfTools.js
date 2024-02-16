import React, { useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import './AddTool.css'
import Navbar from './Navbar';
import { api_endpoints } from './api';

function IncreaseNoOfTools() {

  const { siteName,toolName } = useParams();  
  const url = api_endpoints.addExtraTool
  const [data, setData] = useState({
    siteName:siteName,
    toolName:toolName,
    toolQuantity:"",
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
      toolQuantity:data.toolQuantity
    })
    .then(res=>{
      console.log(res.data);
      alert(res.data);
    
    })

    
    
  }

  return (
    <>
    <Navbar/>
    <div className='bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center'>
      <h1 className='text-2xl flex justify-center font-bold'> Enter the tools value you want to increase:</h1>
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="siteName" value={data.siteName} placeholder="site name" type="text" readOnly />
          <input onChange={(e)=>handle(e)} id="toolName" value={data.toolName} placeholder=" Tool Name " type="text" required />
          <input onChange={(e)=>handle(e)} id="toolQuantity" value={data.toolQuantity} placeholder="Tool Quantity" type="text" required />
          <button>Increase the number of {data.toolName}</button>
        </form>
    </div>
    </>
    
  )
}

export default IncreaseNoOfTools
