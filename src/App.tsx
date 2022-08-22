import React from 'react';
import Navbar from './Components/Navbar';
import HeaderImage from './Components/HeaderImage';
import Team from './Components/Team';
import Cta from './Components/Cta';
import News from './Components/News';
import WhyChooseUs from './Components/WhyChooseUs';
import Employee from './Components/Employee';
import Footer from './Components/Footer';
import TryCustomHook from './Components/TryCustomHook';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeaderImage />
      <WhyChooseUs />
      <Team />
      <News />
      <Employee />
      <Cta />
      <Footer />
      <TryCustomHook />
    </div>
  );
};

export default React.memo(App);
