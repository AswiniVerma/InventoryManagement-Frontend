import React, { useState } from 'react'
import Axios from 'axios'
import './AddTool.css'
import { api_endpoints } from './api'

function AddTool() {
  const url = api_endpoints.addTool
  const [data, setData] = useState({
    name:"",
    originalquantity:"",
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
      name:data.name,
      originalquantity:data.originalquantity
    })
    .then(res=>{
      console.log(res.data);
      if(res.data === "Please enter the numeric value of tool"){
        alert(res.data);
      }
      else{
        alert(res.data);
      window.location.reload();
      }
      
    
    })

    
    
  }

  return (
    <div >
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text" required />
          <input className='m-4' onChange={(e)=>handle(e)} id="originalquantity" value={data.originalquantity} placeholder="Original Quantity" type="text" required/>
          <button>Add Tool</button>
        </form>
    </div>
  )
}

export default AddTool
