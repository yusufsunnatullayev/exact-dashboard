import http from "../http";

export async function getAnnouncements() {
  const res = await http.get("report/get-announcments");
  return res.data;
}
