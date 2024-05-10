import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { notEmpty, validEmail } from "../../Services/validService";
import { signInAsync } from "../../Components/Store/userSlice";

import "./signIn.css";
import Button from '../../Components/Button/Button';

function SignIn () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // État local pour vérifier les entrées du formulaire et afficher les messages d'erreur à l'utilisateur
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        error: "",
        showPassword: false,
        rememberMe: false,
    });
    //Rendue visible du mot de passe pour le champs de saisie
    const togglePassWordVisibility = () => {
        setFormState({
            ...formState,
            showPassword: !formState.showPassword,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, rememberMe } = formState;

        if (!notEmpty (username)) {
            setFormState({ ...formState, error: "Le nom d'utilisateur doit être renseigné."});
            return;
        }
        if (!validEmail(username)) {
            setFormState({
                ...formState,
                error:"Le nom d'utilisateur doit être une adresse mail valide.",
            });
            return;
        }
        if (!notEmpty (password)) {
            setFormState({ ...formState, error: "Le mot de passe doit être renseigné."});
            return;
        }
        // Distribution de l'action signInAsync pour gérer l'authentification des utilisateurs
        const signInResult = await dispatch(
            signInAsync(username, password, rememberMe)
        );
        if (signInResult === true) {
            navigate("/profile"); // Redirection vers la page du profil de l'utilisateur
        } else if (signInResult && signInResult.succes === false) {
            setFormState({ ...formState, error: signInResult.error.message});
        }
    };
    return (
    <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"  value={formState.username} 
                    onChange={(e) => setFormState({ ...formState, username: e.target.value})
                    }
                    className={
                        formState.error && 
                        (!notEmpty(formState.username) ||
                            !validEmail(formState.username))
                        ? "error"
                        : ""
                    }
                    autoComplete="username"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type={formState.showPassword ? "text": "password"} id="password"
                        value={formState.password}
                        onChange={(e) => setFormState({ ...formState, password: e.target.value})} 
                        className={ formState.error && !notEmpty(formState.password)
                            ? "error"
                            : ""
                        }
                        autoComplete="current-password"/>
                        <span
                            className={`password-toggle-icon ${
                                formState.showPassword
                                ? "reveal-icon fa fa-eye-slash"
                                : "fa fa-eye"
                            }`}
                            onClick={togglePassWordVisibility}>
                        </span>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" 
                    checked={formState.rememberMe}
                    onChange={() => setFormState({ ...formState, rememberMe: !formState.rememberMe,})}/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                
                <Button type="submit" className="sign-in-button" buttonText="Sign In" />
            </form>
            {formState.error && (
                <div className="error-message">{formState.error}</div>
            )}
        </section>
    </main>
    );
}

export default SignIn;