import { Router } from "express";
import taskRouter from './task.routes';
import inventoryRouter from './inventory.routes';
import storyRouter from './story.routes';
const router = Router();

router.use('/api/tasks', taskRouter);

router.use('/api/inventories', inventoryRouter);

router.use('/api/stories', storyRouter);

export default router;
