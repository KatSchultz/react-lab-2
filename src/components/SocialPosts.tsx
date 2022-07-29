import React, { useState } from "react";
import PostForm from "./PostForm";
import PostInList from "./PostInList";

export interface Post {
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [showForm, setShowForm] = useState(false);

  const [posts, setPosts] = useState<Post[]>([
    { title: "Hello World", thought: "Coding is super cool" },
    { title: "Goodbye World", thought: "It was fun while it lasted" },
  ]);

  function deletePost() {
    console.log("delete Post");
  }

  function submitForm(post: Post) {
    setPosts([post, ...posts]);
    console.log("Form submitted");
    closeForm();
  }

  function displayForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  return (
    <div>
      <button onClick={displayForm}>New Thought</button>
      <div className="form-holder">
        {showForm === true && (
          <PostForm onSubmit={submitForm} onClose={closeForm} />
        )}
      </div>
      <div>
        {posts.map((post, index) => (
          <PostInList key={index} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}
