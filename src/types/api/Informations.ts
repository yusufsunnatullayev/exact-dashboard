export interface InformationData {
  type: string;
  message: string;
  title: string;
  danger: string;
  author: string;
  tags: string[];
  date: string;
  time: string;
  U_VisableInDashboard: string;
  U_ShowTime: number;
}

export interface InformationsProps {
  data: InformationData[];
  loading?: boolean;
}
