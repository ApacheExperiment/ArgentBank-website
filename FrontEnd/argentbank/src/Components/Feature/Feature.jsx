import React from 'react';
import './feature.css';

function Feature(props) { // Affichage dynamique des éléments de la section depuis le tableau du composant Features
  const featureImg = require(`../../assets/img/${props.image}`);

    return (
          <div className="feature-item">
            <img src={featureImg} alt={props.alt} className="feature-icon"/>
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.text}</p>
          </div>
    );
}

export default Feature;