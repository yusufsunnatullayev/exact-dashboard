import React from "react";
import { EmployeeSummaryProps } from "../../types/Employees";
import { Calendar, Timer, TriangleAlert } from "lucide-react";

// Single Employee Summary Card Component
const Informar: React.FC<EmployeeSummaryProps> = ({
	employeeName,
	role,
	department,
	date,
	resources,
	targetQuantity = 1500,
	proggresStart = 0,
}) => {

		const switchTypeBg = (className:string) => {
			
		}

	return (

		<div className="relative max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
			<div className="px-7 py-8 bg-red-100 w-full">
				<div className="flex items-center justify-between gap-5 w-full">
					<div className="bg-red-200 p-2 rounded-2xl">
						<span className="text-red-700 text-sm">Xavfsizlik ogohlantirishni</span>
					</div>
					<div className="bg-red-200 p-2 rounded-2xl text-red-700 flex gap-3 items-center">
						<TriangleAlert />
						<span className=" text-sm">Yuqori</span>
					</div>
				</div>

				<div className="flex items-center gap-5 mt-10">
					<h1 className="text-4xl text-red-600 font-semibold">
						Diqqat! 3-zonada texnik xizmat ko'rsatilmoqda. Iltimos, hududdan uzoqroq bo'ling
					</h1>
				</div>

				<div className="mt-5">
					<span className="text-gray-500 text-lg">
						Texnik xizmat ko'rsatish jarayoni taxminan 2 soat davom etadi. Barcha xodimlar
						xavfsizlik qoidalariga qat'iy rioya qilishlari shart.
					</span>
				</div>

				<div className="flex items-center gap-1 mt-5">
					<span className="font-semibold">Author:</span>
					<span>Dilshod Karimov</span>
					<span className="text-gray-500"> (Texnik xizmat)</span>
				</div>

				<div className="flex items-center gap-1 mt-5">
					<span className="font-semibold">Tags:</span>
				</div>
				<div className="flex items-center gap-3 mt-5">
					<span className="bg-sky-100 p-2 text-sm rounded-2xl text-gray-800">Safety</span>
					<span className="bg-sky-100 p-2 text-sm rounded-2xl text-gray-800">Maintenance</span>
					<span className="bg-sky-100 p-2 text-sm rounded-2xl text-gray-800">Alert</span>
				</div>

				<div className=" border-b-1 border-b-gray-300 mt-5"></div>

				<div className="flex items-center gap-5 mt-5">
					<span className="flex items-center gap-1 text-gray-500">
						<Calendar size={16} />
						<span className=" ml-2">01.03.2025</span>
					</span>
					<span className="flex items-center gap-1 text-gray-500">
						<Timer size={16} />
						<span className=" ml-2">10:15:00</span>
					</span>
				</div>
			</div>

			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: `url(
						"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
					)`,
					backgroundSize: "30px 30px",
				}}
			/>
		</div>
	);
};

export default Informar;
