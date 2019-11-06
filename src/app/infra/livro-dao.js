class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    lista(callback) {
        this._db.all(
            'SELECT * FROM livros',
            (erro, resultados) => {
                callback(erro, resultados)
            }
        )
    }
    // Adicionar livro

    // Remover livro

    // Editar livro
}

module.exports = LivroDAO;