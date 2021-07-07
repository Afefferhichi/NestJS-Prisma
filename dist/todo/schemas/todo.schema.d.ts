import { Document } from 'mongoose';
export declare type TodoDocument = Todo & Document;
export declare class Todo {
    description: string;
    isCompleted: boolean;
}
export declare const TodoSchema: import("mongoose").Schema<Document<Todo, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
