// src/routes/auth.routes.ts
import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'
import { CreateUserDTO } from '../dtos/LoginUserDTO'
import { validateDTO } from '../middlewares/validateDTO'

const router = Router()
const controller = new AuthController()

router.post('/register', validateDTO(CreateUserDTO), controller.register.bind(controller))
router.post('/login', controller.login.bind(controller))

export default router