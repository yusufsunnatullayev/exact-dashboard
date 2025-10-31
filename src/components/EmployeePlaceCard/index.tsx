import { motion } from "framer-motion";

const EmployeePlaceCard = ({
  item,
  setSelectedEmployee,
  setIsModalOpen,
  color,
}) => {
  // function hexToRgba(hex, alpha = 1) {
  //   if (!hex) return "";

  //   hex = hex.replace("#", "");

  //   if (hex.length === 3) {
  //     hex = hex
  //       .split("")
  //       .map((x) => x + x)
  //       .join("");
  //   }

  //   const r = parseInt(hex.substring(0, 2), 16);
  //   const g = parseInt(hex.substring(2, 4), 16);
  //   const b = parseInt(hex.substring(4, 6), 16);

  //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  // }

  // const colorFromDb = item?.name || "#2d78e0";

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
          backgroundColor: color.bgColor,
          borderColor: color.textColor,
        }}
      >
        <h1
          className="text-sm font-semibold line-clamp-1 text-center"
          style={{ color: color.textColor }}
        >
          {item.employeeName}
        </h1>
        <span className="text-xs" style={{ color: color.textColor }}>
          {item.machineName}
        </span>
        <div
          className="px-2 h-5 rounded-xl flex items-center justify-center mt-2"
          style={{ backgroundColor: color.textColor }}
        >
          <span
            className="text-xs font-semibold text-black"
            style={{ color: color.bgColor }}
          >
            {item.resourseCode}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeePlaceCard;
