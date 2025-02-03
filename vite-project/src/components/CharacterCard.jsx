import React from 'react'

const CharacterCard = ({characterData}) => {

  const characterImage = [
    {
      name: 'Frodo Baggins',
      id: 1,
      image: '../assets/images/characters/Frodo.webp'
    }, {
      name: 'Samwise Gamgee',
      id: 2,
      image: '../assets/images/characters/Sam.webp'
    },{
      name: 'Gandalf',
      id: 3,
      image: '../assets/images/characters/Gandalf.jpg'
    },{
      name: 'Bilbo Baggins',
      id: 4,
      image: '../assets/images/characters/Bilbo.webp'
    }, {
      name: 'Aragorn II',
      id: 5,
      image: '../assets/images/characters/Aragorn.webp'
    }, {
      name: 'Meriadoc Brandybuck',
      id: 6,
      image: '../assets/images/characters/Merry.webp'
    }, {
      name: 'Peregrin Took',
      id: 7,
      image: '../assets/images/characters/Pippin.webp'
    }, {
      name: 'Legolas',
      id: 8,
      image: '../assets/images/characters/Legolas.webp'
    }, {
      name: 'Gimli',
      id: 9,
      image: '../assets/images/characters/Gimli.jpg'
    }, {
      name: 'Boromir',
      id: 10,
      image: '../assets/images/characters/Boromir.jpg'
    }]

  return (
    <div className='bg-blue-300 p-4 gap-2 flex flex-col rounded-md border shadow-md'>
        <h1>{characterData.name}</h1>
        <h2>{characterData.gender}</h2>
        <p>{characterData.weapons}</p>
        <img alt='profile'
        className='w-52 h-52'
        src={characterData.id === characterImage.id ? characterImage.image : null}/>
    </div>
  )
}

export default CharacterCard