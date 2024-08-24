import express from 'express';

import {
  addComment,
  getAllCommentsByPost,
} from "../controllers/commentController";
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// Comment routes
router.post('/posts/:postId/comments', authMiddleware, addComment);
router.get('/posts/:postId/comments', getAllCommentsByPost);

export default router;