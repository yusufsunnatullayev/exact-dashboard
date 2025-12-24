import http from "../http";

const date = new Date();

export async function getEmployees(
  month?: string,
  whsCode?: string,
  year?: number
) {
  const params = new URLSearchParams();

  if (month && month !== "Barcha oylar") {
    params.append("month", month);
  }

  if (whsCode && whsCode !== "Barcha omborlar") {
    params.append("whsCode", whsCode);
  }

  if (year) {
    params.append("year", year.toString());
  }

  const query = params.toString();
  const url = query
    ? `report/get-employee-department-defect?${query}&pageSize=100`
    : "report/get-employee-department-defect?pageSize=100";

  const res = await http.get(url);
  return res.data;
}

export async function getTotalRevenue(month?: string, year?: number) {
  const params = new URLSearchParams();

  if (month && month !== "Barcha oylar") {
    params.append("month", month);
  }

  if (year) {
    params.append("year", year.toString());
  }

  const query = params.toString();
  const url = query
    ? `report/get-total-revenue?${query}`
    : "report/get-total-revenue";

  const res = await http.get(url);
  return res.data;
}

export async function getTotalDefect(month?: string) {
  const params = new URLSearchParams();

  if (month && month !== "Barcha oylar") {
    params.append("month", month);
  }

  const query = params.toString();
  const url = query
    ? `report/get-defect-total?${query}`
    : "report/get-defect-total";

  const res = await http.get(url);
  return res.data;
}
