import { RecievedNavbarData, NavbarData } from '../Model/Navbar.type';
import {
  RecievedHeaderImageData,
  HeaderImageData,
} from '../Model/HeaderImage.type';
import { RecievedTeamData, TeamData } from '../Model/Team.type';
import { CtaData, RecievedCtaData } from '../Model/Cta.type';
import { NewsData } from '../Model/News.type';

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
 * Convert the array of news to object of array
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
 * Sanitize the navbar data
 */
export const sanitizeNavbarData = (data: RecievedNavbarData): NavbarData => {
  var arrayOfobjects = convertNavbarDataToArrayOfObjects(data.buttonText);
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
export const sanitizeNewsData = (data: any): NewsData => {
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
