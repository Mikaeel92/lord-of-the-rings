import React from 'react'

const CharacterCard = ({characterData}) => {
  return (
    <div className='bg-blue-300 p-4 gap-2 flex flex-col rounded-md border shadow-md'>
        <h1>{characterData.name}</h1>
        <h2>{characterData.gender}</h2>
        <p>{characterData.weapons}</p>
    </div>
  )
}

export default CharacterCard