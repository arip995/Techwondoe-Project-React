export interface RecievedNewsData {
  buttonText: string[];
  newsBy: string[];
  newsDescription: string[];
  title: string;
  newsImages: any;
  readMoreIcon: any;
}

export interface NewsData {
  news: {
    id: number;
    newsBy: string;
    newsDescription: string;
    newsImages: string;
  }[];
  buttonText: string[];
  title: string;
  readMoreIcon: string;
}
