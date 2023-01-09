import { Router } from 'express';
import clientContoller from './controllers/clientController';

const router = Router();

// Clients routes (CRUD) - Create, Read, Update, Delete
router.post('/client', clientContoller.create);
router.get('/clients', clientContoller.index);
router.get('/client/:id', clientContoller.findById);
router.put('/client/:id', clientContoller.update);
router.delete('/client/:id', clientContoller.delete);

export default router;