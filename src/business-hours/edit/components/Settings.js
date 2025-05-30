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
	Button,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	Icon,
} from "@wordpress/components";

import { memo, useState, useContext, useEffect } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";
import { AttrWrapper } from "../../../../../resources/components/utility.js";
import {
	justifyBottom,
	justifyCenter,
	justifyTop,
	trash,
	plusCircle,
} from "@wordpress/icons";
import { createDaysOption } from "../utils.js";

export const Settings = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState("general");

	const [daysOfWeek, setDaysOfWeek] = useState([
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
		"sunday",
	]);
	const [availableDays, setAvailableDays] = useState([
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
		"sunday",
	]);

	useEffect(() => {
		const startIndex = daysOfWeek.indexOf(attributes.scheduling.startingDay);
		const reordered = [
			...daysOfWeek.slice(startIndex),
			...daysOfWeek.slice(0, startIndex),
		];
		setDaysOfWeek(reordered);
	}, [attributes.scheduling]);

	const selectDayOptions = createDaysOption(daysOfWeek);

	const availableDaysList = createDaysOption(availableDays);

	return (
		<>
			<Panel>
				<PanelBody
					title={__("General", "rootblox")}
					opened={openPanel === "general"}
					onToggle={() => setOpenPanel("general")}
				>
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

					<ToggleControl
						label={__("Enable Notification", "rootblox")}
						checked={attributes.notification.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								notification: {
									...attributes.notification,
									enabled: newValue,
								},
							})
						}
					/>

					<ToggleControl
						label={__("Abbreviate Label", "rootblox")}
						checked={attributes.scheduling.abbr}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								scheduling: {
									...attributes.scheduling,
									abbr: newValue,
								},
							})
						}
					/>

					{attributes.scheduling.abbr && (
						<>
							<ToggleControl
								label={__("Custom Abbreviation", "rootblox")}
								checked={attributes.scheduling.customAbbr}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										scheduling: {
											...attributes.scheduling,
											customAbbr: newValue,
										},
									})
								}
							/>

							{attributes.scheduling.customAbbr && (
								<>
									<AttrWrapper styles={{ maxWidth: "50%" }}>
										<TextControl
											label={__("Abbreviation length", "rootblox")}
											type="number"
											min={1}
											value={attributes.scheduling.abbrLength}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													scheduling: {
														...attributes.scheduling,
														abbrLength: newValue,
													},
												})
											}
											__next40pxDefaultSize
											help={__(
												"Set how many characters to use from the weekday name for its abbreviation.",
												"rootblox",
											)}
										/>
									</AttrWrapper>
								</>
							)}
						</>
					)}

					<ToggleControl
						label={__("Show Timezone Mismatch Warning", "rootblox")}
						checked={attributes.timezone.enableNotice}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								timezone: {
									...attributes.timezone,
									enableNotice: newValue,
								},
							})
						}
						help={__(
							"Enable to show a warning if the user's local timezone differs from the system timezone.",
							"rootblox",
						)}
					/>
				</PanelBody>
			</Panel>

			<Panel>
				<PanelBody
					title={__("Availability Settings", "rootblox")}
					opened={openPanel === "availability-settings"}
					onToggle={() => setOpenPanel("availability-settings")}
				>
					<ToggleGroupControl
						label={__("Scheduling Mode", "rootblox")}
						value={attributes.scheduling.type}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								scheduling: {
									...attributes.scheduling,
									type: newValue,
								},
							})
						}
						isBlock
						__next40pxDefaultSize
					>
						<ToggleGroupControlOption
							label={__("Default", "rootblox")}
							value="default"
						/>
						<ToggleGroupControlOption
							label={__("Grouped", "rootblox")}
							value="group"
						/>
					</ToggleGroupControl>

					{attributes.scheduling.type === "default" &&
						attributes.weekdays.map((day, _i) => {
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
												<CheckboxControl
													label={__("Open 24 Hours", "rootblox")}
													checked={day.alwaysOpen}
													onChange={(newValue) => {
														const updatedArr = attributes.weekdays.map(
															(item) =>
																item.key === day.key
																	? { ...item, alwaysOpen: newValue }
																	: item,
														);

														setAttributes({
															...attributes,
															weekdays: updatedArr,
														});
													}}
												/>

												{!day.alwaysOpen && (
													<div
														className={`cthf__time-format-only ${
															!attributes.timeFormat
																? " cthf__attr-divider"
																: ""
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
												)}

												{day.alwaysOpen && (
													<>
														<TextareaControl
															label={__("Label", "rootblox")}
															value={day.alwaysOpenLabel}
															onChange={(newValue) => {
																const updatedArr = attributes.weekdays.map(
																	(item) =>
																		item.key === day.key
																			? { ...item, alwaysOpenLabel: newValue }
																			: item,
																);

																setAttributes({
																	...attributes,
																	weekdays: updatedArr,
																});
															}}
														/>
													</>
												)}
											</>
										)}
									</fieldset>
								</>
							);
						})}

					{attributes.scheduling.type === "group" && (
						<>
							<SelectControl
								label={__("Starting day of week", "rootblox")}
								options={selectDayOptions}
								value={attributes.scheduling.startingDay}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										scheduling: {
											...attributes.scheduling,
											startingDay: newValue,
										},
									})
								}
								__next40pxDefaultSize
							/>

							{attributes.groupedWeekdays &&
								attributes.groupedWeekdays.map((group, _i) => {
									let groupKey = _i;
									return (
										<>
											<fieldset
												className={`cthf__attr-group has-border-wrap${
													_i > 0 ? " has-position-relative" : ""
												}`}
											>
												{_i > 0 && (
													<Icon
														className="cthf-attr__remove-icon"
														icon={trash}
														onClick={() => {
															const updatedArr = [
																...attributes.groupedWeekdays,
															];
															updatedArr.splice(_i, 1);

															setAttributes({
																...attributes,
																groupedWeekdays: updatedArr,
															});
														}}
													/>
												)}

												<legend>{__("Group ", "rootblox") + ++groupKey}</legend>

												<div className="cthf__attr-divider">
													<SelectControl
														label={__("Start Day", "rootblox")}
														options={selectDayOptions}
														value={group.start}
														onChange={(newValue) => {
															const updatedArr = attributes.groupedWeekdays.map(
																(item, itemIndex) =>
																	_i === itemIndex
																		? { ...item, start: newValue }
																		: item,
															);

															setAttributes({
																...attributes,
																groupedWeekdays: updatedArr,
															});
														}}
														__next40pxDefaultSize
													/>

													<SelectControl
														label={__("End Day", "rootblox")}
														options={selectDayOptions}
														value={group.end}
														onChange={(newValue) => {
															const updatedArr = attributes.groupedWeekdays.map(
																(item, itemIndex) =>
																	_i === itemIndex
																		? { ...item, end: newValue }
																		: item,
															);

															setAttributes({
																...attributes,
																groupedWeekdays: updatedArr,
															});
														}}
														__next40pxDefaultSize
													/>
												</div>

												<CheckboxControl
													label={__("Business Day", "rootblox")}
													checked={group.opened}
													onChange={(newValue) => {
														const updatedArr = attributes.groupedWeekdays.map(
															(item, itemIndex) =>
																_i === itemIndex
																	? { ...item, opened: newValue }
																	: item,
														);

														setAttributes({
															...attributes,
															groupedWeekdays: updatedArr,
														});
													}}
												/>

												{group.opened && (
													<>
														<CheckboxControl
															label={__("Open 24 Hours", "rootblox")}
															checked={group.alwaysOpen}
															onChange={(newValue) => {
																const updatedArr =
																	attributes.groupedWeekdays.map(
																		(item, itemIndex) =>
																			_i === itemIndex
																				? { ...item, alwaysOpen: newValue }
																				: item,
																	);

																setAttributes({
																	...attributes,
																	groupedWeekdays: updatedArr,
																});
															}}
														/>

														{!group.alwaysOpen && (
															<>
																<div
																	className={`cthf__time-format-only ${
																		!attributes.timeFormat
																			? " cthf__attr-divider"
																			: ""
																	}`}
																	style={{ justifyContent: "left" }}
																>
																	<TimePicker.TimeInput
																		label={__("Opening Hour", "rootblox")}
																		value={group.openTime}
																		onChange={(newValue) => {
																			const updatedArr =
																				attributes.groupedWeekdays.map(
																					(item, itemIndex) =>
																						_i === itemIndex
																							? { ...item, openTime: newValue }
																							: item,
																				);

																			setAttributes({
																				...attributes,
																				groupedWeekdays: updatedArr,
																			});
																		}}
																		is12Hour={attributes.timeFormat}
																	/>

																	<TimePicker.TimeInput
																		label={__("Closing Hour", "rootblox")}
																		value={group.closeTime}
																		onChange={(newValue) => {
																			const updatedArr =
																				attributes.groupedWeekdays.map(
																					(item, itemIndex) =>
																						_i === itemIndex
																							? { ...item, closeTime: newValue }
																							: item,
																				);

																			setAttributes({
																				...attributes,
																				groupedWeekdays: updatedArr,
																			});
																		}}
																		is12Hour={attributes.timeFormat}
																	/>
																</div>
															</>
														)}

														{group.alwaysOpen && (
															<>
																<TextareaControl
																	label={__("Label", "rootblox")}
																	value={group.alwaysOpenLabel}
																	onChange={(newValue) => {
																		const updatedArr =
																			attributes.groupedWeekdays.map(
																				(item, itemIndex) =>
																					_i === itemIndex
																						? {
																								...item,
																								alwaysOpenLabel: newValue,
																						  }
																						: item,
																			);

																		setAttributes({
																			...attributes,
																			groupedWeekdays: updatedArr,
																		});
																	}}
																/>
															</>
														)}
													</>
												)}
											</fieldset>
										</>
									);
								})}
							<Button
								className="cthf__btn-secondary"
								style={{ display: "flex", marginBottom: "12px" }}
								text={__("Add Group", "rootblox")}
								icon={plusCircle}
								onClick={() => {
									attributes.groupedWeekdays.push({
										start: "",
										end: "",
										opened: false,
										alwaysOpen: false,
										alwaysOpenLabel: "Open 24 Hours",
										openTime: {
											hours: "00",
											minutes: "00",
										},
										closeTime: {
											hours: "00",
											minutes: "00",
										},
									});

									// If you want to keep the updated array separately
									const updatedArr = [...attributes.groupedWeekdays];

									setAttributes({
										...attributes,
										groupedWeekdays: updatedArr,
									});
								}}
							/>
						</>
					)}

					<div className="cthf__attr-divider">
						{attributes.scheduling.type === "group" && (
							<>
								<AttrWrapper styles={{ maxWidth: "50%" }}>
									<TextControl
										label={__("Group Separator", "rootblox")}
										value={attributes.groupSeparator}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												groupSeparator: newValue,
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</>
						)}

						<AttrWrapper styles={{ maxWidth: "50%" }}>
							<TextControl
								label={__("Separator", "rootblox")}
								value={attributes.timeSeparator}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										timeSeparator: newValue,
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>
					</div>

					<div className="cthf__attr-divider">
						<AttrWrapper>
							<ToggleGroupControl
								label={__("Vertical Align", "rootblox")}
								value={attributes.itemStyles.alignItems}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											alignItems: newValue,
										},
									})
								}
							>
								<ToggleGroupControlOptionIcon
									label={__("Top", "rootblox")}
									icon={justifyTop}
									value="start"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Middle", "rootblox")}
									icon={justifyCenter}
									value="center"
								/>
								<ToggleGroupControlOptionIcon
									label={__("End", "rootblox")}
									icon={justifyBottom}
									value="end"
								/>
							</ToggleGroupControl>
						</AttrWrapper>

						<AttrWrapper>
							<UnitControl
								label={__("Gap", "rootblox")}
								value={attributes.itemStyles.gap}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											gap: newValue,
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>
					</div>
				</PanelBody>
			</Panel>

			{attributes.notification.enabled && (
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

								<BaseControl>
									<BaseControl.VisualLabel>
										{__("Timer Labels", "rootblox")}
									</BaseControl.VisualLabel>

									<div className="cthf__attr-divider">
										<TextControl
											label={__("Hour", "rootblox")}
											value={attributes.notification.timerLabel.h}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													notification: {
														...attributes.notification,
														timerLabel: {
															...attributes.notification.timerLabel,
															h: newValue,
														},
													},
												})
											}
										/>

										<TextControl
											label={__("Hour", "rootblox")}
											value={attributes.notification.timerLabel.m}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													notification: {
														...attributes.notification,
														timerLabel: {
															...attributes.notification.timerLabel,
															m: newValue,
														},
													},
												})
											}
										/>

										<TextControl
											label={__("Hour", "rootblox")}
											value={attributes.notification.timerLabel.s}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													notification: {
														...attributes.notification,
														timerLabel: {
															...attributes.notification.timerLabel,
															s: newValue,
														},
													},
												})
											}
										/>
									</div>
								</BaseControl>
							</>
						)}
					</PanelBody>
				</Panel>
			)}

			{attributes.timezone.enableNotice && (
				<Panel>
					<PanelBody
						title={__("Timezone Notice Settings", "rootblox")}
						opened={openPanel === "timezone-settings"}
						onToggle={() => setOpenPanel("timezone-settings")}
					>
						<TextareaControl
							label={__("Message", "rootblox")}
							value={attributes.timezone.message}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									timezone: {
										...attributes.timezone,
										message: newValue,
									},
								})
							}
						/>

						<ToggleControl
							label={__("Display System Time", "rootblox")}
							checked={(newValue) =>
								setAttributes({
									...attributes,
									timezone: {
										...attributes.timezone,
										enableTime: newValue,
									},
								})
							}
						/>

						{attributes.timezone.enableTime && (
							<>
								<AttrWrapper styles={{ maxWidth: "50%" }}>
									<UnitControl
										label={__("Gap", "rootblox")}
										value={attributes.timezone.gap}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												timezone: {
													...attributes.timezone,
													gap: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</>
						)}
					</PanelBody>
				</Panel>
			)}
		</>
	);
});
