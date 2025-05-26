import { __ } from "@wordpress/i18n";

import {
	CheckboxControl,
	Panel,
	PanelBody,
	RangeControl,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { justifyLeft, justifyCenter, justifyRight } from "@wordpress/icons";

import { memo, useContext, useState } from "@wordpress/element";

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
					<ToggleGroupControl
						label={__("Default Mode", "rootblox")}
						value={attributes.mode}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								mode: newValue,
							})
						}
						isBlock
						__next40pxDefaultSize
					>
						<ToggleGroupControlOption
							label={__("Light", "rootblox")}
							value="light"
						/>
						<ToggleGroupControlOption
							label={__("Dark", "rootblox")}
							value="dark"
						/>
					</ToggleGroupControl>

					<ToggleControl
						label={__("Enable Icon", "rootblox")}
						checked={attributes.icon.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								icon: {
									...attributes.icon,
									enabled: newValue,
								},
							})
						}
					/>

					<ToggleControl
						label={__("Enable Label", "rootblox")}
						checked={attributes.label.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								label: {
									...attributes.label,
									enabled: newValue,
								},
							})
						}
					/>

					<ToggleGroupControl
						label={__("Justification", "rootblox")}
						value={attributes.justify}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								justify: newValue,
							})
						}
					>
						<ToggleGroupControlOptionIcon
							label={__("Left", "rootblox")}
							icon={justifyLeft}
							value="left"
						/>
						<ToggleGroupControlOptionIcon
							label={__("Center", "rootblox")}
							icon={justifyCenter}
							value="center"
						/>
						<ToggleGroupControlOptionIcon
							label={__("Right", "rootblox")}
							icon={justifyRight}
							value="right"
						/>
					</ToggleGroupControl>

					<div className="cthf__attr-divider">
						<AttrWrapper styles={{ maxWidth: "50%", margin: "0" }}>
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

						{attributes.icon.enabled && attributes.label.enabled && (
							<>
								<AttrWrapper styles={{ margin: "0" }}>
									<UnitControl
										label={__("Content Spacing", "rootblox")}
										value={attributes.contentGap}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												contentGap: newValue,
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</>
						)}
					</div>
				</PanelBody>
			</Panel>
		</>
	);
});
