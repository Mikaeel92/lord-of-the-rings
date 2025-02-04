import React from 'react'
import CharacterCard from './CharacterCard'

const Characters = ({ data }) => (
    <div>
        {data.map((item, index) => (
            <div className='grid grid-cols-4 gap-4' key={index}>
                    {item.id && <CharacterCard characterData={item}/>}
            </div>
        ))}
    </div>
  )


export default Characters