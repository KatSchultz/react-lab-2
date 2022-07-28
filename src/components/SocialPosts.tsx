import React, { useState } from "react";
import PostInList from "./PostInList";

export interface Post {
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Hello World", thought: "Coding is super cool" },
    { title: "Goodbye World", thought: "It was fun while it lasted" },
  ]);

  function deletePost() {
    console.log("delete Post");
  }

  return (
    <div>
      <button>New Thought</button>
      <div>
        {posts.map((post, index) => (
          <PostInList key={index} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}
