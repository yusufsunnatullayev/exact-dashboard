import { useQuery } from "@tanstack/react-query";
import { getEmployees, getTotalDefect, getTotalRevenue } from "./service";

export function useEmployees(month?: string, whsCode?: string, year?: number) {
  return useQuery({
    queryKey: ["employees", month, whsCode, year],
    queryFn: () => getEmployees(month, whsCode, year),
    refetchInterval: 20000,
  });
}

export function useTotalRevenue(month?: string, year?: number) {
  return useQuery({
    queryKey: ["employees_revenue", month, year],
    queryFn: () => getTotalRevenue(month, year),
  });
}

export function useTotalDefect(month?: string) {
  return useQuery({
    queryKey: ["employees_defect", month],
    queryFn: () => getTotalDefect(month),
  });
}
