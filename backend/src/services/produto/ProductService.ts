import prismaClient from "../../prisma";

interface ProductRequest {
    name: string
    price: string
    description: string
    image: string
    categoria_id:string
}

class ProductService {

    async createProduct({ name, price, description, image, categoria_id }: ProductRequest) {

        const produto = await prismaClient.produto.create({
            data: {
                name,
                price,
                description,
                image,
                categoria_id
            },
            select: {
                id:true,
                name: true,
                price: true,
                description: true,
                categoria_id: true
            }
        })

        return produto
    }
}
export { ProductService }