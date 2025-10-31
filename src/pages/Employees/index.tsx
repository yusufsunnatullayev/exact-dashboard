import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import EmployeeSummaryCard from "../../components/EmployeesCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useEmployees } from "../../services/employees/queries";
import Loader from "../../components/Loader";
import DataNotFound from "../../components/DataNotFound";
import { useAnnouncments } from "../../services/announcments/queries";
import {
  addSecondsToTime,
  getCurrentTime,
  isBetween,
} from "../../helpers/time-handlers";
import { setActiveTab as setActiveTabRedux } from "../../store/slices/mainSlices";

interface Props {
  selectedMonth: string;
  selectedWhsDepartment: string;
}

const Employees: React.FC<Props> = ({
  selectedMonth,
  selectedWhsDepartment,
}) => {
  const stopTimer = useSelector((state: any) => state.main.stopTimer);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [scrollDurations, setScrollDurations] = useState<number[]>([]);
  const dispatch = useDispatch();

  const { data: employeesData, isLoading } = useEmployees(
    selectedMonth,
    selectedWhsDepartment
  );
  const { data: announcmentsData } = useAnnouncments();

  const filtered = announcmentsData?.data.filter((item) => {
    const showUntil = addSecondsToTime(
      item.announcementTime,
      item.showTime || 100000
    );
    // const showUntil = addSecondsToTime("09:29", 100);
    if (
      item.visableInDashboard === "Y" &&
      isBetween(item.announcementTime, showUntil, getCurrentTime())
    ) {
      return item;
    }
  });

  // useEffect(() => {
  //   if (filtered?.length > 0) {
  //     dispatch(setActiveTabRedux("informations"));
  //   }
  // }, [filtered, dispatch]);

  const goToSlide = (index: number) => {
    setCurrentProgress(0);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    if (!employeesData?.data?.length) return;
    setCurrentProgress(0);
    setCurrentIndex((prev) =>
      prev === 0 ? employeesData.data.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    if (!employeesData?.data?.length) return;
    setCurrentProgress(0);
    setCurrentIndex((prev) =>
      prev === employeesData.data.length - 1 ? 0 : prev + 1
    );
  };

  // Progress animation
  useEffect(() => {
    if (!stopTimer || !employeesData?.data?.length) return;

    setCurrentProgress(0);

    const duration =
      scrollDurations[currentIndex] && scrollDurations[currentIndex] > 0
        ? scrollDurations[currentIndex]
        : 15000; // fallback default (15s)

    const stepTime = duration / 100;

    const interval = setInterval(() => {
      setCurrentProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [currentIndex, stopTimer, scrollDurations]);

  // Automatically slide when scroll reaches bottom
  useEffect(() => {
    if (!stopTimer || !employeesData?.data?.length) return;

    const duration =
      scrollDurations[currentIndex] && scrollDurations[currentIndex] > 0
        ? scrollDurations[currentIndex]
        : 15000; // fallback duration

    const timer = setTimeout(() => {
      goToSlide((currentIndex + 1) % employeesData.data.length);
    }, duration + 1000); // +1s buffer

    return () => clearTimeout(timer);
  }, [currentIndex, stopTimer, employeesData?.data?.length, scrollDurations]);

  const handleScrollDuration = (index: number, duration: number) => {
    setScrollDurations((prev) => {
      const updated = [...prev];
      updated[index] = duration;
      return updated;
    });
  };

  if (isLoading) return <Loader />;

  if (employeesData?.data?.length === 0) {
    return <DataNotFound />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {employeesData?.data.map((employee, index) => (
              <div key={index} className="w-full h-[75vh] flex-shrink-0 p-4">
                <EmployeeSummaryCard
                  {...employee}
                  isActive={index === currentIndex}
                  stopTimer={stopTimer}
                  onScrollDurationCalculated={(ms) =>
                    handleScrollDuration(index, ms)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-[-45px] top-1/2 -translate-y-1/2 bg-white dark:bg-transparent dark:hover:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-[-45px] top-1/2 -translate-y-1/2 bg-white dark:bg-transparent dark:hover:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight
            size={24}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>
      </div>

      {/* Progress bar and indicators */}
      <div className="mt-5 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <Progress
          percent={currentProgress}
          status={currentProgress >= 100 ? "success" : "active"}
          strokeColor={"oklch(0.723 0.219 149.579)"}
          showInfo={false}
        />
        <div className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
          {employeesData?.data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-green-500 w-10" : "bg-gray-300"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
