import { Router, Request, Response } from "express";
import { UserController } from "./controllers/user/UserController";
import { EnderecoController } from "./controllers/endereco/EnderecoController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import {checkAuthentication} from "./middlewares/checkAuthentication"


const router = Router()


router.post('/users', new UserController().handleUser)

router.post('/enderecos', new EnderecoController().handleEndereco)

router.post('/login', new AuthUserController().handle)

export {router}