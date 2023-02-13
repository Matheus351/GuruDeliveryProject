import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController{

    async handle(req:Request, resp:Response){
      
        const {email, password} = req.body

        const authUserService = new AuthUserService()

        const authUser = await authUserService.execute({email, password})
    
        return resp.json(authUser)
    }

}

export {AuthUserController}