import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "./places.service";

const PLACES_KEY = ["places"];

export function usePlaces() {
  return useQuery({
    queryKey: PLACES_KEY,
    queryFn: getPlaces,
  });
}
