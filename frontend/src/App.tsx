import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import {Route, Routes} from "react-router-dom";
import RegisterPage from  "./Pages/RegisterPage";
import Header from  './Pages/Header';
import UserPage from "./Pages/UserPage";

export default function App() {

  return (
    <div className="App">
        <header><Header/></header>
        <Routes>
            <Route path={`/user/:id`} element={<UserPage/>}/>
            <Route path={"/register"} element={<RegisterPage course={""} id={""} img={""} name={""} password={""} />}/>
            <Route path={"/"} element={<HomePage/>}/>
        </Routes>
    </div>
  );
}
