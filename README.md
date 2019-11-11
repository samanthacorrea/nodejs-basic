# Entendendo Node.js

### O que é Node.js?
É uma plataforma que possibilita o desenvolvimento de aplicações no back-end utilizando a linguagem mais conhecida da web. O javascript, que inicialmente foi criada para rodar somente em navegadores.

### Instalação
> sudo apt-get install -y nodejs

Quando o node é instalado pelo apt-get pode haver um conflito. No lugar do node ele passa a se chamar nodejs. Isso gera problemas porque como a instrução **npm start** procura o binário **node** e não **nodejs**, ela não funcionará. 

### Dicas de execução, importação, implementação... 

Use a seguinte instrução para subir o servidor:
> nodejs server

Executar arquivo node:
> node nome_do_arquivo.js

Ou

> npm start (não precisa reiniciar o server a cada alteração)


Um módulo node é como uma biblioteca, ou seja, um conjunto de funcionalidades.

Um arquivo com a extensão **.js** já é um módulo.

Para usar o módulo HTTP é necessário importá-lo:
> const http = require('http')

Após isso, criar uma variável que guardará o retorno do método de criar servidor:
> const servidor = http.createServer()

Configurar a porta do servidor:
> servidor.listen(porta)


### Objetivo
O objetivo é construir uma API para entender os conceitos básicos do Node.js.

### Rotas disponíveis

Formulário de cadastro de livro:  `/livros/form`

Formulário de edição de um livro:  `/livros/form/:id`

Cadastro de livro:  `/livros`

Lista de livros:  `/livros`

Atualiza dados de um livro:  `/livros`

Exclui dados de um livro:  `/livros/:id`

