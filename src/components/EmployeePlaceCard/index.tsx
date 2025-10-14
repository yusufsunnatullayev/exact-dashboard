import { motion } from "framer-motion";

const EmployeePlaceCard = ({ item, setSelectedEmployee, setIsModalOpen }) => {
  return (
    <motion.div
      className="relative p-1 rounded-2xl cursor-pointer group"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Blue border wrapper */}
      <div className="absolute inset-0 border-3 border-transparent rounded-2xl group-hover:border-blue-600 transition-colors duration-300 pointer-events-none" />

      {/* Actual Card */}
      <div
        onClick={() => {
          setSelectedEmployee(item);
          setIsModalOpen(true);
        }}
        className="relative h-[100px] flex flex-col items-center justify-center border-2 rounded-xl"
        style={{
          backgroundColor: item.name,
          borderColor: item.color2,
        }}
      >
        <h1 className="text-sm font-semibold line-clamp-1 text-center">
          {item.employeeName}
        </h1>
        <span className="text-xs text-gray-600">{item.machineName}</span>
        <div
          className="w-9 h-5 rounded-xl flex items-center justify-center mt-2"
          style={{ backgroundColor: `${item.name}50` }}
        >
          <span className="text-xs font-semibold" style={{ color: item.name }}>
            {item.resourseCode}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeePlaceCard;
