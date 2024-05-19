import React from 'react'
import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
    <ScrollRestoration/>
    <Menu/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout