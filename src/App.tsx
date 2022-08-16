import React from 'react';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
      <div className="flex flex-row">
        <Navbar></Navbar>
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
    </div>
  );
}

export default App;
