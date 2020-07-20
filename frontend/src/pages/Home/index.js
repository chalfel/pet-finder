import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import Pets from '../../containers/Pets'
import './styles.css'
import PetsContext from '../../contexts/Pets'

export default function Home () {
  const { pets, handleLogout, signed, user } = useContext(PetsContext)
  const history = useHistory()

  const handleOnLogout = () => {
    handleLogout()
    history.push('/')
  }
  return (
    <div className="profile-container">
      <header>
        <span className="title">Pet Finder</span>
        { signed ? (
          <>
            <span>Ola, {user.name}</span>
            <Link className="button" to="/user">Area do Usuário</Link> 
            <button onClick={handleOnLogout} type="button">
              <FiPower size={18} color="#49C6E5" />
            </button>
          </>
        )
          :
          <Link className="button" to="/login">Acesse o sistema</Link>
        }

      </header>

      { pets.length === 0 ?
        <h1>Não há pets cadastrados</h1>
        :
        (
          <>
            <h1>Pets cadastrados</h1>
           <Pets pets={pets}></Pets>
        </>
        )
      }
    </div>
  )
}
