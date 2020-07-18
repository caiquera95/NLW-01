import knex from '../database/connection';
import {Request, Response} from 'express';
 
class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*'); //Buscando todos campos do banco de dados
    
        const serializedItems = items.map(item =>{ //Serializacao de dados, transforma dados em um novo formato
            return {
                id: item.id,
                title:item.title,
                image_url: `http://192.168.1.11:3333/uploads/${item.image}`, //Mostrando url imagem no insomnia
            };
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;