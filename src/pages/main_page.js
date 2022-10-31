import React from 'react'

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/main_page.scss'
import SideMenu from '../components/SideMenu';
import { Outlet } from 'react-router';

export default function Main() {

  return (
    <div className='mainPage'>
      <Header /> 
      <div className='page'>
        <SideMenu/>
        <Outlet />
      </div>
      
      <Footer />
    </div>
  )
}