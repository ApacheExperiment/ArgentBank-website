import React from 'react';
import "./features.css"
import Feature from "../../Components/Feature/Feature";

const features = [ // Tableau de données des éléments Features
    {
        title: "You are our #1 priority",
        image: "icon-chat.webp",
        alt: "chat icon",
        text: "Need to talk to a reprentative ? You can get in touch through our 24/07 chat or through a phone call in less than 5 minutes.",
    },
    {
        title: "More savings means higher rates",
        image: "icon-money.webp",
        alt: "money icon",
        text: "The more you save with us, the higher your interest rate will be!",
    },
    {
        title: "Security you can trust",
        image:"icon-security.webp",
        alt: "security icon",
        text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
];

function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((feature,index) => ( // Utilisation du mapping pour itérer sur le tableau features et rendre plusieurs composants Feature
                <Feature 
                key={index}
                title={feature.title}
                image={feature.image}
                alt={feature.alt}
                text={feature.text}
                />
            ))}
        </section>
    );
}

export default Features;