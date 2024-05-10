import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Nav from "../Containers/Nav/Nav"
import Footer from "../Containers/Footer/Footer"
import SignIn from "../Pages/SignIn/SignIn";
import Profile from "../Pages/User/Profile";
import Error from "../Pages/Error/Error";
import EditUserName from "../Pages/EditUserName/EditUserName"
import AuthKeep from "../Services/authKeepService"; /* Protège les routes nécéssitant une authentification */

function Router() {
    return (
        <BrowserRouter> {/* Definit la zoen de routage*/}
            <Nav /> {/* Affiche la barre de navigation*/}
            <Routes> {/* Les différentes routes de l'application*/}
                <Route path="/" element={<Home />} /> 
                <Route path="/Home" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/profile" element={<AuthKeep><Profile /></AuthKeep>} />
                <Route path="/profile/edit-user-name" element={<AuthKeep><EditUserName /></AuthKeep>} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default Router;