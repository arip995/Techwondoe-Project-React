export interface RecievedWhyChooseUsData {
  contentDescription: string;
  contents: string[];
  description: string;
  tickIcon: any;
  title: string;
}

export interface WhyChooseUsData {
  contents: { id: number; value: string }[];
  contentDescription: string;
  description: string;
  tickIcon: string;
  title: string;
}
