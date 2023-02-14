import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{

    async handle(req:Request, resp:Response){

        const user_id = req.user_id

        const detailUserService = new DetailUserService()

        const detailUser = await detailUserService.execute(user_id)
    
        return resp.json(detailUser)
        
    }
}

export {DetailUserController}