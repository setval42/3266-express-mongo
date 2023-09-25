import livro from "../models/livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }

    };

    static async cadastrarLivros(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }

    }
}

export default LivroController;