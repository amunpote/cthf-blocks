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
} from "@wordpress/components";

import { memo, useState, useContext } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";
import { AttrWrapper } from "../../../../../resources/components/utility.js";
import {
	justifyTop,
	justifyCenter,
	justifyBottom,
	plusCircle,
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
					<div className="cthf__attr-divider">
						<AttrWrapper styles={{ marginTop: "0" }}>
							<UnitControl
								label={__("Gap", "rootblox")}
								value={attributes.gap}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										gap: newValue,
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>

						{attributes.icon.enabled && (
							<AttrWrapper styles={{ marginTop: "0" }}>
								<UnitControl
									label={__("Icon Gap", "rootblox")}
									value={attributes.icon.gap}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											icon: {
												...attributes.icon,
												gap: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						)}
					</div>

					{attributes.icon.enabled && (
						<>
							<ToggleGroupControl
								label={__("Icon Align", "rootblox")}
								value={attributes.icon.align}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										icon: {
											...attributes.icon,
											align: newValue,
										},
									})
								}
								__next40pxDefaultSize
							>
								<ToggleGroupControlOptionIcon
									label={__("Left", "rootblox")}
									icon={justifyTop}
									value="start"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Ceneter", "rootblox")}
									icon={justifyCenter}
									value="center"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Bottom", "rootblox")}
									icon={justifyBottom}
									value="end"
								/>
							</ToggleGroupControl>
						</>
					)}
				</PanelBody>
			</Panel>
		</>
	);
});
