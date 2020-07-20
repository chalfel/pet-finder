import React, { useState } from 'react'
import { FiTrash2, FiPenTool, FiSave } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import './styles.css'

export default function Pet({ data, handleDeleteData, handleUpdateData }) {
  const [ isEditable, setIsEditable ] = useState(false)
  const [name, setName] = useState(data.name)
  const [age, setAge] = useState(data.age)
  const [weight, setWeight] = useState(data.weight)
  const [city, setCity] = useState(data.city)
  const [breed, setBreed] = useState(data.breed)
  const history = useHistory();

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsEditable(false)
    const payload = {
      id: data.id,
      name,
      age,
      weight,
      city,
      breed,
    }
    await handleUpdateData(payload)
    history.push('/user')
  }
  const handleOnUpdate = (e) => {
    e.preventDefault()
    setIsEditable(true)
  }
  return (
    <li>
      <strong>Nome:</strong>
      { isEditable ? <input value={name} onChange={e => setName(e.target.value)}></input> : <p>{name}</p>}

      <strong>Idade:</strong>
      { isEditable ? <input value={age} onChange={e => setAge(e.target.value)}></input> : <p>{age}</p>}


      <strong>Raça:</strong>
      { isEditable ? <input value={breed} onChange={e => setBreed(e.target.value)}></input> : <p>{breed}</p>}

      <strong>Peso:</strong>
      { isEditable ? <input value={weight} onChange={e => setWeight(e.target.value)}></input> : <p>{weight}</p>}

      <strong>Localidade:</strong>
      { isEditable ? <input value={city} onChange={e => setCity(e.target.value)}></input> : <p>{city}</p>}

      { isEditable && (
        <button onClick={handleOnSubmit} className="update" type="button">
          <FiSave size={20} color="#a8a8b3"/>
        </button>
      )}
      { handleDeleteData ? (
        <button onClick={() => handleDeleteData(data.id)} className="delete" type="button">
          <FiTrash2 size={20} color="#a8a8b3"/>
        </button>
      ) : ''}
      { handleUpdateData && !isEditable? (
        <button onClick={handleOnUpdate} className="update" type="button">
          <FiPenTool size={20} color="#a8a8b3"/>
        </button>
      ) : ''}
    </li>
  )
}