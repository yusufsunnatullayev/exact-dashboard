import http from "../http";

export async function getAnnouncmentColors() {
  const res = await http.get("report/get-announcment-color-count");
  return res.data;
}
