import React from 'react';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Admin from "./Components/Admin";
import Menu from "./Components/Menu";
import Order from "./Components/Order";

const App = () => {
    return (
        <div className="containers">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Admin/>}/>
                <Route path={"/orders"} element={<Order/>}/>
                <Route path={"/menu"} element={<Menu/>}/>
            </Routes>
        </div>
    );
};

export default App;