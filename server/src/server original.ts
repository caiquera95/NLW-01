import express from 'express';

const app = express();

app.use(express.json());
//Rota: Endereço completo da Requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar um informação já existente
//DELETE: Deletar uma informação

//REQUEST PARAMS: Parâmetros que vem na própria rota que identificam um recurso
//QUERY PARAM: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação 
//REQUEST BODY: Parâmetros para criação/atualização de informações  


const users = [ 'Caíque', 'Anna', 'Jão', 'São Paulo', 'Brasilllll'];

app.get('/users', ( request, response ) => { 
    //REQUEST obter dados da nossa requisicao do app 
    //RESPONSE devolver resposta ao browser ou app

    //FILTRANDO USUÁRIOS
    const search = String(request.query.search);
    const usuariosFiltrados = search ? users.filter( user => user .includes(search)) : users ;
    console.log(search);

    // response.send('Hello World'); //Exibindo msg na tela
    // response.json(['Caíque', 'Anna', 'Jão', 'back-end']) //Retornando um ARRAY
    return response.json(usuariosFiltrados);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const dados = request.body;
    console.log(dados);

    const user = {
        name: dados.name, email: dados.email
    };
    return response.json(user);

});

app.listen(3333);