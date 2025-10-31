import { useQuery } from "@tanstack/react-query";
import { getSeatsColors } from "./service";

const SEATS_COLORS_KEY = ["seats_colors"];

export function useSeatsColors() {
  return useQuery({
    queryKey: SEATS_COLORS_KEY,
    queryFn: getSeatsColors,
  });
}
