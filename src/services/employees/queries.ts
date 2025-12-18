import { useQuery } from "@tanstack/react-query";
import { getEmployees, getTotalDefect, getTotalRevenue } from "./service";

export function useEmployees(month?: string, whsCode?: string) {
  return useQuery({
    queryKey: ["employees", month, whsCode],
    queryFn: () => getEmployees(month, whsCode),
    refetchInterval: 20000,
  });
}

export function useTotalRevenue(month?: string) {
  return useQuery({
    queryKey: ["employees_revenue", month],
    queryFn: () => getTotalRevenue(month),
  });
}

export function useTotalDefect(month?: string) {
  return useQuery({
    queryKey: ["employees_defect", month],
    queryFn: () => getTotalDefect(month),
  });
}
