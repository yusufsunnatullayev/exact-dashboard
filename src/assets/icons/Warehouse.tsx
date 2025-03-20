import * as React from "react";
const WhsIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-building h-5 w-5"
		{...props}
	>
		<rect width={16} height={20} x={4} y={2} rx={2} ry={2} />
		<path d="M9 22v-4h6v4" />
		<path d="M8 6h.01" />
		<path d="M16 6h.01" />
		<path d="M12 6h.01" />
		<path d="M12 10h.01" />
		<path d="M12 14h.01" />
		<path d="M16 10h.01" />
		<path d="M16 14h.01" />
		<path d="M8 10h.01" />
		<path d="M8 14h.01" />
	</svg>
);
export default WhsIcon;
