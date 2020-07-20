import React, { useState, createContext, useEffect } from 'react'

import api from '../services/api'
const initialState = {
  token: null,
  signed: false,
  user: {
    name: '',
    address: '',
    email: ''
  },
  pets: []
}

const PetsContext = createContext(initialState)

export const PetsProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(initialState.user)
  const [pets, setPets] = useState(initialState.pets)

  useEffect(() => {
    const hasToken = localStorage.getItem('token');
    const hasUser = localStorage.getItem('user')
    if (hasToken && hasUser) {
      setToken(hasToken)
      setUser(JSON.parse(hasUser))
    }
  }, [])

  useEffect(() => {
    api.get('pets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setPets(response.data)
    })
  }, [token])

  async function handleDeletePet (id) {
    try {
      await api.delete(`pets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setPets(pets.filter(pet => pet.id !== id))
    } catch (err) {
      alert('Erro ao deletar pet, tente novamente')
    }
  }

  async function handleUpdatePet (data) {
    try {
      await api.delete(`pets/${data.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const index = pets.indexOf(pet => pet.id === data.id)
      setPets(prev => {
        prev[index] = data
        return prev
      })
    } catch (err) {
      console.log(err);
      alert('Erro ao cadastrar pet, tente novamente.')
    }
  }
  async function handleLogin (email, password) {
    try {
      const { data } = await api.post('sessions', { email, password })
      const { user, token } = data;
      setUser(user)
      setToken(token)
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (err) {
      console.log(err);
      alert('Falha no login, tente novamente')
    }
  }

  function handleLogout () {
    setUser()
    setToken()
  }


  async function handleRegister (data) {
    try {
      await api.post('user', data)
      alert('Cadastro realizado com sucesso!!')
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <PetsContext.Provider
      value={{
        token,
        signed: !!token,
        user,
        pets,
        handleDeletePet,
        handleLogin,
        handleRegister,
        handleLogout,
        handleUpdatePet
      }}
    >
      {children}
    </PetsContext.Provider>
  )
}

export default PetsContext
