import React from 'react';
import AwardSection from './AwardSection';
import ChristmasSection from './ChristmasSection';
import GiftSection from './GiftSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Congratulations!</h1>
      <AwardSection />
      <ChristmasSection />
      <GiftSection />
    </div>
  );
}

export default App;
