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
    ? `report/get-employee-department-defect?${query}&pageSize=100`
    : "report/get-employee-department-defect?pageSize=100";

  const res = await http.get(url);
  return res.data;
}

export async function getTotalRevenue() {
  const res = await http.get("report/get-total-revenue");
  return res.data;
}

export async function getTotalDefect() {
  const res = await http.get("report/get-defect-total");
  return res.data;
}
