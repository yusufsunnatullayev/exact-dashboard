import http from "../http";

export async function getPlaces() {
  const whsCode = localStorage.getItem("whsCode");
  const res = await http.get(
    `report/get-employee-seating-plan?whsCode=${whsCode}`
  );
  return res.data;
}
