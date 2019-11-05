// Para utilização do módulo HTTP é necessário importá-lo
const http = require('http');

// Aqui será definido o que o servidor deverá fazendo ao
// receber uma requisição. Aqui será criada uma função
// anônima que recebe dois parâmetros (request e response).
// O objetivo será devolver ao usuário uma string representando
// o HTML e isso será feito usando o método "end()".
const servidor = http.createServer(function (req, resp) {
	resp.end(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `);
});

const ip = 'localhost';
const porta = 3000;

// Configurar porta do servidor
servidor.listen(porta, ip);
