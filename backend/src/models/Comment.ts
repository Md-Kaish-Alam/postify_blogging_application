import mongoose, { Schema, Document } from "mongoose";

// Define Comment schema
interface IComment extends Document {
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  postId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const CommentSchema: Schema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Comment = mongoose.model<IComment>("Comment", CommentSchema);
