import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./service";

export function useEmployees(month?: string, whsCode?: string) {
  return useQuery({
    queryKey: ["employees", month, whsCode],
    queryFn: () => getEmployees(month, whsCode),
    refetchInterval: 20000,
  });
}
