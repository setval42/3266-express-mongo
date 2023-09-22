import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(
      "mongodb+srv://labuser:<password>@cluster0.fwpzito.mongodb.net/livraria?retryWrites=true&w=majority"
    );
    
    return mongoose.connection;
}

export default conectaNaDatabase;
