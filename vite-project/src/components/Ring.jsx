import React from 'react'
import RingJourney from '../assets/images/ring-of-power.png'

const Ring = () => {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center bg-red-900'>
        <img alt='ringJourney' src={RingJourney} className=' w-[600px] h-[600px] rounded-md shadow-lg'/>
    </div>

  )
}

export default Ring