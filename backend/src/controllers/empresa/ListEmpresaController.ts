import { Request, Response } from "express";
import { ListEmpresaService } from "../../services/empresa/ListEmpresaService";

class ListEmpresaController {

    async handleListEmpresa(req: Request, res: Response) {

    
        const {user_id} = req.params

        console.log('user',user_id)
        

        const listEmpresaService = new ListEmpresaService()
        const empresas = await listEmpresaService.listEmpresas(
            { user_id })


        return res.json(empresas)
    }
}

export { ListEmpresaController }