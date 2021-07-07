import { Module } from '@nestjs/common';
import { MyController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [MyController],
  providers: [AppService],
})
export class AppModule {}
