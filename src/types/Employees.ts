export interface Resource {
	name: string;
	quantity: number;
	cost: string;
}

export interface EmployeeSummaryProps {
	employeeName: string;
	role: string;
	department: string;
	date: string;
	resources: Resource[];
	targetQuantity?: number;
  proggresStart?: number;
}
