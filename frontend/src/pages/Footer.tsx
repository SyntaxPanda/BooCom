import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {User} from "../types/UserType";

export default function Footer() {
    const navigate = useNavigate();

    const [userList, setUserList] =
        useState<User[]>([])

    const [filter, setFilter] =
        useState("")

    function getUserFromList() {
        setUserList([])
        axios.get("/api/users")
            .then(response => {
                setUserList(response.data);
            })
            .catch(error => {
                console.log("Error fetching user data:", error);
            });
    }

    function onTextChange(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value)
    }

    function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        const filteredUser = userList.find(user =>
            user.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredUser) {
            navigate("/user/" + filteredUser.id);
        }
    }

    useEffect(getUserFromList, []);

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input type="text" onChange={onTextChange}/>
                </div>
                <div>
                    <button>Find</button>
                </div>
            </form>
        </div>
    );
}