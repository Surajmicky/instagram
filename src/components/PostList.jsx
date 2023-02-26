import React from "react";
import PostCard from "./PostCard";
//PostList component to render all posts ///////////////////////
const PostList = ({ filteredData }) => {
  return (
    <div className="flex flex-col w-screen justify-center items-center max-w-sm mt-4">
      {filteredData.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
