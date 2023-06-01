import React, {useEffect, useState} from 'react';
import {User} from "../types/UserType";
import axios from "axios";
import {useParams} from "react-router-dom";
import "../css/userPageCSS/UserPageCSS.css"

export default function UserPage() {

    const [user, setUser] =
        useState<User>({course: "", password: "", name: "", id: "", img: ""})

    const params = useParams()
    const id: string | undefined = params.id

    function getUserPageById() {
        axios.get("/api/user/" + id)
            .then(response => setUser(response.data)
            ).catch(error => console.error(error))
    }

    useEffect(getUserPageById, [id])

    return (
        <div className={"containerUserPage"}>
            <div className={"containerUserImage"}></div>
            <div className={"containerUserName"}>{user.name}</div>
            <div className={"placeholderDiv"}>placeholder Box</div>
            <div className={"gitLinks"}>
                <div className={"gitLink1"}>
                    <a href="https://github.com/ernstBonn" target={"_blank"}>Git Johannes</a>
                </div>
                <div className={"gitLink2"}>
                    <a href="https://github.com/SyntaxPanda" target={"_blank"}>Git Tim</a>
                </div>
                <div className={"gitLink3"}>
                    <a href="https://github.com/paffenst" target={"_blank"}>Git Pavel</a>
                </div>
                <div className={"gitLink4"}>
                    <a href="https://github.com/CrisHodel" target={"_blank"}>Git Cristina</a>
                </div>
            </div>
        </div>
    )
}
