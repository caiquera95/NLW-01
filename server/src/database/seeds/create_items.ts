import Knex from 'knex';

//Seed para app com alguns ja no banco de dados

export async function seed(knex: Knex){
    await knex('items').insert([
        {title: 'Lâmpadas', image: 'lampadas.svg'},
        {title: 'Pilhas e baterias', image: 'baterias.svg'},
        {title: 'Papéis e papelão', image: 'papeis-papelao.svg'},
        {title: 'Resíduos eletrônicos', image: 'eletronicos.svg'},
        {title: 'Óleo de cozinha', image: 'oleo.svg'},
        {title: 'Resíduos Orgânicos', image: 'organicos.svg'},
    ]);
}