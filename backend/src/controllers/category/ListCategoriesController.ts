import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{

    async handle(req:Request, resp:Response){
       const listCategoryService = new ListCategoryService()

       const categories = await listCategoryService.execute()

       return resp.json(categories)
    }
}

export {ListCategoryController}