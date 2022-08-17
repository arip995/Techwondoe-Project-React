import React from 'react';
import { Navbar } from './Components/Navbar';
import { HeaderImage } from './Components/HeaderImage';
import { Team } from './Components/Team';
import { Cta } from './Components/Cta';
import { News } from './Components/News';
import { WhyChooseUs } from './Components/WhyChooseUs';
function App() {
  return (
    <div>
      <Navbar />
      <HeaderImage />
      <WhyChooseUs />
      <Team />
      <News />
      <Cta />
    </div>
  );
}

export default App;
