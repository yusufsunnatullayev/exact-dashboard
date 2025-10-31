import React from "react";
import { Button, Form, Input, message } from "antd";
import { Building2, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlices";
import { http } from "../../services/http";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values: any) => {
    const { username, password } = values;
    const postData = {
      employeeCode: username,
      externalEmployeeNumber: password,
    };
    try {
      setLoading(true);
      console.log("Login:", values);
      console.log("Login payload", postData);
      const res = await http.post("/login/log-in", postData);
      console.log(res);
      const { firstName, lastName, accessToken, wareHouse } = res.data.data;

      const user = `${firstName} ${lastName}`;

      localStorage.setItem("whsCode", wareHouse);
      dispatch(login({ token: accessToken, user: user }));
      message.success(
        `Muvaffaqiyatli Login qilindi  ${firstName} ${lastName} !`
      );
      navigate("/dashboard");
    } catch (error) {
      message.error(error.message);
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute w-full h-full bg-gray-50 dark:bg-dark-main overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-screen relative z-10 mt-[-20px]">
        <div className="flex flex-col items-center gap-5 ">
          <div className="flex items-center justify-center bg-blue-600 rounded-xl p-3">
            <Building2 className="text-white" />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center ">
            <h1 className="text-3xl mt-2 font-bold text-gray-800 dark:text-gray-100">
              Hisobingizga kiring
            </h1>
            <p className="text-gray-500 text-sm">
              Panelga kirish uchun ma'lumotlaringizni kiriting
            </p>
          </div>
        </div>
        <Form onFinish={onFinish}>
          <div className="w-[450px] flex flex-col mt-8 items-center bg-white dark:bg-[#1F2937] drop-shadow-2xl p-10 pb-4 rounded-2xl">
            <div className="w-full flex flex-col">
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Email kiritish majburiy!" },
                ]}
              >
                <div className="flex flex-col gap-2 items-start ">
                  <span className="text-gray-700 dark:text-gray-100  text-sm font-medium">
                    Foydalanuvchi nomi
                  </span>
                  <Input
                    type="text"
                    className="!w-full !bg-transparent dark:!text-gray-100 !h-10 !rounded-xl border border-gray-200 !text-gray-500 "
                    placeholder="warehouse manager"
                    prefix={<User size={20} color="gray" className="mr-1" />}
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Parol kiritish majburiy!" },
                ]}
              >
                <div className="flex flex-col gap-2 items-start ">
                  <span className="text-gray-700 dark:text-gray-100 text-sm font-medium">
                    Parol
                  </span>

                  <Input.Password
                    className="!w-full !bg-transparent dark:!text-gray-100 h-10 !rounded-xl border border-gray-200 !text-gray-500 "
                    placeholder="123456"
                    prefix={<Lock size={20} color="gray" className="mr-1" />}
                  />
                </div>
              </Form.Item>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              // disabled={loading}
              className="!w-full !h-[40px] !rounded-xl !bg-blue-600  !font-medium hover:!opacity-80 mb-5"
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
