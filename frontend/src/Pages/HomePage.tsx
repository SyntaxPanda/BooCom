import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import RegisterPage from "./RegisterPage";

export default function HomePage() {
    const navigate = useNavigate();

    function onClickHandler(){
        navigate("/register");
    }

    return (
        <div>
            <header>
                <button onClick={onClickHandler}>Register</button>
                <Routes>
                    <Route path={"/register"} element={<RegisterPage/>}/>
                </Routes>
            </header>
        </div>
    );
}

