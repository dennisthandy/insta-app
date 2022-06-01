import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import HomeIcon from "../../images/home.svg";

export function BottomNavigation({ location }) {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 flex items-center justify-center py-4 mx-auto bg-blue-300"
            style={{ maxWidth: 411 }}
        >
            {location !== "/" ? (
                <Link href={route("post.home")}>
                    <img src={HomeIcon} alt="Home" className="w-auto h-8" />
                </Link>
            ) : (
                <Link href={route("post.create")}>
                    <ApplicationLogo className="w-auto h-8" />
                </Link>
            )}
        </div>
    );
}
