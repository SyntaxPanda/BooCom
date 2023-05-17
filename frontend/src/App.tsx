import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import {Route, Routes} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import Header from "./Pages/Header";

function App() {
  return (
    <div className="App">
        <header><Header/></header>
        <Routes>
            <Route path={"/register"} element={<RegisterPage/>}/>
            <Route path={"/"} element={<HomePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
