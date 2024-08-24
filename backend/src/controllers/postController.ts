import { Request, Response } from "express";
import { Post } from "../models/Post";
import { Comment } from "../models/Comment";

// Create a new Post
export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: "Title and content are required",
    });
  }

  try {
    const newPost = new Post({
      title,
      content,
      author: req.user!.userId,
    });
    await newPost.save();

    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while creating the post",
    });
  }
};

// Get all posts
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate("author", "username email");
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while retrieving posts",
    });
  }
};

// Get a single post by ID

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username email"
    );
    if (!post) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while retrieving post",
    });
  }
};

// update a post
export const updatePost = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    if (post.author.toString() !== req.user?.userId) {
      return res.status(403).json({
        error: "You are not authorized to update this post",
      });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    await post.save();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while updating the post",
    });
  }
};

// Delete a post
export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    if (post.author.toString() !== req.user?.userId) {
      return res.status(403).json({
        error: "You are not authorized to delete this post",
      });
    }

    await Post.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      error: "An error occurred while deleting the post",
    });
  }
};
