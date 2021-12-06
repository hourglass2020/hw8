import React from 'react';
import Description from './Components/Description';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Statics from './Components/Statics';
import SubscribeBox from './Components/SubscribeBox';
import TitleBox from './Components/TitleBox';
import TopNav from './Components/TopNav';


function App() {
  return (
    <div className="body">
      <TopNav />
      <br />
      <TitleBox />
      <br />
      <Features />
      <br />
      <Description />
      <br />
      <Statics />
      <br />
      <SubscribeBox />
      <br />
      <Footer />
    </div>
  );
}

export default App;
