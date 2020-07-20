import { Router } from 'express'
import UserController from './app/controllers/UserController'
import PetController from './app/controllers/PetController'
import SessionController from './app/controllers/SessionController'
import authMiddleware from './app/middleware/auth'

const routes = Router()

routes.post('/user', UserController.store)
routes.post('/sessions', SessionController.store)
routes.get('/pets', PetController.index)
routes.use(authMiddleware)

routes.put('/user', UserController.update)
routes.post('/pets', PetController.store)
routes.put('/pets/:id', PetController.update)
routes.delete('/pets/:id', PetController.delete)

module.exports = routes
