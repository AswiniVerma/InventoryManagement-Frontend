import React from 'react';
import { Link} from 'react-router-dom';


const Navbar = () => {
  

  
  return (
    <>
    
    <nav className="bg-customBlue rounded-full bg-gradient-to-r from-customBlue to-purple-500">
      
      <div className="container mx-auto flex justify-between items-center">
       
         
        <Link to="/Home" className="text-white font-bold text-xl flex items-center">
          <span className='flex-grow'> RIGHTS</span>
          </Link>
        
        <div className="space-x-4">
          <Link to="/allTools" className="text-white hover:text-gray-300">Tool List</Link>
          <Link to="/allSite" className="text-white hover:text-gray-300">Site List</Link>
          <Link to="/siteHistory" className="text-white hover:text-gray-300">Site History</Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
