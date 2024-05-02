import React from 'react'
import Header from '../../Containers/Header/Header'
import Account from '../../Components/Account/Account'
function User () {
    return (
        <main className="main bg-dark">
            <Header />
            <h2 className="sr-only">Accounts</h2>
            <Account />
        </main>
    );
}

export default User;