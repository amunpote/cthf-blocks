export function handleTimeFormat(hour, minute, timeFormat) {
	const minuteStr = minute.toString().padStart(2, "0");

	if (timeFormat) {
		const hour12 = hour % 12 || 12;
		const period = hour >= 12 ? "PM" : "AM";
		const hourStr = hour12.toString().padStart(2, "0");
		return `${hourStr}:${minuteStr} ${period}`;
	} else {
		const hourStr = hour.toString().padStart(2, "0");
		return `${hourStr}:${minuteStr}`;
	}
}
