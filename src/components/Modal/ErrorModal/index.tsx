import React, { memo, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import ErrorImage from "../../../assets/images/error.png";
import ErrorModalStyle from "./ErrorModalStyle";
import { useTranslation } from "react-i18next";
import { ModalProps } from "../../../types/Modal";

const ErrorModal: React.FC<ModalProps> = ({ getRef = () => {}, onConfirm = () => {} }) => {
	const { t } = useTranslation();

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [errorTitle, setErrorTitle] = useState<string>("");

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
			closeIcon={<span style={{ fontSize: "1.5rem" }}>×</span>}
		>
			<ErrorModalStyle>
				<div className="card">
					<div className="flex justify-center">
						<img src={ErrorImage} alt="error image" className="img" />
					</div>
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

export default memo(ErrorModal);
