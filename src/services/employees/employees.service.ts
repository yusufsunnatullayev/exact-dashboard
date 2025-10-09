import http from "../http";

export async function getEmployees() {
  const res = await http.get("report/get-employee-department");
  return res.data;
}
