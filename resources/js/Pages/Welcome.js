import React, { useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { BottomNavigation } from "@/Components/BottomNavigation";
import PostCard from "@/Components/PostCard";
import Authenticated from "@/Layouts/Authenticated";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome(props) {
    
    useEffect(() => {
        console.log(props);
    }, [props])

    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex justify-center min-h-screen bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0">
                {props.auth.user ? (
                    <Authenticated auth={props.auth} errors={props.errors}>
                        <div className="grid w-full gap-4 p-4 pb-20 overflow-auto posts">
                            {props.posts.map((post) => {
                                const { id, title, caption, image, like, comments } =
                                    post;
                                return (
                                    <PostCard
                                        likes={like}
                                        id={id}
                                        title={title}
                                        caption={caption}
                                        image={image}
                                        key={title}
                                        comment={comments}
                                    />
                                );
                            })}
                        </div>
                        <BottomNavigation location="/" />
                    </Authenticated>
                ) : (
                    <div className="grid max-w-6xl min-h-screen px-4 mx-auto place-items-center sm:px-6 lg:px-8">
                        <div className="p-6 bg-white rounded-md">
                            <ApplicationLogo />
                            <h1 className="mb-2 text-xl font-bold">
                                Welcome To{" "}
                                <span className="text-purple-600">Insta</span>
                                App
                            </h1>
                            <p className="mb-4 italic opacity-70">
                                Share your beautiful day in a memorable picture.
                            </p>
                            <div className="mt-8">
                                <Link
                                    href={route("login")}
                                    className="px-4 py-2 text-base text-white bg-blue-500 rounded-md shadow"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="ml-6 text-sm text-gray-700"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
