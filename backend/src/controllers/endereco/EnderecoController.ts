import { Request, Response } from "express";
import { EnderecoService } from "../../services/endereco/EnderecoService";

class EnderecoController {

    async handleEndereco(req: Request, res: Response) {


        
        const { cidade, rua, bairro, numero} = req.body
        

        const createEnderecoService = new EnderecoService()
        const endereco = await createEnderecoService.createEndereco(
            { cidade, rua, bairro, numero })


        return res.json(endereco)
    }
}

export { EnderecoController }