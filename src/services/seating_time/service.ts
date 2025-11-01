import http from "../http";

export async function getSeatingTime() {
  const whsCode = localStorage.getItem("whsCode");
  const res = await http.get(
    `report/get-employee-seating-time?whsCode=${whsCode}`
  );
  return res.data;
}
