import { ReactNode } from "react";

export interface IMenuItem {
	key: string;
	label: string | ReactNode;
	icon?: ReactNode;
	children?: IMenuItem[];
}

export interface LayoutProps {
	children?: ReactNode;
}

export interface IRoute {
	path: string;
	element: ReactNode;
}

export interface AuthState {
	isAuthenticated: boolean;
	user?: string;
	token?: string;
}
export interface MainState {
	activeTab: "employees" | "informations";
	stopTimer: boolean;
}

export interface Filter {
	startDate: string;
	endDate: string;
	whs: string;
	hodim: string;
}

export interface TableColumns {
	title: string;
	dataIndex: string;
	key: string;
	render?: (text: string, record: any) => React.ReactNode;
	filterDropdown?: () => JSX.Element;
	filterIcon?: (filtered: boolean) => React.ReactNode;
}
