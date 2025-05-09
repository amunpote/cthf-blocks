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
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

import { memo, useState, useContext } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";
import { AttrWrapper } from "../../../../../resources/components/utility.js";
import {
	justifyBottom,
	justifyCenter,
	justifyTop,
	scheduled,
} from "@wordpress/icons";

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

										<CheckboxControl
											label={__("Open 24 Hours", "rootblox")}
											checked={day.alwaysOpen}
											onChange={(newValue) => {
												const updatedArr = attributes.weekdays.map((item) =>
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

										{day.opened && (
											<>
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
															checked={day.alwaysOpenLabel}
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
								options={[
									{
										label: __("Monday", "rootblox"),
										value: "monday",
									},
									{
										label: __("Tuesday", "rootblox"),
										value: "tuesday",
									},
									{
										label: __("Wednesday", "rootblox"),
										value: "wednesday",
									},
									{
										label: __("Thursday", "rootblox"),
										value: "thursday",
									},
									{
										label: __("Friday", "rootblox"),
										value: "friday",
									},
									{
										label: __("Saturday", "rootblox"),
										value: "saturday",
									},
									{
										label: __("Sunday", "rootblox"),
										value: "sunday",
									},
								]}
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
		</>
	);
});
