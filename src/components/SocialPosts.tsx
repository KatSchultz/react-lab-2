import { nanoid } from "nanoid";
import React, { useState } from "react";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

export interface Post {
  id: string;
  title: string;
  thought: string;
}

export default function SocialPosts() {
  const [showForm, setShowForm] = useState(false);

  const [posts, setPosts] = useState<Post[]>([
    { id: nanoid(), title: "Hello World", thought: "Coding is super cool" },
    {
      id: nanoid(),
      title: "Goodbye World",
      thought: "It was fun while it lasted",
    },
  ]);

  function deletePost() {
    // const postCopy = [...posts];
    // let index = postCopy.findIndex((elem) => elem.thought === post.thought);
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
    <div className="social-posts-content">
      <h1>My Thoughts</h1>
      <button onClick={displayForm}>New Thought</button>
      <div className="form-holder">
        {showForm === true && (
          <PostForm onSubmit={submitForm} onClose={closeForm} />
        )}
      </div>
      <div className="post-container">
        {posts.map((post, index) => (
          <PostInList key={index} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}
