import React from "react";
import { Post } from "./SocialPosts";
import "./PostInList.css";
import { IconTrash } from "@tabler/icons";

interface PostProps {
  post: Post;
  onDelete: (id: string) => void;
}

export default function PostInList({ post, onDelete }: PostProps) {
  return (
    <div className="post-display">
      <div className="content">
        <h2>{post.title}</h2>
        <p>{post.thought}</p>
      </div>
      <div className="delete">
        <IconTrash size={24} onClick={() => onDelete(post.id)} />
      </div>
    </div>
  );
}
