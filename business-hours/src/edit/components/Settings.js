import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	CheckboxControl,
	Panel,
	PanelBody,
	SelectControl,
	TimePicker,
	ToggleControl,
} from "@wordpress/components";

import { memo, useState, useContext } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";

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
				</PanelBody>
			</Panel>
		</>
	);
});
