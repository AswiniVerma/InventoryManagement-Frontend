//SearchResultComponent.jsx
import React from 'react';
import {Link} from 'react-router-dom';
const SearchResultComponent = ({ result }) => {
  return (
    <div className='bg-customCard p-4 shadow-md rounded-md inline-block'>
      <h2 className='font-bold'> Search Result:</h2>
      <h3>Id: {result.id}</h3>
      <h3>Name: {result.name}</h3>
      <h3>Original Quantity: {result.originalquantity}</h3>
      <h3>Current Quantity: {result.curquantity}</h3>
      <Link className="small-button" to={`/toolDetails/${result.name}`} >Tool Details</Link>  
      <Link className="small-button" to={`/updateToolList/${result.id}/${result.name}/${result.originalquantity}/${result.curquantity}`} >Update Tool</Link>
      {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
    </div>
  );
};

export default SearchResultComponent;


// import React, { useState} from 'react';
// import {Link} from 'react-router-dom';
// import './ToolList.css'
// import { FaToolbox } from 'react-icons/fa';

// const  SearchResultComponent = ({result}) =>{
//   const [tool, setTools] = useState(result);


   
 

//   return (
//         <div className='max-w-screen-xl mx-auto overflow-x-auto'>
             
             
//                 <>
//           <h1 className='text-4xl sm:text-2xl flex justify-center font-bold'>Search List  <FaToolbox/></h1>
//             <table className='min-w-full bg-white border border-gray-300 overflow-x-auto'>
//                 <thead>
//                     <tr>
//                         <th className='py-2 px-4 border-b bg-customBlue text-white'>Tool ID</th>
//                         <th className='py-2 px-4 border-b bg-customBlue text-white'>Tool Name</th>
//                         <th className='py-2 px-4 border-b bg-customBlue text-white'>Quantity</th>
//                         <th className='py-2 px-4 border-b bg-customBlue text-white'>Current Quantity</th>
//                         <th className='py-2 px-4 border-b bg-customBlue text-white'>Actions</th>
//                         {/* Add more headers as needed */}
//                     </tr>
//                 </thead>
//                 <tbody>
                    
//                         <tr key={tool._id}>
//                             <td className='py-2 px-4 border-b '>{tool.id}</td>
//                             <td  className='py-2 px-4 border-b '>{tool.name}</td>
//                             <td className='py-2 px-4 border-b '>{tool.originalquantity}</td>
//                             <td className='py-2 px-4 border-b '>{tool.curquantity}</td>
//                             <td className='py-2 px-4 border-b '> 
//                             <Link className="m-2 button " to={`/toolDetails/${tool.name}`} >Tool Details</Link>  
//                             <Link className=" m-2 button " to={`/updateToolList/${tool.id}/${tool.name}/${tool.originalquantity}/${tool.curquantity}`} >Update Tool</Link>
//                             </td>


//                             {/* Add more cells as needed */}
//                         </tr>
                   
//                 </tbody>
//             </table>
            
//             </>
            
//         </div>
//     );
// }

// export default  SearchResultComponent;
