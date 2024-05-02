import React from 'react';
import Button from '../../Components/Button/Button';
import './header.css';

function Header () {

    return (
        <header className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <Button className="edit-button" buttonText="Edit Name"/>
        </header>
    );
}

export default Header;