import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import {
	memo,
	createContext,
	useContext,
	useState,
	useEffect,
} from "@wordpress/element";
import { CTHFBlockControls } from "./components/InspectorControls.js";
import { handleTimeFormat, isBusinessOpen } from "./utils.js";
import { renderBlockStyles } from "./style.js";

export const CTHFBlockContext = createContext(null);

const BusinessHours = memo(() => {
	const { blockID, attributes } = useContext(CTHFBlockContext);

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	const [showOpening, setShowOpening] = useState(false);
	const [showClosing, setShowClosing] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
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

			const todayConfig = attributes.weekdays.find(
				(day) => day.key === todayKey,
			);

			if (!todayConfig || !todayConfig.opened) return null;

			const timeDiff = attributes.notification.timeDiff;

			const diffMs =
				(parseInt(timeDiff.hours, 10) * 60 + parseInt(timeDiff.minutes, 10)) *
				60 *
				1000;

			// const baseDate = new Date(currentTime);
			const openTime = new Date(now);
			openTime.setHours(
				parseInt(todayConfig.openTime.hours),
				parseInt(todayConfig.openTime.minutes),
				0,
				0,
			);

			const closeTime = new Date(now);
			closeTime.setHours(
				parseInt(todayConfig.closeTime.hours),
				parseInt(todayConfig.closeTime.minutes),
				0,
				0,
			);

			const untilOpen = openTime - now;
			const untilClose = closeTime - now;

			if (untilOpen > 0 && untilOpen <= diffMs) {
				setShowOpening(true);
				setShowClosing(false);
			} else {
				setShowOpening(false);
			}

			if (untilClose > 0 && untilClose <= diffMs) {
				setShowClosing(true);
				setShowOpening(false);
			} else {
				setShowClosing(false);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [attributes.notification, attributes.weekdays]);

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: renderBlockStyles(blockID, attributes),
				}}
			/>

			<div id={blockID} className="cthf-block__business-hours">
				<ul className="business-hours__wrap">
					{attributes.weekdays.map((item, _i) => {
						return (
							<>
								<li className="business-hour__item">
									<span className="weekday">{item.key}</span>
									{item.opened && (
										<div className="active-hours">
											<span className="opening-hour">
												{handleTimeFormat(
													item.openTime?.hours,
													item.openTime?.minutes,
													attributes.timeFormat,
												)}
											</span>
											<span className="time-separator">
												{attributes.timeStyles.separator}
											</span>
											<span className="closing-hour">
												{handleTimeFormat(
													item.closeTime?.hours,
													item.closeTime?.minutes,
													attributes.timeFormat,
												)}
											</span>
										</div>
									)}

									{!item.opened && (
										<>
											<span className="closed-label">
												{attributes.timeStyles.separator +
													__("Closed", "rootblox")}
											</span>
										</>
									)}
								</li>
							</>
						);
					})}
				</ul>

				<div className="notification-wrap">
					<div className="message">
						{showOpening && !showClosing
							? attributes.notification.nearingOpen
							: attributes.notification.open}

						{showClosing && !showOpening
							? attributes.notification.nearingClose
							: attributes.notification.close}
					</div>
				</div>
			</div>
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({
		className: "cthf-block__wrapper",
	});

	return (
		<>
			<CTHFBlockContext.Provider
				value={{
					blockID,
					attributes,
					setAttributes,
				}}
			>
				<div {...blockProps}>
					<BusinessHours />
				</div>

				<CTHFBlockControls />
			</CTHFBlockContext.Provider>
		</>
	);
}
