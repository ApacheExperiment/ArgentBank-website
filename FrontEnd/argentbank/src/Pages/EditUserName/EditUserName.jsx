import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import "./edit-user-name.css";
import Accounts from "../../Containers/Accounts/Accounts";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { minimLength, userNameDifferent } from '../../Services/validService';
import { updateUserNameAsync } from '../../Components/Store/userSlice';

const EditUserName = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Récupération du profil utilisateur et le token depuis le Redux state
    const { firstName, lastName, userName } = useSelector(state => state.userProfile);
    const token = useSelector(state => state.token);

    // Etat local pour gérer le nouveau nom d'utilisateur et les messages d'erreur
    const [newUserName, setNewUserName] = useState(userName);
    const [error, setError] = useState("");

    // Gestion des modifications d'entrée du nom d'utilisateur
    const handleUserNameChange = (event) => {
        setNewUserName(event.target.value);
    };
    
    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newUserName) {
            setError("Un nom d'utilisateur est attendu");
            return;
        }
        if (!minimLength(newUserName, 3)) {
            setError("Le nom d'utilisateur doit avoir 3 caractères minimum.")
            return;
        }
        if (!userNameDifferent(newUserName, userName)){
            setError("Le nouveau nom d'utilisateur doit être différent du nom d'utilisateur actuel.")
            return;
        }
        // Envoi de l'action Redux pour mettre à jour le nom d'utilisateur
        dispatch(updateUserNameAsync(token, newUserName))
            .then(() => {
                // La mise à jour du nom d'utilisateur est gérée dans le reducer userSlice
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
                setError("Une erreur s'est produite lors de la mise à jour du nom d'utilisateur");
            });
    };
    return (
        <main className="main">
            <div className="editUN">
                <h1 className="editUN-title">Edit user info</h1>
                <form className="editUN-form" onSubmit={handleSubmit}>
                    <div className="editUN-input-wrapper">
                        <label htmlFor="user-name" className="editUN-label">User name:</label>
                        <input type="text" id="username" placeholder={userName} value={newUserName} onChange={handleUserNameChange} maxlenght={10}
                        className={error ? "editUn-error-input" : "editUN-input"}
                        />
                    </div>
                    <div className="editUN-input-wrapper">
                        <label htmlFor="first-name" className="editUN-label">First name:</label>
                        <input type="text" id="first-name" disabled placeholder={firstName} className="editUN-input"></input>
                    </div>
                    <div className="editUN-input-wrapper">
                        <label htmlFor="last-name" className="editUN-label">Last name:</label>
                        <input type="text" id="last-name" disabled placeholder={lastName} className="editUN-input"></input>
                    </div>
                    <div className="editUN-buttons-wrapper">
                        <Button type="submit" buttonText="Save" className="editUN-button"/>
                        <Button handleClick={() => navigate("/profile")} buttonText="Cancel" className="editUN-button"/>
                    </div>
                    <div className="editUN-error-message">{error}</div>
                </form>
                <Accounts variant="dark" />
            </div>
        </main>
    );
}

export default EditUserName;