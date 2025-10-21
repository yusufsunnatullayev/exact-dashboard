import React from "react";
import { EmployeeSummaryProps } from "../../types/Employees";
import { formatNumber } from "../../helpers/formatNumber";
import { translateMonthToUzbek } from "../../helpers/translateMonth";

// Single Employee Summary Card Component
const EmployeeSummaryCard: React.FC<EmployeeSummaryProps> = ({
  firstName,
  lastName,
  oy_nomi,
  detailedInformation,
  targetQuantity = 1500,
  proggresStart = 0,
}) => {
  const totalQuantity = detailedInformation?.reduce(
    (sum, resource) => sum + Number(resource.work_orders_completed),
    0
  );
  const totalCost = detailedInformation?.reduce((sum, resource) => {
    // if (typeof resource.revenue !== "number") {
    //   return resource.revenue;
    // }
    // const cost = parseInt(resource.revenue.replace(/[^0-9]/g, ""));
    // return sum + cost;
    return (
      sum + Number(resource.work_orders_completed) * Number(resource.tsena)
    );
  }, 0);

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-dark-main rounded-3xl shadow-lg overflow-hidden">
      <div className="flex justify-between items-center p-5 py-8 bg-blue-600">
        <div className="flex items-center gap-5">
          <div className="bg-gray-300 dark:bg-[#1D283A] rounded-full p-2 w-20 h-20 flex items-center justify-center shadow-2xl">
            <span className="text-white font-semibold text-3xl">
              {firstName[0]}
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-white font-semibold text-3xl">
              {firstName} {lastName}
            </h1>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-end gap-8 pr-14">
          <div className="flex flex-col items-center gap-1.5 text-white">
            <h1 className="text-xs font-medium">Jami ishlab chiqarilgan</h1>
            <span className="text-sm font-semibold">
              {formatNumber(totalQuantity)}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-white">
            <h1 className="text-xs font-medium">Jami daromad</h1>
            <span className="text-sm font-semibold">
              {formatNumber(totalCost)}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <h1 className="text-gray-100 font-semibold ">
            {translateMonthToUzbek(oy_nomi)}
          </h1>
        </div>
      </div>

      <div className="px-5 dark:bg-[#0F1729] border border-white dark:border-gray-600 max-h-[50vh] overflow-y-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 dark:text-gray-100 px-5">
              <th className="py-5">Kod</th>
              <th className="py-5">Resurs</th>
              <th className="py-5 text-center">Qancha ishlab chiqarildi</th>
              <th className="py-5 text-center">Narxi</th>
              <th className="py-5 text-right">Daromad</th>
            </tr>
          </thead>
          <tbody>
            {detailedInformation?.map((resource, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 dark:border-gray-600  dark:text-gray-100"
              >
                <td className="py-5 ">{resource.itemCode}</td>
                <td className="py-5 ">{resource.description}</td>
                <td className="py-5  text-center">
                  {formatNumber(resource.work_orders_completed)}
                </td>
                <td className="py-5  text-center">
                  {formatNumber(resource.tsena)}
                </td>
                <td className="py-5  text-right">
                  {formatNumber(
                    resource.work_orders_completed * resource.tsena
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeSummaryCard;
