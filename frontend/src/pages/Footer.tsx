import React, {ChangeEvent, useEffect, useState} from 'react';
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
        axios.get("/api/users")
            .then(response => {
                setUserList(response.data);

                const filteredUser = userList.find(user =>
                    user.name.toLowerCase().includes(filter.toLowerCase())
                );

                if (filteredUser) {
                    navigate("/user/" + filteredUser.id);
                }
            })
            .catch(error => {
                console.log("Error fetching user data:", error);
            });
    }

    useEffect(() => {
        getUserFromList();
    }, [filter]);

    function onTextChange(e: ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value)
    }

    return (
        <div>
            <form>
                <div>
                    <input type="text" onChange={onTextChange}/>
                </div>
                <div>
                    <button type={"submit"}>Find</button>
                </div>
            </form>
        </div>
    );
}