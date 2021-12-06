import React from 'react';

const StaticsCard = ({ title, counter, imageUrl }) => {
    return (
        <div className="staticscard">
            <img src={imageUrl} />
            <h3 style={{ fontSize: 40 }}>{title}</h3>
            <p style={{ fontSize: 30 }}>{counter}</p>
        </div>
    );
}

export default StaticsCard;