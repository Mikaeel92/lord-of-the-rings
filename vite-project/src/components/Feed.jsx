import React from 'react'
import OneRing from '../assets/images/the-one-ring.jpg'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-4 bg-gray-100'>
        <Link to='/oneRing'>
        <img alt='the one ring' src={OneRing} className='size-80 rounded-full object-cover shadow-lg'/>
        </Link>
        <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='font-bold text-3xl text-red-800'>"Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatu"</h1>
        <h2 className='text-2xl text-gray-900 font-bold'>One Ring to find them, One Ring to bring them all and in the darkness bind them</h2>
        </div>

    </div>
  )
}

export default Feed