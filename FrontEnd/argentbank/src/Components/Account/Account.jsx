import React from 'react';
import Button from '../Button/Button';
import "./account.css";

function Account(props) { // Affichage dynamique des éléments de la section depuis le tableau du composant Accounts
    return (
        <section className={`account${props.variant === "dark" ? " account-dark" : ""}`}>
            <div className="account-content-wrapper">
            <h3 className="account-title">{props.title}</h3>
            <p className="account-amount">{props.amount}</p>
            <p className="account-amount-description">{props.description}</p>
            </div>
            {props.variant === "dark" ? (
                <Button className="transaction-button-arrow" />
            ) : (
                <Button className="transaction-button" buttonText="View transactions"/>
            )}
        </section>
    );
}

export default Account;