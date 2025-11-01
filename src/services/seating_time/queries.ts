import { useQuery } from "@tanstack/react-query";
import { getSeatingTime } from "./service";

const SEATING_TIME_KEY = ["seating_time"];

export function useSeatingTime() {
  return useQuery({
    queryKey: SEATING_TIME_KEY,
    queryFn: getSeatingTime,
    refetchInterval: 20000,
  });
}
