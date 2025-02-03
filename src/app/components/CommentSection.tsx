"use client";

import { useState } from "react";

interface Comment {
  id: string;
  user: string;
  text: string;
  timestamp: string;
}

export default function CommentSection({ billId }: { billId: string }) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      user: "Alice",
      text: "I support this bill because...",
      timestamp: "2023-05-16 10:30",
    },
    {
      id: "2",
      user: "Bob",
      text: "I have concerns about...",
      timestamp: "2023-05-16 11:15",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        user: "Anonymous", // You could implement user authentication to get the real username
        text: newComment.trim(),
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full rounded-md border p-2"
          rows={3}
          placeholder="Leave a comment..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold">{comment.user}</span>
              <span className="text-sm text-gray-500">{comment.timestamp}</span>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
