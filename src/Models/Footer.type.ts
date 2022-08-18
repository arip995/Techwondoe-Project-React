export interface RecievedFooterData {
  copyrightText: string;
  line1: string[];
  line2: string[];
  line4: string[];
  line5: string[];
  socialMediaIcons: any;
}

export interface FooterData {
  copyrightText: string;
  lines: any;
  socialMediaIcons: { id: number; value: string }[];
}
