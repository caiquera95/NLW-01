import Knex from 'knex';

export async function up(knex: Knex){
    //UP Criar a tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
        //Não pode ser sem imagem, todo ponto deve ter imagem
        
        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
    });
}

export async function down(knex: Knex) {
    //DOWN voltar atrás (Deletar tabela)
    return knex.schema.dropTable('point_items');
}