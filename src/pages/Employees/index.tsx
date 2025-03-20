// pages/Employees.tsx
import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import EmployeeSummaryCard from "../../components/EmployeesCard";
import { EmployeeSummaryProps } from "../../types/Employees";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Employees: React.FC = () => {
	const employees: EmployeeSummaryProps[] = [
		{
			employeeName: "David Chen",
			role: "Texnik xizmat ko'rsatish muhandisi",
			department: "Texnik xizmat bo'limi",
			date: "Fevral 2024",
			resources: [
				{ name: "Extruder", quantity: 240, cost: "810 000 so'm" },
				{ name: "Thermoplast", quantity: 220, cost: "115 000 so'm" },
				{ name: "Labeling Machine", quantity: 8, cost: "65 000 so'm" },
				{ name: "Box Packaging Machine", quantity: 7, cost: "75 000 so'm" },
				{ name: "Assembly Machine", quantity: 300, cost: "3 100 000 so'm" },
			],
			targetQuantity: 1,
			proggresStart: 0,
		},
		{
			employeeName: "Sarah Johnson",
			role: "Texnik xizmat ko'rsatish muhandisi",
			department: "Texnik xizmat bo'limi",
			date: "Mart 2024",
			resources: [
				{ name: "Extruder", quantity: 180, cost: "600 000 so'm" },
				{ name: "Thermoplast", quantity: 150, cost: "90 000 so'm" },
				{ name: "Labeling Machine", quantity: 5, cost: "40 000 so'm" },
				{ name: "Box Packaging Machine", quantity: 10, cost: "100 000 so'm" },
				{ name: "Assembly Machine", quantity: 40, cost: "2 000 000 so'm" },
			],
			targetQuantity: 2,
			proggresStart: 10,
		},
		{
			employeeName: "John Doe",
			role: "Texnik xizmat ko'rsatish muhandisi",
			department: "Texnik xizmat bo'limi",
			date: "Mart 2024",
			resources: [
				{ name: "Extruder", quantity: 180, cost: "600 000 so'm" },
				{ name: "Thermoplast", quantity: 150, cost: "90 000 so'm" },
				{ name: "Labeling Machine", quantity: 5, cost: "40 000 so'm" },
				{ name: "Box Packaging Machine", quantity: 10, cost: "100 000 so'm" },
				{ name: "Assembly Machine", quantity: 40, cost: "2 000 000 so'm" },
			],
			targetQuantity: 2,
			proggresStart: 10,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentProgress, setCurrentProgress] = useState(0);

	// Handle progress animation and reset
	useEffect(() => {
		setCurrentProgress(0); // Reset progress when employee changes

		const interval = setInterval(() => {
			setCurrentProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 1;
			});
		}, 150);

		return () => clearInterval(interval);
	}, [currentIndex]);

	useEffect(() => {
		const interval = setInterval(() => {
			goToSlide((currentIndex + 1) % employees.length);
		}, 15500);
		return () => clearInterval(interval);
	}, [currentIndex]);

	// Navigation handlers
	const goToPrevious = () => {
		setCurrentProgress(0);

		setCurrentIndex((prev) => (prev === 0 ? employees.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentProgress(0);
		setCurrentIndex((prev) => (prev === employees.length - 1 ? 0 : prev + 1));
	};

	// Handle dot click
	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="max-w-6xl mx-auto p-4">
			{/* Carousel Container */}
			<div className="relative">
				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{employees.map((employee, index) => (
							<div key={index} className="w-full flex-shrink-0 p-4">
								<EmployeeSummaryCard {...employee} />
							</div>
						))}
					</div>
				</div>

				<button
					onClick={goToPrevious}
					className="absolute left-[-45px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
				>
					<ChevronLeft size={24} className="text-gray-600" />
				</button>
				<button
					onClick={goToNext}
					className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
				>
					<ChevronRight size={24} className="text-gray-600" />
				</button>
			</div>

			<div className="mt-10 max-w-4xl mx-auto flex flex-col items-center justify-center  ">
				<Progress
					percent={currentProgress}
					status={currentProgress >= 100 ? "success" : "active"}
					strokeColor={"oklch(0.723 0.219 149.579)"}
					showInfo={false}
				/>
				<div className="flex justify-center gap-2 mt-4 cursor-pointer">
					{employees.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full cursor-pointer ${
								currentIndex === index ? "bg-green-500 w-10" : "bg-gray-300"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Employees;
