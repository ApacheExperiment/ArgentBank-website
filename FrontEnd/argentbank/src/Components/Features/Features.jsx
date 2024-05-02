import React from 'react';
import './features.css';
import Icon1 from '../../assets/img/icon-chat.webp';
import Icon2 from '../../assets/img/icon-money.webp';
import Icon3 from '../../assets/img/icon-security.webp';

function Features() {
    return (
      <div className="features">
          <div className="feature-item">
            <img src={Icon1} alt="Chat Icon" className="feature-icon"/>
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img src={Icon2}  alt="Chat Icon" className="feature-icon"/>
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img src={Icon3} alt="Chat Icon" className="feature-icon"/>
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </div>
    );
}

export default Features;