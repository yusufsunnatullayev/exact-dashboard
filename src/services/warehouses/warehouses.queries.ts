import { useQuery } from "@tanstack/react-query";
import { getWarehouses } from "./warehouses.service";

const WAREHOUSES_KEY = ["warehouses"];

export function useWarehouses() {
  return useQuery({
    queryKey: WAREHOUSES_KEY,
    queryFn: getWarehouses,
  });
}
