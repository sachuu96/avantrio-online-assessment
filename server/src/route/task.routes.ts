import { Router } from "express";
import { rateLimiter } from "../middleware";
import { getTaskList, createTask } from "../services/taskService";

const taskRouter = Router();

taskRouter.get("/", rateLimiter, async (req, res, next) => {
  try {
    const tasks = await getTaskList();
    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
});

taskRouter.post("/", async (req, res, next) => {
  try {
    const taskName = req.body.title;
    const createdTask = await createTask(taskName);
    res.status(200).json({ createdTask });
  } catch (error) {
    next(error);
  }
});

export default taskRouter;
