import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.use(protect);

router.get('/',getTasks)
router.post('/',createTask);

router.get('/:id',getTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);

export default router;