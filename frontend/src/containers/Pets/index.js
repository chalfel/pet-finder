import React from 'react'

import Pet from '../../components/Pet'


export default function Pets({ pets, handleDeleteData, handleUpdateData }) {

  return (
    <ul>
      { pets.map((pet) => (
        <Pet key={pet.id} data={pet} handleDeleteData={handleDeleteData} handleUpdateData={handleUpdateData}></Pet>
      ))}
    </ul>
  )
}