import { Request, Response } from "express";
import { ProductService } from "../../services/produto/ProductService";

class ProductController {

    async handleProduct(req: Request, res: Response) {


        
        const { name, description, image, categoria_id, price} = req.body
        

        const createProductService = new ProductService()
        const product = await createProductService.createProduct(
            { name, description, image, categoria_id, price })


        return res.json(product)
    }
}

export { ProductController }