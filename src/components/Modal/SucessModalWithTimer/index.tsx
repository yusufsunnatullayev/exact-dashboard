import React, { memo, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import SuccessImage from "../../../assets/images/success.png";
import SuccessModalStyle from "./style";
import { useTranslation } from "react-i18next";
import { formatSecondsToMinutesAndSeconds } from "../../../helpers/formatTime";
import { ModalProps } from "../../../types/Modal";

const SuccessModalWithTimer: React.FC<ModalProps> = ({
	getRef = () => {},
	onConfirm = () => {},
}) => {
	const { t } = useTranslation();

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [successTitle, setSuccessTitle] = useState<string>(t("successDone"));
	const [time, setTime] = useState<number>(5);

	// Handle the ref to open and close the modal
	useEffect(() => {
		const ref = {
			open: (t: string) => {
				setIsOpenModal(true);
				setSuccessTitle(t);
			},
			close: () => setIsOpenModal(false),
		};
		getRef(ref);
	}, [getRef]);

	useEffect(() => {
		if (isOpenModal) {
			const timer = setInterval(() => {
				setTime((prevTime) => {
					if (prevTime === 1) {
						setIsOpenModal(false);
						return 5; // Reset time
					}
					return prevTime - 1;
				});
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [isOpenModal]);

	return (
		<Modal
			open={isOpenModal}
			onCancel={() => {
				setIsOpenModal(false);
				setTime(5);
			}}
			footer={null}
			centered
			closeIcon={<span style={{ fontSize: "1.5rem" }}>×</span>}
		>
			<SuccessModalStyle>
				<div className="card">
					<div className="flex justify-center">
						<img src={SuccessImage} alt="success" className="w-[100px]" />
					</div>

					<h2 className="font-semibold mt-5 text-lg">
						{successTitle}
						{"!"}
					</h2>
					<p className="text-gray-500 text-sm mt-2">
						{t("wait_message", { time: formatSecondsToMinutesAndSeconds(time) })}
					</p>

					<div className="centerCard">
						<Button
							className="w-[100px] text-sm h-12 bg-green-600 text-white"
							onClick={() => {
								onConfirm();
								setIsOpenModal(false);
							}}
						>
							{t("understand")}
						</Button>
					</div>
				</div>
			</SuccessModalStyle>
		</Modal>
	);
};

export default memo(SuccessModalWithTimer);
