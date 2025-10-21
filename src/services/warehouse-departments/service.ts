import http from "../http";

export async function getWarehouseDepartments() {
  const res = await http.get("report/get-warehouse-emdepartment");
  return res.data;
}
