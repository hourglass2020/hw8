import React from 'react';
import StaticsCard from './StaticsCard';

const Statics = () => {
    return (
        <div style={{ textAlign: 'center', justifyItems: 'center' }}>
            <h1 style={{ textAlign: 'center', fontSize: 50 }}>Statics</h1>
            <div>
                <div className="container">
                    <h2>We Building Social uniqueness</h2>
                    <p>The marketing strategy lays out target markets and the value.</p>
                </div>
            </div>
            <div className="statics">
                {
                    items.map(item => (
                        <StaticsCard
                            title={item.title}
                            counter={item.counter}
                            imageUrl={item.imageUrl} />
                    ))
                }
            </div>
        </div>
    );
}

const items = [
    {
        title: "Customers",
        counter: "947444",
        imageUrl: "/images/customer.png"
    }, {
        title: "Likes",
        counter: "45600",
        imageUrl: "/images/like.png"
    }, {
        title: "Sale",
        counter: "576864",
        imageUrl: "/images/sale.png"
    },
]

export default Statics;