import { FindProductService } from "../../services/produto/FindProductService"
import { Request, Response } from "express"

class FindProductController{


    async handleProduct(req:Request, resp:Response){

        
        const {id} = req.params

        const findProductService = new FindProductService()

        const product = await findProductService.findProduct({id})

        return resp.json(product)


    }
}

export {FindProductController}