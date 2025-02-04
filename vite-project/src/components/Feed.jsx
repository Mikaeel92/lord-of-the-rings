import React, { useEffect, useState } from 'react'
import OneRing from '../assets/images/the-one-ring.jpg'
import { Link } from 'react-router-dom'
import Characters from './Characters'

const Feed = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchFromApi = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://lotrapi.co/api/v1/characters')
      const data = await response.json()
      console.log(data)
      if(data && data.results) {
        setData(data.results)
        setLoading(false) 
      }
    } catch (error) {
      setLoading(false)
      setErrorMsg(error)
    }
  }

  useEffect(() => {
    fetchFromApi()
  },[])

  if(loading === true) {
    <div>Loading...please wait</div>
  }

  if (errorMsg) {
    <div>Error...{errorMsg}</div>
  }

  return (
    <div className='w-screen h-fit flex flex-col items-center justify-center gap-4 bg-gray-100'>
        <Link to='/oneRing'>
        <img alt='the one ring' src={OneRing} className='size-80 rounded-full object-cover shadow-lg'/>
        </Link>
        <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='font-bold text-3xl text-red-800'>"Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk agh burzum-ishi krimpatu"</h1>
        <h2 className='text-2xl text-gray-900 font-bold'>One Ring to find them, One Ring to bring them all and in the darkness bind them</h2>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center'>
             <Characters data={data}/>
        </div>
    </div>
  )
}

export default Feed