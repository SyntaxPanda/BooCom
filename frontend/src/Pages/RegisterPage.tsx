import React, {ChangeEvent, FormEvent, useState} from 'react';
import axios from "axios";
import {User} from "../Types/UserType";

export default function RegisterPage(props: User) {
    const [name, setName] =
        useState<string>("")
    const [password, setPassword] =
        useState<string>("")


    const [userList, setUserList] =
        useState<User[]>([])

    function addUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        axios.post("/api/register/addUser", {
            name: name,
            password: password,
            course: "bo-java-23-1"
        })
            .then(response => setUserList(response.data))
        setName("")
        setPassword("")
    }

    function OnChangeHandlerUserName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function OnChangeHandlerUserPassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addUser}>
                <div>
                    <input placeholder="Name" type="text" value={name} onChange={OnChangeHandlerUserName}/>
                </div>
                <div>
                    <input placeholder={"Password"} type="password" value={password}
                           onChange={OnChangeHandlerUserPassword}/>
                </div>
                <div>
                    <select>
                        <option value="bo-java-23-1">Bo-java-23-1</option>
                    </select>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
}