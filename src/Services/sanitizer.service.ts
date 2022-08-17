import { RecievedNavbarData, NavbarData } from '../Model/Navbar.type';
import {
  RecievedHeaderImageData,
  HeaderImageData,
} from '../Model/HeaderImage.type';
/**
 * Convert the array of navbar button texts to object of array
 */
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

/**
 * Sanitize the navbar data
 */
export const sanitizeNavbarData = (data: RecievedNavbarData): NavbarData => {
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

/**
 * Sanitize the header image data
 */
export const sanitizeHeaderImageData = (
  data: RecievedHeaderImageData
): HeaderImageData => {
  return {
    headerIcon: data?.headerIcon?.fields?.file?.url,
    headerImage: data?.headerImage?.fields?.file?.url,
    mobileHeaderIcon: data?.mobileHeaderIcon?.fields?.file?.url,
  };
};
