import { Router, Request, Response } from "express";
import { UserController } from "./controllers/user/UserController";
import { EnderecoController } from "./controllers/endereco/EnderecoController";

const router = Router()


router.post('/users', new UserController().handleUser)

router.post('/enderecos', new EnderecoController().handleEndereco)


export {router}