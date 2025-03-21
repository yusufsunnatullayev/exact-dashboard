export interface InformationData {
	type: string;
	message: string;
	title: string;
	danger: string;
	author: string;
	tags: string[];
	date: string;
	time: string;
}

export interface InformationsProps {
	data: InformationData[];
	loading?: boolean;
}
