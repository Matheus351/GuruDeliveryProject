// import prismaClient from "../../prisma";

// interface ListCarrinhoItemRequest{
//     carrinho_id:string,
// }

// class ListCarrinhoItemService{

//     async listCarrinhoItem({carrinho_id}:ListCarrinhoItemRequest){
       
//         if(carrinho_id===''){
//             throw new Error('Error')
//         }

//         const carrinhoItems = await prismaClient.itemCarrinho.findMany({
//             where:{
//                 carrinho_id,
//             },
//             select:{
//                 id:true,
//                 carrinho_id:true,
//                 quantidade:true
//             }
//         })

//         return carrinhos
//     } 
// }

// export {ListCarrinhoItemService}