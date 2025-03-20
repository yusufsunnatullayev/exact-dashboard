import * as React from "react";
const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width={23}
		height={22}
		viewBox="0 0 23 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M17.9902 10.0947H5.00024C3.97536 10.0947 3.14453 10.9135 3.14453 11.9236V18.3245C3.14453 19.3346 3.97536 20.1534 5.00024 20.1534H17.9902C19.0151 20.1534 19.8459 19.3346 19.8459 18.3245V11.9236C19.8459 10.9135 19.0151 10.0947 17.9902 10.0947Z"
			stroke="white"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6.85645 10.095V6.43735C6.85645 5.22475 7.34522 4.06182 8.21526 3.20438C9.08529 2.34694 10.2653 1.86523 11.4957 1.86523C12.7261 1.86523 13.9061 2.34694 14.7762 3.20438C15.6462 4.06182 16.135 5.22475 16.135 6.43735V10.095"
			stroke="white"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default LockIcon;
