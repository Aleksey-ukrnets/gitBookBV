import React from 'react'

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/main_page.scss'
import SideMenu from '../components/SideMenu';

export default function Main({children}) {
  return (
    <div className='mainPage'>
      <Header /> 
      <div className='page' >
        <SideMenu/>
        {children}
      </div>
      
      <Footer />
    </div>
  )
}