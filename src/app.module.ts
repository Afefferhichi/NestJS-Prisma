import { Module } from '@nestjs/common';
import { MyController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONNECT } from './config';


@Module({
  
  imports: [TodoModule, 
    MongooseModule.forRoot(DB_CONNECT)],
  controllers: [MyController],
  providers: [AppService],
})
export class AppModule {}
