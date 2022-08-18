export interface RecievedEmployeeData {
  buttonText: string;
  customIcons: any;
  description: string[];
  title: string[];
  backgroundIcon: any;
}

export interface EmployeeData {
  content: {
    id: number;
    customIcons: string;
    description: string;
    title: string;
  }[];
  buttonText: string;
  backgroundIcon: string;
}
