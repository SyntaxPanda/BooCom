import React from 'react';
import {useNavigate} from "react-router-dom";
import "../Css/HomePageCSS/HomePageCSS.css"

export default function Header() {
    const navigate = useNavigate();

    function onClickHandler() {
        navigate("/register");
    }

    return (
        <div className={"header-color"}>
            <div className={"registerButton"}>
                <button onClick={onClickHandler}>Register</button>
            </div>
        </div>
    );
}