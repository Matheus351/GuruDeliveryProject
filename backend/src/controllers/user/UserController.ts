import { Request, Response } from "express";
import { UserService } from "../../services/user/UserService";

class UserController {

    async handleUser(req: Request, resp: Response) {

        const { name, email, password, endereco_id } = req.body

        console.log(name, email, password)

        const createUserService = new UserService()
        const user = await createUserService.createUser({ name, email, password, endereco_id })

        return resp.json(user)
    }
}

export { UserController }