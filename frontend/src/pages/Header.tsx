import React from 'react';
import {useNavigate} from "react-router-dom";
import "../css/headerCSS/HeaderPage.css"

export default function Header() {
    const navigate = useNavigate();

    function onClickHandlerRegisterPage() {
        navigate("/register");
    }

    function onClickHandlerHomePage() {
        navigate("/");
    }

    return (
        <div className={"header-color"}>
            <div className={"registerButton"}>
                <button onClick={onClickHandlerRegisterPage}>Register</button>
            </div>
            <div>
                <button onClick={onClickHandlerHomePage}>BooCom</button>
            </div>
        </div>
    );
}