import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderControl as BorderControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlIconOption,
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

import { memo, useContext } from "@wordpress/element";
import { select } from "@wordpress/data";

import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
} from "../../../../../resources/components/utility.js";
import { CTHFBlockContext } from "./InspectorControls.js";

export const Styles = memo(() => {
	const {
		attributes,
		setAttributes,
		navigationSelected,
		searchSelected,
		btnSelected,
	} = useContext(CTHFBlockContext);

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	const googleFonts = getFontOptions(cthfAssets.googleFonts);

	return (
		<>
			<div key="cthf-block__style" className="cthf__light-border-top">
				<AttrWrapper styles={{ marginTop: "10px" }}>
					<PanelColorSettings
						className="cthf__border-none"
						title={__("Color", "rootblox")}
						enableAlpha={true}
						colorSettings={[
							{
								label: __("Background", "rootblox"),
								value: attributes.color.bg,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										color: {
											...attributes.color,
											bg: newValue,
										},
									}),
							},
						]}
					/>
				</AttrWrapper>

				{attributes.stickyHeader.enabled && (
					<Panel>
						<PanelBody
							title={__("Sticky Styles", "cozy-addons")}
							initialOpen={false}
						>
							<AttrWrapper className="is-half__unit-control">
								<UnitControl
									label={__("Backdrop Blur", "rootblox")}
									value={attributes.stickyHeader.backdropBlur}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											stickyHeader: {
												...attributes.stickyHeader,
												backdropBlur: newValue,
											},
										})
									}
									help={__(
										"Make sure the background color of the wrapper group has opacity.",
										"rootblox",
									)}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						</PanelBody>
					</Panel>
				)}

				{attributes.mobileMenu.status !== "off" &&
					(attributes.mobileMenu.status === "mobile" ||
						attributes.mobileMenu.status === "always") && (
						<>
							<Panel>
								<PanelBody
									title={__("Mobile Menu Styles", "rootblox")}
									initialOpen={false}
								>
									<AttrWrapper>
										<BoxControl
											label={__("Wrapper Padding", "rootblox")}
											resetValues={{
												top: "0px",
												right: "0px",
												bottom: "0px",
												left: "0px",
											}}
											values={attributes.mobileMenu.wrapperPadding}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													mobileMenu: {
														...attributes.mobileMenu,
														wrapperPadding: newValue,
													},
												})
											}
										/>
									</AttrWrapper>

									<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
										<UnitControl
											label={__("Site Logo Width", "rootblox")}
											value={attributes.siteLogo.width}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													siteLogo: {
														...attributes.siteLogo,
														width: newValue,
													},
												})
											}
											__next40pxDefaultSize
										/>
									</AttrWrapper>

									<PanelColorSettings
										className="cthf__color-panel"
										title={__("Colors", "rootblox")}
										enableAlpha={true}
										colorSettings={[
											{
												label: __("Text/Icon", "rootblox"),
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
												label: __("Background", "rootblox"),
												value: attributes.color.mobileBg,
												onChange: (newValue) =>
													setAttributes({
														...attributes,
														color: {
															...attributes.color,
															mobileBg: newValue,
														},
													}),
											},
										]}
									/>
								</PanelBody>
							</Panel>

							{navigationSelected && (
								<Panel>
									<PanelBody
										title={__("Navigation Sidebar Styles", "rootblox")}
										initialOpen={false}
									>
										<AttrWrapper styles={{ marginTop: "0", maxWidth: "40%" }}>
											<UnitControl
												label={__("Sidebar Width", "rootblox")}
												value={attributes.sidebar.width}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														sidebar: {
															...attributes.sidebar,
															width: newValue,
														},
													})
												}
												__next40pxDefaultSize
											/>
										</AttrWrapper>

										<AttrWrapper>
											<BoxControl
												label={__("Sidebar Padding", "rootblox")}
												resetValues={{
													top: "0px",
													right: "0px",
													bottom: "0px",
													left: "0px",
												}}
												values={attributes.sidebar.padding}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														sidebar: {
															...attributes.sidebar,
															padding: newValue,
														},
													})
												}
											/>
										</AttrWrapper>

										<SelectControl
											label={__("Google Fonts", "rootblox")}
											options={googleFonts}
											__next40pxDefaultSize
										/>

										<PanelColorSettings
											className="cthf__color-panel"
											title={__("Colors", "rootblox")}
											enableAlpha={true}
											colorSettings={[
												{
													label: __("Sidebar Background", "rootblox"),
													value: attributes.color.sidebarBg,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															color: {
																...attributes.color,
																sidebarBg: newValue,
															},
														}),
												},
												{
													label: __("Sidebar Close Icon", "rootblox"),
													value: attributes.color.sidebarCloseIcon,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															color: {
																...attributes.color,
																sidebarCloseIcon: newValue,
															},
														}),
												},
											]}
										/>
									</PanelBody>
								</Panel>
							)}

							{cthfAssets.isPremium && (
								<>
									{btnSelected && (
										<Panel>
											<PanelBody
												title={__("Button Styles", "rootblox")}
												initialOpen={false}
											>
												<AttrWrapper>
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
														values={attributes.ctaButton.padding}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	padding: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<AttrWrapper styles={{ maxWidth: "50%" }}>
													<BorderControl
														label={__("Border", "rootblox")}
														colors={themeColorPalette}
														value={attributes.ctaButton.border}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	border: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<AttrWrapper>
													<BoxControl
														label={__("Border Radius", "rootblox")}
														resetValues={[
															{
																top: "0px",
																right: "0px",
																bottom: "0px",
																left: "0px",
															},
														]}
														values={attributes.ctaButton.radius}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	radius: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<div className="cthf__attr-divider">
													<AttrWrapper styles={{ margin: "0" }}>
														<UnitControl
															label={__("Font Size", "rootblox")}
															value={attributes.ctaButton.font.size}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		font: {
																			...attributes.ctaButton.font,
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
														value={attributes.ctaButton.font.weight}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	font: {
																		...attributes.ctaButton.font,
																		weight: newValue,
																	},
																},
															})
														}
														__next40pxDefaultSize
													/>
												</div>

												<SelectControl
													label={__("Font Family", "rootblox")}
													options={googleFonts}
													value={attributes.ctaButton.font.family}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															ctaButton: {
																...attributes.ctaButton,
																font: {
																	...attributes.ctaButton.font,
																	family: newValue,
																},
															},
														})
													}
													__next40pxDefaultSize
												/>

												<div className="cthf__attr-divider">
													<AttrWrapper>
														<ToggleGroupControl
															label={__("Letter Case", "rootblox")}
															value={attributes.ctaButton.letterCase}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		letterCase: newValue,
																	},
																})
															}
														>
															<ToggleGroupControlIconOption
																label={__("None", "rootblox")}
																icon={lineSolid}
																value="none"
															/>
															<ToggleGroupControlIconOption
																label={__("Lowercase", "rootblox")}
																icon={formatUppercase}
																value="uppercase"
															/>
															<ToggleGroupControlIconOption
																label={__("Uppercase", "rootblox")}
																icon={formatLowercase}
																value="lowercase"
															/>
															<ToggleGroupControlIconOption
																label={__("Capitalize", "rootblox")}
																icon={formatCapitalize}
																value="capitalize"
															/>
														</ToggleGroupControl>
													</AttrWrapper>

													<AttrWrapper>
														<ToggleGroupControl
															label={__("Decoration", "rootblox")}
															value={attributes.ctaButton.decoration}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		decoration: newValue,
																	},
																})
															}
														>
															<ToggleGroupControlIconOption
																label={__("None", "rootblox")}
																icon={lineSolid}
																value="none"
															/>
															<ToggleGroupControlIconOption
																label={__("Underline", "rootblox")}
																icon={formatUnderline}
																value="underline"
															/>
															<ToggleGroupControlIconOption
																label={__("Strikethrough", "rootblox")}
																icon={formatStrikethrough}
																value="line-through"
															/>
														</ToggleGroupControl>
													</AttrWrapper>
												</div>

												<div className="cthf__attr-divider">
													<AttrWrapper styles={{ margin: "0" }}>
														<UnitControl
															label={__("Line Height", "rootblox")}
															value={attributes.ctaButton.lineHeight}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		lineHeight: newValue,
																	},
																})
															}
															__next40pxDefaultSize
														/>
													</AttrWrapper>

													<AttrWrapper styles={{ margin: "0" }}>
														<UnitControl
															label={__("Letter Spacing", "rootblox")}
															value={attributes.ctaButton.letterSpacing}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
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
													title={__("Colors", "rootblox")}
													enableAlpha={true}
													colorSettings={[
														{
															label: __("Text (Default)", "rootblox"),
															value: attributes.ctaButton.color.text,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			text: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Text (Hover)", "rootblox"),
															value: attributes.ctaButton.color.textHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			textHover: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Background (Default)", "rootblox"),
															value: attributes.ctaButton.color.bg,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			bg: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Background (Hover)", "rootblox"),
															value: attributes.ctaButton.color.bgHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			bgHover: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Border (Hover)", "rootblox"),
															value: attributes.ctaButton.color.borderHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
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
								</>
							)}
						</>
					)}
			</div>
		</>
	);
});
