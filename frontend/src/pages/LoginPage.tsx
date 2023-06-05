import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../css/loginCSS/LoginPage.css"

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
            })
            .catch(error => {console.error(error)});
    }

    function onChangeHandlerPassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function onChangeHandlerUsername(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    return (
        <div className={"loginPage"}>
            <h1 className={"loingText"}>Login</h1>
            <form onSubmit={loginOnSubmit}>
                <div className={"inputFieldBox"}>
                    <input placeholder={"UserName"} type="text" onChange={onChangeHandlerUsername}/>
                    <input placeholder={"Password"} type="password" onChange={onChangeHandlerPassword}/>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}