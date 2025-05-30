import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	SelectControl,
	TabPanel,
	__experimentalUnitControl as UnitControl,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalBorderControl as BorderControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

import {
	lineSolid,
	formatUppercase,
	formatLowercase,
	formatCapitalize,
	formatUnderline,
	formatStrikethrough,
} from "@wordpress/icons";

import { memo, useContext, useState } from "@wordpress/element";
import { select } from "@wordpress/data";
import { CTHFBlockContext } from "../index.js";

import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
} from "../../../../../resources/components/utility.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState(null);

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	const googleFonts = getFontOptions(cthfAssets.googleFonts);

	return (
		<>
			<Panel>
				<PanelBody
					title={__("Item Styles", "rootblox")}
					opened={openPanel === "item-styles"}
					onToggle={() => setOpenPanel("item-styles")}
				>
					<AttrWrapper styles={{ marginTop: "0" }}>
						<BoxControl
							label={__("Padding", "rootblox")}
							resetValues={[
								{
									top: "0px",
									right: "0px",
									bottom: "0px",
									left: "0px",
								},
							]}
							values={attributes.itemStyles.padding}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									itemStyles: {
										...attributes.itemStyles,
										padding: newValue,
									},
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>

					<AttrWrapper styles={{ margin: "0" }}>
						<BorderBoxControl
							label={__("Border", "rootblox")}
							enableAlpha={true}
							colors={themeColorPalette}
							value={attributes.itemStyles.border}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									itemStyles: {
										...attributes.itemStyles,
										border: newValue,
									},
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>

					<AttrWrapper styles={{ maxWidth: "50%" }}>
						<UnitControl
							label={__("Border Radius", "rootblox")}
							value={attributes.itemStyles.radius}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									itemStyles: {
										...attributes.itemStyles,
										radius: newValue,
									},
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>

					<SelectControl
						label={__("Font Family", "rootblox")}
						options={googleFonts}
						value={attributes.itemStyles.font.family}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								itemStyles: {
									...attributes.itemStyles,
									font: {
										...attributes.itemStyles.font,
										family: newValue,
									},
								},
							})
						}
						__next40pxDefaultSize
					/>

					<div className="cthf__attr-divider">
						<AttrWrapper styles={{ margin: "0" }}>
							<UnitControl
								label={__("Font Size", "rootblox")}
								value={attributes.itemStyles.font.size}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											font: {
												...attributes.itemStyles.font,
												size: newValue,
											},
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>

						<SelectControl
							label={__("Font Weight", "rootblox")}
							options={fontWeights}
							value={attributes.itemStyles.font.weight}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									itemStyles: {
										...attributes.itemStyles,
										font: {
											...attributes.itemStyles.font,
											weight: newValue,
										},
									},
								})
							}
							__next40pxDefaultSize
						/>
					</div>

					<div className="cthf__attr-divider">
						<AttrWrapper styles={{ margin: "0" }}>
							<ToggleGroupControl
								label={__("Letter Case", "rootblox")}
								value={attributes.itemStyles.letterCase}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											letterCase: newValue,
										},
									})
								}
								__next40pxDefaultSize
							>
								<ToggleGroupControlOptionIcon
									label={__("None", "rootblox")}
									icon={lineSolid}
									value="none"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Uppercase", "rootblox")}
									icon={formatUppercase}
									value="uppercase"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Lowercase", "rootblox")}
									icon={formatLowercase}
									value="lowercase"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Capitalize", "rootblox")}
									icon={formatCapitalize}
									value="capitalize"
								/>
							</ToggleGroupControl>
						</AttrWrapper>

						<AttrWrapper styles={{ margin: "0" }}>
							<ToggleGroupControl
								label={__("Decoration", "rootblox")}
								value={attributes.itemStyles.decoration}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											decoration: newValue,
										},
									})
								}
								__next40pxDefaultSize
							>
								<ToggleGroupControlOptionIcon
									label={__("None", "rootblox")}
									icon={lineSolid}
									value="none"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Underline", "rootblox")}
									icon={formatUnderline}
									value="underline"
								/>
								<ToggleGroupControlOptionIcon
									label={__("Strikethrough", "rootblox")}
									icon={formatStrikethrough}
									value="line-through"
								/>
							</ToggleGroupControl>
						</AttrWrapper>
					</div>

					<div className="cthf__attr-divider">
						<AttrWrapper styles={{ marginTop: "0" }}>
							<UnitControl
								label={__("Line Height", "rootblox")}
								value={attributes.itemStyles.lineHeight}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											lineHeight: newValue,
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>

						<AttrWrapper styles={{ marginTop: "0" }}>
							<UnitControl
								label={__("Letter Spacing", "rootblox")}
								value={attributes.itemStyles.letterSpacing}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											letterSpacing: newValue,
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>
					</div>

					<PanelColorSettings
						className="cthf__color-panel"
						enableAlpha={true}
						title={__("Colors", "rootblox")}
						colorSettings={[
							{
								label: __("Text/Icon (Default)", "rootblox"),
								value: attributes.itemStyles.color.text,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											color: {
												...attributes.itemStyles.color,
												text: newValue,
											},
										},
									}),
							},
							{
								label: __("Text/Icon (Hover)", "rootblox"),
								value: attributes.itemStyles.color.textHover,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											color: {
												...attributes.itemStyles.color,
												textHover: newValue,
											},
										},
									}),
							},
							{
								label: __("Background (Default)", "rootblox"),
								value: attributes.itemStyles.color.bg,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											color: {
												...attributes.itemStyles.color,
												bg: newValue,
											},
										},
									}),
							},
							{
								label: __("Background (Hover)", "rootblox"),
								value: attributes.itemStyles.color.bgHover,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											color: {
												...attributes.itemStyles.color,
												bgHover: newValue,
											},
										},
									}),
							},
							{
								label: __("Border (Hover)", "rootblox"),
								value: attributes.itemStyles.color.borderHover,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											color: {
												...attributes.itemStyles.color,
												borderHover: newValue,
											},
										},
									}),
							},
						]}
					/>
				</PanelBody>
			</Panel>

			{attributes.icon.enabled && (
				<>
					<Panel>
						<PanelBody
							title={__("Icon Styles", "rootblox")}
							opened={openPanel === "icon-styles"}
							onToggle={() => setOpenPanel("icon-styles")}
						>
							<div className="cthf__attr-divider">
								<AttrWrapper styles={{ marginTop: "0" }}>
									<UnitControl
										label={__("Box Width", "rootblox")}
										value={attributes.icon.boxWidth}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													boxWidth: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>

								<AttrWrapper styles={{ marginTop: "0" }}>
									<UnitControl
										label={__("Box Height", "rootblox")}
										value={attributes.icon.boxHeight}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													boxHeight: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</div>

							<AttrWrapper styles={{ margin: "0" }}>
								<BoxControl
									label={__("Padding", "rootblox")}
									resetValues={[
										{
											top: "0px",
											right: "0px",
											bottom: "0px",
											left: "0px",
										},
									]}
									values={attributes.icon.padding}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											icon: {
												...attributes.icon,
												padding: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>

							<div className="cthf__attr-divider">
								<AttrWrapper styles={{ marginBottom: "0" }}>
									<UnitControl
										label={__("Margin Top", "rootblox")}
										value={attributes.icon.margin.top}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													margin: {
														...attributes.icon.margin,
														top: newValue,
													},
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>

								<AttrWrapper styles={{ marginBottom: "0" }}>
									<UnitControl
										label={__("Margin Bottom", "rootblox")}
										value={attributes.icon.margin.bottom}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													margin: {
														...attributes.icon.margin,
														bottom: newValue,
													},
												},
											})
										}
										__next40
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</div>

							<div className="cthf__attr-divider">
								<AttrWrapper>
									<BorderControl
										label={__("Border", "rootblox")}
										enableAlpha={true}
										colors={themeColorPalette}
										value={attributes.icon.border}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													border: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>

								<AttrWrapper>
									<UnitControl
										label={__("Border Radius", "rootblox")}
										value={attributes.icon.radius}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													radius: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</div>

							<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
								<UnitControl
									label={__("Icon Size", "rootblox")}
									value={attributes.icon.size}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											icon: {
												...attributes.icon,
												size: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>

							<PanelColorSettings
								className="cthf__color-panel"
								enableAlpha={true}
								title={__("Colors", "rootblox")}
								colorSettings={[
									{
										label: __("Icon (Default)", "rootblox"),
										value: attributes.icon.color.svg,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													color: {
														...attributes.icon.color,
														svg: newValue,
													},
												},
											}),
									},
									{
										label: __("Icon (Hover)", "rootblox"),
										value: attributes.icon.color.svgHover,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													color: {
														...attributes.icon.color,
														svgHover: newValue,
													},
												},
											}),
									},
									{
										label: __("Background (Default)", "rootblox"),
										value: attributes.icon.color.bg,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													color: {
														...attributes.icon.color,
														bg: newValue,
													},
												},
											}),
									},
									{
										label: __("Background (Hover)", "rootblox"),
										value: attributes.icon.color.bgHover,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													color: {
														...attributes.icon.color,
														bgHover: newValue,
													},
												},
											}),
									},
									{
										label: __("Border (Hover)", "rootblox"),
										value: attributes.icon.color.borderHover,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												icon: {
													...attributes.icon,
													color: {
														...attributes.icon.color,
														borderHover: newValue,
													},
												},
											}),
									},
								]}
							/>
						</PanelBody>
					</Panel>
				</>
			)}
		</>
	);
});
