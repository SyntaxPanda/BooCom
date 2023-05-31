import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";


type Props = {
    login: (name: string, password: string) => Promise<void>
}

export default function LoginPage(props: Props) {
    const [name, setName] =
        useState("");
    const [password, setPassword] =
        useState("");

    const nav = useNavigate();

    function loginOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        props.login(name, password)
            .then(() => {
                nav("/")
            });
    }

    function onChangeHandlerPassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function onChangeHandlerName(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginOnSubmit}>
                <input type="text" onChange={onChangeHandlerName}/>
                <input type="password" onChange={onChangeHandlerPassword}/>
                <button>Login</button>
            </form>
        </div>
    );
}