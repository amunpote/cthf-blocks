export function handleTimeFormat(hour, minute, timeFormat) {
	const minuteStr = minute ? minute.toString().padStart(2, "0") : "00";

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

export function isBusinessOpen(weekdays) {
	const now = new Date();
	const weekdayNames = [
		"sunday",
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
	];

	// Get today's day
	const todayKey = weekdayNames[now.getDay()];

	// Find the object for today's day
	const today = weekdays.find((day) => day.key === todayKey);

	// If the business is closed today
	if (!today || !today.opened) return false;

	const openH = today.openTime?.hours;
	const openM = today.openTime?.minutes;
	const closeH = today.closeTime?.hours;
	const closeM = today.closeTime?.minutes;

	const open = new Date(now);
	open.setHours(openH, openM, 0, 0);

	const close = new Date(now);
	close.setHours(closeH, closeM, 0, 0);

	// Handle overnight hours (e.g., 22:00 to 06:00)
	if (close < open) {
		if (now < open && now > close) return false;
		return true;
	}

	return now >= open && now <= close;
}
