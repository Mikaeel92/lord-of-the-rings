import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [characterData, setCharacterData] = useState([])
  const { searchItems } = useParams()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchFromAPI = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://lotrapi.co/api/v1/characters/${searchItems}`)
      const data = await response.json()
      console.log(data)
      if(data && data.results) {
        setCharacterData(data.results)
        setLoading(false) 
      }
    } catch (error) {
      setLoading(false)
      setErrorMsg(error)
    }
  }

  useEffect(() => {
    fetchFromAPI()
  }, [searchItems])

  if(loading === true) {
    <div>Loading...please wait</div>
  }

  if (errorMsg) {
    <div>Error...{errorMsg}</div>
  }

  return (
    <div>
      {characterData.map((item, index) => (
          <div key={index}>
              <h1>{characterData.name}</h1>
              <p>{characterData.gender}</p>
              <p>{characterData.weapons}</p>
          </div>
      ))}
    </div>
  )
}

export default SearchFeed