import { useEffect, useState } from "react";
import { getCurrentTime } from "../../helpers/time-handlers";

export default function Time() {
  const [timer, setTimer] = useState<string>("");

  useEffect(() => {
    setTimer(getCurrentTime());

    const interval = setInterval(() => {
      setTimer(getCurrentTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <span className="text-xs font-medium text-gray-600">
        {timer || "00:00"}
      </span>
    </div>
  );
}
