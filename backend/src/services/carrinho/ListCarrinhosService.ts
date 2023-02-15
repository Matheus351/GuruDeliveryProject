import prismaClient from "../../prisma";

interface CarrinhoRequest{
    user_id:string,
}

class ListCarrinhosService{

    async listCarrinho({user_id}:CarrinhoRequest){
       
        if(user_id===''){
            throw new Error('Error')
        }

        const carrinhos = await prismaClient.carrinho.findMany({
            where:{
                user_id,
            },
            select:{
                id:true,
                user_id:true,
                data:true,
                total:true
            }
        })

        return carrinhos
    } 
}

export {ListCarrinhosService}