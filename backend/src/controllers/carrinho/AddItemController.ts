import { Request, Response } from "express";
import { AddItemService } from "../../services/carrinho/AddItemService";

class AddItemController{

    async handleAddItem(req:Request, resp:Response){
      const {carrinho_id, produto_id, quantidade} = req.body

      const addItemService = new AddItemService()

      const item = await addItemService.execute({
        carrinho_id,
        produto_id,
        quantidade
      })
      
      return resp.json(item)

    }
}

export {AddItemController}