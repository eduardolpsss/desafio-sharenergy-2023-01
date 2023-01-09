import { Request, Response } from 'express';
import clientModel from '../database/clientModel';

const clientController = {
    async index(req: Request, res: Response): Promise<Response> {
        let client = await clientModel.find();

        if (client) {
            return res.json(client);
        } else {
            return res.json({ error: '[API]: Error loading clients.' });
        }
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        let client = await clientModel.findById(id);

        if (client) {
            return res.json(client);
        } else {
            return res.json({ error: '[API] Error loading client.' });
        }
    },

    async create(req: Request, res: Response): Promise<Response> {
        const { name, email, telephone, address, cpf } = req.body;
        let client = await clientModel.create(req.body);

        if(!client) {
            return (
                res.status(401).json({
                    success: false,
                    message: '[API]: Error creating client.'
                })
            )
        } else {
            return (
                res.status(200).json({
                    success: true,
                    message: '[API]: Client successfully created.'
                })
            )
        }
    },

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        let client = await clientModel.findByIdAndUpdate(id, req.body, { new: true });

        if (client) {
            return res.json({ message: '[API]: Client successfully updated.' });
        } else {
            return res.json({ error: '[API]: Error updating client.' });
        }
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        let client = await clientModel.findByIdAndDelete(id);

        if (client) {
            return res.json({ message: '[API]: Client successfully deleted.' });
        } else {
            return res.json({ error: '[API]: Error deleting client.' });
        }
    }
}

export default clientController;