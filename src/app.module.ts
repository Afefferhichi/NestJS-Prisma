import { Module } from '@nestjs/common';
import { MyController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [MyController],
  providers: [AppService],
})
export class AppModule {}
