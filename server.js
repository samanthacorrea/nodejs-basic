const express = require('express');
const app = express();
console.log(app)
// Para utilização do módulo HTTP é necessário importá-lo
const http = require('http');


// Configurar porta do servidor
app.listen(3001, function() {
    console.log(`Servidor rodando na porta 3001`);
});

// Os parâmetros de get são o caminho e o callback
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
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body> 
            </html>
        `
    );
});
