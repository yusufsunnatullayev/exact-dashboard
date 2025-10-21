import http from "../http";

export async function getAnnouncements(code?: string) {
  const params = new URLSearchParams();

  if (code && code !== "Barcha omborlar") {
    params.append("Code", code);
  }

  const query = params.toString();
  const url = query
    ? `report/get-announcments?${query}`
    : "report/get-announcments";

  const res = await http.get(url);
  return res.data;
}
