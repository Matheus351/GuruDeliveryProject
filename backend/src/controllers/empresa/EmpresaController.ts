import { Request, Response } from "express";
import { EmpresaService } from "../../services/empresa/EmpresaService";

class EmpresaController {

    async handleEmpresa(req: Request, res: Response) {


        
        const { user_id, cnpj, nome } = req.body
        

        const createEmpresaService = new EmpresaService()
        const empresa = await createEmpresaService.createEmpresa(
            { user_id, cnpj, nome })


        return res.json(empresa)
    }
}

export { EmpresaController }