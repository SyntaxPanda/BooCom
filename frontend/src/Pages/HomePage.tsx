import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import "../Css/HomePageCSS/HomePageCSS.css"

export default function HomePage() {
    const navigate = useNavigate();

    function onClickHandler() {
        navigate("/register");
    }

    return (
        <div>
            <header className={"registerButton"}>
                <div>
                    <button onClick={onClickHandler}>Register</button>
                </div>
            </header>
            Hi im the HomePage
        </div>
    );
}

