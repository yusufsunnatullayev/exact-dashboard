import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./employees.service";

const EMPLOYEES_KEY = ["employees"];

export function useEmployees() {
  return useQuery({
    queryKey: EMPLOYEES_KEY,
    queryFn: getEmployees,
  });
}
