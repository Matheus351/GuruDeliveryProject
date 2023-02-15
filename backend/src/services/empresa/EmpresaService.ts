import prismaClient from "../../prisma";

interface EmpresaRequest {
    nome: string
    cnpj: string
    user_id:string
}

class EmpresaService {

    async createEmpresa({ nome, cnpj, user_id }: EmpresaRequest) {

        const empresa = await prismaClient.empresa.create({
            data: {
              nome,
              cnpj,
              user_id
            },
            select: {
                id:true,
                nome:true,
                cnpj:true,
                user_id:true
            }
        })

        return empresa
    }
}
export { EmpresaService }