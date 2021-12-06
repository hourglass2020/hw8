import React from 'react'


const TopNav = () => {
    return (
        <div className="topnav">
            <img src="/images/box.png" />
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#news">How It Works</a>
            <a href="#contact">Contact</a>
            <button href="#signin" style={{ textAlign: 'left', justifyContent: "right" }}>SignIn</button>
        </div>
    );
}

export default TopNav;