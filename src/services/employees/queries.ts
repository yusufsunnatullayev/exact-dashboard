import { useQuery } from "@tanstack/react-query";
import { getEmployees, getTotalDefect, getTotalRevenue } from "./service";

export function useEmployees(month?: string, whsCode?: string) {
  return useQuery({
    queryKey: ["employees", month, whsCode],
    queryFn: () => getEmployees(month, whsCode),
    refetchInterval: 20000,
  });
}

export function useTotalRevenue() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getTotalRevenue,
  });
}

export function useTotalDefect() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getTotalDefect,
  });
}
