import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import PetsContext from '../../contexts/Pets'
import './styles.css'

import heroesImg from '../../assets/heroes.png'

export default function Logon () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin } = useContext(PetsContext)
  const history = useHistory()
  const handleOnSubmit = async (e) => {
    e.preventDefault()

    await handleLogin(email, password)

    history.push('/')
  }
  return (
    <div className="logon-container">
      <section className="form">
        <span className="title">Pet Finder</span>

        <form onSubmit={handleOnSubmit}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Sua Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          >
          </input>

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#49C6E5" />
                    Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  )
}
