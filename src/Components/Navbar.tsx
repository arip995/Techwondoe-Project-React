import React, { useCallback, useEffect, useState } from 'react';
import { getNavbarData } from '../Services/api.service';
import { sanitizenavbarData } from '../Services/sanitizer.service';
import { SanitizenavbarData } from '../Model/Navbar.type';

const Navbar = () => {
  const [navbarData, setNavbarData] = useState<SanitizenavbarData>();

  // Function to fetch and sanitize the navbar data
  const fetchNavbarData = async () => {
    getNavbarData().then((data: any) => {
      const sanitizedData: SanitizenavbarData = sanitizenavbarData(
        data?.items[0]?.fields
      );
      setNavbarData(sanitizedData);
      console.log(navbarData);
    });
  };

  //Function to show dropdown icon or not
  const isDropdownIcon = useCallback(
    (id: number): boolean => {
      if (id === 0 || id === 2 || id === 3) {
        return true;
      } else {
        return false;
      }
    },
    [navbarData]
  );

  //Useeffect hook calls once in the begining
  useEffect(() => {
    fetchNavbarData();
  }, []);
  return (
    <div className="bg-[#E5E5E5] flex justify-end w-full px-4 py-3">
      <div className="flex items-center lgb:hidden hover:cursor-pointer xl:w-1/2 xlb:w-2/3 justify-around ">
        {navbarData?.buttonText.map((data) => {
          return (
            <div
              key={data.id}
              className="font-normal flex items-center text-[#000000]	font-poppins text-base"
            >
              {data.value}
              {isDropdownIcon(data.id) ? (
                <img className="ml-1 h-2 w-2" src={navbarData.dropdownIcon} />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className="mx-4 my-3 lg:hidden">
        <img src={navbarData?.mobileNavbarIcon} />
      </div>
    </div>
  );
};

export default Navbar;
