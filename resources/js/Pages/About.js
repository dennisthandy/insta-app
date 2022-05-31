import Authenticated from "@/Layouts/Authenticated";
import React from "react";

export default function About(props) {
    return (
        <Authenticated auth={props.auth}>
            <div>
                <h1>About</h1>
                <p>This is the About page</p>
                <p>{JSON.stringify(props)}</p>
            </div>
        </Authenticated>
    );
}
