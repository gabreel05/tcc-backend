import { Router } from 'express'

import UserController from './controllers/UserController'
import ModalityController from './controllers/ModalityController'
import EventController from './controllers/EventController'
import ProjectController from './controllers/ProjectController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

routes.get('/modalities', ModalityController.index)
routes.get('/modalities/:id', ModalityController.show)
routes.post('/modalities', ModalityController.store)
routes.put('/modalities/:id', ModalityController.update)
routes.delete('/modalities/:id', ModalityController.destroy)

routes.get('/events', EventController.index)
routes.get('/events/:id', EventController.show)
routes.post('/events', EventController.store)
routes.put('/events/:id', EventController.update)
routes.delete('/events/:id', EventController.destroy)

routes.get('/projects', ProjectController.index)
routes.get('/projects/:id', ProjectController.show)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', ProjectController.update)
routes.delete('/projects/:id', ProjectController.destroy)

export default routes
