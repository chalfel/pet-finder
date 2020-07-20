import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Pets from '../../containers/Pets'
import PetsContext from '../../contexts/Pets'
import Header from '../../components/Header'
import './styles.css'

export default function Home () {
  const { pets, handleDeletePet, user, handleLogout, handleUpdatePet } = useContext(PetsContext)
  const [ userPets, setUserPets ] = useState([])
  const history = useHistory()
  useEffect(() => {
    setUserPets(pets.filter(pet => pet.user_id === user.id))
  }, [pets, user.id])

  const handleOnLogout = () => {
    handleLogout()
    history.push('/')
  }
  return (
    <div className="profile-container">
     <Header user={user} handleLogout={handleOnLogout}></Header>

      { userPets.length === 0 ?
        <h1>Não há pets cadastrados</h1>
        :
        (
          <>
            <h1>Pets cadastrados</h1>
           <Pets pets={userPets} handleDeleteData={handleDeletePet} handleUpdateData={handleUpdatePet}></Pets>
        </>
        )
      }
    </div>
  )
}
