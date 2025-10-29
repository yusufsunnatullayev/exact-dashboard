// pages/Employees.tsx
import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import InformationsCard from "../../components/InformationsCard";
import {
  addSecondsToTime,
  getCurrentTime,
  isBetween,
} from "../../helpers/time-handlers";
import { useAnnouncments } from "../../services/announcments/queries";
import Loader from "../../components/Loader";
import DataNotFound from "../../components/DataNotFound";
import { useAnnouncmentsColors } from "../../services/announcment_colors/queries";
import { setActiveTab as setActiveTabRedux } from "../../store/slices/mainSlices";

interface Props {
  selectedWhs: string;
}

const Informations: React.FC<Props> = ({ selectedWhs }) => {
  const stopTimer = useSelector((state: any) => state.main.stopTimer);
  const { data: announcmentsData, isLoading } = useAnnouncments(selectedWhs);
  const { data: colors } = useAnnouncmentsColors();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
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

  useEffect(() => {
    if (filtered && filtered.length === 0) {
      dispatch(setActiveTabRedux("employees"));
    }
  }, [filtered, dispatch]);

  // Handle progress animation and reset
  useEffect(() => {
    if (!stopTimer) return;

    setCurrentProgress(0);

    const interval = setInterval(() => {
      setCurrentProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [currentIndex, stopTimer]);

  useEffect(() => {
    if (!stopTimer) return;
    const interval = setInterval(() => {
      goToSlide((currentIndex + 1) % filtered?.length);
    }, 15500);
    return () => clearInterval(interval);
  }, [currentIndex, stopTimer, filtered?.length]);

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentProgress(0);

    setCurrentIndex((prev) => (prev === 0 ? filtered?.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentProgress(0);
    setCurrentIndex((prev) => (prev === filtered?.length - 1 ? 0 : prev + 1));
  };

  // Handle dot click
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {filtered.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                {/* @ts-ignore */}
                <InformationsCard data={item} colors={colors?.data || []} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-[-45px] top-1/2 cursor-pointer transform -translate-y-1/2 bg-white dark:bg-transparent dark:hover:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-[-45px] cursor-pointer top-1/2 transform -translate-y-1/2 bg-white dark:bg-transparent dark:hover:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight
            size={24}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>
      </div>

      <div className="mt-5 max-w-4xl mx-auto flex flex-col items-center justify-center  ">
        <Progress
          percent={currentProgress}
          status={currentProgress >= 100 ? "success" : "active"}
          strokeColor={"oklch(0.723 0.219 149.579)"}
          showInfo={false}
        />
        <div className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
          {filtered.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-green-500 w-10" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Informations;
