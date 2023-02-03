import mongoose from "mongoose";


const editoraSchema = new mongoose.Schema(
    {
        nome: {type: String},    
        razao_social: {type: String},
        endereco: {type: String},
        telefone: {type: Number} 
   }
);


const editoras = mongoose.model('editoras', editoraSchema);

export default editoras