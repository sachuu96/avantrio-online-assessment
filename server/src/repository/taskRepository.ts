import { ITask, TaskModel } from '../models/task';

export class TaskRepository {
  async create(title: string): Promise<ITask> {
    const task = new TaskModel({ title });
    return await task.save();
  }

  async findAll(): Promise<ITask[]> {
    return await TaskModel.find().sort({ createdAt: -1 });
  }

  async findById(id: string): Promise<ITask | null> {
    return await TaskModel.findById(id);
  }

  async toggleComplete(id: string): Promise<ITask | null> {
    const task = await TaskModel.findById(id);
    if (!task) return null;

    task.completed = !task.completed;
    return await task.save();
  }

  async delete(id: string): Promise<ITask | null> {
    return await TaskModel.findByIdAndDelete(id);
  }
}
