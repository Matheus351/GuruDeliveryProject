import prismaClient from "../../prisma";

interface CategoryRequest{
    name:string
}

class CategoryService{

    async createCategory({name}:CategoryRequest){
       
        if(name===''){
            throw new Error('Invalid name')
        }

        const category = await prismaClient.categoria.create({
            data:{
                name:name
            },
            select:{
                id:true,
                name:true
            }
        })

        return category
    } 
}

export {CategoryService}