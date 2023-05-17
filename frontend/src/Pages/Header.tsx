import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    function onClickHandler() {
        navigate("/register");
    }

    return (
        <div>
            <div className={"registerButton"}>
                <button onClick={onClickHandler}>Register</button>
            </div>
        </div>
    );
}