import { __ } from "@wordpress/i18n";

import {
	Panel,
	PanelBody,
	SelectControl,
	TimePicker,
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

					<fieldset>
                        <legend></legend>
                    </fieldset>
				</PanelBody>
			</Panel>
		</>
	);
});
