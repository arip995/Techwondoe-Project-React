import React, { useCallback, useEffect, useState } from 'react';
import { fetchNavbarData } from '../Services/api.service';
import { sanitizeNavbarData } from '../Services/sanitizer.service';
import { NavbarData } from '../Models/Navbar.type';

const Navbar = () => {
  const [navbarData, setNavbarData] = useState<NavbarData>();

  /**
   * Function to fetch and sanitize the navbar data
   */
  const getNavbarData = async () => {
    fetchNavbarData()
      .then((data: any) => {
        const sanitizedData: NavbarData = sanitizeNavbarData(
          data?.items[0]?.fields
        );
        setNavbarData(sanitizedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Function to show dropdown icon or not
   */
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

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    getNavbarData();
    /**
     * Clean up code
     */
    const abortController = new AbortController();
    return () => abortController.abort();
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
                <img className="ml-1 h-2 w-3" src={navbarData.dropdownIcon} />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className="hover:cursor-pointer mx-4 my-3 lg:hidden">
        <img src={navbarData?.mobileNavbarIcon} />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
