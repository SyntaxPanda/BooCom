import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

type Props = {
    user: string | undefined
}

export default function ProtectedRoutes(props: Props) {

    const authenticated = props.user !== undefined && props.user !== "Not logged in!"

    return (
        authenticated ? <Outlet/> : <Navigate to={"/login"}/>
    );
}