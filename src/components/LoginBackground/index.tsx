import { motion } from "framer-motion";
import "./style.css";

const BackgroundAnimation = () => {
	return (
		<div className="absolute w-full h-full bg-[#1c2331] overflow-hidden">
			<motion.div className="absolute w-[300px] h-[300px] left-[-20px] bottom-[-100px] bg-[#2E3B51] rounded-tr-full border-[40px] border-[#2E3B51] opacity-50" />
			<motion.div className="absolute w-[500px] h-[500px] left-[-60px] bottom-[-150px] rounded-tr-full border-[60px] border-[#2E3B51] opacity-50" />

			<div className="absolute top-0 right-[-150px]  opacity-50 ">
				<svg
					width="976"
					height="832"
					viewBox="0 0 976 832"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M303.105 146.128C143.179 161.226 34.3991 42.3333 0 -19L1019 -14.8718V832H905.188C552.784 787.18 612.108 608.487 685.82 524.744C728.868 465.966 806.708 324.349 773.685 228.103C732.406 107.795 503.013 127.256 303.105 146.128Z"
						fill="#2E3B51"
					/>
				</svg>
			</div>
		</div>
	);
};

export default BackgroundAnimation;
