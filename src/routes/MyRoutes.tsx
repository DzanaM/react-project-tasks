import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Counter from "../pages/Counter/Counter";
import Tabs from "../pages/Tabs/Tabs";
import DynamicCircle from "../pages/DynamicCircle/DynamicCircle";
import ListItems from "../pages/ListItems/ListItems";
import PerimeterAndArea from "../pages/Perimeter&Area/PerimeterAndArea";
import CharactersCounter from "../pages/CharactersCounter/CharactersCounter";
import Login from "../components/Auth/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthContext from "../context/auth-context";

const MyRoutes = () => {
    const {isLoggedIn} = useContext(AuthContext)
    return (

        <div>
            <Routes>
                {!isLoggedIn && <Route path="/login" element={<Login/>}/>}
                <Route element={<ProtectedRoutes/>}>
                    {isLoggedIn && <Route path="/home" element={<Home/>}/>}
                    {isLoggedIn && <Route path="/counter" element={<Counter/>}/>}
                    {isLoggedIn && <Route path="/tabs" element={<Tabs/>}/>}
                    {isLoggedIn && <Route path="/dynamic-circle" element={<DynamicCircle/>}/>}
                    {isLoggedIn && <Route path="/list-items" element={<ListItems/>}/>}
                    {isLoggedIn && <Route path="/perimeter-area/*" element={<PerimeterAndArea/>}/>}
                    {isLoggedIn && <Route path="/characters-counter" element={<CharactersCounter/>}/>}
                </Route>
            </Routes>
        </div>
    );
};

export default MyRoutes;