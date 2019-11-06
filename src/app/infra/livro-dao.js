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
        });
    }
    // Adicionar livro
    adiciona(livro) {
        return new Promise((resolve, reject) => {
            // run é um método do sqlite que não retorna nenhum resultado
            this._db.run(`
                INSERT INTO LIVROS (
                        titulo,
                        preco,
                        descricao
                    ) values (?, ?, ?)
                `, 
                // cada umas das interrogações representa as informações do livro
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ], 
                // a ordem no array importa, a inserção tem que ser nas colunas
                // correspondentes

                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro');
                    }
                    resolve();
                }
            )
        });
    }

    // Remover livro
    remove(livro) {
        return new Promise((resolve, reject) => {
            this._db.run()
        });
    }
    // Editar livro
    remove(livro) {
        return new Promise((resolve, reject) => {
            this._db.run()
        });
    }
}

module.exports = LivroDAO;