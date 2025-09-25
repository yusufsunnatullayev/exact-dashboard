import { useState } from "react";
import EmployeePlaceCard from "../../components/EmployeePlaceCard";
import { employees } from "../../helpers/constants";
import EmployeePlaceDetailModal from "../../components/EmployeePlaceDetailModal";

const Places = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto py-10 flex flex-col gap-10">
      {/* Head Content 🚩 */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-blue-600">
          Ombor xodimlari o'tirish joylari
        </h1>
        <p className="text-base font-medium text-gray-500 dark:text-gray-200">
          Barcha 35 ta ombor xodimlarining o'tirish joylari va belgilangan
          pozitsiyalari
        </p>
      </div>
      {/* Main Content 🚩 */}
      <div className="w-full p-5 rounded-xl shadow bg-white dark:bg-[#1F2937] border border-white dark:border-gray-600 flex flex-col gap-5">
        <h1 className="text-xl font-semibold dark:text-gray-100">
          Ombor xodimlari o'tirish joylari xaritasi
        </h1>
        <div className="w-full grid grid-cols-8">
          {employees.map((item) => (
            <EmployeePlaceCard
              key={item.id}
              item={item}
              setIsModalOpen={setIsModalOpen}
              setSelectedEmployee={setSelectedEmployee}
            />
          ))}
        </div>
      </div>
      <EmployeePlaceDetailModal
        item={selectedEmployee}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Places;
