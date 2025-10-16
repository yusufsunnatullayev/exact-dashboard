import http from "../http";

export async function getAnnouncements(code?: string) {
  let url: string;
  if (code && code !== "Barcha omborlar") {
    url = `report/get-announcments?Code=${code}`;
  } else {
    url = "report/get-announcments";
  }
  const res = await http.get(url);
  return res.data;
}
