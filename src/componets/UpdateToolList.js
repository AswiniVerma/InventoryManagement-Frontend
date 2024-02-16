import React, { useState } from 'react'
import Axios from 'axios'
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AddTool.css'
import { api_endpoints } from './api';

import Navbar from './Navbar';
function UpdateToolList() {
  const url = api_endpoints.updateToolList
    const navigate = useNavigate();
   const {id, name, originalquantity, curquantity} = useParams();
  const [data, setData] = useState({
    
    name:name,
    originalquantity:originalquantity,
    curquantity:curquantity
  })

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    Axios.put(url,{
      id:id,
      name:data.name,
      originalquantity:data.originalquantity,
      curquantity:data.curquantity
    })
    .then(res=>{
      console.log(res.data);
      if(res.data==="Please enter numeric values in quantity"){
        alert (res.data);
      }
      else{
        alert(res.data)
        navigate('/allTools')
      }
      
    
    })

    
    
  }

  return (
    <>
    <Navbar/>
    <div className='text-center'>
      <h1 className='text-4xl flex justify-center font-bold'> Update Tool Details</h1>
        <form onSubmit={(e)=>submit(e)}>
          <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text" required/>
          <input className='p-2 w-auto' onChange={(e)=>handle(e)} id="originalquantity" value={data.originalquantity} placeholder="Address " type="text" required />
          <input onChange={(e)=>handle(e)} id="curquantity" value={data.curquantity} placeholder="Address " type="text" required />
          <button>Update</button>
        </form>
    </div>
    </>
  )
}

export default UpdateToolList
