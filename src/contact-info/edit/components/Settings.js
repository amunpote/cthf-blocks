import { __ } from "@wordpress/i18n";

import {
	Panel,
	PanelBody,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

import { memo, useState, useContext } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";
import { AttrWrapper } from "../../../../../resources/components/utility.js";
import { justifyTop, justifyCenter, justifyBottom } from "@wordpress/icons";

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
								label={__("Vertical Alignment", "rootblox")}
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

							<ToggleControl
								label={__("Stack Layout", "rootblox")}
								checked={attributes.stackLayout}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										stackLayout: newValue,
									})
								}
							/>

							{attributes.stackLayout && (
								<>
									<AttrWrapper styles={{ marginBottom: "0", maxWidth: "50%" }}>
										<UnitControl
											label={__("Vertical Gap", "rootblox")}
											value={attributes.icon.rowGap}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													icon: {
														...attributes.icon,
														rowGap: newValue,
													},
												})
											}
											__next40pxDefaultSize
										/>
									</AttrWrapper>
								</>
							)}
						</>
					)}
				</PanelBody>
			</Panel>
		</>
	);
});
