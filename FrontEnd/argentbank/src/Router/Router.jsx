import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Nav from "../Containers/Nav/Nav"
import Footer from "../Containers/Footer/Footer"
import SignIn from "../Pages/SignIn/SignIn";
import User from "../Pages/User/User";
import Error from "../Pages/Error/Error";
import EditUserName from "../Pages/EditUserName/EditUserName"

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/edit-user-name" element={<EditUserName />} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default Router;