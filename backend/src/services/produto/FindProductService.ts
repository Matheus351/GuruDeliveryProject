import { transformDocument } from "@prisma/client/runtime"
import prismaClient from "../../prisma"

interface FindProductRequest{
    id:string
}

class FindProductService{


   async findProduct ({id}:FindProductRequest){


      const product = await prismaClient.produto.findUnique({
        where:{
            id
        },
        select:{
            id:true,
            name:true,
            price:true,
            description:true,
            categoria_id:true,
            empresa_cnpj:true
        }
      })

      return product

   }



}

export {FindProductService}