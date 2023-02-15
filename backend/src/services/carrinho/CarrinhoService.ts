import prismaClient from "../../prisma";

interface CarrinhoRequest{
    user_id:string,
    total:string,
}

class CarrinhoService{

    async createCarrinho({user_id, total}:CarrinhoRequest){
       
        if(user_id===''){
            throw new Error('Error')
        }

        const carrinho = await prismaClient.carrinho.create({
            data:{
                user_id,
                total
            },
            select:{
                id:true,
                user_id:true,
                data:true,
                total:true
            }
        })

        return carrinho
    } 
}

export {CarrinhoService}