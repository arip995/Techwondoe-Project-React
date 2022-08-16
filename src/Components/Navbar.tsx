import React, { useEffect } from 'react';
import { getNavbarData } from '../Services/api.service';
const Navbar = () => {
  const navbarData = async () => {
    try {
      const data = await getNavbarData();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    navbarData();
  }, []);
  return (
    <div className="">
      <button>dfasds</button>
    </div>
  );
};

export default Navbar;
