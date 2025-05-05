import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	CheckboxControl,
	Panel,
	PanelBody,
	SelectControl,
	TextareaControl,
	TextControl,
	TimePicker,
	ToggleControl,
} from "@wordpress/components";

import { memo, useState, useContext } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";
import { AttrWrapper } from "../../../../../resources/components/utility.js";

export const Settings = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState("general");

	return (
		<>
			<Panel>
				<PanelBody
					title={__("General", "rootblox")}
					opened={openPanel === "general"}
					onToggle={() => setOpenPanel("general")}
				>
					<SelectControl
						label={__("Starting day of Week", "rootblox")}
						options={[
							{
								label: __("Monday", "rootblox"),
								value: "mon",
							},
							{
								label: __("Tuesday", "rootblox"),
								value: "tue",
							},
							{
								label: __("Wednesday", "rootblox"),
								value: "wed",
							},
							{
								label: __("Thursday", "rootblox"),
								value: "thu",
							},
							{
								label: __("Friday", "rootblox"),
								value: "fri",
							},
							{
								label: __("Saturday", "rootblox"),
								value: "sat",
							},
							{
								label: __("Sunday", "rootblox"),
								value: "sun",
							},
						]}
						value={attributes.startingDay}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								startingDay: newValue,
							})
						}
						__next40pxDefaultSize
					/>

					<ToggleControl
						label={__("12 Hour Format", "rootblox")}
						checked={attributes.timeFormat}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								timeFormat: newValue,
							})
						}
					/>
				</PanelBody>
			</Panel>

			<Panel>
				<PanelBody
					title={__("Availability Settings", "rootblox")}
					opened={openPanel === "availability-settings"}
					onToggle={() => setOpenPanel("availability-settings")}
				>
					{attributes.weekdays.map((day, _i) => {
						return (
							<>
								<fieldset className="cthf__attr-group has-border-wrap">
									<legend>{String(day.key)}</legend>

									<CheckboxControl
										label={__("Business Day?", "rootblox")}
										checked={day.opened}
										onChange={(newValue) => {
											const updatedArr = attributes.weekdays.map((item) =>
												item.key === day.key
													? { ...item, opened: newValue }
													: item,
											);

											setAttributes({
												...attributes,
												weekdays: updatedArr,
											});
										}}
									/>

									{day.opened && (
										<>
											<div
												className={`cthf__time-format-only ${
													!attributes.timeFormat ? " cthf__attr-divider" : ""
												}`}
												style={{ justifyContent: "left" }}
											>
												<TimePicker.TimeInput
													label={__("Opening Hour", "rootblox")}
													value={day.openTime}
													onChange={(newValue) => {
														const updatedArr = attributes.weekdays.map(
															(item) =>
																item.key === day.key
																	? { ...item, openTime: { ...newValue } }
																	: item,
														);

														setAttributes({
															...attributes,
															weekdays: [...updatedArr],
														});
													}}
													is12Hour={attributes.timeFormat}
												/>

												<TimePicker.TimeInput
													label={__("Closing Hour", "rootblox")}
													value={day.closeTime}
													onChange={(newValue) => {
														const updatedArr = attributes.weekdays.map(
															(item) =>
																item.key === day.key
																	? { ...item, closeTime: { ...newValue } }
																	: item,
														);

														setAttributes({
															...attributes,
															weekdays: [...updatedArr],
														});
													}}
													is12Hour={attributes.timeFormat}
												/>
											</div>
										</>
									)}
								</fieldset>
							</>
						);
					})}

					<TextControl
						label={__("Separator", "rootblox")}
						value={attributes.timeStyles.separator}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								timeStyles: {
									...attributes.timeStyles,
									separator: newValue,
								},
							})
						}
						__next40pxDefaultSize
					/>
				</PanelBody>
			</Panel>

			<Panel>
				<PanelBody
					title={__("Notification Settings", "rootblox")}
					opened={openPanel === "notification-settings"}
					onToggle={() => setOpenPanel("notification-settings")}
				>
					<TextareaControl
						label={__("Available Message", "rootblox")}
						value={attributes.notification.open}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								notification: {
									...attributes.notification,
									open: newValue,
								},
							})
						}
					/>

					<TextareaControl
						label={__("Away Message", "rootblox")}
						value={attributes.notification.close}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								notification: {
									...attributes.notification,
									close: newValue,
								},
							})
						}
					/>

					<ToggleControl
						label={__("Enable Timer", "rootblox")}
						checked={attributes.notification.addTimer}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								notification: {
									...attributes.notification,
									addTimer: newValue,
								},
							})
						}
						help={__("Sets the countdown until open/close.", "rootblox")}
					/>

					{attributes.notification.addTimer && (
						<>
							<AttrWrapper>
								<div className="cthf__time-format-only">
									<TimePicker.TimeInput
										label={__("Difference", "rootblox")}
										value={attributes.notification.timeDiff}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												notification: {
													...attributes.notification,
													timeDiff: newValue,
												},
											})
										}
										help={__("Set how soon before open/close.", "rootblox")}
									/>
									<span
										className="cthf__help-text"
										style={{ display: "block", marginTop: "-6px" }}
									>
										{__("Set how soon before open/close.", "rootblox")}
									</span>
								</div>
							</AttrWrapper>

							<TextareaControl
								label={__("Opening Soon Message", "rootblox")}
								value={attributes.notification.nearingOpen}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										notification: {
											...attributes.notification,
											nearingOpen: newValue,
										},
									})
								}
								help={__(
									'Replaces "Available Message" when the timer shows.',
									"rootblox",
								)}
							/>

							<TextareaControl
								label={__("Closing Soon Message", "rootblox")}
								value={attributes.notification.nearingClose}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										notification: {
											...attributes.notification,
											nearingClose: newValue,
										},
									})
								}
								help={__(
									'Replaces "Away Message" when the timer shows.',
									"rootblox",
								)}
							/>
						</>
					)}
				</PanelBody>
			</Panel>
		</>
	);
});
