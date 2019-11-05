// Para utilização do módulo HTTP é necessário importá-lo
const http = require('http');

// Exercício 1
// Aqui será definido o que o servidor deverá fazendo ao
// receber uma requisição. Aqui será criada uma função
// anônima que recebe dois parâmetros (request e response).
// O objetivo será devolver ao usuário uma string representando
// o HTML e isso será feito usando o método "end()".
//const servidor = http.createServer(function (req, resp) {
//	resp.end(`
//        <html>
//            <head>
//                <meta charset="utf-8">
//            </head>
//            <body>
//                <h1> Casa do Código </h1>
//            </body> 
//        </html>
//    `);
//});

// Exercício 2
// Complexidade ciclomática: quanto mais caminhos o programa tiver, 
// mais complexo e de difícil manutenção o seu código será.
const servidor = http.createServer(function (req, resp) {
	let html = '';
	if (req.url === '/') {
		html = `
			<html>
			    <head>
				<meta charset="utf-8">
			    </head>
			    <body>
				<h1> Casa do Código </h1>
			    </body> 
			</html>
		`;
	} else if (req.url === '/livros') {
		html = `
			<html>
			    <head>
				<meta charset="utf-8">
			    </head>
			    <body>
				<h1> Listagem de livros </h1>
			    </body> 
			</html>
		`;
	}

	resp.end(html);
	
});



// Configurar porta do servidor
servidor.listen(3001);
