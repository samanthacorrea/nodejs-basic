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
                        <h1> Bem-vindx ao exemplo básico de construção de uma API</h1>
                        <h3>Rotas disponíveis</h3>
                        <div>Formulário de cadastro de livro: <code>/livros/form</code></div>
                        <div>Cadastro de livro: <code>/livros</code></div>
                        <div>Lista de livros: <code>/livros</code></div>
                        <div>Formulário de edição de um livro: <code>/livros/form/:id</code></div>
                        <div>Atualiza dados de um livro: <code>/livros</code></div>
                        <div>Exclui dados de um livro: <code>/livros/:id</code></div>
                        
                    </body> 
                </html>
            `
        );
    });

    // Formulário de cadastro de livro
    app.get('/livros/form', (req, resp) => {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    // Cadastra um livro
    app.post('/livros', (req, resp) => {
        console.log(req.body);
        
        //instância do bando de dados
        const livroDAO = new LivroDAO(db);

        livroDAO.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro))
    
    });

    // Edita dados de um livro
    app.put('/livros', function(req, resp) {
        console.log(req.body);
        const livroDAO = new LivroDAO(db);
        
        livroDAO.atualiza(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

    // Lista de livros
    app.get('/livros', (req, resp) => {
        const livroDAO = new LivroDAO(db);
        // console.log('listagem livros')

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

    // Exclui livro
    app.delete('/livros/:id', function(req, resp) {
        // Recuperar informação (id)
        const id = req.params.id;
    
        const livroDAO = new LivroDAO(db);
        livroDAO.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    });

    // Formulário de edição de um livro
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
}