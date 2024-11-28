import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className=''>
        <div className='text-2xl font-semibold p-4 mb-4'>Logo here</div>
        <ul>
            <li><Link className='block mb-2 px-4 py-2 font-medium hover:text-primary transition-all hover:bg-primary-50' to="/">Home</Link></li>
            <li><Link className='block mb-2 px-4 py-2 font-medium hover:text-primary transition-all hover:bg-primary-50' to="/about">About</Link></li>
            <li><Link className='block mb-2 px-4 py-2 font-medium hover:text-primary transition-all hover:bg-primary-50' to="/contact">Contact</Link></li>
        </ul>
    </aside>
  )
}

export default Sidebar