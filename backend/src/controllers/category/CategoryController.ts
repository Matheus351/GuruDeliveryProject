import { Request, Response } from "express";
import { CategoryService } from "../../services/category/CategoryService";


class CategoryController{
   
    async handleCategory(req:Request, resp:Response){

        const {name} = req.body

        const categoryService = new CategoryService()

        const category = await categoryService.createCategory({name})

        return resp.json(category)
    }
}

export {CategoryController}