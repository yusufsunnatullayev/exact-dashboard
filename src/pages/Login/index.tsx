import "../../components/LoginBackground/style.css";
import BackgroundAnimation from "../../components/LoginBackground";
import ShopIcon3 from "../../assets/icons/Shop3";
import { Button, Form, message } from "antd";
import { Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlices";
import { http } from "../../services/http";
import { config } from "../../config";
import { session } from "../../services/session";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onFinish = async (values: any) => {
		const { username, password } = values;
		const postData = {
			login: username,
			password: password,
		};
		try {
			console.log("Login:", values);
			const { data } = await http.post("accounts/login", postData);
			const { employee, token } = data.data;

			const user = `${employee.firstName} ${employee.lastName}`;

			dispatch(login({ token: token, user: user }));
			message.success(`Muvaffaqiyatli Login qilindi  ${employee.firstName} ${employee.lastName} !`);
			navigate("/dashboard");
			session.set(token);
		} catch (error) {
			message.error(error.message);
			console.error("Login error:", error);
		}
	};

	return (
		<div className="absolute w-full h-full bg-[#1c2331] overflow-hidden">
			<BackgroundAnimation />
			<div className="flex flex-col items-center justify-center w-full h-screen relative z-10">
				<ShopIcon3 />
				<Form onFinish={onFinish}>
					<div className="flex flex-col mt-16 items-center gap-14">
						<div className="flex flex-col gap-5">
							<Form.Item
								name="username"
								rules={[{ required: true, message: "Login kiritish majburiy!" }]}
							>
								<div className="flex items-center bg-[#1c2331] w-[300px] p-2 border border-white rounded-md">
									<User size={20} className="!text-gray-300 mr-2" />
									<input
										type="text"
										placeholder="Login"
										className="bg-transparent text-gray-300 font-light outline-none flex-1"
									/>
								</div>
							</Form.Item>

							<Form.Item
								name="password"
								rules={[{ required: true, message: "Parol kiritish majburiy!" }]}
							>
								<div className="flex items-center bg-[#1c2331] w-[300px] p-2 border border-white rounded-md">
									<Lock size={20} className="!text-gray-300 mr-2" />
									<input
										type="password"
										placeholder="Parol"
										className="bg-transparent text-gray-300 font-light outline-none flex-1"
									/>
								</div>
							</Form.Item>
						</div>
						<Button
							type="default"
							htmlType="submit"
							className="!w-[300px] !h-[50px] !text-[#1F2937] !font-bold !bg-white hover:!opacity-80"
						>
							Kirish
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Login;
