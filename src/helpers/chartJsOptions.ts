import { ChartOptions } from "chart.js";

export const optionsLine: ChartOptions<"line"> = {
	responsive: true,
	// maintainAspectRatio: false, // Add this to allow the chart to fill the container height
	layout: {
		padding: 10, // Optional: Adds padding inside the chart
	},
	plugins: {
		legend: {
			position: "top",
		},
	},
	elements: {
		line: {
			tension: 0.4, // Chiziqlarni silliqlashtiradi (0 dan 1 gacha qiymat)
			borderWidth: 2, // Chiziq qalinligi
			borderCapStyle: "round", // Chiziq uchlari yumaloq bo'ladi
		},
		// point: {
		// 	radius: 5, // Nuqtalar hajmi
		// 	borderWidth: 2,
		// 	backgroundColor: "rgba(75, 192, 192, 1)", // Nuqtalar rangi (masalan)
		// 	pointStyle: "circle", // Nuqtalar yumaloq bo'ladi
		// },
	},

	scales: {
		x: {
			beginAtZero: true,
		},
		y: {
			beginAtZero: true,
			grid: {
				display: false,
			},
		},
	},
};

export const getOptionsBar = (labels: string[]): ChartOptions<"bar"> => ({
	indexAxis: "y", // Horizontal bar chart
	responsive: true,
	layout: {
		padding: 10, // Optional: Adds padding inside the chart
	},
	plugins: {
		legend: { display: false },
		title: { display: false },
		tooltip: {
			callbacks: {
				title: (tooltipItems) => {
					// Show full label in tooltip when hovering over bars
					const item = tooltipItems[0];
					return labels[item.dataIndex]; // Use passed labels
				},
			},
		},
	},
	scales: {
		x: {
			ticks: {
				color: "#666", // Customize tick color
			},
		},
		y: {
			ticks: {
				callback: (value, index) => {
					// Truncate long labels (max 15 characters)
					const fullLabel = labels[index as number];
					return fullLabel.length > 25 ? fullLabel.slice(0, 25) + "..." : fullLabel;
				},
				color: "#666", // Customize tick color
			},
		},
	},
});

export const optionsPie: ChartOptions<"pie"> = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom",
		},
	},
};
