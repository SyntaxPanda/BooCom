import React from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import {Route, Routes} from "react-router-dom";
import RegisterPage from  "./Pages/RegisterPage";
import Header from  './Pages/Header';
import UserPage from "./Pages/UserPage";
import {User} from "./Types/UserType";


function App() {

  return (
    <div className="App">
        <header><Header/></header>
        <Routes>
            <Route path={`/user/${props.id}`} element={<UserPage img={props.img} name={props.name}/>}/>
            <Route path={"/register"} element={<RegisterPage course={""} id={""} img={""} name={""} password={""} />}/>
            <Route path={"/"} element={<HomePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
