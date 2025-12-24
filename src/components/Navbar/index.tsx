import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExitModal from "../Modal/ExitModal";
import { Select } from "antd";
import WhsIcon from "../../assets/icons/Warehouse";
import {
  BellRing,
  Calendar1,
  LayoutDashboard,
  LogOut,
  Moon,
  Pause,
  Play,
  Sun,
  Users,
} from "lucide-react";
import {
  setActiveTab as setActiveTabRedux,
  setStopTimer as setStopTimerRedux,
} from "../../store/slices/mainSlices";
import Time from "../Time/index";
import { useWarehouses } from "../../services/warehouses/queries";
import { useWarehouseDepartments } from "../../services/warehouse-departments/queries";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMonth: string;
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
  selectedWhs: string;
  setSelectedWhs: React.Dispatch<React.SetStateAction<string>>;
  selectedWhsDepartment: string;
  setSelectedWhsDepartment: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: number;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
}

const monthOptions = [
  {
    value: "Barcha oylar",
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Barcha oylar</span>
      </div>
    ),
  },
  {
    value: 1,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Yanvar</span>
      </div>
    ),
  },
  {
    value: 2,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Fevral</span>
      </div>
    ),
  },
  {
    value: 3,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Mart</span>
      </div>
    ),
  },
  {
    value: 4,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Aprel</span>
      </div>
    ),
  },
  {
    value: 5,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>May</span>
      </div>
    ),
  },
  {
    value: 6,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Iyun</span>
      </div>
    ),
  },
  {
    value: 7,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Iyul</span>
      </div>
    ),
  },
  {
    value: 8,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Avgust</span>
      </div>
    ),
  },
  {
    value: 9,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Sentabr</span>
      </div>
    ),
  },
  {
    value: 10,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Oktabr</span>
      </div>
    ),
  },
  {
    value: 11,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Noyabr</span>
      </div>
    ),
  },
  {
    value: 12,
    label: (
      <div className="flex items-center gap-2">
        <Calendar1 className="w-4 h-4" />
        <span>Dekabr</span>
      </div>
    ),
  },
];

const tabs = [
  {
    id: 1,
    title: "Xodimlar",
    icon: <Users size={16} />,
    value: "employees",
  },
  {
    id: 2,
    title: "E'lonlar",
    icon: <BellRing size={16} />,
    value: "informations",
  },
  {
    id: 3,
    title: "Joylar",
    icon: <LayoutDashboard size={16} />,
    value: "places",
  },
];

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  selectedMonth,
  setSelectedMonth,
  selectedWhs,
  setSelectedWhs,
  selectedWhsDepartment,
  setSelectedWhsDepartment,
  selectedYear,
  setSelectedYear,
}) => {
  const exitRef: any = useRef(null);
  const { activeTab: activeTabRedux, stopTimer: stopTimerRedux } = useSelector(
    (state: any) => state.main
  );
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<string>(activeTabRedux);
  const [stopTimer, setStopTimer] = useState<boolean>(stopTimerRedux);
  const [yearOptions, setYearOptions] = useState([]);
  const [whsOptions, setWhsOptions] = useState([
    {
      value: "Barcha omborlar",
      label: (
        <div className="flex items-center gap-2">
          <WhsIcon className="w-4 h-4" />
          <span>Barcha omborlar</span>
        </div>
      ),
    },
  ]);
  const [whsOptionsDepartments, setWhsOptionsDepartments] = useState([
    {
      value: "Barcha omborlar",
      label: (
        <div className="flex items-center gap-2">
          <WhsIcon className="w-4 h-4" />
          <span>Barcha omborlar</span>
        </div>
      ),
    },
  ]);

  const { data: warehouses } = useWarehouses();
  const { data: whsDepartments } = useWarehouseDepartments();

  useEffect(() => {
    const date = new Date();

    for (let year = 2020; year <= date.getFullYear(); year++) {
      setYearOptions((prev) => [
        ...prev,
        {
          value: year,
          label: (
            <div className="flex items-center gap-2">
              <Calendar1 className="w-4 h-4" />
              <span>{year}</span>
            </div>
          ),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    setActiveTab(activeTabRedux);
  }, [activeTabRedux]);

  useEffect(() => {
    if (!warehouses?.data) return;

    const mappedOptions = warehouses.data.map((item) => ({
      value: item.whsCode,
      label: (
        <div className="flex items-center gap-2">
          <WhsIcon className="w-4 h-4" />
          <span>{item.whsCode}</span>
        </div>
      ),
    }));

    setWhsOptions((prev) => [...prev, ...mappedOptions]);
  }, [warehouses]);

  useEffect(() => {
    if (!whsDepartments?.data) return;

    const mappedOptions = whsDepartments.data.map((item) => ({
      value: item.whsCode,
      label: (
        <div className="flex items-center gap-2">
          <WhsIcon className="w-4 h-4" />
          <span>{item.whsCode}</span>
        </div>
      ),
    }));

    setWhsOptionsDepartments((prev) => [...prev, ...mappedOptions]);
  }, [whsDepartments]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    dispatch(setActiveTabRedux(tab));
  };

  const handleStopTimerChange = () => {
    setStopTimer(!stopTimer);
    dispatch(setStopTimerRedux(!stopTimer));
  };

  return (
    <nav className="bg-white dark:bg-dark-main w-full shadow sticky top-0 z-50">
      <div className="flex justify-between items-center px-5 py-2">
        {/* Select 🚩 */}
        <div className="w-[180px] hover:cursor-pointer rounded-full">
          {activeTab === "employees" && (
            <div className="flex items-center gap-2">
              <Select
                defaultValue="Warehouse"
                style={{ width: "100%" }}
                value={selectedMonth}
                onChange={(value) => setSelectedMonth(value)}
                placeholder="Select a month"
                className="custom-select"
                classNames={{
                  popup: {
                    root: "!w-[220px]",
                  },
                }}
                options={monthOptions}
              />
              <Select
                defaultValue="Warehouse"
                style={{ width: "100%" }}
                value={selectedWhsDepartment}
                onChange={(value) => setSelectedWhsDepartment(value)}
                placeholder="Select a warehouse"
                className="custom-select"
                classNames={{
                  popup: {
                    root: "!w-[220px]",
                  },
                }}
                options={whsOptionsDepartments}
              />
              <Select
                defaultValue={new Date().getFullYear()}
                style={{ width: "100%" }}
                value={selectedYear}
                onChange={(value) => setSelectedYear(Number(value))}
                placeholder="Select a year"
                className="custom-select"
                classNames={{
                  popup: {
                    root: "!w-[220px]",
                  },
                }}
                options={yearOptions}
              />
            </div>
          )}
          {activeTab === "informations" && (
            <Select
              defaultValue="Warehouse"
              style={{ width: "100%" }}
              value={selectedWhs}
              onChange={(value) => setSelectedWhs(value)}
              placeholder="Select a warehouse"
              className="custom-select"
              classNames={{
                popup: {
                  root: "!w-[220px]",
                },
              }}
              options={whsOptions}
            />
          )}
        </div>
        {/* Navigation 🚩 */}
        <div className="w-[370px] flex justify-center gap-1 bg-[#F3F4F6] dark:bg-[#1A2331] py-1 rounded-3xl">
          {tabs.map((item) => (
            <button
              key={item.id}
              className={`${activeTab === item.value ? "bg-white dark:bg-[#374151] shadow hover:bg-[#F3F4F6] dark:hover:bg-gray-700" : "bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800"} px-5 py-[10px] rounded-full transition-all duration-200 cursor-pointer`}
              onClick={() => handleTabChange(item.value)}
            >
              <span
                className={`flex items-center gap-2 cursor-pointer ${activeTab === item.value ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-100 hover:text-black dark:hover:text-gray-100"}`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Action btns 🚩 */}
        <div className="flex gap-3 items-center">
          <Time />
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1A2331]"
            onClick={handleStopTimerChange}
          >
            <span>
              {stopTimer ? (
                <Pause size={15} color="gray" />
              ) : (
                <Play size={15} color="gray" />
              )}
            </span>
          </div>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1A2331]"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span>
              {darkMode ? (
                <Sun size={15} color="gray" />
              ) : (
                <Moon size={15} color="gray" />
              )}
            </span>
          </div>
          <button
            onClick={() => exitRef.current.open()}
            className="w-7 h-7 rounded-full flex items-center group justify-center hover:bg-gray-100 cursor-pointer dark:hover:bg-[#1A2331] transition-all duration-200"
          >
            <LogOut size={15} color="gray" className="hover:text-black" />
          </button>
        </div>
      </div>
      <ExitModal
        getRef={(r) => {
          exitRef.current = r;
        }}
      />
    </nav>
  );
};

export default Navbar;
