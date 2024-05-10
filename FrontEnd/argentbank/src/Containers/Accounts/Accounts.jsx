import React from 'react';
import Account from '../../Components/Account/Account';

const accounts = [ //Tabelau de données des éléments des comptes
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42" ,
        description: "Available Balance",
          
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance",
    },
];

function Accounts(props) {
    return (
        <>
            {accounts.map((account, index) => ( // Utilisation du mapping pour itérer sur le tableau accounts et rendre plusieurs composants Account
                <Account
                variant={props.variant}
                key={index}
                title={account.title}
                amount={account.amount}
                description={account.description}
                />
            ))}
        </>
    );
}

export default Accounts;