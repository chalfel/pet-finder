import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import PetsContext from '../../contexts/Pets'

import './styles.css'

export default function Register () {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const { handleRegister }  = useContext(PetsContext)
  const history = useHistory()
  async function handleOnSubmit (e) {
    e.preventDefault()
    if(password !== confirmPassword) {
        alert('As senhas não coincidem!!')
        return
    }
    const data = {
      name,
      email,
      password,
      address,
    }
    await handleRegister(data)
    history.push('/login')
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
            <span className="title">Pet Finder</span>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pets a encontrarem um lar</p>

          <Link className="back-link" to="/login">
            <FiArrowLeft size={16} color="#49C6E5" />
                        Voltar para o login
          </Link>
        </section>

        <form onSubmit={handleOnSubmit}>

          <input
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <div className="input-group">

            <input
              placeholder="Endereço"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />

          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>

  )
};
