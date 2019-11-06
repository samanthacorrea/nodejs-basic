const db = require('../../config/database')
const LivroDAO = require('../infra/livro-dao');
// É necessário exportar as rotas, uma vez que as mesmas
// não teriam acesso à variável app nesse contexto.
module.exports = (app) => {
    // Os parâmetros de get são a rota e o callback
    // a ser executado.
    app.get('/', function(req, resp) { 
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body> 
                </html>
            `
        );
    });

    app.get('/livros', function(req, resp) {
        const livroDAO = new LivroDAO(db);

        livroDAO.lista()
                .then(livros => 
                    resp.marko(
                        require('../views/livros/lista/lista.marko'),
        
                        //listagem de livros dinâmica
                        {
                            livros
                        }
                    )
                )
                .catch(erro => console.log(erro))
    
    });
}