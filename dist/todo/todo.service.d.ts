import { Model } from 'mongoose';
import { TodoDocument } from './schemas/todo.schema';
export declare class TodoService {
    private TodoModel;
    constructor(TodoModel: Model<TodoDocument>);
    create(createTodoDto: Omit<TodoDocument, '_id'>): Promise<TodoDocument>;
    findAll(): Promise<TodoDocument[]>;
    findOne(_id: string): Promise<TodoDocument>;
    update(_id: string, updateTodoDto: TodoDocument): Promise<TodoDocument>;
    remove(_id: string): Promise<TodoDocument>;
}
