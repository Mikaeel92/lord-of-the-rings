import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/lord_of_the_rings_logo_by_haleyhss_d6yi9hz-fullview.png'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='flex items-center p-2 absolute'>
        <Link to='/' className='flex items-center'>
            <img alt='logo' src={Logo} className='size-44'/>
        </Link>
        <SearchBar/>
    </div>
  )
}

export default Navbar