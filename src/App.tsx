import React from 'react';
import { Navbar } from './Components/Navbar';
import { HeaderImage } from './Components/HeaderImage';
import { Team } from './Components/Team';
import { Cta } from './Components/Cta';
import { News } from './Components/News';
function App() {
  return (
    <div>
      <Navbar />
      <HeaderImage />
      <Team />
      <News />
      <Cta />
    </div>
  );
}

export default App;
