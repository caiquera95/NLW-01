import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), //retornar caminho do diretorio database
    },
    useNullAsDefault:true,
});

export default connection;


//Migrations = historicos do banco de dados

//Trabalhar com mais de 1 dev no projeto...