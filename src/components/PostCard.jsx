import React, { useState } from "react";
import { BsHeart, BsHeartFill,BsBookmark,BsFillBookmarkFill } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { FiSend,FiMoreHorizontal } from "react-icons/fi";
import CommentList from "./CommentList";
import { MdSend } from "react-icons/md";
//Single Card component of Post //////////////////////
const Card = (post) => {
  const {
    userName,
    userLogo,
    imgUrl,
    likes,
    lastLiked,
    description,
    comments,
    hoursAgo,
    comment,
  } = post;
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [sent, setSent] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleComments = () => {
    setShowComments(!showComments);
  };
  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl border border-slate-200">
      <div className="flex flex-row justify-between items-center p-2">
        {/* Heading */}
        <div className="flex flex-row items-center gap-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={userLogo}
            alt=""
          />
          <span>{userName}</span>
          <span className="mt-2 text-slate-600 mb-1 text-sm">
          {hoursAgo}h
        </span>
        </div>
        <FiMoreHorizontal className="w-6 h-6" />
      </div>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      {/* icons */}
      <div className="flex flex-row my-4 mx-4 justify-between">
        <div className="flex flex-row gap-4 items-center">
          {liked ? (
            <BsHeartFill
              className="w-8 h-8 "
              color="red"
              onClick={() => {
                setLiked(!liked);
              }}
            />
          ) : (
            <BsHeart
              className="w-8 h-8"
              onClick={() => {
                setLiked(!liked);
              }}
            />
          )}
          <VscComment className="w-8 h-8" onClick={handleComments} />
          {sent ? (
            <MdSend
              className="w-8 h-8"
              onClick={() => {
                setSent(!sent);
              }}
            />
          ) : (
            <FiSend
              className="w-8 h-8"
              onClick={() => {
                setSent(!sent);
              }}
            />
          )}
        </div>
        {saved ? (
          <BsFillBookmarkFill
            onClick={() => {
              setSaved(!saved);
            }}
            className="w-8 h-8"
          />
        ) : (
          <BsBookmark
            onClick={() => {
              setSaved(!saved);
            }}
            className="w-8 h-8"
          />
        )}
      </div>
      {/* post detail and description */}
      <div className="mb-4 mx-4">
        <div className="flex flex-row gap-4 items-center mb-2">
          <img className="w-6 h-6 rounded-full" src={userLogo} alt="" />
          <p>
            liked by <strong>{liked ? userName : lastLiked}</strong> and{" "}
            <strong>{liked ? +likes + 1 : likes} others</strong>
          </p>
        </div>
        <p>
          {" "}
          <strong></strong>
          {description}
        </p>
        <span className="text-slate-500 text-sm">
          Show all the {comment} comments
        </span>
        {showComments && <CommentList post={post} comments={comments} />}
        
      </div>
    </div>
  );
};

export default Card;
