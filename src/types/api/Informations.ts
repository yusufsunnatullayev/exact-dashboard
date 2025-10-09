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
}

export interface InformationsProps {
  data: InformationData[];
  loading?: boolean;
}
