import { Request, Response } from "express";
import { CarrinhoService } from "../../services/carrinho/CarrinhoService";

class CarrinhoController{
   
    async handleCarrinho(req:Request, resp:Response){

        const {user_id, total} = req.body
        
        const carrinhoService = new CarrinhoService()

        const carrinho = await carrinhoService.createCarrinho({user_id, total})

        return resp.json(carrinho)
    }
}

export {CarrinhoController}