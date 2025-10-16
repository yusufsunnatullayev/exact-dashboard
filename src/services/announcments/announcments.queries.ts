import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "./announcments.service";

export function useAnnouncments(code?: string) {
  return useQuery({
    queryKey: ["announcments", code],
    queryFn: () => getAnnouncements(code),
  });
}
