import http from "../http";

export async function getEmployees(month?: string, whsCode?: string) {
  const params = new URLSearchParams();

  if (month && month !== "Barcha oylar") {
    params.append("month", month);
  }

  if (whsCode && whsCode !== "Barcha omborlar") {
    params.append("whsCode", whsCode);
  }

  const query = params.toString();
  const url = query
    ? `report/get-employee-department?${query}`
    : "report/get-employee-department";

  const res = await http.get(url);
  return res.data;
}
