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
		// Close time is past midnight, so add 1 day to close
		close.setDate(close.getDate() + 1);

		// If now is before open, assume it's after midnight and also add a day
		if (now < open) {
			now = new Date(now);
			now.setDate(now.getDate() + 1);
		}
	}

	return now >= open && now <= close;
}

export function formatTime(ms, timerLabel) {
	const totalSeconds = Math.floor(ms / 1000);
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return `${String(hours).padStart(2, "0")}${timerLabel?.h} : ${String(
		minutes,
	).padStart(2, "0")}${timerLabel?.m} : ${String(seconds).padStart(2, "0")}${timerLabel?.s}`;
}
