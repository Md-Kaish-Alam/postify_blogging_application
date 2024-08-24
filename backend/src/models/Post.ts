import mongoose, { Schema, Document } from "mongoose";

// Define the Blog Post Schema
interface IPost extends Document {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.model<IPost>("Post", PostSchema);
