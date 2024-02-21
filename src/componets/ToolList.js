
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ToolList.css'
import { FaToolbox } from 'react-icons/fa';
import AddTool from './AddTool';
import Navbar from './Navbar';
import { api_endpoints } from './api';
import Loading from './Loading';
import SearchTool from './SearchTool';
const ToolList = () =>{
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the REST API
        axios.get(api_endpoints.allTools)
            .then(response => {
                setTools(response.data);
                 setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                 setLoading(false);
            });
    }, []);
   const deleteCart = async id =>{
    
      await axios.delete(`${api_endpoints.deleteTool}/${id}`)
      .then(res=>{
        alert(res.data);
      });
      
      window.location.reload();
    }

  return (
        <div className='max-w-screen-xl mx-auto overflow-x-auto'>
             <Navbar/>
             <AddTool/>
            <SearchTool/>
             {loading ? (
             <Loading/>
             ):(
                <>
          <h1 className='text-4xl sm:text-2xl flex justify-center font-bold'>Tool List  <FaToolbox/></h1>
            <table className='min-w-full bg-white border border-gray-300 overflow-x-auto'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Tool ID</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Tool Name</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Quantity</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Current Quantity</th>
                        <th className='py-2 px-4 border-b bg-customBlue text-white'>Actions</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {tools.map(tool => (
                        <tr key={tool._id}>
                            <td className='py-2 px-4 border-b '>{tool.id}</td>
                            <td  className='py-2 px-4 border-b '>{tool.name}</td>
                            <td className='py-2 px-4 border-b '>{tool.originalquantity}</td>
                            <td className='py-2 px-4 border-b '>{tool.curquantity}</td>
                            <td className='py-2 px-4 border-b '> 
                            <Link className="m-2 button " to={`/toolDetails/${tool.name}`} >Tool Details</Link>  
                            <Link className="m-2 button" onClick={()=>{deleteCart(tool.id)}}>Remove Tool</Link>
                            <Link className=" m-2 button " to={`/updateToolList/${tool.id}/${tool.name}/${tool.originalquantity}/${tool.curquantity}`} >Update Tool</Link>
                            </td>


                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <AddTool/>
            <SearchTool/> */}
            </>
             )
            }
        </div>
    );
}

export default ToolList;