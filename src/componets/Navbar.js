// import React from 'react';
// import { Link} from 'react-router-dom';


// const Navbar = () => {
  

  
//   return (
//     <>
    
//     <nav className="bg-customBlue rounded-full bg-gradient-to-r from-customBlue to-purple-500">
      
//       <div className="container mx-auto flex justify-between items-center">
       
         
//         <Link to="/Home" className="text-white font-bold text-xl flex items-center">
//           <span className='flex-grow'> RIGHTS</span>
//           </Link>
        
//         <div className="space-x-4">
//           <Link to="/allTools" className="text-white hover:text-gray-300">Tool List</Link>
//           <Link to="/allSite" className="text-white hover:text-gray-300">Site List</Link>
//           <Link to="/siteHistory" className="text-white hover:text-gray-300">Site History</Link>
//            <Link to="/getAllLostTool" className="text-white hover:text-gray-300">Lost Tools</Link>
//             <Link to="/getAllDamagedTool" className="text-white hover:text-gray-300">Damaged Tools</Link>
//              <Link to="/getAllPermanentDamagedTool" className="text-white hover:text-gray-300">Permanent Damaged Tools</Link>
          
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-customBlue rounded-full bg-gradient-to-r from-customBlue to-purple-500">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/Home" className="text-white font-bold text-xl flex items-center">
            <span className='flex-grow'>RIGHTS</span>
          </Link>

          <div className="space-x-4 lg:flex hidden">
            <Link to="/allTools" className="text-white hover:text-gray-300">Tool List</Link>
            <Link to="/allSite" className="text-white hover:text-gray-300">Site List</Link>
            <Link to="/siteHistory" className="text-white hover:text-gray-300">Site History</Link>
            <Link to="/getAllLostTool" className="text-white hover:text-gray-300">Lost Tools</Link>
            <Link to="/getAllDamagedTool" className="text-white hover:text-gray-300">Damaged Tools</Link>
            <Link to="/getAllPermanentDamagedTool" className="text-white hover:text-gray-300">Permanent Damaged Tools</Link>
          </div>

          <div className="lg:hidden">
            <button
              className="text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-customBlue rounded-full bg-gradient-to-r from-customBlue to-purple-500">
          <div className="container mx-auto flex flex-col items-center">
            <Link to="/allTools" className="text-white hover:text-gray-300 mb-2">Tool List</Link>
            <Link to="/allSite" className="text-white hover:text-gray-300 mb-2">Site List</Link>
            <Link to="/siteHistory" className="text-white hover:text-gray-300 mb-2">Site History</Link>
            <Link to="/getAllLostTool" className="text-white hover:text-gray-300 mb-2">Lost Tools</Link>
            <Link to="/getAllDamagedTool" className="text-white hover:text-gray-300 mb-2">Damaged Tools</Link>
            <Link to="/getAllPermanentDamagedTool" className="text-white hover:text-gray-300 mb-2">Permanent Damaged Tools</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

