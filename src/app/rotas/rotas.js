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

    app.get('/livros/form', (req, resp) => {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    })

    app.post('/livros', (req, resp) => {
        console.log(req.body);
        
        //instância do bando de dados
        const livroDAO = new LivroDAO(db);

        livroDAO.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro))
    
    })

    app.get('/livros', (req, resp) => {
        const livroDAO = new LivroDAO(db);
        console.log('listagem livros')

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

    app.delete('/livros/:id', function(req, resp) {
        // Recuperar informação (id)
        const id = req.params.id;
    
        const livroDAO = new LivroDAO(db);
        livroDAO.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroDAO = new LivroDAO(db);

        livroDAO.buscaPorId(id)
                .then(livro => 
                    resp.marko(
                        require('../views/livros/form/form.marko'), 
                        { livro: livro }
                    )
                )
                .catch(erro => console.log(erro));
    });

    app.put('/livros', function(req, resp) {
        console.log(req.body);
        const livroDAO = new LivroDAO(db);
        
        livroDAO.atualiza(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });
}