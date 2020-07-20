import * as Yup from 'yup'
import Pet from '../models/Pet'
import User from '../models/User'

class PetController {
  async store (req, res) {
    const { body: pet } = req
    console.log('eae')
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      city: Yup.string().required(),
      weight: Yup.number().required(),
      breed: Yup.string().required(),
      age: Yup.number().required(),
      user_id: Yup.string().required()
    })
    if (!(await schema.isValid(pet))) {
      return res.status(400).json({ message: 'Bad Request' })
    }
    try {
      console.log(pet.user_id)
      const userFound = await User.findByPk(pet.user_id)
      if (!userFound) {
        return res.status(400).json({ message: 'User Not Found' })
      }
      console.log('ola')
      const newPet = await Pet.create(pet)

      return res.json(newPet)
    } catch (e) {
      console.log(e)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async index (req, res) {
    try {
      const pets = await Pet.findAll()

      return res.json(pets)
    } catch (e) {
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async update (req, res) {
    const { body: updatedPet, params } = req
    const { id } = params
    try {
      const petFound = await Pet.findByPk(id)
      if (!petFound) {
        return res.status(400).json({ message: 'Pet Not Found' })
      }

      await petFound.update({
        ...petFound,
        ...updatedPet
      })
      return res.json({ message: 'Pet was Updated' })
    } catch (e) {
      console.log(e.message)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async delete (req, res) {
    const { params } = req
    const { id } = params
    try {
      const petFound = await Pet.findByPk(id)
      if (!petFound) {
        return res.status(400).json({ message: 'Pet Not Found' })
      }

      await petFound.destroy()
      return res.json({ message: 'Pet was deleted' })
    } catch (e) {
      console.log(e.message)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

export default new PetController()
