import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	SelectControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalBoxControl as BoxControl,
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

import { CTHFBlockContext } from "../index.js";
import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
} from "../../../../../resources/components/utility.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState("spacing");

	const googleFonts = getFontOptions(cthfAssets.googleFonts);

	return (
		<>
			<Panel>
				<PanelBody
					title={__("Spacing", "rootblox")}
					opened={openPanel === "spacing"}
					onToggle={() => setOpenPanel("spacing")}
				>
					<AttrWrapper styles={{ margin: "0" }}>
						<BoxControl
							label={__("Padding", "rootblox")}
							resetValues={[
								{
									top: "0",
									right: "0",
									bottom: "0",
									left: "0",
								},
							]}
							values={attributes.padding}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									padding: newValue,
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>

					<AttrWrapper>
						<BoxControl
							label={__("Margin", "rootblox")}
							resetValues={[
								{
									top: "0",
									right: "0",
									bottom: "0",
									left: "0",
								},
							]}
							values={attributes.margin}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									margin: newValue,
								})
							}
							__next40pxDefaultSize
						/>
					</AttrWrapper>
				</PanelBody>
			</Panel>

			<Panel>
				<PanelBody
					title={__("Typography", "rootblox")}
					className="cthf__light-border-bottom"
					opened={openPanel === "typography"}
					onToggle={() => setOpenPanel("typography")}
				>
					<SelectControl
						label={__("Font Family", "rootblox")}
						options={googleFonts}
						value={attributes.typography.font.family}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								typography: {
									...attributes.typography,
									font: {
										...attributes.typography.font,
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
								value={attributes.typography.font.size}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										typography: {
											...attributes.typography,
											font: {
												...attributes.typography.font,
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
							value={attributes.typography.font.weight}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									typography: {
										...attributes.typography,
										font: {
											...attributes.typography.font,
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
								value={attributes.typography.letterCase}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										typography: {
											...attributes.typography,
											letterCase: newValue,
										},
									})
								}
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
								value={attributes.typography.decoration}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										typography: {
											...attributes.typography,
											decoration: newValue,
										},
									})
								}
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
								value={attributes.typography.lineHeight}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										typography: {
											...attributes.typography,
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
								value={attributes.typography.letterSpacing}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										typography: {
											...attributes.typography,
											letterSpacing: newValue,
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>
					</div>

					<PanelColorSettings
						title={__("Colors", "rootblox")}
						className="cthf__color-panel"
						enableAlpha={true}
						colorSettings={[
							{
								label: __("Text (Default)", "rootblox"),
								value: attributes.color.text,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										color: {
											...attributes.color,
											text: newValue,
										},
									}),
							},
							{
								label: __("Text (Hover)", "rootblox"),
								value: attributes.color.textHover,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										color: {
											...attributes.color,
											textHover: newValue,
										},
									}),
							},
						]}
					/>
				</PanelBody>
			</Panel>

			{attributes.beforeText.enabled && (
				<Panel>
					<PanelBody
						title={__("Preceeding Text Typography", "rootblox")}
						className="cthf__light-border-bottom"
						opened={openPanel === "before-text-typography"}
						onToggle={() => setOpenPanel("before-text-typography")}
					>
						<SelectControl
							label={__("Font Family", "rootblox")}
							options={googleFonts}
							value={attributes.beforeText.font.family}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									beforeText: {
										...attributes.beforeText,
										font: {
											...attributes.beforeText.font,
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
									value={attributes.beforeText.font.size}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											beforeText: {
												...attributes.beforeText,
												font: {
													...attributes.beforeText.font,
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
								value={attributes.beforeText.font.weight}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										beforeText: {
											...attributes.beforeText,
											font: {
												...attributes.beforeText.font,
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
									value={attributes.beforeText.letterCase}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											beforeText: {
												...attributes.beforeText,
												letterCase: newValue,
											},
										})
									}
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
									value={attributes.beforeText.decoration}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											beforeText: {
												...attributes.beforeText,
												decoration: newValue,
											},
										})
									}
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
									value={attributes.beforeText.lineHeight}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											beforeText: {
												...attributes.beforeText,
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
									value={attributes.beforeText.letterSpacing}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											beforeText: {
												...attributes.beforeText,
												letterSpacing: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						</div>

						<PanelColorSettings
							title={__("Colors", "rootblox")}
							className="cthf__color-panel"
							enableAlpha={true}
							colorSettings={[
								{
									label: __("Text (Default)", "rootblox"),
									value: attributes.beforeText.color.text,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											beforeText: {
												...attributes.beforeText,
												color: {
													...attributes.beforeText.color,
													text: newValue,
												},
											},
										}),
								},
								{
									label: __("Text (Hover)", "rootblox"),
									value: attributes.beforeText.color.textHover,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											beforeText: {
												...attributes.beforeText,
												color: {
													...attributes.beforeText.color,
													textHover: newValue,
												},
											},
										}),
								},
							]}
						/>
					</PanelBody>
				</Panel>
			)}

			{attributes.dynamicYear.enabled && (
				<Panel>
					<PanelBody
						title={__("Dynamic Year Typography", "rootblox")}
						opened={openPanel === "year-typography"}
						onToggle={() => setOpenPanel("year-typography")}
					>
						<SelectControl
							label={__("Font Family", "rootblox")}
							options={googleFonts}
							value={attributes.dynamicYear.font.family}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									dynamicYear: {
										...attributes.dynamicYear,
										font: {
											...attributes.dynamicYear.font,
											family: newValue,
										},
									},
								})
							}
							__next40pxDefaultSize
						/>

						<div
							className="cthf__attr-divider"
							style={{ marginBottom: "22px" }}
						>
							<AttrWrapper styles={{ margin: "0" }}>
								<UnitControl
									label={__("Font Size", "rootblox")}
									value={attributes.dynamicYear.font.size}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											dynamicYear: {
												...attributes.dynamicYear,
												font: {
													...attributes.dynamicYear.font,
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
								value={attributes.dynamicYear.font.weight}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										dynamicYear: {
											...attributes.dynamicYear,
											font: {
												...attributes.dynamicYear.font,
												weight: newValue,
											},
										},
									})
								}
								__next40pxDefaultSize
							/>
						</div>

						<PanelColorSettings
							title={__("Colors", "rootblox")}
							className="cthf__color-panel"
							enableAlpha={true}
							colorSettings={[
								{
									label: __("Text", "rootblox"),
									value: attributes.dynamicYear.color.text,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											dynamicYear: {
												...attributes.dynamicYear,
												color: {
													...attributes.dynamicYear.color,
													text: newValue,
												},
											},
										}),
								},
							]}
						/>
					</PanelBody>
				</Panel>
			)}

			{attributes.afterText.enabled && (
				<Panel>
					<PanelBody
						title={__("Subsequent Text Typography", "rootblox")}
						className="cthf__light-border-bottom"
						opened={openPanel === "after-text-typography"}
						onToggle={() => setOpenPanel("after-text-typography")}
					>
						<SelectControl
							label={__("Font Family", "rootblox")}
							options={googleFonts}
							value={attributes.afterText.font.family}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									afterText: {
										...attributes.afterText,
										font: {
											...attributes.afterText.font,
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
									value={attributes.afterText.font.size}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											afterText: {
												...attributes.afterText,
												font: {
													...attributes.afterText.font,
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
								value={attributes.afterText.font.weight}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										afterText: {
											...attributes.afterText,
											font: {
												...attributes.afterText.font,
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
									value={attributes.afterText.letterCase}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											afterText: {
												...attributes.afterText,
												letterCase: newValue,
											},
										})
									}
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
									value={attributes.afterText.decoration}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											afterText: {
												...attributes.afterText,
												decoration: newValue,
											},
										})
									}
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
									value={attributes.afterText.lineHeight}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											afterText: {
												...attributes.afterText,
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
									value={attributes.afterText.letterSpacing}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											afterText: {
												...attributes.afterText,
												letterSpacing: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						</div>

						<PanelColorSettings
							title={__("Colors", "rootblox")}
							className="cthf__color-panel"
							enableAlpha={true}
							colorSettings={[
								{
									label: __("Text (Default)", "rootblox"),
									value: attributes.afterText.color.text,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											afterText: {
												...attributes.afterText,
												color: {
													...attributes.afterText.color,
													text: newValue,
												},
											},
										}),
								},
								{
									label: __("Text (Hover)", "rootblox"),
									value: attributes.afterText.color.textHover,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											afterText: {
												...attributes.afterText,
												color: {
													...attributes.afterText.color,
													textHover: newValue,
												},
											},
										}),
								},
							]}
						/>
					</PanelBody>
				</Panel>
			)}
		</>
	);
});
