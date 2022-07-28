import React, { useState } from "react";

export interface Post {
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div>
      <button>New Thought</button>
    </div>
  );
}
