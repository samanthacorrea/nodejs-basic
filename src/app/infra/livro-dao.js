class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) {
                        return reject('Não foi possível listar os livros!')
                    } 

                    return resolve(resultados);
                }
            )
        })
    }
    // Adicionar livro

    // Remover livro

    // Editar livro
}

module.exports = LivroDAO;