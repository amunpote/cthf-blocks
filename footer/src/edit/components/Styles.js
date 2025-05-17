import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	__experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
	__experimentalBorderControl as BorderControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupContrlOptionIcon,
	TextControl,
	SelectControl,
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

import { CTHFBlockContext } from "./InspectorControls.js";
import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
} from "../../../../../resources/components/utility.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	const [openPanel, setOpenPanel] = useState(null);

	const googleFonts = getFontOptions(cthfAssets.googleFonts);

	return (
		<>
			<div key="cthf-block__style" className="cthf__light-border-top">
				{attributes.backToTop.enabled && (
					<Panel>
						<PanelBody
							className="cthf__light-border-bottom"
							title={__("Back to Top Button Styles", "rootblox")}
							opened={openPanel === "back-to-top-styles"}
							onToggle={() => setOpenPanel("back-to-top-styles")}
						>
							<AttrWrapper>
								<BoxControl
									label={__("Margin", "rootblox")}
									resetValues={[
										{
											top: "0px",
											right: "0px",
											bottom: "0px",
											left: "0px",
										},
									]}
									values={attributes.backToTop.margin}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											backToTop: {
												...attributes.backToTop,
												margin: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>

							<div className="cthf__attr-divider">
								<AttrWrapper styles={{ marginTop: "0" }}>
									<UnitControl
										label={__("Box Width", "rootblox")}
										value={attributes.backToTop.boxWidth}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
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
										value={attributes.backToTop.boxHeight}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													boxHeight: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</div>

							<AttrWrapper styles={{ margin: "0", maxWidth: "50%" }}>
								<UnitControl
									label={__("Icon Size", "rootblox")}
									value={attributes.backToTop.iconSize}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											backToTop: {
												...attributes.backToTop,
												iconSize: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>

							<div className="cthf__attr-divider">
								<AttrWrapper styles={{ maxWidth: "50%" }}>
									<BorderControl
										label={__("Border", "rootblox")}
										enableAlpha={true}
										colors={themeColorPalette}
										value={attributes.backToTop.border}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
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
										value={attributes.backToTop.radius}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													radius: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</div>

							{attributes.backToTop.enableLabel && (
								<>
									<SelectControl
										label={__("Font Family", "rootblox")}
										options={googleFonts}
										value={attributes.backToTop.font.family}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													font: {
														...attributes.backToTop.font,
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
												value={attributes.backToTop.font.size}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														backToTop: {
															...attributes.backToTop,
															font: {
																...attributes.backToTop.font,
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
											value={attributes.backToTop.font.weight}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													backToTop: {
														...attributes.backToTop,
														font: {
															...attributes.backToTop.font,
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
												value={attributes.backToTop.letterCase}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														backToTop: {
															...attributes.backToTop,
															letterCase: newValue,
														},
													})
												}
											>
												<ToggleGroupContrlOptionIcon
													label={__("None", "rootblox")}
													value="none"
													icon={lineSolid}
												/>
												<ToggleGroupContrlOptionIcon
													label={__("Uppercase", "rootblox")}
													value="uppercase"
													icon={formatUppercase}
												/>
												<ToggleGroupContrlOptionIcon
													label={__("Lowercase", "rootblox")}
													value="lowercase"
													icon={formatLowercase}
												/>
												<ToggleGroupContrlOptionIcon
													label={__("Capitalize", "rootblox")}
													value="capitalize"
													icon={formatCapitalize}
												/>
											</ToggleGroupControl>
										</AttrWrapper>

										<AttrWrapper styles={{ marginBottom: "0" }}>
											<ToggleGroupControl
												label={__("Decoration", "rootblox")}
												value={attributes.backToTop.decoration}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														backToTop: {
															...attributes.backToTop,
															decoration: newValue,
														},
													})
												}
											>
												<ToggleGroupContrlOptionIcon
													label={__("None", "rootblox")}
													value="none"
													icon={lineSolid}
												/>
												<ToggleGroupContrlOptionIcon
													label={__("Underline", "rootblox")}
													value="underline"
													icon={formatUnderline}
												/>
												<ToggleGroupContrlOptionIcon
													label={__("Strikethrough", "rootblox")}
													value="line-through"
													icon={formatStrikethrough}
												/>
											</ToggleGroupControl>
										</AttrWrapper>
									</div>

									<div className="cthf__attr-divider">
										<AttrWrapper styles={{ marginTop: "0" }}>
											<UnitControl
												label={__("Line Height", "rootblox")}
												value={attributes.backToTop.lineHeight}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														backToTop: {
															...attributes.backToTop,
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
												value={attributes.backToTop.letterSpacing}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														backToTop: {
															...attributes.backToTop,
															letterSpacing: newValue,
														},
													})
												}
												__next40pxDefaultSize
											/>
										</AttrWrapper>
									</div>
								</>
							)}

							<PanelColorSettings
								className="cthf__color-panel"
								enableAlpha={true}
								title={__("Colors", "rootblox")}
								colorSettings={[
									{
										label: __("Icon/Text (Default)", "rootblox"),
										value: attributes.backToTop.color.icon,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													color: {
														...attributes.backToTop.color,
														icon: newValue,
													},
												},
											}),
									},
									{
										label: __("Icon/Text (Hover)", "rootblox"),
										value: attributes.backToTop.color.iconHover,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													color: {
														...attributes.backToTop.color,
														iconHover: newValue,
													},
												},
											}),
									},
									{
										label: __("Background (Default)", "rootblox"),
										value: attributes.backToTop.color.bg,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													color: {
														...attributes.backToTop.color,
														bg: newValue,
													},
												},
											}),
									},
									{
										label: __("Background (Hover)", "rootblox"),
										value: attributes.backToTop.color.bgHover,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													color: {
														...attributes.backToTop.color,
														bgHover: newValue,
													},
												},
											}),
									},
									{
										label: __("Border (Hover)", "rootblox"),
										value: attributes.backToTop.color.borderHover,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												backToTop: {
													...attributes.backToTop,
													color: {
														...attributes.backToTop.color,
														borderHover: newValue,
													},
												},
											}),
									},
								]}
							/>
						</PanelBody>
					</Panel>
				)}

				{cthfAssets.isPremium && attributes.scrollProgress.enabled && (
					<Panel>
						<PanelBody
							className="cthf__light-border-bottom"
							title={__("Site Scroll Progress Styles", "rootblox")}
							opened={openPanel === "scroll-progress-styles"}
							onToggle={() => setOpenPanel("scroll-progress-styles")}
						>
							<div className="cthf__attr-divider">
								<AttrWrapper styles={{ marginTop: "0" }}>
									<UnitControl
										label={__("Margin Top", "rootblox")}
										value={attributes.scrollProgress.margin.top}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												scrollProgress: {
													...attributes.scrollProgress,
													margin: {
														...attributes.scrollProgress.margin,
														top: newValue,
													},
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>

								<AttrWrapper styles={{ marginTop: "0" }}>
									<UnitControl
										label={__("Margin Bottom", "rootblox")}
										value={attributes.scrollProgress.margin.bottom}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												scrollProgress: {
													...attributes.scrollProgress,
													margin: {
														...attributes.scrollProgress.margin,
														bottom: newValue,
													},
												},
											})
										}
										__next40pxDefaultSize
									/>
								</AttrWrapper>
							</div>

							<AttrWrapper styles={{ maxWidth: "50%", marginTop: "0" }}>
								<TextControl
									label={__("Z Index", "rootblox")}
									value={attributes.scrollProgress.zIndex}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											scrollProgress: {
												...attributes.scrollProgress,
												zIndex: newValue,
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
										label: __("Progress", "rootblox"),
										value: attributes.scrollProgress.color.bg,
										onChange: (newValue) =>
											setAttributes({
												...attributes,
												scrollProgress: {
													...attributes.scrollProgress,
													color: {
														...attributes.scrollProgress.color,
														bg: newValue,
													},
												},
											}),
									},
								]}
							/>
						</PanelBody>
					</Panel>
				)}
			</div>
		</>
	);
});
