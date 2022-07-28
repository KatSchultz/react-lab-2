import React from "react";
import { Post } from "./SocialPosts";

interface PostProps {
  post: Post;
  onDelete: () => void;
}

export default function PostInList({ post, onDelete }: PostProps) {
  return (
    <div>
      <div className="content">
        <h1>{post.title}</h1>
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
