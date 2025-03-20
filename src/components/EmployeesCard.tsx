import { Progress } from "antd";
import React, { useState, useEffect } from "react";
import { EmployeeSummaryProps } from "../types/Employees";

// Single Employee Summary Card Component
const EmployeeSummaryCard: React.FC<EmployeeSummaryProps> = ({
	employeeName,
	role,
	department,
	date,
	resources,
	targetQuantity = 1500,
	proggresStart = 0,
}) => {
	// Calculate total quantity and cost
	const totalQuantity = resources.reduce((sum, resource) => sum + resource.quantity, 0);
	const totalCost = resources.reduce((sum, resource) => {
		const cost = parseInt(resource.cost.replace(/[^0-9]/g, ""));
		return sum + cost;
	}, 0);

	return (
		<div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
			{/* Header */}
			<div className="flex justify-between items-center p-5 py-8 bg-blue-600">
				<div className="flex items-center gap-5">
					<div className="bg-gray-300 rounded-full p-2 w-20 h-20 flex items-center justify-center shadow-2xl">
						<span className="text-white font-semibold text-3xl">{employeeName[0]}</span>
					</div>
					<div className="flex flex-col items-start gap-1">
						<h1 className="text-white font-semibold text-3xl">{employeeName}</h1>
						<p className="text-gray-100 text-sm">{role}</p>
					</div>
				</div>
				<div className="flex flex-col items-end gap-2">
					<h1 className="text-gray-100 font-semibold ">{department}</h1>
					<p className="text-gray-100 text-sm">{date}</p>
				</div>
			</div>
			{/* Table */}
			<div className="px-10">
				<table className="w-full text-left">
					<thead>
						<tr className="text-gray-600">
							<th className="py-5">Resurs</th>
							<th className="py-5 text-center">Qancha ishlab chiqarildi</th>
							<th className="py-5 text-right">Daromad</th>
						</tr>
					</thead>
					<tbody>
						{resources.map((resource, index) => (
							<tr key={index} className="border-t border-gray-200">
								<td className="py-5 ">{resource.name}</td>
								<td className="py-5  text-center">{resource.quantity}</td>
								<td className="py-5  text-right">{resource.cost}</td>
							</tr>
						))}
						<tr className="border-t border-gray-200 font-semibold">
							<td className="py-5">Jami</td>
							<td className="py-5 text-center">{totalQuantity}</td>
							<td className="py-5 text-right">{totalCost.toLocaleString()} so'm</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default EmployeeSummaryCard;
