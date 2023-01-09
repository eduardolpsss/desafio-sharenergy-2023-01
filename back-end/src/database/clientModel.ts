import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const clientModel = new Schema({
    // Client model schema
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    telephone: {
        type: String,
    },
    address: {
        type: String,
    },
    cpf: {
        type: String,
    }
}, {timestamps: true});

export default mongoose.model('Clients', clientModel);