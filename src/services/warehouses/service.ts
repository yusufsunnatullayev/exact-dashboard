import http from "../http";

export async function getWarehouses() {
  const res = await http.get("report/get-warehouses");
  return res.data;
}
