import React from 'react'
import OneRing from '../assets/images/the-one-ring.jpg'

const Feed = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-4'>
        <img alt='the one ring' src={OneRing} className='size-80 rounded-full object-cover'/>
        <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='font-bold text-3xl text-yellow-700'>"Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatu"</h1>
        <h2 className='text-2xl text-gray-800 font-bold'>One Ring to find them, One Ring to bring them all and in the darkness bind them</h2>
        </div>

    </div>
  )
}

export default Feed