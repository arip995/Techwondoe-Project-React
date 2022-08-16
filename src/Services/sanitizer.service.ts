import { RecievedNavbarData, SanitizenavbarData } from '../Model/Navbar.types';

const convertNavbarDataToArrayOfObjects = (data: String[]) => {
  var arrayOfobjects: { id: number; value: String }[] = [];
  data.forEach((element, index) => {
    arrayOfobjects.push({
      id: index,
      value: element,
    });
  });
  return arrayOfobjects;
};

export const sanitizenavbarData = (
  data: RecievedNavbarData
): SanitizenavbarData => {
  console.log(data);
  var arrayOfobjects = convertNavbarDataToArrayOfObjects(data.buttonText);
  const sanitizedData = {
    buttonText: arrayOfobjects,
    dropdownIcon: data.dropdownIcon?.fields?.file.url,
    mobileNavbarIcon: data.mobileNavbarIcon?.fields?.file.url,
  };
  // console.log(sanitizedData);
  return sanitizedData;
};
