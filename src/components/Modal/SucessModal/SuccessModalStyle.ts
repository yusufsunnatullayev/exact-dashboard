import styled from "styled-components";

const SuccessModalStyle = styled.div`
	.none {
		display: none;
	}
	.modal {
		background-color: #00000077;
		position: fixed;
		top: 0%;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btnY {
		padding: 10px 30px;
		border-radius: 5px;
		border: 3px solid green;
		color: green;
		transition: 0.2s;
		font-weight: 600;
		font-size: 17px;
	}
	.btnY:hover {
		background-color: green;
		color: white;
	}
	.card {
		background-color: #ffffff;
		text-align: center;
		padding: 10px;
		.img {
			width: 150px;
		}
		.title {
			margin: 0;
			font-size: 17px;
		}
		.centerCard {
			display: flex;
			justify-content: center;
			padding: 0 50px;
			margin-top: 20px;
		}
		.btnN {
			padding: 10px 30px;
			border-radius: 5px;
			border: 3px solid yellow;
			color: black;
			transition: 0.2s;
			font-weight: 600;
			font-size: 17px;
			background-color: yellow;
		}
		.img {
			width: 100px;
			object-fit: cover;
		}
	}
`;
export default SuccessModalStyle;
