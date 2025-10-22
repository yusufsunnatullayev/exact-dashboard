import React, { useEffect, useRef } from "react";
import { EmployeeSummaryProps } from "../../types/Employees";
import { formatNumber } from "../../helpers/formatNumber";
import { translateMonthToUzbek } from "../../helpers/translateMonth";

interface ExtendedProps extends EmployeeSummaryProps {
  isActive: boolean;
  stopTimer: boolean;
  onScrollDurationCalculated?: (ms: number) => void;
}

const EmployeeSummaryCard: React.FC<ExtendedProps> = ({
  firstName,
  lastName,
  oy_nomi,
  detailedInformations,
  detailedDefectInformation,
  isActive,
  onScrollDurationCalculated,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasCalculatedDuration = useRef(false);
  const allItems = [...detailedInformations, ...detailedDefectInformation];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !isActive) return;

    // Reset to top when card becomes active
    container.scrollTop = 0;
    hasCalculatedDuration.current = false;

    const scrollStep = 1; // pixels per step
    const delay = 50; // ms between steps
    const pauseDuration = 2000; // ms to pause at top/bottom

    // Wait longer for content to fully render and layout
    const measureTimeout = setTimeout(() => {
      if (hasCalculatedDuration.current) return;

      const totalScrollDistance =
        container.scrollHeight - container.clientHeight;

      if (totalScrollDistance <= 0) {
        onScrollDurationCalculated?.(5000); // default duration for no scroll
        hasCalculatedDuration.current = true;
        return;
      }

      const totalSteps = Math.ceil(totalScrollDistance / scrollStep);
      const scrollDownDuration = totalSteps * delay;
      const scrollUpDuration = totalSteps * delay;

      // Total time = scroll down + pause at bottom + scroll up + pause at top
      const totalDuration =
        scrollDownDuration + pauseDuration + scrollUpDuration + pauseDuration;

      onScrollDurationCalculated?.(totalDuration);
      hasCalculatedDuration.current = true;
    }, 300); // Increased wait time for layout to stabilize

    // Scroll animation
    let direction = 1;
    let pause = false;

    const scroll = () => {
      if (!container || !isActive || pause) return;

      const currentScroll = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;

      // More precise bottom detection
      const atBottom = currentScroll >= maxScroll - 1;
      const atTop = currentScroll <= 1;

      if (atBottom && direction === 1) {
        // Ensure we're exactly at the bottom
        container.scrollTop = maxScroll;
        direction = -1;
        pause = true;
        setTimeout(() => (pause = false), pauseDuration);
        return;
      }

      if (atTop && direction === -1) {
        // Ensure we're exactly at the top
        container.scrollTop = 0;
        direction = 1;
        pause = true;
        setTimeout(() => (pause = false), pauseDuration);
        return;
      }

      // Normal scrolling
      const newScroll = currentScroll + direction * scrollStep;

      // Clamp to valid range
      container.scrollTop = Math.max(0, Math.min(maxScroll, newScroll));
    };

    const interval = setInterval(scroll, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(measureTimeout);
    };
  }, [isActive, detailedInformations]);

  const totalQuantity = detailedInformations?.reduce(
    (sum, resource) => sum + Number(resource.work_orders_completed),
    0
  );

  const totalCost = detailedInformations?.reduce(
    (sum, resource) =>
      sum + Number(resource.work_orders_completed) * Number(resource.tsena),
    0
  );

  const totalQuantityDefect = detailedDefectInformation?.reduce(
    (sum, resource) => sum + Number(resource.work_orders_completed),
    0
  );

  const totalCostDefect = detailedDefectInformation?.reduce(
    (sum, resource) =>
      sum + Number(resource.work_orders_completed) * Number(resource.tsena),
    0
  );

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-dark-main rounded-3xl shadow-lg overflow-hidden">
      {/* Header */}
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
            <h1 className="text-xs font-medium">Jami Braklar soni</h1>
            <span className="text-sm font-semibold">
              {formatNumber(totalQuantityDefect)}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-white">
            <h1 className="text-xs font-medium">Jami daromad</h1>
            <span className="text-sm font-semibold">
              {formatNumber(totalCost - totalCostDefect)}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <h1 className="text-gray-100 font-semibold">
            {translateMonthToUzbek(oy_nomi)}
          </h1>
        </div>
      </div>

      {/* Scrollable Table */}
      <div
        ref={scrollRef}
        className="px-5 dark:bg-[#0F1729] border border-white dark:border-gray-600 max-h-[50vh] overflow-y-auto scrollbar-hide"
      >
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 dark:text-gray-100">
              <th className="py-5">Kod</th>
              <th className="py-5">Resurs</th>
              <th className="py-5">O'lchov birligi</th>
              <th className="py-5 text-center">Qancha ishlab chiqarildi</th>
              <th className="py-5 text-center">Narxi</th>
              <th className="py-5 text-right">Daromad</th>
            </tr>
          </thead>
          <tbody>
            {allItems?.map((resource, index) => (
              <tr
                key={index}
                className={`border-t border-gray-200 dark:border-gray-600 dark:text-gray-100 ${index >= detailedInformations.length && "text-red-500 dark:text-red-500"}`}
              >
                <td className="py-5">{resource.itemCode}</td>
                <td className="py-5">{resource.description}</td>
                <td className="py-5 text-center">{resource.uom ?? "-"}</td>
                <td className="py-5 text-center">
                  {formatNumber(resource.work_orders_completed)}
                </td>
                <td className="py-5 text-center">
                  {formatNumber(resource.tsena)}
                </td>
                <td className="py-5 text-right">
                  {/* {index >= detailedInformations.length && "-"} */}
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
