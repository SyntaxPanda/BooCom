import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";


type Props = {
    login: (username: string, password: string) => Promise<void>
}

export default function LoginPage(props: Props) {
    const [username, setUsername] =
        useState("");
    const [password, setPassword] =
        useState("");

    const nav = useNavigate();

    function loginOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        props.login(username, password)
            .then(() => {
                nav("/")
            });
    }

    function onChangeHandlerPassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function onChangeHandlerUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginOnSubmit}>
                <input type="text" onChange={onChangeHandlerUsername}/>
                <input type="password" onChange={onChangeHandlerPassword}/>
                <button>Login</button>
            </form>
        </div>
    );
}