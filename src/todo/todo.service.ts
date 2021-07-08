import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocument, Todo } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private TodoModel: Model<TodoDocument>) {}

  create(createTodoDto: Omit<TodoDocument, '_id'>): Promise<TodoDocument> {
    const TodoToSave = new this.TodoModel({
      description: createTodoDto.description,
      isCompleted: createTodoDto.isCompleted,
    });
    return TodoToSave.save();
  }

  async findAll(): Promise<TodoDocument[]> {
    return this.TodoModel.find();
  }

  async findOne(_id: string): Promise<TodoDocument> {
    // define return type of findOne
    return this.TodoModel.findOne({ _id });
  }

  async update(
    _id: string,
    updateTodoDto: TodoDocument,
  ): Promise<TodoDocument> {
    return this.TodoModel.findOneAndUpdate(
      { _id },
      { $set: updateTodoDto },
      { new: true },
    );
  }

  async remove(_id: string): Promise<TodoDocument> {
    return this.TodoModel.findOneAndDelete({ _id });
  }
}
