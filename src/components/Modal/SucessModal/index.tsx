import React, { memo, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import SuccessImage from "../../../assets/images/success.png";
import SuccessModalStyle from "./SuccessModalStyle";
import { useTranslation } from "react-i18next";
import { ModalProps } from "../../../types/Modal";

const SuccessModal: React.FC<ModalProps> = ({ getRef = () => {}, onConfirm = () => {} }) => {
	const { t } = useTranslation();
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [successTitle, setSuccessTitle] = useState<string>(t("successDone"));

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

	return (
		<Modal
			open={isOpenModal}
			onCancel={() => setIsOpenModal(false)}
			footer={null}
			centered
			closeIcon={<span className="text-2xl">×</span>}
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

					<div className="centerCard">
						<Button
							className="w-[100px] text-sm h-12 bg-green-600 text-white "
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

export default memo(SuccessModal);
