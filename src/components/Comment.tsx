"use client"
import React, { useState } from "react";
import { MessageCircle, Heart, Repeat2, Send } from "lucide-react";
import Image from "./Image";

interface CommentProps {
  id: number;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
  likes: number;
  replies: number;
  onReply?: (id: number, text: string) => void;
}

const Comment: React.FC<CommentProps> = ({ id, user, text, timestamp, likes, replies, onReply }) => {
  const [liked, setLiked] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <div className="flex gap-3 border-b border-gray-300 p-4">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image path={user.avatar} alt={user.name} width={40} height={40} />
      </div>

      {/* Comment Content */}
      <div className="flex-1">
        {/* User Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-bold">{user.name}</h1>
            <span className="text-gray-500">@{user.username} • {timestamp}</span>
          </div>
        </div>

        {/* Comment Text */}
        <p className="mt-1">{text}</p>

        {/* Actions */}
        <div className="flex items-center justify-between text-gray-500 mt-2 text-sm">
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
            <MessageCircle size={16} /> <span>{replies}</span>
          </div>
          <div
            className={`flex items-center gap-2 cursor-pointer ${liked ? "text-red-500" : "hover:text-red-500"}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart size={16} /> <span>{liked ? likes + 1 : likes}</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-500">
            <Repeat2 size={16} /> <span>Repost</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500" onClick={() => setReplying(!replying)}>
            <Send size={16} /> <span>Reply</span>
          </div>
        </div>

        {/* Reply Input */}
        {replying && (
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="border p-2 rounded-lg w-full text-sm"
            />
            <button
              onClick={() => {
                if (onReply && replyText.trim()) {
                  onReply(id, replyText);
                  setReplyText("");
                  setReplying(false);
                }
              }}
              className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm"
            >
              Reply
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Comment Section Component
const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>([
    {
      id: 1,
      user: { name: "John Doe", username: "johndoe", avatar: "/public/icons/profile.svg" },
      text: "This is a great post! Thanks for sharing.",
      timestamp: "2h",
      likes: 10,
      replies: 2,
    },
    {
      id: 2,
      user: { name: "Jane Smith", username: "janesmith", avatar: "/public/icons/profile.svg" },
      text: "I totally agree with you.",
      timestamp: "1h",
      likes: 5,
      replies: 1,
    },
  ]);

  const handleReply = (id: number, text: string) => {
    console.log(`Replying to comment ${id}: ${text}`);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} onReply={handleReply} />
      ))}
    </div>
  );
};

export default CommentSection;
