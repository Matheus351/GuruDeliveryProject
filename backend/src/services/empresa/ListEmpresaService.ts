import prismaClient from "../../prisma";

interface EmpresaRequest {
    user_id:string
}

class ListEmpresaService {

    async listEmpresas({ user_id }: EmpresaRequest) {

        console.log(user_id)

        const empresa = await prismaClient.empresa.findMany({
            where: {
              user_id
            },
            include:{
                user:true
            }
            // select: {
            //     id:true,
            //     nome:true,
            //     cnpj:true,
            //     user_id:true
            // }
        })

        return empresa
    }
}
export { ListEmpresaService }