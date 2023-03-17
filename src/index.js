const express = require('express'); // importa express
const { v4: uuidv4 } = require('uuid'); // importa a lib uuid
const app = express(); // a const app guarda uma instância do express

// o express por padrão não vem configurado para interpretar o formato json, que normalmente se usa para APIs, neste caso precisamos deixar explicito, nessa instância do express, que ele terá que tratar json nas requisições. Logo abaixo da criação da app, vamos inserir o método use, para o express passar a tratar as requisições no formato json.
app.use(express.json()); // este comando diz a instância (app) do express, para ela passar a considerar o formato json nas requisições.

const projects = [];

// query params (parametros de consulta)
// ?parametro=valor&
// GET http://localhost:3000/projects?title=Node&owner=Boni

//rotas
app.get('/projects', function(request, response) {
// esses parâmetros de consulta são definidos na request, neste caso, na requisição do Postman
  const query = request.query;
  console.log(query);
// Ou podemos subsituir a const query pelas variaveis de consulta
  const {title, owner} = request.query;
  console.log(title, owner);
  return response.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.post('/projects', function(request, response) {
  // const body = request.body;
  // console.log(body);
  const {nome, owner} = request.body;
  console.log(nome, owner);
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.put('/projects/:id', function(request, response) {
// esses parâmetros de rotas são definidos na request, neste caso, na requisição do Postman
  // const params = request.params;
  // console.log(params);
// Ou podemos subsituir a const query pelas variaveis de consulta
  const {id} = request.params;
  const {name, owner} = request.body;
  console.log(id, name, owner);
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.delete('/projects/:id', function(request, response) {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.listen(3000, () => {
  console.log('Server started on port 3000!! 🏆')
}); // escuta na porta 3000 as requisições, http://localhost:3000, acessar no browser

// no terminal subir o servidor com o comando: node src/index.js, para acessar no browser
