import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Feed, CardDetail, SearchFeed } from './components'

const App = () => (

    <BrowserRouter>
    <div className='bg-slate-200 w-screen h-screen flex'>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Feed/>}/>
        <Route path='/card/:id' element={<CardDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )

export default App