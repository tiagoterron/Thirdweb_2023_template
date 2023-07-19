import { MdDashboard, MdLogout  } from 'react-icons/md'
import { FaUser, FaLongArrowAltRight  } from 'react-icons/fa'
import { PiVaultDuotone  } from 'react-icons/pi'
import { BsCash  } from 'react-icons/bs'
import { GLOBAL, setSideMenu } from '../redux'
import React, { useState, useEffect } from 'react'
import { db } from '../config/';
import { AiFillCamera, AiFillCheckCircle  } from 'react-icons/ai';
import { short, CurrencyFormat, setCookie } from '../lib';
import axios, { Axios } from 'axios';
import abi from '../web3/abi/';
import { utils } from 'ethers';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SidebarMenu = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    var SideMenu = !GLOBAL('SideMenu')

    const [SubMenuVault, setSubMenuVault] = useState(false);
    
  return (
    <>
    <div className="h-full px-3 w-[15rem] py-4 overflow-y-auto bg-[rgb(30,58,138)] dark:bg-gray-800  h-screen"></div>
    <aside id="default-sidebar" className="w-[15rem] h-screen transition-transform -translate-x-full sm:translate-x-0 fixed top-[4.5rem] left-0  z-[1]" aria-label="Sidebar">
   <div className="h-full px-3 w-[15rem] py-4 bg-[rgb(30,58,138)] overflow-y-auto dark:bg-gray-800">
      <ul className="space-y-2 font-medium text-[#FFF]">
         
      <li>
            <button onClick={() => {navigate('/dashboard');dispatch(setSideMenu(SideMenu))}} className="flex justify-start w-full items-start p-4 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group">
            <MdDashboard className="w-5 h-5" />
               <span className=" ml-3 whitespace-nowrap">Dashboard</span>
            </button>
         </li>
         <li>
            <button onClick={() => {navigate('/users');dispatch(setSideMenu(SideMenu))}} className="flex justify-start w-full items-start p-4 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group">
               <FaUser className=" w-5 h-5" />
               <span className=" ml-3 whitespace-nowrap">Users</span>
            </button>
         </li>
         <li>
            <button onClick={() => {navigate('/withdraw');dispatch(setSideMenu(SideMenu))}} className="flex justify-start w-full items-start p-4 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group">
               <BsCash className=" w-5 h-5" />
               <span className=" ml-3 whitespace-nowrap">Withdraw</span>
            </button>
         </li>
         <li>
            <button onClick={() => setSubMenuVault(prev => !prev)} className="flex justify-start w-full items-start p-4 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group">
               <PiVaultDuotone className=" w-5 h-5" />
               <span className=" ml-3 whitespace-nowrap">Vault</span>
            </button>
            {SubMenuVault && (

               <ul className="w-full flex flex-col">
               <li><button className="pl-10 flex justify-start w-full items-center p-4 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group gap-5">
                  <FaLongArrowAltRight className="text-[.7rem]" />
                  Overview
                  </button></li>
               <li><button className="pl-10 flex justify-start w-full items-center p-4 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group gap-5">
                  <FaLongArrowAltRight className="text-[.7rem]" />
                  Staking
                  </button></li>
               <li><button className="pl-10 flex justify-start w-full items-center p-4 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group gap-5">
                  <FaLongArrowAltRight className="text-[.7rem]" />
                  Sales
                  </button></li>
               
            </ul>
               )}
         </li>
         
         {/* <li>
            <a href="#" className="flex items-center p-2 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-TextDarkMode transition duration-75 dark:text-gray-400 group-hover:text-TextDarkMode dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-TextDarkMode rounded-lg dark:text-white hover:bg-[#1e40af] dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-TextDarkMode transition duration-75 dark:text-gray-400 group-hover:text-TextDarkMode dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li> */}
      </ul>
   </div>
</aside>
</>
  )
}

export default SidebarMenu