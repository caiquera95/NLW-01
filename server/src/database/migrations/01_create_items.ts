import Knex from 'knex';

export async function up(knex: Knex){
    //UP Criar a tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable(); //Não pode ser sem imagem, todo ponto deve ter imagem
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    //DOWN voltar atrás (Deletar tabela)
    return knex.schema.dropTable('items');
}