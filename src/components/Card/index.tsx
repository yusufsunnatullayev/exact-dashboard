import SalesCardIcon from "../../assets/icons/SalesCardIcon";
import { formatNumber } from "../../helpers/formatNumber";
import { switchCurrency } from "../../helpers/formatCurrency";

export default function Card({ name, price, key, currency, icon = <SalesCardIcon /> }: any) {
	return (
		<div
			className="flex flex-col    bg-white p-5 h-[110px]  rounded-lg drop-shadow-lg hover:scale-101 cursor-pointer"
			key={key}
		>
			<div className="flex items-center justify-between">
				<div className="text-sm text-black font-bold ">{name}</div>
				{icon}
			</div>
			<p className="text-2xl text-black font-bold mt-2">
				{formatNumber(price)} {switchCurrency(currency)}
			</p>
		</div>
	);
}
