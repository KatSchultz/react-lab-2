import React from "react";
import { Post } from "./SocialPosts";

interface PostProps {
  post: Post;
  onDelete: () => void;
}

export default function PostInList(post: Post) {
  return (
    <div>
      <div className="content">
        <h1>{post.title}</h1>
        <p>{post.thought}</p>
      </div>
      <div className="delete">
        <button className="btn-delete">Trash Icon</button>
      </div>
    </div>
  );
}
