import { TaskRepository } from "../repository/taskRepository";

const taskRepo = new TaskRepository();

export const createTask = async (taskTitle: string) => {
  const createdTask = await taskRepo.create(taskTitle);
  return createdTask;
};

export const getTaskList = async () => {
  const taskList = await taskRepo.findAll();
  return taskList;
};
