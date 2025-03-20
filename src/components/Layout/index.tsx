import React from "react";
import { LayoutProps } from "../../types/global";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import Employees from "../../pages/Employees";
import Informations from "../../pages/Informations";

const Layout: React.FC<LayoutProps> = () => {
	const activeTab = useSelector((state: any) => state.main.activeTab);

	const renderActiveTab = () => {
		switch (activeTab) {
			case "employees":
				return <Employees />;
			case "informations":
				return <Informations />;
			default:
				return <div>No tab selected</div>;
		}
	};

	return (
		<div className="flex flex-col w-full min-h-screen bg-gray-100">
			<Navbar />
			<div className="flex-1  relative">{renderActiveTab()}</div>
		</div>
	);
};

export default Layout;
