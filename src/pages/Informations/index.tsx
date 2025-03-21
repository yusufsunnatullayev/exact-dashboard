// pages/Employees.tsx
import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import InformationsCard from "../../components/InformationsCard";
import { InformationData } from "../../types/api/Informations";

const Informations: React.FC = () => {
	const stopTimer = useSelector((state: any) => state.main.stopTimer);

	const informations: InformationData[] = [
		{
			type: "Eslatma",
			message:
				"Majburiy xavfsizlik treningi barcha bo'lim xodimlari uchun o'tkaziladi. Trening davomiyligi 2 soat.",
			title:
				"Ertaga soat 10:00 da asosiy zalda xavfsizlik bo'yicha treningga qatnashishni unutmang.",
			danger: "O'rta",
			author: "Jahongir Aliyev (HR)",
			tags: ["Training", "Safety", "Mandatory"],
			date: "2023-06-01",
			time: "10:00",
		},
		{
			type: "Xavfsizlik ogohlantirishni",
			message:
				"Texnik xizmat ko'rsatish jarayoni taxminan 2 soat davom etadi. Barcha xodimlar xavfsizlik qoidalariga qat'iy rioya qilishlari shart.",
			title: "Diqqat! 3-zonada texnik xizmat ko'rsatilmoqda. Iltimos, hududdan uzoqroq bo'ling",
			danger: "Yuqori",
			author: "Dilshod Karimov (Texnik xizmat)",
			tags: ["Safety", "Maintenance", "Alert"],
			date: "2023-06-02",
			time: "12:00",
		},
		{
			type: "Muvaffaqiyat",
			message:
				"Ishlab chiqarish jamoasi A11 mashinasida soatiga 150 birlik ishlab chiqarish rekordini o'rnatdi. Bu oldingi rekorddan 15% yuqori.",
			title: "A11 mashinasida yangi samaradorlik rekordi o'rnatildi! Jamoaga tabriklar!",
			danger: "Oddiy",
			author: "Aziz Toshmatov (Ishlab chiqarish)",
			tags: ["Achievement", "Production", "Team Success"],
			date: "2023-06-03",
			time: "14:00",
		},
		{
			type: "Ma'lumot",
			message:
				"Rejali texnik xizmat ko'rsatish ishlari sababli suv ta'minoti vaqtincha to'xtatiladi. Iltimos, oldindan tayyorgarlik ko'ring.",
			title: "Suv ta'minoti soat 14:00 dan 16:00 gacha vaqtincha o'chiriladi.",
			danger: "Oddiy",
			author: "Gulnora Rahimova (Facility Management)",
			tags: ["Maintenance", "Utility", "Notice"],
			date: "2023-06-03",
			time: "14:00",
		},
		//... more information objects...
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentProgress, setCurrentProgress] = useState(0);

	// Handle progress animation and reset
	useEffect(() => {
		if (!stopTimer) return;

		setCurrentProgress(0);

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
	}, [currentIndex, stopTimer]);

	useEffect(() => {
		if (!stopTimer) return;
		const interval = setInterval(() => {
			goToSlide((currentIndex + 1) % informations.length);
		}, 15500);
		return () => clearInterval(interval);
	}, [currentIndex, stopTimer, informations.length]);

	// Navigation handlers
	const goToPrevious = () => {
		setCurrentProgress(0);

		setCurrentIndex((prev) => (prev === 0 ? informations.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentProgress(0);
		setCurrentIndex((prev) => (prev === informations.length - 1 ? 0 : prev + 1));
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
						{informations.map((employee, index) => (
							<div key={index} className="w-full flex-shrink-0 p-4">
								{/* @ts-ignore */}
								<InformationsCard data={employee} />
							</div>
						))}
					</div>
				</div>

				<button
					onClick={goToPrevious}
					className="absolute left-[-45px] top-1/2 cursor-pointer transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
				>
					<ChevronLeft size={24} className="text-gray-600" />
				</button>
				<button
					onClick={goToNext}
					className="absolute right-[-45px] cursor-pointer top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
				>
					<ChevronRight size={24} className="text-gray-600" />
				</button>
			</div>

			<div className="mt-5 max-w-4xl mx-auto flex flex-col items-center justify-center  ">
				<Progress
					percent={currentProgress}
					status={currentProgress >= 100 ? "success" : "active"}
					strokeColor={"oklch(0.723 0.219 149.579)"}
					showInfo={false}
				/>
				<div className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
					{informations.map((_, index) => (
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

export default Informations;
