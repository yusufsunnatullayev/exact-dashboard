import http from "../http";

export async function getPlaces() {
  const res = await http.get("report/get-employee-seating-plan");
  return res.data;
}
