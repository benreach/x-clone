"use client"
import React, { useEffect, useState } from "react";

interface PostDateProps {
  createdAt: string;
}

const formatDate = (dateString: string) => {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - postDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);

  if (diffSeconds < 60) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;

  return postDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  }); // Format: "March 17"
};

const PostDate: React.FC<PostDateProps> = ({ createdAt }) => {
  const [formattedDate, setFormattedDate] = useState(formatDate(createdAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(formatDate(createdAt));
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [createdAt]);

  return <span className="text-gray-500 text-sm font-bold">{formattedDate}</span>;
};

export default PostDate;
