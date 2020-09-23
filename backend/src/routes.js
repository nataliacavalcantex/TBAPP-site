import {Router} from 'express'
import authMiddleware from './app/middlewares/auth'
import UserController from './app/controllers/UserController'
import ProfessionalController from './app/controllers/ProfessionalController'
import UnityController from './app/controllers/UnityController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import multer from 'multer'
import multerConfig from './config/multer'
const upload= multer (multerConfig)
const routes= Router()

routes.post('/login',SessionController.store)
routes.get('/professionals',ProfessionalController.show)
routes.post('/users',UserController.store)
routes.use(authMiddleware)
routes.post('/files',upload.single('file'),FileController.store);
routes.get('/files/:id',FileController.index);
routes.put('/user',UserController.update)
routes.get('/user',UserController.index)
routes.get('/unitys',UnityController.show)

export default routes