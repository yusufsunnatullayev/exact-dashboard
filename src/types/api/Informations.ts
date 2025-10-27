export interface InformationData {
  announcementTime: string;
  announcementType: string;
  author: string;
  code: string;
  message: string;
  messageColor: string;
  name: string;
  priority: string;
  showTime: string | null;
  title: string;
  titleColor: string;
  typeColor: string;
  visableInDashboard: string;
  bgColor?: string;
  darkBgColor?: string;
}

export interface InformationsProps {
  data: InformationData[];
  loading?: boolean;
}

export interface AnnouncementColors {
  code: number;
  name: string;
  u_AnnouncementType: string;
  u_TypeColor: string;
  u_BgColor: string;
  u_TitleColor: string;
  u_BgColorDark: string;
}
