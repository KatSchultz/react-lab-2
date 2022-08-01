import React, { useState } from "react";
import { Post } from "./SocialPosts";
import "./PostInList.css";
import { IconTrash } from "@tabler/icons";
import { IconChevronsUp } from "@tabler/icons";
import UpVote from "./UpVote";

interface PostProps {
  post: Post;
  onDelete: (id: string) => void;
}

export default function PostInList({ post, onDelete }: PostProps) {
  return (
    <div>
      <div className="post-display">
        <div className="content">
          <h2>{post.title}</h2>
          <p>{post.thought}</p>
          <UpVote />
        </div>
        <div className="delete">
          <IconTrash size={24} onClick={() => onDelete(post.id)} />
        </div>
      </div>
    </div>
  );
}
