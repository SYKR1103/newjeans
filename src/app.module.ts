import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ItemlistModule } from './itemlist/itemlist.module';
import { ConfigModule } from '@nestjs/config/dist';
import * as Joi from "@hapi/joi"

@Module({
  imports: [ItemModule, ItemlistModule, ConfigModule.forRoot({

    validationSchema : Joi.object({

      POSTGRES_HOST : Joi.string().required(),
      POSTGRES_PORT : Joi.string().required(),
      POSTGRES_USER : Joi.string().required(),
      POSTGRES_PASSWORD : Joi.string().required(),
      POSTGRES_DB : Joi.string().required()
    })

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
