import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./employees.service";

export function useEmployees(month?: string) {
  return useQuery({
    queryKey: ["employees", month],
    queryFn: () => getEmployees(month),
  });
}
