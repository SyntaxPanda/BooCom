import React from 'react';
import {Route, Routes} from "react-router-dom";
import RegisterPage from "./RegisterPage";

export default function HomePage() {
    return (
        <div>
            <div>
                <header>
                    <Routes>
                        <Route>
                            <RegisterPage/>
                        </Route>
                    </Routes>
                </header>
            </div>
        </div>
    );
}

