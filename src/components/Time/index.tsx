import { Timer } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Time() {
	const [timer, setTimer] = useState<string>("");

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-3xl text-blue-600">
			<span>
				<Timer size={20} />
			</span>
			<span className="text-sm  ">{timer || "00:00:00"}</span>
		</div>
	);
}
