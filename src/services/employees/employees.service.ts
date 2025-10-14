import http from "../http";

export async function getEmployees(month?: string) {
  let url: string;
  if (month && month !== "Barcha oylar") {
    url = `report/get-employee-department?month=${month}`;
  } else {
    url = "report/get-employee-department";
  }
  const res = await http.get(url);
  return res.data;
}
