import React from "react";
import { Calendar, CircleCheckBig, Info, Timer, TriangleAlert } from "lucide-react";
import { InformationData, InformationsProps } from "../../types/api/Informations";

// Single Employee Summary Card Component
const InformationsCard: React.FC = ({ data }: { data: InformationData }) => {
	const switchTypeBg = (type: string) => {
		switch (type) {
			case "Xavfsizlik ogohlantirishni":
				return "bg-red-100";
			case "Eslatma":
				return "bg-yellow-100";
			case "Muvaffaqiyat":
				return "bg-green-100";
			case "Ma'lumot":
				return "bg-blue-100";
			default:
				return "bg-blue-100";
		}
	};

	const switchTypeColor = (type: string) => {
		switch (type) {
			case "Xavfsizlik ogohlantirishni":
				return "text-red-600";
			case "Eslatma":
				return "text-yellow-600";
			case "Muvaffaqiyat":
				return "text-green-600";
			case "Ma'lumot":
				return "text-blue-600";
			default:
				return "text-blue-600";
		}
	};

	const switchTypeBgText = (type: string) => {
		switch (type) {
			case "Xavfsizlik ogohlantirishni":
				return "bg-red-200";
			case "Eslatma":
				return "bg-yellow-200";
			case "Muvaffaqiyat":
				return "bg-green-200";
			case "Ma'lumot":
				return "bg-blue-200";
			default:
				return "bg-blue-200";
		}
	};
	const switchTypeTitle = (type: string) => {
		switch (type) {
			case "Xavfsizlik ogohlantirishni":
				return "text-red-600";
			case "Eslatma":
				return "text-yellow-600";
			case "Muvaffaqiyat":
				return "text-green-600";
			case "Ma'lumot":
				return "text-blue-600";
			default:
				return "text-blue-600";
		}
	};

	const switchTypeIcon = (type: string) => {
		switch (type) {
			case "Xavfsizlik ogohlantirishni":
				return <TriangleAlert />;
			case "Eslatma":
				return <Info />;
			case "Muvaffaqiyat":
				return <CircleCheckBig />;
			case "Ma'lumot":
				return <Info />;
			default:
				return <TriangleAlert />;
		}
	};

	return (
		<div className="relative  max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
			<div className={`px-7 py-8 w-full ${switchTypeBg(data.type)}`}>
				<div className="flex items-center justify-between gap-5 w-full">
					<div className={`${switchTypeBgText(data.type)} p-2 rounded-2xl`}>
						<span className={`${switchTypeColor(data.type)} text-sm	`}>{data.type}</span>
					</div>
					<div
						className={`${switchTypeBgText(data.type)} p-2 rounded-2xl ${switchTypeColor(data.type)} flex gap-1 items-center`}
					>
						{switchTypeIcon(data.type)}
						<span className=" text-sm">{data.danger}</span>
					</div>
				</div>

				<div className="flex items-center gap-5 mt-10">
					<h1 className={`text-4xl ${switchTypeTitle(data.type)} font-semibold`}>{data.title}</h1>
				</div>

				<div className="mt-5">
					<span className="text-gray-500 text-lg">{data.message}</span>
				</div>

				<div className="flex items-center gap-1 mt-5">
					<span className="font-semibold">Author:</span>
					<span>{data.author}</span>
					{/* <span className="text-gray-500"> (Texnik xizmat)</span> */}
				</div>

				<div className="flex items-center gap-1 mt-5">
					<span className="font-semibold">Tags:</span>
				</div>
				<div className="flex items-center gap-3 mt-5">
					{data.tags.map((tag, index) => (
						<div key={index} className="bg-sky-100 p-2 rounded-2xl">
							<span className="text-gray-700 text-sm">{tag}</span>
						</div>
					))}
				</div>

				<div className=" border-b-1 border-b-gray-300 mt-5"></div>

				<div className="flex items-center gap-5 mt-5">
					<span className="flex items-center gap-1 text-gray-500">
						<Calendar size={16} />
						<span className=" ml-2">{data.date}</span>
					</span>
					<span className="flex items-center gap-1 text-gray-500">
						<Timer size={16} />
						<span className=" ml-2">{data.time}</span>
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

export default InformationsCard;
