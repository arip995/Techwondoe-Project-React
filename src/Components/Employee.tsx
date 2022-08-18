import React, { useEffect } from 'react';
import { fetchEmployeeData } from '../Services/api.service';
import { sanitizeEmployeeData } from '../Services/sanitizer.service';
import { EmployeeData } from '../Model/Employee.type';
import { Typography } from '../stories/Components/Typography/Typography';

export const Employee = () => {
  const [employeeData, setEmployeeData] = React.useState<EmployeeData>();

  /**
   * Function to fetch and sanitize the Employee data
   */
  const getEmployeeData = () => {
    fetchEmployeeData().then((data: any) => {
      const sanitizedData: EmployeeData = sanitizeEmployeeData(
        data?.items[0]?.fields
      );
      setEmployeeData(sanitizedData);
      console.log(sanitizedData);
    });
  };

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    getEmployeeData();

    /**
     * Clean up code
     */
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);
  return (
    <div className="w-full bg-[#EDEDED] flex justify-center relative">
      <div className="md:flex xl:w-7/12 w-11/12 justify-center gap-12 w-full md:py-24 py-12">
        {employeeData?.content.map((employee) => {
          return (
            <div
              key={employee.id}
              className="z-20 bg-[#ffffff] w-full py-6 pl-6 pr-12 w-full md:w-1/2 mdb:mb-5 text-left"
            >
              <img src={employee?.customIcons} className="mb-6" />
              <div className="md:font-semibold	mdb:font-font-medium	md:text-3xl	mdb:text-2xl mb-6">
                {employee?.title}
              </div>
              <Typography
                className="mb-4"
                label={employee?.description}
                type="p1"
              />
              <Typography
                className="hover:cursor-pointer mb-4 text-[#E6692E]"
                label={employeeData?.buttonText}
                type="p1"
              />
            </div>
          );
        })}
      </div>
      <img
        style={{ height: '-webkit-fill-available' }}
        className="z-10 lgb:hidden absolute bottom-0 right-0 object-contain"
        src={employeeData?.backgroundIcon}
      />
    </div>
  );
};