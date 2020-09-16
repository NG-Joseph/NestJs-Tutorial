import {  MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditMiddleware } from 'src/middleware/audit.middleware';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import {ItemSchema} from './schemas/item.schema'


@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}])],
  controllers: [ ItemsController],
  providers: [ItemsService],
})
export class ItemsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  consumer
    .apply(AuditMiddleware)
    .forRoutes({path: 'jobs/*', method: RequestMethod.DELETE});
      }
  }

