import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
