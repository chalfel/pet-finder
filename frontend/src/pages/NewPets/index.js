import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default function NewPets () {
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [weight, setWeight] = useState()
  const [city, setCity] = useState('')
  const [breed, setBreed] = useState('')

  const history = useHistory()
  const token = localStorage.getItem('token')

  async function handleNewIncident (e) {
    e.preventDefault()

    const data = {
      name,
      age,
      weight,
      city,
      breed,
    }

    try {
      await api.post('pets', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      history.push('/')
    } catch (err) {
      alert('Erro ao cadastrar pet, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <span className="title">Pet Finder</span>

          <h1>Cadastrar novo Pet</h1>
          <p>Informe as caracteristicas do Pet para encontrarmos um novo lar.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#49C6E5" />
                Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Nome do Pet"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            placeholder="Idade"
            value={age}
            onChange={e => setAge(e.target.value)}
          />

          <input
            placeholder="Peso"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />

          <input
            placeholder="Cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <input
            placeholder="Raça"
            value={breed}
            onChange={e => setBreed(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
