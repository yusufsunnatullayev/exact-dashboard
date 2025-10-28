import React, { useEffect, useMemo, useState } from "react";
import { CircleCheckBig, Info, TriangleAlert } from "lucide-react";
import {
  AnnouncementColors,
  InformationData,
} from "../../types/api/Informations";

// Single Employee Summary Card Component
const InformationsCard: React.FC = ({
  data,
  colors,
}: {
  data: InformationData;
  colors: AnnouncementColors[];
}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const switchTypeIcon = (type: string) => {
    switch (type) {
      case "Xavfsizlik ogohlantirishni":
        return <TriangleAlert />;
      case "Eslatma":
        return <Info />;
      case "Muvaffaqiyat":
        return <CircleCheckBig />;
      case "Ma'lumot":
        return <Info />;
      default:
        return <TriangleAlert />;
    }
  };

  const colorObj = useMemo(() => {
    return colors.find(
      (item) => item?.u_AnnouncementType === data.announcementType
    );
  }, [colors]);

  return (
    <div className="relative  max-w-6xl h-[70vh] mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      <div
        className={`px-7 py-8 w-full h-full`}
        style={{
          backgroundColor: data?.bgColor
            ? darkMode
              ? `#${data?.darkBgColor}`
              : `#${data?.bgColor}`
            : darkMode
              ? colorObj?.u_BgColorDark
              : colorObj?.u_BgColor,
        }}
      >
        <div className="flex items-center justify-between gap-5 w-full">
          <div
            className={`px-3 py-1 rounded-2xl z-10`}
            style={{
              backgroundColor: data?.typeColor
                ? `#${data?.typeColor}`
                : `${colorObj?.u_TypeColor}`,
            }}
          >
            <span className={`text-white text-sm`}>
              {data.announcementType}
            </span>
          </div>
          <div
            className={`px-3 py-1 rounded-2xl z-10 text-white flex gap-1 items-center`}
            style={{
              backgroundColor: data?.typeColor
                ? `#${data?.typeColor}`
                : `${colorObj?.u_TypeColor}`,
            }}
          >
            {switchTypeIcon(data.announcementTime)}
            <span className="text-white text-sm">{data.priority}</span>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-10">
          <h1
            className={`text-[60px] leading-[67px] z-10 font-bold`}
            style={{
              color: data?.titleColor
                ? `#${data?.titleColor}`
                : `${colorObj?.u_TitleColor}`,
            }}
          >
            {data.title}
          </h1>
        </div>

        <div className="mt-5 z-10">
          <span className="text-gray-500 dark:text-gray-200 text-lg">
            {data.message}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-5 z-10">
          <span className="font-semibold dark:text-gray-100">Author:</span>
          <span className="dark:text-gray-100">{data.author}</span>
        </div>
      </div>

      <div
        className="absolute inset-0 dark:opacity-40 opacity-50"
        style={{
          backgroundImage: `url(
						"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
					)`,
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
};

export default InformationsCard;
