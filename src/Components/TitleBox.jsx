import React from 'react';
import FeatureCard from './FeatureCard';

const TitleBox = () => {
    return (
        <div>
            <div className="titlebox">
                <img src="/images/rsz_slide.jpg" alt="Abstract" />
                <div className="center-left" >
                    <p className="" style={{ fontSize: 75 }}>
                        {`Banking More 💲mart`}
                    </p>
                    <p className="" style={{ fontSize: 30 }}>
                        Meet the only spend managment platform and corporate card.
                    </p>
                    <button className="btn default">Get Your Card</button>
                </div>
            </div>
            <br />

        </div>
    );
}


export default TitleBox;