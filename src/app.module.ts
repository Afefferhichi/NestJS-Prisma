import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoModule } from "./todo/todo.module";
import { DB_CONNECT } from "./config";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    TodoModule,
    AuthModule,
    MongooseModule.forRoot(DB_CONNECT),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
