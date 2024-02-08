// SiteListTable.js
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FaInfo, FaMinus, FaPlus, FaTools } from "react-icons/fa"
import {MdDelete} from "react-icons/md"
import { api_endpoints } from './api';
const SiteListTable = ({ sites }) => {
     
    const addToCart = async id =>{
     
        
        let newSite = sites.filter(x=>x.id===id);
        let newSite2 = newSite[0];
        console.log(id);
      
        await axios.post(api_endpoints.moveToHistory,newSite2);
       
        alert("Moved to history")
        
    }

     const deleteCart = async id =>{
    
      await axios.delete(`${api_endpoints.deleteSite}/${id}`);
      alert("tool deletd");
      window.location.reload();
    }
  return (
    <div className='overflow-x-auto'>
    <table className='min-w-full bg-white border border-gray-300'>
      <thead>
        <tr>
          <th className='py-2 px-4 border-b bg-customBlue text-white '>ID</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white'>Name</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white'>Address</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white'>Supervisor</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white'>Tool Details</th>
          <th className='py-2 px-4 border-b bg-customBlue text-white'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <tr key={site.id}>
            <td className='py-2 px-4 border-b'>{site.id}</td>
            <td className='py-2 px-4 border-b'>{site.name}</td>
            <td className='py-2 px-4 border-b'>{site.address}</td>
            <td className='py-2 px-4 border-b'>{site.supervisor || 'N/A'}</td>
            <td className='py-2 px-4 border-b'>
              <ul>
                {site.toolDetails.map((tool, index) => (
                  <li key={index}>
                    <div className="flex items-center space-x-4">
                   {tool.toolName}: {tool.toolQuantity}
                   

                    <Link className="" to={`/addExtraTool/${site.name}/${tool.toolName}`} > <FaPlus className='w-4 h-4 transition-transform transform hover:scale-110' /> </Link> 
                    <Link className="" to={`/decreaseToolNumber/${site.name}/${tool.toolName}`} > <FaMinus className='w-4 h-4 transition-transform transform hover:scale-110' /> </Link>
                   </div>
                      
                  </li>
                ))}
              </ul>
            </td>
            <td className='py-2 px-4 border-b'> 
                <ul>
                  <div className="flex items-center space-x-4">
                    <li><Link className=" " to={`/siteDetails/${site.id}`} ><FaInfo className="w-8 h-8 transition-transform transform hover:scale-110 "/></Link></li>
                    <li><Link className="btn btn-dark m-2 paybutton " to={`/addExtraTool/${site.name}`} ><FaTools className='text-green-500 w-8 h-8 transition-transform transform hover:scale-110'/></Link></li>
                    <li><Link className="btn btn-dark m-2 paybutton " to={`/removeTool/${site.name}`} ><FaTools className='text-red-500 w-8 h-8 transition-transform transform hover:scale-110'/></Link></li>
                    <li><Link className="" onClick={()=>{deleteCart(site.id)}}><MdDelete className='w-8 h-8 transition-transform transform hover:scale-110'/></Link></li>
                    <li><Link className="text-black font-bold" to={`/receiveTools/${site.id}`} > <p className=' transition-transform transform hover:scale-110 border bg-gray-500 text-white rounded-lg border-gray-600 p-1'>Receive Tools</p></Link></li>
                    <li><Link className="text-black font-bold" onClick={()=>{addToCart(site.id)}}><p className='transition-transform transform hover:scale-110 border bg-gray-500 text-white rounded-lg border-gray-600 p-1'>Moveto history</p></Link></li>
                    <li><Link className="text-black font-bold" to={`/updateSite/${site.id}/${site.name}/${site.address}/${site.supervisor}`} ><p className='transition-transform transform hover:scale-110 border bg-gray-500 text-white rounded-lg border-gray-600 p-1'>Update Site</p></Link></li>
                  </div>
                </ul>
                
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default SiteListTable;
