import { MdDashboard, MdLogout  } from 'react-icons/md'
import { FiMenu  } from 'react-icons/fi'
import { GLOBAL, setSideMenu } from '../redux'
import React, { useState, useEffect } from 'react'
import { AiFillCamera, AiFillCheckCircle  } from 'react-icons/ai';
import { short, CurrencyFormat, setCookie } from '../lib';
import axios, { Axios } from 'axios';
import { contract } from '../web3';
import abi from '../web3/abi/';
import { utils } from 'ethers';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ConnectWallet, useSigner, useAddress } from "@thirdweb-dev/react";

const Navigator = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();


    var SideMenu = !GLOBAL('SideMenu')
  return (
    <div className={`bg-[rgb(30,64,175)] w-full p-2 flex items-center justify-between text-[rgb(255,255,255)] fixed top-0 left-0  z-[100]`}>
      <>
      <div className="flex items-center justify-center transform translate-x-0">
      <button onClick={() => dispatch(setSideMenu(SideMenu))} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-[rgb(0,0,0)] rounded-lg hover:bg-[#1e40af] focus:outline-none outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <FiMenu className="text-white text-[2rem]" />
      </button>
      <button onClick={() => navigate('/')} className="flex items-center gap-3 hover:bg-[rgba(30,175,175,.2)] p-5">
        {/* <MdDashboard className="w-5 h-5" /> */}
        {/* <div>Greenwood Exchange</div> */}
        <img src="https://ducoinexchange.com/assets/ducoin.05230a0a.png" alt="" className="h-[25px]" />
      </button>
      </div>
      {/* <button onClick={[]} className="flex items-center gap-3 hover:bg-[rgba(30,175,175,.2)] p-5">
        <MdLogout className="w-5 h-5" />
        <div>Logout</div>
      </button> */}
      <div className="mr-3"><ConnectWallet theme="light" /></div>
      </>
      </div>
  )
}

export default Navigator