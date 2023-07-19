'use client'
import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'


const initialState = {
  address: null,
  darkMode: false,
  user: false,
  verified: false,
  name: null,
  email: null,
  SideMenu: false,
  reload: false,
  picture: null,
  isLoading: false,
  userUUID: null
}



export const counterSlice = createSlice(
  {
  name: 'global',
  initialState,
  reducers: {
      setAddress: (state, action) => {
        state.address = action.payload
      },
      setTheme: (state, action) => {
        state.darkMode = action.payload
      },
      setUser: (state, action) => {
        state.user = action.payload
      },
      setVerified: (state, action) => {
        state.verified = action.payload
      },
      setName: (state, action) => {
        state.name = action.payload
      },
      setSideMenu: (state, action) => {
        state.SideMenu = action.payload
      },
      setEmail: (state, action) => {
        state.email = action.payload
      },
      setReload: (state, action) => {
        state.reload = action.payload
      },
      setPicture: (state, action) => {
        state.picture = action.payload
      },
      setIsLoading: (state, action) => {
        state.isLoading = action.payload
      },
      setUserUUID: (state, action) => {
        state.userUUID = action.payload
      },
    }
}
)
export const GLOBAL = (value) => {
  const global = useSelector((state) => state['global'][value])
  return global
}

// Action creators are generated for each case reducer function
export const { 
  setAddress,
  setTheme,
  setUser,
  setVerified,
  setUserUUID,
  setName,
  setEmail,
  setSideMenu,
  setReload,
  setPicture,
  setIsLoading

} = counterSlice.actions

export default counterSlice.reducer