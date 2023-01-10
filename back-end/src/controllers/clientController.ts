import { Request, Response } from 'express';
import clientModel from '../database/clientModel';

const clientController = {
    async index(req: Request, res: Response): Promise<Response> {
        let client = await clientModel.find();

        if (client) {
            return res.json(client);
        } else {
            return res.json({ error: '[API]: Erro carregando clientes.' });
        }
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        let client = await clientModel.findById(id);

        if (client) {
            return res.json(client);
        } else {
            return res.json({ error: '[API] Erro carregando cliente.' });
        }
    },

    async create(req: Request, res: Response): Promise<Response> {
        const { name, email, telephone, address, cpf } = req.body;
        let client = await clientModel.create(req.body);

        if(!client) {
            return (
                res.status(401).json({
                    success: false,
                    message: '[API]: Erro criando cliente.'
                })
            )
        } else {
            return (
                res.status(200).json({
                    success: true,
                    message: '[API]: Cliente criado com sucesso.'
                })
            )
        }
    },

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        let client = await clientModel.findByIdAndUpdate(id, req.body, { new: true });

        if (client) {
            return res.json({ message: '[API]: Cliente atualizado com sucesso.' });
        } else {
            return res.json({ error: '[API]: Erro atualizando cliente.' });
        }
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        let client = await clientModel.findByIdAndDelete(id);

        if (client) {
            return res.json({ message: '[API]: Cliente deletado com sucesso.' });
        } else {
            return res.json({ error: '[API]: Erro deletando cliente.' });
        }
    }
}

export default clientController;