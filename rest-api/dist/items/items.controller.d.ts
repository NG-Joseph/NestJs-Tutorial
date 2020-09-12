import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interfaces';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Item[];
    findOne(id: any): Item;
    create(CreateItemDto: CreateItemDto): string;
    delete(id: any): string;
    update(updateItemDto: CreateItemDto, id: any): string;
}
