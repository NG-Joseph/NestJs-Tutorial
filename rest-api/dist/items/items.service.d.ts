import { Item } from './interfaces/item.interfaces';
export declare class ItemsService {
    private readonly items;
    findAll(): Item[];
    findOne(id: any): Item;
}
