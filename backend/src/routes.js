import {Router} from 'express'
import authMiddleware from './app/middlewares/auth'
import UserController from './app/controllers/UserController'
import UnityController from './app/controllers/UnityController'
import SessionController from './app/controllers/SessionController'
const routes= Router()

routes.post('/login',SessionController.store)
routes.post('/users',UserController.store)

routes.use(authMiddleware)

routes.get('/unitys',UnityController.show)

export default routes