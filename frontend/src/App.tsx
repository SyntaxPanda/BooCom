import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Header from './pages/Header';
import UserPage from "./pages/UserPage";

export default function App() {

    return (
        <div className="App">
            <header><Header/></header>
            <Routes>
                <Route path={`/user/:id`} element={<UserPage/>}/>
                <Route path={"/register"} element={<RegisterPage/>}/>
                <Route path={"/"} element={<HomePage/>}/>
        </Routes>
    </div>
  );
}
