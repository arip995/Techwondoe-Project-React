import { RecievedNavbarData, NavbarData } from '../Model/Navbar.type';
import {
  RecievedHeaderImageData,
  HeaderImageData,
} from '../Model/HeaderImage.type';
import { RecievedTeamData, TeamData } from '../Model/Team.type';
import { CtaData, RecievedCtaData } from '../Model/Cta.type';
import { NewsData, RecievedNewsData } from '../Model/News.type';
import {
  RecievedWhyChooseUsData,
  WhyChooseUsData,
} from '../Model/WhyChooseUs.type';
import { RecievedEmployeeData, EmployeeData } from '../Model/Employee.type';
// import { RecievedEmployeeData } from '../Model/Employee.type';

/**
 * Convert the array of navbar button texts to object of array
 */
const convertDataToArrayOfObjects = (data: string[]) => {
  var arrayOfobjects: { id: number; value: string }[] = [];
  data.forEach((element, index) => {
    arrayOfobjects.push({
      id: index,
      value: element,
    });
  });
  return arrayOfobjects;
};

/**
 * Convert the array of news to array of objects
 */
const convertNewsDataToArrayOfObjects = (
  newsBy: string[],
  newsDescription: string[],
  newsImages: any
) => {
  var arrayOfobjects: {
    id: number;
    newsBy: string;
    newsDescription: string;
    newsImages: string;
  }[] = [];
  newsBy.forEach((element, index) => {
    arrayOfobjects.push({
      id: index,
      newsBy: element,
      newsDescription: newsDescription[index],
      newsImages: newsImages[0]?.fields?.file?.url,
    });
  });
  return arrayOfobjects;
};

/**
 * Convert the array of Employee to array of objects
 */
const convertDataToEmployeeArrayOfObjects = (
  customIcons: any,
  description: any,
  title: string[]
) => {
  var arrayOfobjects: {
    id: number;
    customIcons: string;
    description: string;
    title: string;
  }[] = [];
  description.map((element: string, index: number) => {
    arrayOfobjects.push({
      id: index,
      customIcons: customIcons[index].fields.file.url,
      description: element,
      title: title[index],
    });
  });
  return arrayOfobjects;
};

/**
 * Sanitize the navbar data
 */
export const sanitizeNavbarData = (data: RecievedNavbarData): NavbarData => {
  var arrayOfobjects = convertDataToArrayOfObjects(data.buttonText);
  const sanitizedData = {
    buttonText: arrayOfobjects,
    dropdownIcon: data.dropdownIcon?.fields?.file.url,
    mobileNavbarIcon: data.mobileNavbarIcon?.fields?.file.url,
  };
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

/**
 * Sanitize the navbar data
 */
export const sanitizeTeamData = (data: RecievedTeamData): TeamData => {
  return {
    buttonText: data?.buttonText,
    description: data?.description,
    icon: data?.icon?.fields?.file?.url,
    image: data?.image?.fields?.file?.url,
    ourTeam: data?.ourTeam,
    title: data?.title,
  };
};

/**
 * Sanitize the navbar data
 */
export const sanitizeCtaData = (data: RecievedCtaData): CtaData => {
  return {
    buttonText: data?.buttonText,
    description: data?.description,
    title: data?.title,
  };
};

/**
 * Sanitize the News data
 */
export const sanitizeNewsData = (data: RecievedNewsData): NewsData => {
  const arrayOfObjects = convertNewsDataToArrayOfObjects(
    data.newsBy,
    data.newsDescription,
    data.newsImages
  );
  return {
    news: arrayOfObjects,
    buttonText: data?.buttonText,
    title: data?.title,
    readMoreIcon: data?.readMoreIcon?.fields?.file?.url,
  };
};

/**
 * Sanitize the WhyChooseUs data
 */
export const sanitizeWhyChooseUsData = (
  data: RecievedWhyChooseUsData
): WhyChooseUsData => {
  var arrayOfobjects = convertDataToArrayOfObjects(data.contents);
  return {
    contents: arrayOfobjects,
    contentDescription: data?.contentDescription,
    description: data?.description,
    title: data?.title,
    tickIcon: data?.tickIcon?.fields?.file?.url,
  };
};

/**
 * Sanitize the Employee data
 */
export const sanitizeEmployeeData = (
  data: RecievedEmployeeData
): EmployeeData => {
  var arrayOfobjects = convertDataToEmployeeArrayOfObjects(
    data.customIcons,
    data.description,
    data.title
  );
  return {
    content: arrayOfobjects,
    buttonText: data?.buttonText,
    backgroundIcon: data?.backgroundIcon?.fields?.file?.url,
  };
};
