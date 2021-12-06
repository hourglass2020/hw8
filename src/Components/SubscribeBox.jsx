import React from 'react';
import Statics from './Statics';

const SubscribeBox = () => {
    return (
        <div>
            <br />
            <div className="subscribebox">
                <img src="/images/rss.png" />
                <div className="subscribebox-part">
                    <form>
                        <div className="container">
                            <h2>Subscribe to our Newsletter</h2>
                            <p>Subscribe to get updated news</p>
                        </div>

                        <div className="container" >
                            <input type="text" placeholder="Name" name="name" required />
                            <input type="text" placeholder="Email address" name="mail" required />
                            <label>
                                <input type="checkbox" checked="checked" name="subscribe" /> Daily Newsletter
                            </label>
                        </div>
                        <br />
                        <div className="container">
                            <button className="btn default">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SubscribeBox;