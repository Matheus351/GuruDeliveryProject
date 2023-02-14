import prismaClient from "../../prisma";


class ListProductsService{

    async getAllProducts(){

        const products = await prismaClient.produto.findMany()

        return products

    }
}

export {ListProductsService}