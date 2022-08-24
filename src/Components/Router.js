import React, {useState} from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Auth from '../Routes/Auth';
import Home from '../Routes/Home';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Routes>
                {isLoggedIn ? 
                <Route exact path='/' element={<Home/>} />
            : 
            <Route exact path='/' element={<Auth />} />
            }
            </Routes>
        </Router>
    );
};

export default AppRouter;