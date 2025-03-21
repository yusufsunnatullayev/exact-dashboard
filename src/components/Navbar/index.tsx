import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExitModal from "../Modal/ExitModal";
import { Select } from "antd";
import WhsIcon from "../../assets/icons/Warehouse";
import { BellRing, LogOut, Pause, Play, Users } from "lucide-react";
import {
	setActiveTab as setActiveTabRedux,
	setStopTimer as setStopTimerRedux,
} from "../../store/slices/mainSlices";
import Time from "../Time/index";

const Navbar: React.FC = () => {
	const exitRef: any = useRef(null);
	const { activeTab: activeTabRedux, stopTimer: stopTimerRedux } = useSelector(
		(state: any) => state.main
	);
	const dispatch = useDispatch();

	const [activeTab, setActiveTab] = useState<string>(activeTabRedux);
	const [warehouses, setWarehouses] = useState<string>("ishlab_chiqarish");
	const [stopTimer, setStopTimer] = useState<boolean>(stopTimerRedux);

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
		dispatch(setActiveTabRedux(tab));
	};

	const handleStopTimerChange = () => {
		setStopTimer(!stopTimer);
		dispatch(setStopTimerRedux(!stopTimer));
	};

	return (
		<div className="bg-white w-full drop-shadow-xl sticky top-0 z-50">
			<div className="flex justify-between items-center px-5 pb-3 pt-4">
				<div className="w-[200px] hover:cursor-pointer hover:bg-blue-100 rounded-full">
					<Select
						defaultValue="Warehouse"
						style={{ width: "100%" }}
						value={warehouses}
						onChange={(value) => setWarehouses(value)}
						placeholder="Select a warehouse"
						className="!text-blue-600"
						options={[
							{
								value: "ishlab_chiqarish",
								label: (
									<div className="flex items-center gap-2">
										<WhsIcon />
										<span>Ishlab chiqarish</span>
									</div>
								),
							},
							{
								value: "logistika",
								label: (
									<div className="flex items-center gap-2">
										<WhsIcon />
										<span>Logistika</span>
									</div>
								),
							},
							{
								value: "ofis",
								label: (
									<div className="flex items-center gap-2">
										<WhsIcon />
										<span>Ofis</span>
									</div>
								),
							},
						]}
					/>
				</div>
				<div className="flex gap-2 ">
					<button
						className={`${activeTab === "employees" ? "bg-blue-600 hover:bg-blue-700" : "bg-white hover:bg-blue-100"} px-5 py-3 rounded-full transition-all duration-200 cursor-pointer`}
						onClick={() => handleTabChange("employees")}
					>
						<span
							className={`flex items-center gap-2 cursor-pointer ${activeTab === "employees" ? "text-white" : "text-blue-600"}`}
						>
							<Users size={16} />
							<span className="text-sm">Hodimlar</span>
						</span>
					</button>
					<button
						className={`${activeTab === "informations" ? "bg-blue-600 hover:bg-blue-700" : "bg-white hover:bg-blue-100"} px-5 py-3 rounded-full cursor-pointer  transition-all duration-200`}
						onClick={() => handleTabChange("informations")}
					>
						<span
							className={`flex items-center gap-2 ${activeTab === "informations" ? "text-white" : "text-blue-600"}`}
						>
							<BellRing size={16} />
							<span className="text-sm">E'lon va habarlar</span>
						</span>
					</button>
				</div>

				<div className="flex gap-5">
					<Time />
					<div
						className="flex items-center gap-2 cursor-pointer hover:bg-blue-100 px-3 py-2 rounded-3xl text-blue-600"
						onClick={handleStopTimerChange}
					>
						<span>{stopTimer ? <Pause size={20} /> : <Play size={20} />}</span>
					</div>
					<button
						onClick={() => exitRef.current.open()}
						className="hover:bg-blue-100 px-5 py-2 rounded-full cursor-pointer transition-all duration-200"
					>
						<span className="flex items-center gap-2  text-blue-600">
							<LogOut size={16} /> <span className="text-sm">Chiqish</span>
						</span>
					</button>
				</div>
			</div>
			<ExitModal
				getRef={(r) => {
					exitRef.current = r;
				}}
			/>
		</div>
	);
};

export default Navbar;
