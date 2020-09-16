import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interfaces';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    root(): Promise<{
        items: Item[];
        jobs?: undefined;
    } | {
        jobs: any[];
        items?: undefined;
    }>;
    findOne(id: string): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    delete(id: string): Promise<Item>;
    update(updateItemDto: CreateItemDto, id: string): Promise<Item>;
}
