import http from "../http";

export async function getSeatsColors() {
  const res = await http.get("report/get-seats-color");
  return res.data;
}
