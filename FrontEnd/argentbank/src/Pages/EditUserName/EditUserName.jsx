import React from 'react';
import Button from '../../Components/Button/Button'
import "./edit-user-name.css"

function EditUserName () {

    return (
        <main className="main">
            <div className="editUN">
                <h1 className="editUN-title">Edit user info</h1>
                <form className="editUN-form">
                    <div className="editUN-input-wrapper">
                        <label htmlFor="user-name" className="editUN-label">User name:</label>
                        <input type="text" className="editUN-input">
                        </input>
                    </div>
                    <div className="editUN-input-wrapper">
                        <label htmlFor="first-name" className="editUN-label">First name:</label>
                        <input type="text" className="editUN-input"></input>
                    </div>
                    <div className="editUN-input-wrapper">
                        <label htmlFor="last-name" className="editUN-label">Last name:</label>
                        <input type="text" className="editUN-input"></input>
                    </div>
                    <div className="editUN-buttons-wrapper">
                        <Button buttonText="Save" className="editUN-button"/>
                        <Button buttonText="Cancel" className="editUN-button"/>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default EditUserName;