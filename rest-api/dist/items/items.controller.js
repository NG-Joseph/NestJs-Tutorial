"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const create_item_dto_1 = require("./dto/create-item-dto");
const items_service_1 = require("./items.service");
const http_exception_filter_1 = require("../filters/http-exception.filter");
const validation_pipe_1 = require("../pipes/validation.pipe");
const itemdata_decorator_1 = require("../decorators/itemdata.decorator");
const validation_exception_1 = require("../filters/validation-exception");
let ItemsController = class ItemsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    findAll() {
        return this.itemsService.findAll();
    }
    findOne(id) {
        return this.itemsService.findOne(id)
            .then((result) => {
            if (result) {
                return result;
            }
            else {
                throw new common_1.HttpException("Sorry, We can't find what you are looking for.", common_1.HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new common_1.HttpException('Item not found', common_1.HttpStatus.NOT_FOUND);
        });
    }
    create(createItemDto) {
        return this.itemsService.create(createItemDto);
    }
    delete(id) {
        return this.itemsService.delete(id);
    }
    update(updateItemDto, id) {
        return this.itemsService.update(id, updateItemDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    common_1.UseFilters(http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    common_1.UseFilters(new validation_exception_1.ValidationExceptionFilter()),
    __param(0, itemdata_decorator_1.itemData(validation_pipe_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_dto_1.CreateItemDto, String]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "update", null);
ItemsController = __decorate([
    common_1.Controller('items'),
    common_1.UsePipes(validation_pipe_1.ValidationPipe),
    __metadata("design:paramtypes", [items_service_1.ItemsService])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map