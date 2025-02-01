import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {

    const [searchItems, setSearchItems] = useState('')
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
        if(searchItems) {
            navigate(`search/${searchItems}`)
            setSearchItems('')
        }
    }
 
  return (
    <form 
        className='flex p-4 items-center'
        onSubmit={submitForm}>
        <input 
        value={searchItems} 
        onChange={(e) => setSearchItems(e.target.value)}
        placeholder='Search...'
        className='p-2 outline-none rounded-md font-semibold bg-slate-200 shadow-md'/>
        <FaSearch className='ml-4' onClick={submitForm}/>
    </form>
  )
}

export default SearchBar