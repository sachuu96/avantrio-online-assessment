import { IStory, StoryModel } from "../models/story";

export class StoryRepository {
  async create(
    emojiSequence: string[],
    authorNickname: string
  ): Promise<IStory> {
    const task = new StoryModel({ emojiSequence, authorNickname, likes: 0 });
    return await task.save();
  }

  async findAll(): Promise<IStory[]> {
    return await StoryModel.find().sort({ createdAt: -1 });
  }

//   async findById(id: string): Promise<ITask | null> {
//     return await TaskModel.findById(id);
//   }

//   async toggleComplete(id: string): Promise<ITask | null> {
//     const task = await TaskModel.findById(id);
//     if (!task) return null;

//     task.completed = !task.completed;
//     return await task.save();
//   }

//   async delete(id: string): Promise<ITask | null> {
//     return await TaskModel.findByIdAndDelete(id);
//   }
}
