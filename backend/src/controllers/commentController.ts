import { Request, Response } from "express";

import { Comment } from "../models/Comment";
import { Post } from "../models/Post";

// Add comment to post
export const addComment = async (req: Request, res: Response) => {
  const { content } = req.body;
  const { postId } = req.params;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const newComment = new Comment({
      content,
      author: req.user?.userId,
      postId: postId,
    });

    await newComment.save();

    return res.status(201).json(newComment);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while adding the comment",
    });
  }
};

// Get All comments for a post
export const getAllCommentsByPost = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate(
      "author",
      "username email"
    );

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while retrieving the comments",
    });
  }
};
