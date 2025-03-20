import styled from "styled-components";

const ErrorModalStyle = styled.div`
	.card {
		text-align: center;
	}
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
		border: 3px solid red;
		color: #ffffff;
		transition: 0.2s;
		font-weight: 600;
		font-size: 17px;
		background-color: red;
	}
`;
export default ErrorModalStyle;
