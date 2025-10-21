export interface Resource {
  name: string;
  quantity: number;
  cost: string;
}

export interface EmployeeSummaryProps {
  firstName: string;
  lastName: string;
  oy_nomi: string;
  detailedInformation: any[];
  targetQuantity?: number;
  proggresStart?: number;
  isActive: boolean;
  stopTimer: boolean;
  setIsAtBottom: (isAtBottom: boolean) => void;
}
