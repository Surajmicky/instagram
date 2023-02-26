import React from "react";
import PostCard from "./PostCard";
//PostList component to render all posts ///////////////////////
const PostList = ({ filteredData }) => {
  return (
    <div className="flex flex-col justify-center max-w-lg mt-4">
      {filteredData.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
