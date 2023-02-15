import prismaClient from "../../prisma";

interface ItemRequest{
    carrinho_id:string
    produto_id:string
    quantidade:number
}

class AddItemService{

    
    async execute({carrinho_id, produto_id, quantidade}:ItemRequest){
       const item = await prismaClient.itemCarrinho.create({
        data:{
            carrinho_id,
            produto_id,
            quantidade
        }
       })

       return item
    }
}

export {AddItemService}