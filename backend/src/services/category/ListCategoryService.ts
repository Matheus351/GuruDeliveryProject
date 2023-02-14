import prismaClient from "../../prisma";

class ListCategoryService{

    async execute(){
       
        const categories = await prismaClient.categoria.findMany({
            select:{
                id:true,
                name:true
            }
        })

        return categories
    }


}

export {ListCategoryService}