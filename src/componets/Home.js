import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import wireImg from '../assets/imagewire.png'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <div className=' bg-customBg px-64 py-6 rounded-lr-lg rounded-br-full text-center'>
          <h1 class="mb-4 ml-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Welcome to Rights !!! </h1>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center'>A Power Solution Wing</h1>
          {/* <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"> Here at Rights Power we provide "A Power Solution Wing!!"</p> */}
         
          <div className=" flex justify-center">
            <Link className = 'text-3xl bg-transparent hover:bg-customButton text-white font-bold py-2 px-4 rounded-full transition duration-300' to="/allTools">Tool List</Link>
            <br />
            <Link className = 'text-3xl bg-transparent hover:bg-customButton text-white font-bold py-2 px-4 rounded-full transition duration-300' to="/allSite">Site List</Link>
            <br />
            <Link className = 'text-3xl bg-transparent hover:bg-customButton text-white font-bold py-2 px-4 rounded-full transition duration-300' to="/siteHistory">Site History</Link>
          </div>
        </div>
         <img className='' src={wireImg} alt="" />
      </div>
    

  )
}

export default Home
