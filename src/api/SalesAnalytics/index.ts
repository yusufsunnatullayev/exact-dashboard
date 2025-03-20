import { colorPairs } from "../../helpers/colors";
import http from "../../services/http";
import { WhsData } from "../../types/api";
import { PnlReportsData, SalesAnalyticsData } from "../../types/api/Sales";

export const fetchPnlReport = async ({ queryKey }) => {
	const startDate = queryKey[1]?.format("YYYY-MM-DD");
	const endDate = queryKey[2]?.format("YYYY-MM-DD");
	const whs = queryKey[3];

	try {
		const { data } = await http.get(
			`pnl-reports?dateStart=${startDate}&dateEnd=${endDate}&warehouseCode=${whs}`
		);
		const mappedData = data.data.map((item: any) => {
			return {
				...item,
				key: `${item.name}-${item.value}`,
			};
		});
		return mappedData as PnlReportsData[];
	} catch (error) {
		console.error(error);
	}
};

export const fetchSalesAnalytics = async ({ queryKey }) => {
	const startDate = queryKey[1]?.format("YYYY-MM-DD");
	const endDate = queryKey[2]?.format("YYYY-MM-DD");
	const whs = queryKey[3];

	try {
		const { data } = await http.get(
			`sales-analysis?dateStart=${startDate}&dateEnd=${endDate}&warehouseCode=${whs}`
		);

		return data.data as SalesAnalyticsData[];
	} catch (error) {
		console.error(error);
	}
};

export const fetchWhs = async () => {
	try {
		const { data } = await http.get(`warehouses?skip=0&limit=1000`);

		const mappedData = data.data.map((item: any) => {
			return {
				label: item.warehouseName,
				value: item.warehouseCode,
			};
		});

		const allWhs = [
			{
				label: "Barchasi",
				value: "",
			},
			...mappedData,
		];

		return allWhs as WhsData[];
	} catch (error) {
		console.error(error);
	}
};

export const fetchSalesLineChart = async ({ queryKey }) => {
	const period = queryKey[2] || "yearly";
	const whs = queryKey[1];

	try {
		const { data } = await http.get(`charts/sales?period=${period}&warehouseCode=${whs}`);

		const resData = data.data;
		const labels = resData
			?.flatMap((item: any) => item.documentLines?.map((line: any) => line.date))
			.filter((date, index, self) => self.indexOf(date) === index) // Ensure unique labels
			.sort(); // Optional: Sort dates if needed

		const datasets = resData?.map((item: any, index: number) => ({
			label: item.warehouseName,
			data: item.documentLines.map((line: any) => line.value),
			fill: false,
			borderColor: colorPairs[index].border,
		}));

		const chartData = {
			labels,
			datasets,
		};

		console.log("chartDataSales", chartData);
		return chartData;
	} catch (error) {
		console.error(error);
		return { labels: [], datasets: [] }; // Handle errors gracefully
	}
};
export const fetchProfitLineChart = async ({ queryKey }) => {
	const period = queryKey[2] || "yearly";
	const whs = queryKey[1];

	try {
		const { data } = await http.get(`charts/profit?period=${period}&warehouseCode=${whs}`);

		const resData = data.data;
		const labels = resData
			?.flatMap((item: any) => item.documentLines?.map((line: any) => line.date))
			.filter((date, index, self) => self.indexOf(date) === index) // Ensure unique labels
			.sort(); // Optional: Sort dates if needed

		const datasets = resData?.map((item: any, index: number) => ({
			label: item.warehouseName,
			data: item.documentLines.map((line: any) => line.value),
			fill: false,
			borderColor: colorPairs[index].border,
		}));

		const chartData = {
			labels,
			datasets,
		};

		console.log("chartDataProfit", chartData);
		return chartData;
	} catch (error) {
		console.error(error);
		return { labels: [], datasets: [] }; // Handle errors gracefully
	}
};

export const fetchSalesCountLineChart = async ({ queryKey }) => {
	const period = queryKey[2] || "yearly";
	const whs = queryKey[1];

	try {
		const { data } = await http.get(`charts/sales-count?period=${period}&warehouseCode=${whs}`);

		const resData = data.data;
		const labels = resData
			?.flatMap((item: any) => item.documentLines?.map((line: any) => line.date))
			.filter((date, index, self) => self.indexOf(date) === index) // Ensure unique labels
			.sort(); // Optional: Sort dates if needed

		const datasets = resData?.map((item: any, index: number) => ({
			label: item.warehouseName,
			data: item.documentLines.map((line: any) => line.value),
			fill: false,
			borderColor: colorPairs[index].border,
		}));

		const chartData = {
			labels,
			datasets,
		};

		console.log("chartDataProfit", chartData);
		return chartData;
	} catch (error) {
		console.error(error);
		return { labels: [], datasets: [] }; // Handle errors gracefully
	}
};
