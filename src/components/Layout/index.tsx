import React, { useEffect, useState } from "react";
import { LayoutProps } from "../../types/global";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import Employees from "../../pages/Employees";
import Informations from "../../pages/Informations";
import { ConfigProvider, theme } from "antd";
import Places from "../../pages/Places";

const Layout: React.FC<LayoutProps> = () => {
  const activeTab = useSelector((state: any) => state.main.activeTab);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode") || "false")
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "employees":
        return <Employees />;
      case "informations":
        return <Informations />;
      case "places":
        return <Places />;
      default:
        return (
          <div className="p-6 text-gray-900 dark:text-gray-100">
            No tab selected
          </div>
        );
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#3276F2",
          colorBgElevated: darkMode ? "#1F2937" : "#FFFFFF",
        },
      }}
    >
      <div
        className={`flex flex-col w-full min-h-screen bg-gray-100 dark:bg-dark-main transition-colors duration-200`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex-1 relative">{renderActiveTab()}</div>
      </div>
    </ConfigProvider>
  );
};

export default Layout;
