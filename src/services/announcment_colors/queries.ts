import { useQuery } from "@tanstack/react-query";
import { getAnnouncmentColors } from "./service";

const ANNOUNCMENTS_COLORS_KEY = ["announcments_colors"];

export function useAnnouncmentsColors() {
  return useQuery({
    queryKey: ANNOUNCMENTS_COLORS_KEY,
    queryFn: getAnnouncmentColors,
  });
}
