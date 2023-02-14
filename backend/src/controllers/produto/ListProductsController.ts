import { Request, Response } from "express";
import { ListProductsService } from "../../services/produto/ListProductsService";

class ListProductsController{

    async handleProducts(req:Request, resp:Response){


      const listProductsService = new ListProductsService()

      const orders = await listProductsService.getAllProducts()
      
      return resp.json(orders)

    }
}

export {ListProductsController}