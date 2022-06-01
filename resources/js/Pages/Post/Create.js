import React from "react";
import { BottomNavigation } from "@/Components/BottomNavigation";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function CreatePost(props) {
    console.log(props);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        userId: props.auth.user.id,
        title: "",
        caption: "",
        image: null,
    });

    const onHandleChange = (event) => {
        let value = event.target.value;

        if (event.target.type === "file") {
            value = event.target.files[0];
        }

        setData(event.target.name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("post.create"));
    };

    return (
        <>
            <Head title="Post"/>
            <div className="grid min-h-screen px-4 bg-gray-200 place-items-center">
                <div className="space-y-4">
                    <h2 className="text-lg italic text-center">
                        Share Memorable Moment
                    </h2>
                    <form
                        onSubmit={submit}
                        className="w-full p-4 space-y-4 bg-white rounded-md"
                        encType="multipart/form-data"
                    >
                        <div className="grid">
                            <input
                                type="hidden"
                                name="userId"
                                value={props.auth.user.id}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm" htmlFor="title">
                                <span className="opacity-50">Title</span>{" "}
                                {errors.title && (
                                    <span className="text-red-500">
                                        {" "}*{errors.title}
                                    </span>
                                )}
                            </label>
                            <input
                                className="border border-gray-300 border-solid rounded-md"
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Type the title..."
                                onChange={onHandleChange}
                                value={data.title}
                            />
                        </div>
                        <div className="grid gap-2">
                            <label
                                className="text-sm opacity-50"
                                htmlFor="caption"
                            >
                                Caption
                            </label>
                            <textarea
                                className="border border-gray-300 border-solid rounded-md"
                                name="caption"
                                id="caption"
                                cols="30"
                                rows="5"
                                placeholder="Type your caption..."
                                value={data.caption}
                                onChange={onHandleChange}
                            ></textarea>
                        </div>
                        <div className="grid gap-2">
                            <label
                                className="text-s"
                                htmlFor="image"
                            >
                                <span className="opacity-50">Image</span>
                                {errors.image && (
                                    <span className="text-red-500">
                                        {" "}*{errors.image}
                                    </span>
                                )}
                            </label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                // value={data.image.name}
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="grid gap-2">
                            <input
                                className="w-full py-2 font-bold text-white bg-blue-500 rounded-md"
                                type="submit"
                                value="Share"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <BottomNavigation location={props.location}/>
        </>
    );
}
