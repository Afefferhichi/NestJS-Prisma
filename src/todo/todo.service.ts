import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

const Todo: CreateTodoDto[] = []

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto): CreateTodoDto {
    Todo.push(createTodoDto)
    return createTodoDto;
  }

  findAll(): CreateTodoDto[] {
    return Todo;
  }

  findOne(id: number): CreateTodoDto { // define return type of findOne
    return Todo.find(singleTodo => id === singleTodo.id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto): CreateTodoDto {
    let singleTodoS: CreateTodoDto;
    Todo.map(singleTodo => {
      if (id == singleTodo.id) {
        console.log({ singleTodo,updateTodoDto })
        singleTodo.description = updateTodoDto.description
        singleTodo.isCompleted = updateTodoDto.isCompleted
        singleTodoS = singleTodo
      }
    });
    return singleTodoS;
  }

  remove(id: number) {
    const indexOfTodo = Todo.findIndex((singleTodo) => singleTodo.id == id)
    Todo.splice(indexOfTodo,1)
    return `Item with Id #${id} deleted`
  }
}
