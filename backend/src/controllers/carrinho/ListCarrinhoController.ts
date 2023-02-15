import { Request, Response } from "express";
import { ListCarrinhosService } from "../../services/carrinho/ListCarrinhosService";
class ListCarrinhoController{
   
    async handleListCarrinho(req:Request, resp:Response){

        const {user_id} = req.params
        
        const carrinhoService = new ListCarrinhosService()

        const carrinhos = await carrinhoService.listCarrinho({user_id})

        return resp.json(carrinhos)
    }
}

export {ListCarrinhoController}