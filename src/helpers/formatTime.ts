export const formatSecondsToMinutesAndSeconds = (seconds: number) => {
	const mins = Math.floor(Math.abs(seconds) / 60) * Math.sign(seconds);
	const secs = Math.abs(seconds) % 60;

	const sign = seconds < 0 ? "-" : "";
	const formattedMins = Math.abs(mins).toString().padStart(2, "0");
	const formattedSecs = secs.toString().padStart(2, "0");

	return `${sign}${formattedMins}:${formattedSecs}`;
};
