import prismaClient from "../../prisma";

interface EnderecoRequest {
    cidade: string
    rua: string
    bairro: string
    numero: string
}

class EnderecoService {

    async createEndereco({ cidade, rua, bairro, numero }: EnderecoRequest) {

        const endereco = await prismaClient.endereco.create({
            data: {
                cidade: cidade,
                rua: rua,
                bairro: bairro,
                numero: numero
            },
            select: {
                id:true,
                cidade: true,
                rua: true,
                bairro: true,
                numero: true
            }
        })

        return endereco
    }
}
export { EnderecoService }