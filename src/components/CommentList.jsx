import React from "react";
import Comment from "./Comment";
import { useState, useEffect } from "react";
//CommentList component to render all comments added to single post.////////////////////
const CommentList = ({ comments }) => {
  const [allComments, setAllComments] = useState(comments);
  const [input, setInput] = useState("");
  const handleAddComment = () => {
    let newComment = input;
     if(input.length>4){
         setAllComments([...allComments, newComment]);
     }
    setInput("");
  };
  useEffect(() => {}, [allComments]);
  return (
    <div>
      {allComments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <input
        type="text"
        placeholder="Add new Comment"
        className="border-b-2 outline-0 w-10/12 p-2"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={handleAddComment}
        className="bg-slate-300 py-2 px-4 rounded-md">
        Post
      </button>
    </div>
  );
};

export default CommentList;
