import React from 'react'

const FeatureCard = ({ title, description, imageUrl }) => {
    return (
        <div class="secondsubtitlebox">
            <img src={imageUrl} />
            <p style={{ fontSize: 23, fontWeight: 'bold' }}>{title}</p>
            <p style={{ fontSize: 16 }}>{description}</p>
        </div>
    );
}

export default FeatureCard;