import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {

  return (
  <>
  <Navbar/>
 <Outlet/>
  </>
  )
}

export default App;