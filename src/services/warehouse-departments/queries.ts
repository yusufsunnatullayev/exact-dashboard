import { useQuery } from "@tanstack/react-query";
import { getWarehouseDepartments } from "./service";

const WAREHOUSES_KEY = ["warehouse-departments"];

export function useWarehouseDepartments() {
  return useQuery({
    queryKey: WAREHOUSES_KEY,
    queryFn: getWarehouseDepartments,
  });
}
