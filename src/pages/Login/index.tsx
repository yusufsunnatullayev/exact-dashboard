import React from "react";
import { Button, Form, Input, message } from "antd";
import { Building2, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlices";
import { http } from "../../services/http";
import { session } from "../../services/session";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loading, setLoading] = React.useState(false);

	const onFinish = async (values: any) => {
		const { username, password } = values;
		const postData = {
			login: username,
			password: password,
		};
		try {
			setLoading(true);
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
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="absolute w-full h-full bg-gray-100 overflow-hidden">
			<div className="flex flex-col items-center justify-center w-full h-screen relative z-10 mt-[-20px]">
				<div className="flex flex-col items-center gap-5 ">
					<div className="flex items-center justify-center bg-blue-500 rounded-xl p-3">
						<Building2 className="text-white" />
					</div>
					<div className="flex flex-col gap-5 items-center justify-center ">
						<h1 className="text-4xl font-semibold text-gray-800">Login</h1>
						<p className="text-gray-500 text-sm">Kirish uchun, login va parolingizni kiriting!</p>
					</div>
				</div>
				<Form onFinish={onFinish}>
					<div className="flex flex-col mt-8 items-center gap-5 bg-white drop-shadow-2xl p-5 px-10 rounded-2xl">
						<div className="flex flex-col gap-3">
							<Form.Item
								name="username"
								rules={[{ required: true, message: "Login kiritish majburiy!" }]}
							>
								<div className="flex flex-col gap-2 items-start ">
									<span className="text-gray-700  text-sm font-bold">Login</span>
									<Input
										type="text"
										className=" w-[300px] !h-10 border border-gray-200 rounded-md !text-gray-500 "
										placeholder="Login"
										prefix={<User size={24} className="!text-gray-500 mr-2" />}
									/>
								</div>
							</Form.Item>

							<Form.Item
								name="password"
								rules={[{ required: true, message: "Parol kiritish majburiy!" }]}
							>
								<div className="flex flex-col gap-2 items-start ">
									<span className="text-gray-700 text-sm font-bold">Parol</span>

									<Input.Password
										className="!w-[300px] h-10 border border-gray-200 rounded-md !text-gray-500 "
										placeholder="Parol"
										prefix={<Lock size={20} className="!text-gray-500 mr-2" />}
									/>
								</div>
							</Form.Item>
						</div>
						<Button
							type="primary"
							htmlType="submit"
							loading={loading}
							// disabled={loading}
							className="!w-[300px] !h-[40px]  !font-bold hover:!opacity-80 mb-5"
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
