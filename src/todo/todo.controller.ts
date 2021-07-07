import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDocument } from './schemas/todo.schema';

@Controller('todo') // if we want to use a class as controller we need to use the controller decorator
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: TodoDocument) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.todoService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateTodoDto: TodoDocument) {
    return this.todoService.update(_id, updateTodoDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.todoService.remove(_id);
  }
}
