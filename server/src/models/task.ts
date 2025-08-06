import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  title: string;
  completed: boolean;
  createdAt: Date;
}

const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TaskModel = mongoose.model<ITask>('Task', TaskSchema);
