import { TodoService } from './todo.service';
import { TodoDocument } from './schemas/todo.schema';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: TodoDocument): Promise<TodoDocument>;
    findAll(): Promise<TodoDocument[]>;
    findOne(_id: string): Promise<TodoDocument>;
    update(_id: string, updateTodoDto: TodoDocument): Promise<TodoDocument>;
    remove(_id: string): Promise<TodoDocument>;
}
