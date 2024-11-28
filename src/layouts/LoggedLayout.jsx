import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'

function LoggedLayout(props) {
  return (
    <div className='flex'>
        <div className='flex-shrink-0 w-1/6 min-w-[300px] h-screen overflow-y-auto border border-gray-300'>
            <Sidebar/>
        </div>
        <div className='flex-1 h-screen overflow-y-auto flex flex-col '>
            <Header/>
            <main className='flex-1'>{props.children}</main>
            <Footer/>
        </div>
    </div>
  )
}

export default LoggedLayout