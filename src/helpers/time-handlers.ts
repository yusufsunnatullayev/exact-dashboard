export const getCurrentTime = () => {
  const data = new Date();
  const hour = data.getHours();
  const minute = data.getMinutes();
  const currentTime = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
  return currentTime;
};

export function addSecondsToTime(timeStr: string, seconds: number): string {
  const [hours, minutes] = timeStr.split(":").map(Number);

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  date.setSeconds(date.getSeconds() + seconds);

  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");

  return `${hh}:${mm}`;
}

export function isBetween(
  start: string,
  end: string,
  current: string
): boolean {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const [ch, cm] = current.split(":").map(Number);

  const startMinutes = sh * 60 + sm;
  const endMinutes = eh * 60 + em;
  const currentMinutes = ch * 60 + cm;

  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}
