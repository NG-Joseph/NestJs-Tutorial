import {  MiddlewareConsumer, Module, NestModule, RequestMethod, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditMiddleware } from 'src/middleware/audit.middleware';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import {ItemSchema} from './schemas/item.schema'


@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}]),
    CacheModule.register({
      ttl: 5, //seconds
      max: 100. // max number of items
    })],
  controllers: [ ItemsController],
  providers: [ItemsService],
})
export class ItemsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  consumer
    .apply(AuditMiddleware)
    .forRoutes({path: 'items/*', method: RequestMethod.DELETE});
      }
  }

