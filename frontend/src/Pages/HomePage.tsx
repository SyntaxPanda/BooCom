import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    function onClickHandler() {
        navigate("/register");
    }

    return (
        <div>
            <header>
                <div className={"registerButton"}>
                    <button onClick={onClickHandler}>Register</button>
                </div>
            </header>
            Hi im the HomePage
        </div>
    );
}

