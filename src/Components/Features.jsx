import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: 50 }}>Features</h1>
            <div className="subtitlebox">
                {
                    items.map(item => (
                        <FeatureCard
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                        />
                    ))
                }
            </div>

        </div>
    );
}

const items = [
    {
        imageUrl: "/images/hot_deal.png",
        title: "Hot Deal",
        description: "Online shopping for retail sales direct to consumers"
    },
    {
        imageUrl: "/images/wallet.png",
        title: "Save Money",
        description: "Online shopping for retail sales direct to consumers"
    },
    {
        imageUrl: "/images/growth_money.png",
        title: "Growth of Money",
        description: "Online shopping for retail sales direct to consumers"
    },
    {
        imageUrl: "/images/bag_coin.png",
        title: "Bags of Coins",
        description: "Online shopping for retail sales direct to consumers"
    }
]


export default Features;