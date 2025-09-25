export const getCurrentTime = () => {
  const data = new Date();
  const hour = data.getHours();
  const minute = data.getMinutes();
  const currentTime = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
  return currentTime;
};
