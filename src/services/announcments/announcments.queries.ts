import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "./announcments.service";

const ANNOUNCMENTS_KEY = ["announcments"];

export function useAnnouncments() {
  return useQuery({
    queryKey: ANNOUNCMENTS_KEY,
    queryFn: getAnnouncements,
  });
}
