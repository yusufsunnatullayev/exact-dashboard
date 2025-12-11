import { useEffect, useState } from "react";
import EmployeePlaceCard from "../../components/EmployeePlaceCard";
import EmployeePlaceDetailModal from "../../components/EmployeePlaceDetailModal";
import { usePlaces } from "../../services/places/queries";
import Loader from "../../components/Loader";
import { useSeatsColors } from "../../services/seats-colors/queries";
import DataNotFound from "../../components/DataNotFound";
import { useSeatingTime } from "../../services/seating_time/queries";
import { getCurrentTime, isBetween } from "../../helpers/time-handlers";
import { useDispatch } from "react-redux";
import { setActiveTab as setActiveTabRedux } from "../../store/slices/mainSlices";

const Places = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { data: places, isLoading } = usePlaces();

  const { data: seats_colors } = useSeatsColors();

  const { data: seating_time } = useSeatingTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const time = seating_time?.data?.[0];
      if (!time) return;

      const shouldBeInPlaces = isBetween(
        time.startTime || "13:38",
        time.endTime || "13:39",
        getCurrentTime()
      );

      if (!shouldBeInPlaces) {
        dispatch(setActiveTabRedux("employees"));
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [seating_time, dispatch]);

  if (isLoading) return <Loader />;

  return places.data.length === 0 ? (
    <DataNotFound />
  ) : (
    <div className="max-w-7xl mx-auto py-10 flex flex-col gap-10">
      {/* Head Content 🚩 */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-blue-600">
          Ombor xodimlari o'tirish joylari
        </h1>
        <p className="text-base font-medium text-gray-500 dark:text-gray-200">
          Barcha {places?.data?.length} ta ombor xodimlarining o'tirish joylari
          va belgilangan pozitsiyalari
        </p>
      </div>
      {/* Main Content 🚩 */}
      <div className="w-full p-5 rounded-xl shadow bg-white dark:bg-[#1F2937] border border-white dark:border-gray-600 flex flex-col gap-5">
        <h1 className="text-xl font-semibold dark:text-gray-100">
          Ombor xodimlari o'tirish joylari xaritasi
        </h1>
        <div className="w-full grid grid-cols-7">
          {places?.data?.map((item) => (
            <EmployeePlaceCard
              key={item.code}
              item={item}
              color={seats_colors?.data?.find(
                (color) => color.joyLine === item.line
              )}
              setIsModalOpen={setIsModalOpen}
              setSelectedEmployee={setSelectedEmployee}
            />
          ))}
        </div>
      </div>
      <EmployeePlaceDetailModal
        item={selectedEmployee}
        colors={seats_colors?.data}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Places;
