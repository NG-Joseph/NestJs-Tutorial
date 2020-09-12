import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interfaces'
@Injectable()
export class ItemsService {
    private readonly items: Item[] = [

        {
            id: "3223737",
            name: "Item 1",
            qty: 100,
            description: "This is the first item"

 
        },
        {
            id: "2331253",
            name: "Item 2",
            qty: 133,
            description: "This is the second item"

 
        }
    ]; 

    findAll(): Item[]   {
        return this.items;
    }

    findOne(id): Item {
        return this.items.find(item => item.id === id)
    }

}
