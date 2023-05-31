import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Header from './pages/Header';
import UserPage from "./pages/UserPage";
import Footer from "./pages/Footer";
import useUser from "./hooks/useUser";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

export default function App() {

    const {login, user} = useUser()

    return (
        <div className="App">
            <header><Header/></header>
            <Routes>
                <Route path={"/register"} element={<RegisterPage/>}/>

                <Route element={<ProtectedRoutes user={user}/>}>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={`/user/:id`} element={<UserPage/>}/>
                </Route>

                <Route path={"/login"} element={<LoginPage login={login}/>}/>
            </Routes>
            <footer><Footer/></footer>
    </div>
  );
}
