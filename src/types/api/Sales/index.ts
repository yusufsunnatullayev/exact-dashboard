export interface PnlReportsData {
	key: string;
	name: string;
	value: number | string;
}
export interface SalesAnalyticsData {
	key?: string;
	itemGroupName: string;
	salesCount: number;
	salesRevenue: number;
	grossProfit: number;
	grossProfitPercent: number;
}
