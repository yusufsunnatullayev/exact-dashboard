import { memo, useEffect, useState } from "react";
import * as React from "react";
import { Modal } from "antd";
import { ModalProps } from "../../../types/Modal";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/authSlices";
import ArrowIcon from "../../../assets/icons/arrow-right-solid.svg";

const ExitModal: React.FC<ModalProps> = ({ getRef = () => {} }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const ref: any = {
			open: (t?: string) => {
				setIsOpenModal(true);
			},
			close: () => setIsOpenModal(false),
		};
		getRef(ref);
	}, [getRef]);

	return (
		<Modal
			open={isOpenModal}
			onCancel={() => setIsOpenModal(false)}
			footer={null}
			centered
			closeIcon={<span style={{ fontSize: "1.5rem" }}>×</span>}
		>
			<div className="flex justify-center ">
				<div className="flex items-center rounded-full bg-gray-200 p-3">
					<img src={ArrowIcon} alt="arrow-right" className="w-[40px] h-[40px] text-white" />
				</div>
				{/* <LogOut className="ml-3 text-sm text-white" /> */}
			</div>
			<h2 className="font-semibold  mt-5 text-lg text-center !font-[Inter]">
				Chiqishni tasdiqlaysizmi?
			</h2>
			<div className="flex justify-center items-center gap-10 mt-10">
				<button
					className="border border-gray-400  w-[180px] text-sm !h-12 !text-[#1F2937] hover: cursor-pointer rounded-lg"
					onClick={() => {
						setIsOpenModal(false);
						dispatch(logout());
						navigate("/login");
					}}
				>
					Xa
				</button>
				<button
					className="!bg-[#1F2937] w-[180px] text-sm !h-12 !text-white hover:opacity-80 cursor-pointer rounded-lg"
					onClick={() => {
						setIsOpenModal(false);
					}}
				>
					Yo'q
				</button>
			</div>
		</Modal>
	);
};

export default memo(ExitModal);
