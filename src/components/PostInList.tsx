import React from "react";
import { Post } from "./SocialPosts";
import "./PostInList.css";

interface PostProps {
  post: Post;
  onDelete: () => void;
}

export default function PostInList({ post, onDelete }: PostProps) {
  return (
    <div className="post-display">
      <div className="content">
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
      </div>
      <div className="delete">
        <button onClick={onDelete} className="btn-delete">
          Trash Icon
        </button>
      </div>
    </div>
  );
}
