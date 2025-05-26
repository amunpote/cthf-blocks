import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";
import {
	CheckboxControl,
	Panel,
	PanelBody,
	RangeControl,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
	TabPanel,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalBorderControl as BorderControl,
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
					title={__("Wrapper Styles", "rootblox")}
					opened={openPanel === "wrapper-styles"}
					onToggle={() => setOpenPanel("wrapper-styles")}
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
							values={attributes.wrapper.padding}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									wrapper: {
										...attributes.wrapper,
										padding: newValue,
									},
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>

					<div className="cthf__attr-divider">
						<AttrWrapper styles={{ margin: "0" }}>
							<UnitControl
								label={__("Margin Top", "rootblox")}
								value={attributes.wrapper.margin.top}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										wrapper: {
											...attributes.wrapper,
											margin: {
												...attributes.wrapper.margin,
												top: newValue,
											},
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>
						<AttrWrapper styles={{ margin: "0" }}>
							<UnitControl
								label={__("Margin Bottom", "rootblox")}
								value={attributes.wrapper.margin.bottom}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										wrapper: {
											...attributes.wrapper,
											margin: {
												...attributes.wrapper.margin,
												bottom: newValue,
											},
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>
					</div>

					<AttrWrapper>
						<BorderBoxControl
							label={__("Border", "rootblox")}
							enableAlpha={true}
							colors={themeColorPalette}
							value={attributes.wrapper.border}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									wrapper: {
										...attributes.wrapper,
										border: newValue,
									},
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>

					<AttrWrapper styles={{ maxWidth: "50%", marginTop: "0" }}>
						<UnitControl
							label={__("Border Radius", "rootblox")}
							value={attributes.wrapper.radius}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									wrapper: {
										...attributes.wrapper,
										radius: newValue,
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
								label: __("Background", "rootblox"),
								value: attributes.wrapper.color.bg,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										wrapper: {
											...attributes.wrapper,
											color: {
												...attributes.wrapper.color,
												bg: newValue,
											},
										},
									}),
							},
						]}
					/>
				</PanelBody>
			</Panel>

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
							values={attributes.item.padding}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									item: {
										...attributes.item,
										padding: newValue,
									},
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>

					<TabPanel
						title=""
						className="cthf__tab-panel attr-panel"
						activeClass="attr-active"
						tabs={[
							{
								title: __("Default", "rootblox"),
								name: "cthf__tab-1",
								className: "cthf__tab attr-tab",
							},
							{
								title: __("Active", "rootblox"),
								name: "cthf__tab-2",
								className: "cthf__tab attr-tab",
							},
						]}
					>
						{(tab) => (
							<>
								{tab.name === "cthf__tab-1" && (
									<>
										<div className="cthf__attr-divider">
											<AttrWrapper>
												<BorderControl
													label={__("Border", "rootblox")}
													enableAlpha={true}
													colors={themeColorPalette}
													value={attributes.item.border}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															item: {
																...attributes.item,
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
													value={attributes.item.radius}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															item: {
																...attributes.item,
																radius: newValue,
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>
										</div>
									</>
								)}

								{tab.name === "cthf__tab-2" && (
									<>
										<div className="cthf__attr-divider">
											<AttrWrapper>
												<BorderControl
													label={__("Border", "rootblox")}
													enableAlpha={true}
													colors={themeColorPalette}
													value={attributes.item.activeBorder}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															item: {
																...attributes.item,
																activeBorder: newValue,
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>

											<AttrWrapper>
												<UnitControl
													label={__("Border Radius", "rootblox")}
													value={attributes.item.activeRadius}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															item: {
																...attributes.item,
																activeRadius: newValue,
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>
										</div>
									</>
								)}
							</>
						)}
					</TabPanel>

					<PanelColorSettings
						className="cthf__color-panel"
						title={__("Colors", "rootblox")}
						enableAlpha={true}
						colorSettings={[
							{
								label: __("Text/Icon (Default)"),
								value: attributes.item.color.text,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										item: {
											...attributes.item,
											color: {
												...attributes.item.color,
												text: newValue,
											},
										},
									}),
							},
							{
								label: __("Text/Icon (Active)"),
								value: attributes.item.color.activeText,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										item: {
											...attributes.item,
											color: {
												...attributes.item.color,
												activeText: newValue,
											},
										},
									}),
							},
							{
								label: __("Background (Default)"),
								value: attributes.item.color.bg,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										item: {
											...attributes.item,
											color: {
												...attributes.item.color,
												bg: newValue,
											},
										},
									}),
							},
							{
								label: __("Background (Active)"),
								value: attributes.item.color.activeBg,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										item: {
											...attributes.item,
											color: {
												...attributes.item.color,
												activeBg: newValue,
											},
										},
									}),
							},
						]}
					/>
				</PanelBody>
			</Panel>

			{attributes.icon.enabled && (
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
							<AttrWrapper>
								<BorderControl
									label={__("Border (Default)", "rootblox")}
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
								<BorderControl
									label={__("Border (Active)", "rootblox")}
									enableAlpha={true}
									colors={themeColorPalette}
									value={attributes.icon.activeBorder}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											icon: {
												...attributes.icon,
												activeBorder: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						</div>

						<div className="cthf__attr-divider">
							<AttrWrapper styles={{ marginTop: "0" }}>
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

							<AttrWrapper styles={{ marginTop: "0" }}>
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
						</div>

						<PanelColorSettings
							className="cthf__color-panel"
							title={__("Colors", "rootblox")}
							enableAlpha={true}
							colorSettings={[
								{
									label: __("Icon (Default)", "rootblox"),
									value: attributes.icon.color.text,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											icon: {
												...attributes.icon,
												color: {
													...attributes.icon.color,
													text: newValue,
												},
											},
										}),
								},
								{
									label: __("Icon (Active)", "rootblox"),
									value: attributes.icon.color.activeText,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											icon: {
												...attributes.icon,
												color: {
													...attributes.icon.color,
													activeText: newValue,
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
									label: __("Background (Active)", "rootblox"),
									value: attributes.icon.color.activeBg,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											icon: {
												...attributes.icon,
												color: {
													...attributes.icon.color,
													activeBg: newValue,
												},
											},
										}),
								},
							]}
						/>
					</PanelBody>
				</Panel>
			)}

			{attributes.label.enabled && (
				<Panel>
					<PanelBody
						title={__("Label Styles", "rootblox")}
						opened={openPanel === "label-styles"}
						onToggle={() => setOpenPanel("label-styles")}
					>
						<SelectControl
							label={__("Font Family", "rootblox")}
							options={googleFonts}
							value={attributes.label.font.family}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									label: {
										...attributes.label,
										font: {
											...attributes.label.font,
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
									value={attributes.label.font.size}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											label: {
												...attributes.label,
												font: {
													...attributes.label.font,
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
								value={attributes.label.font.weight}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										label: {
											...attributes.label,
											font: {
												...attributes.label.font,
												weight: newValue,
											},
										},
									})
								}
								__next40pxDefaultSize
							/>
						</div>

						<div className="cthf__attr-divider">
							<AttrWrapper styles={{ marginBottom: "0" }}>
								<ToggleGroupControl
									label={__("Letter Case", "rootblox")}
									value={attributes.label.letterCase}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											label: {
												...attributes.label,
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

							<AttrWrapper styles={{ marginBottom: "0" }}>
								<ToggleGroupControl
									label={__("Decoration", "rootblox")}
									value={attributes.label.decoration}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											label: {
												...attributes.label,
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
									value={attributes.label.lineHeight}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											label: {
												...attributes.label,
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
									value={attributes.label.letterSpacing}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											label: {
												...attributes.label,
												letterSpacing: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						</div>
					</PanelBody>
				</Panel>
			)}
		</>
	);
});
