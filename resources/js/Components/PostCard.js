import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useState } from "react";

export default function PostCard({
    id,
    title = "",
    caption = "",
    image = "",
    likes = 0,
    comment = [],
}) {
    const likeForm = useForm({
        postId: id,
    });

    const commentForm = useForm({
        postId: id,
        comment: "",
    });

    const [like, setLike] = useState(likes);
    const [comments, setComments] = useState(comment);
    const [openCommentField, setOpenCommentField] = useState(false);

    const handleLike = () => {
        setLike(like + 1);
        axios.post(route("post.like"), likeForm.data);
    };

    const handleComment = () => {
        setComments([...comments, commentForm.data.comment]);
        axios.post(route("post.comment"), commentForm.data);
    };

    return (
        <div className="self-start w-full bg-white rounded-md">
            <div>
                <img
                    src={`/storage/${image}`}
                    alt={title}
                    className="rounded-t-md"
                />
            </div>
            <div className="flex items-end justify-between px-4 pb-4 mt-4">
                <div>
                    <h4 className="text-base font-semibold">{title}</h4>
                    <p className="text-sm opacity-50">{caption}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div>
                        {like > 0 && (
                            <span className="mr-2 text-red-500">{like} </span>
                        )}
                        <button onClick={handleLike}>Like</button>
                    </div>
                    <button
                        onClick={() => setOpenCommentField(!openCommentField)}
                        className={openCommentField ? "text-blue-500" : ""}
                    >
                        Comment
                    </button>
                </div>
            </div>
            {openCommentField && (
                <>
                    <div className="px-4 pb-4 space-x-4">
                        <input
                            style={{ boxShadow: "none" }}
                            className="py-2 border-b border-transparent border-b-gray-300 focus:border-transparent focus:border-b-gray-300"
                            type="text"
                            name="comment"
                            id="comment"
                            value={commentForm.data.comment}
                            placeholder="Write a comment..."
                            onChange={(e) =>
                                commentForm.setData(
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                        <button onClick={handleComment}>Kirim</button>
                    </div>
                    {comments.length > 0 && (
                        <ul className="p-4 pt-2 space-y-2">
                            {comments.map((comment, index) => {
                                return (
                                    <p
                                        className={`text-sm opacity-70 py-2 ${
                                            index > 0
                                                ? "border-t border-t-gray-300"
                                                : ""
                                        }`}
                                    >
                                        {comment}
                                    </p>
                                );
                            })}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
}
