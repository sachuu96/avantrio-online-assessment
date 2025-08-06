import { Router } from "express";
import taskRouter from './task.routes';
import inventoryRouter from './inventory.routes';
const router = Router();

router.use('/api/tasks', taskRouter);

router.use('/api/inventories', inventoryRouter);

export default router;
