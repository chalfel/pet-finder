import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

export default function Header ({ user, handleLogout }) {
  return ( 
    <header>
      <span className="title">Pet Finder</span>
      <span>Ola, {user.name}</span>
          <Link className="button" to="/pets/new">Cadastrar novo pet</Link> 
          <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#49C6E5" />
          </button>
    </header>
  )
}