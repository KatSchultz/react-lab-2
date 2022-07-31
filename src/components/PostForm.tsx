import { nanoid } from "nanoid";
import React, { ChangeEvent, useState } from "react";
import "./PostForm.css";
import { Post } from "./SocialPosts";

interface FormProps {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

export default function PostForm({ onSubmit, onClose }: FormProps) {
  const [newPost, setNewPost] = useState<Post>({
    id: nanoid(),
    title: "",
    thought: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewPost({ ...newPost, ...{ [e.target.name]: e.target.value } });
  }
  function handleChangeTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewPost({ ...newPost, ...{ [e.target.name]: e.target.value } });
  }

  return (
    <div className="form-holder">
      <div className="second-div">
        <form action="">
          <button onClick={onClose} className="btn-close-form">
            X
          </button>
          <div className="form-inputs">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={newPost.title}
              onChange={handleChange}
            />
            <label htmlFor="">What are you thinking?</label>
            <textarea
              id=""
              cols={30}
              rows={7}
              name="thought"
              value={newPost.thought}
              onChange={handleChangeTextArea}
            ></textarea>
            <button
              className="submit"
              type="submit"
              onClick={() => onSubmit(newPost)}
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
