import React, { memo, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import ErrorImage from "../../../assets/images/error.png";
import ErrorModalStyle from "./style";
import { useTranslation } from "react-i18next";
import { formatSecondsToMinutesAndSeconds } from "../../../helpers/formatTime";
import { ModalProps } from "../../../types/Modal";

const ErrorModalWithTimer: React.FC<ModalProps> = ({ getRef = () => {}, onConfirm = () => {} }) => {
	const { t } = useTranslation();

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [errorTitle, setErrorTitle] = useState<string>("");
	const [time, setTime] = useState<number>(5);

	useEffect(() => {
		if (isOpenModal) {
			const timer = setInterval(() => {
				setTime(time - 1);
				if (time === 0) {
					setIsOpenModal(false);
					setTime(5);
				}
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [isOpenModal, time]);

	useEffect(() => {
		const ref: any = {
			open: (t: string) => {
				setIsOpenModal(true);
				setErrorTitle(t);
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
			closeIcon={<span className="text-2xl">×</span>}
		>
			<ErrorModalStyle>
				<div className="card">
					<div className="flex justify-center">
						<img src={ErrorImage} alt="error image" className="img" />
					</div>
					<p className="text-gray-500 text-sm mt-2">
						{t("wait_message", { time: formatSecondsToMinutesAndSeconds(time) })}
					</p>
					<h2 className="title">{errorTitle}</h2>
					<div className="centerCard">
						<Button
							type="primary"
							danger
							className="bg-red-600 w-[100px] text-sm h-12 text-white"
							onClick={() => {
								onConfirm();
								setIsOpenModal(false);
							}}
						>
							{t("understand")}
						</Button>
					</div>
				</div>
			</ErrorModalStyle>
		</Modal>
	);
};

export default memo(ErrorModalWithTimer);
