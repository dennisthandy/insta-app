import React from "react";

export default function PostCard({ title = "", caption = "", image = "" }) {
    return (
        <div className="self-start w-full bg-white rounded-md">
            <div>
                <img src={`/storage/${image}`} alt={title} className="rounded-t-md"/>
            </div>
            <div className="flex items-end justify-between px-4 pb-4 mt-4">
                <div>
                    <h4 className="text-base font-semibold">{title}</h4>
                    <p className="text-sm opacity-50">{caption}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button>Like</button>
                    <button>Comment</button>
                </div>
            </div>
        </div>
    );
}
