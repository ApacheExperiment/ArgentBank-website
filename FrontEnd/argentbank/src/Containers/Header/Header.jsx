import React from 'react';
import Button from '../../Components/Button/Button';
import './header.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Header () {

   const { firstName, lastName } = useSelector((state) => state.userProfile);

    return (
        <header className="header">
            <h1>Welcome back<br />{`${firstName} ${lastName}`}</h1>
            <Link to="edit-user-name">
            <Button className="edit-button" buttonText="Edit Name"/>
            </Link>
        </header>
    );
}

export default Header;