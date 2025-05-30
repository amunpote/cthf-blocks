import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	TabPanel,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderControl as BorderControl,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlIconOption,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	SelectControl,
	Button,
	CheckboxControl,
	SVG,
	Path,
} from "@wordpress/components";

import {
	lineSolid,
	formatUppercase,
	formatLowercase,
	formatCapitalize,
	formatUnderline,
	formatStrikethrough,
	button,
	siteLogo,
} from "@wordpress/icons";

import { memo, useContext, useState } from "@wordpress/element";
import { select } from "@wordpress/data";

import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
} from "../../../../../resources/components/utility.js";
import { CTHFBlockControlsContext } from "./InspectorControls.js";

import {
	navIconVariation1,
	navIconVariation2,
	navIconVariation3,
	cartIconVariation1,
	cartIconVariation2,
	cartIconVariation3,
	accIconVariation1,
	accIconVariation2,
	accIconVariation3,
} from "../utils.js";

export const Styles = memo(() => {
	const {
		attributes,
		setAttributes,
		deviceType,
		logoSelected,
		navigationSelected,
		searchSelected,
		btnSelected,
		miniCartSelected,
		accSelected,
		setSidebarPreview,
	} = useContext(CTHFBlockControlsContext);

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	const googleFonts = getFontOptions(cthfAssets.googleFonts);

	const [openPanel, setOpenPanel] = useState(null);

	const togglePanel = (panelName) => {
		setOpenPanel((current) => (current === panelName ? null : panelName));
	};

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
							opened={openPanel === "sticky-styles"}
							onToggle={() => togglePanel("sticky-styles")}
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

				<Panel>
					<PanelBody
						title={__("Search Overlay Styles", "rootblox")}
						opened={openPanel === "search-styles"}
						onToggle={() => togglePanel("search-styles")}
					>
						<div style={{ marginTop: "-9px" }}>
							<TabPanel
								title={__("Typography", "rootblox")}
								className="cthf__tab-panel attr-panel"
								tabs={[
									{
										title: __("Heading", "rootblox"),
										name: "cthf__tab-1",
										className: "cthf__tab attr-tab",
									},
									{
										title: __("Post Title", "rootblox"),
										name: "cthf__tab-2",
										className: "cthf__tab attr-tab",
									},
								]}
								activeClass="attr-active"
							>
								{(tab) => (
									<>
										{tab.name === "cthf__tab-1" && (
											<>
												<AttrWrapper styles={{ marginBottom: "0" }}>
													<SelectControl
														label={__("Font Family", "rootblox")}
														options={googleFonts}
														value={attributes.search.heading.font.family}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																search: {
																	...attributes.search,
																	heading: {
																		...attributes.search.heading,
																		font: {
																			...attributes.search.heading.font,
																			family: newValue,
																		},
																	},
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
															value={attributes.search.heading.font.size}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		heading: {
																			...attributes.search.heading,
																			font: {
																				...attributes.search.heading.font,
																				size: newValue,
																			},
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
														value={attributes.search.heading.font.weight}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																search: {
																	...attributes.search,
																	heading: {
																		...attributes.search.heading,
																		font: {
																			...attributes.search.heading.font,
																			weight: newValue,
																		},
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
															value={attributes.search.heading.letterCase}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		heading: {
																			...attributes.search.heading,
																			letterCase: newValue,
																		},
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
																label={__("Uppercase", "rootblox")}
																icon={formatUppercase}
																value="uppercase"
															/>
															<ToggleGroupControlIconOption
																label={__("Lowercase", "rootblox")}
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

													<AttrWrapper styles={{ marginBottom: "0" }}>
														<ToggleGroupControl
															label={__("Decoration", "rootblox")}
															value={attributes.search.heading.decoration}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		heading: {
																			...attributes.search.heading,
																			decoration: newValue,
																		},
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
													<AttrWrapper styles={{ marginTop: "0" }}>
														<UnitControl
															label={__("Line Height", "rootblox")}
															value={attributes.search.heading.lineHeight}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		heading: {
																			...attributes.search.heading,
																			lineHeight: newValue,
																		},
																	},
																})
															}
															__next40pxDefaultSize
														/>
													</AttrWrapper>

													<AttrWrapper styles={{ marginTop: "0" }}>
														<UnitControl
															label={__("Letter Spacing", "rootblox")}
															value={attributes.search.heading.letterSpacing}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		heading: {
																			...attributes.search.heading,
																			letterSpacing: newValue,
																		},
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
												<AttrWrapper styles={{ marginBottom: "0" }}>
													<SelectControl
														label={__("Font Family", "rootblox")}
														options={googleFonts}
														value={attributes.search.postTitle.font.family}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																search: {
																	...attributes.search,
																	postTitle: {
																		...attributes.search.postTitle,
																		font: {
																			...attributes.search.postTitle.font,
																			family: newValue,
																		},
																	},
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
															value={attributes.search.postTitle.font.size}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		postTitle: {
																			...attributes.search.postTitle,
																			font: {
																				...attributes.search.postTitle.font,
																				size: newValue,
																			},
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
														value={attributes.search.postTitle.font.weight}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																search: {
																	...attributes.search,
																	postTitle: {
																		...attributes.search.postTitle,
																		font: {
																			...attributes.search.postTitle.font,
																			weight: newValue,
																		},
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
															value={attributes.search.postTitle.letterCase}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		postTitle: {
																			...attributes.search.postTitle,
																			letterCase: newValue,
																		},
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
																label={__("Uppercase", "rootblox")}
																icon={formatUppercase}
																value="uppercase"
															/>
															<ToggleGroupControlIconOption
																label={__("Lowercase", "rootblox")}
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

													<AttrWrapper styles={{ marginBottom: "0" }}>
														<ToggleGroupControl
															label={__("Decoration", "rootblox")}
															value={attributes.search.postTitle.decoration}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		postTitle: {
																			...attributes.search.postTitle,
																			decoration: newValue,
																		},
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
													<AttrWrapper styles={{ marginTop: "0" }}>
														<UnitControl
															label={__("Line Height", "rootblox")}
															value={attributes.search.postTitle.lineHeight}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		postTitle: {
																			...attributes.search.postTitle,
																			lineHeight: newValue,
																		},
																	},
																})
															}
															__next40pxDefaultSize
														/>
													</AttrWrapper>

													<AttrWrapper styles={{ marginTop: "0" }}>
														<UnitControl
															label={__("Letter Spacing", "rootblox")}
															value={attributes.search.postTitle.letterSpacing}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	search: {
																		...attributes.search,
																		postTitle: {
																			...attributes.search.postTitle,
																			letterSpacing: newValue,
																		},
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
						</div>

						<PanelColorSettings
							className="cthf__color-panel"
							enableAlpha={true}
							title={__("Colors", "rootblox")}
							colorSettings={[
								{
									label: __("Heading", "rootblox"),
									value: attributes.search.color.heading,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												color: {
													...attributes.search.color,
													heading: newValue,
												},
											},
										}),
								},
								{
									label: __("Text", "rootblox"),
									value: attributes.search.color.text,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												color: {
													...attributes.search.color,
													text: newValue,
												},
											},
										}),
								},
								{
									label: __("Link (Default)", "rootblox"),
									value: attributes.search.color.link,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												color: {
													...attributes.search.color,
													link: newValue,
												},
											},
										}),
								},
								{
									label: __("Link (Hover)", "rootblox"),
									value: attributes.search.color.linkHover,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												color: {
													...attributes.search.color,
													linkHover: newValue,
												},
											},
										}),
								},
								{
									label: __("Overlay", "rootblox"),
									value: attributes.search.color.overlay,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												color: {
													...attributes.search.color,
													overlay: newValue,
												},
											},
										}),
								},
								{
									label: __("Close Icon", "rootblox"),
									value: attributes.search.color.close,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												color: {
													...attributes.search.color,
													close: newValue,
												},
											},
										}),
								},
							]}
						/>
					</PanelBody>
				</Panel>

				{attributes.mobileMenu.status !== "off" &&
					((attributes.mobileMenu.status === "mobile" &&
						(deviceType === "Tablet" || deviceType === "Mobile")) ||
						attributes.mobileMenu.status === "always") && (
						<>
							<Panel>
								<PanelBody
									title={__("Responsive Menu Styles", "rootblox")}
									opened={openPanel === "mobile-menu-styles"}
									onToggle={() => togglePanel("mobile-menu-styles")}
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
											__next40pxDefaultSize
										/>
									</AttrWrapper>

									<AttrWrapper styles={{ marginTop: "0" }}>
										<BorderBoxControl
											label={__("Wrapper Border", "rootblox")}
											enableAlpha={true}
											colors={themeColorPalette}
											value={attributes.mobileMenu.wrapperBorder}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													mobileMenu: {
														...attributes.mobileMenu,
														wrapperBorder: newValue,
													},
												})
											}
											__next40pxDefaultSize
										/>
									</AttrWrapper>

									<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
										<UnitControl
											label={__("Icon Size", "rootblox")}
											value={attributes.mobileMenu.iconSize}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													mobileMenu: {
														...attributes.mobileMenu,
														iconSize: newValue,
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
												label: __("Icon (Hover)", "rootblox"),
												value: attributes.color.iconHover,
												onChange: (newValue) =>
													setAttributes({
														...attributes,
														color: {
															...attributes.color,
															iconHover: newValue,
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

							{logoSelected && attributes.siteLogo.enableTitle && (
								<>
									<Panel>
										<PanelBody
											title={__("Site Identity Styles", "rootblox")}
											opened={openPanel === "site-identity-styles"}
											onToggle={() => togglePanel("site-identity-styles")}
										>
											<SelectControl
												label={__("Font Family", "rootblox")}
												options={googleFonts}
												value={attributes.siteLogo.font.family}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														siteLogo: {
															...attributes.siteLogo,
															font: {
																...attributes.siteLogo.font,
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
														value={attributes.siteLogo.font.size}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
																	font: {
																		...attributes.siteLogo.font,
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
													value={attributes.siteLogo.font.weight}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															siteLogo: {
																...attributes.siteLogo,
																font: {
																	...attributes.siteLogo.font,
																	weight: newValue,
																},
															},
														})
													}
													__next40pxDefaultSize
												/>
											</div>

											<div className="cthf__attr-divider">
												<AttrWrapper styles={{ margin: "10px 0" }}>
													<ToggleGroupControl
														label={__("Letter Case", "rootblox")}
														value={attributes.siteLogo.letterCase}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
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

												<AttrWrapper styles={{ margin: "10px 0" }}>
													<ToggleGroupControl
														label={__("Decoration", "rootblox")}
														value={attributes.siteLogo.decoration}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
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
												<AttrWrapper styles={{ marginTop: "0" }}>
													<UnitControl
														label={__("Line Height", "rootblox")}
														value={attributes.siteLogo.lineHeight}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
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
														value={attributes.siteLogo.letterSpacing}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
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
														value: attributes.siteLogo.color.text,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
																	color: {
																		...attributes.siteLogo.color,
																		text: newValue,
																	},
																},
															}),
													},
													{
														label: __("Text (Hover)", "rootblox"),
														value: attributes.siteLogo.color.textHover,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
																	color: {
																		...attributes.siteLogo.color,
																		textHover: newValue,
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

							{cthfAssets.isPremium && (
								<>
									{btnSelected && (
										<Panel>
											<PanelBody
												title={__("CTA Button Styles", "rootblox")}
												opened={openPanel === "cta-button-styles"}
												onToggle={() => togglePanel("cta-button-styles")}
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
														enableAlpha={true}
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

												<div className="cthf__attr-divider">
													<AttrWrapper styles={{ margin: "10px 0" }}>
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

													<AttrWrapper styles={{ margin: "10px 0" }}>
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
													<AttrWrapper styles={{ marginTop: "0" }}>
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

													<AttrWrapper styles={{ marginTop: "0" }}>
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

									{miniCartSelected && (
										<Panel>
											<PanelBody
												title={__("Mini Cart Icon Styles", "rootblox")}
												opened={openPanel === "mini-cart-icon-styles"}
												onToggle={() => togglePanel("mini-cart-icon-styles")}
											>
												<AttrWrapper styles={{ marginTop: "0" }}>
													<ToggleGroupControl
														label={__("Icon Variation", "rootblox")}
														value={attributes.miniCart.icon}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																miniCart: {
																	...attributes.miniCart,
																	icon: newValue,
																},
															})
														}
														isBlock
														__next40pxDefaultSize
													>
														<ToggleGroupControlIconOption
															label={__("Variation 1", "rootblox")}
															icon={cartIconVariation1}
															value="variation-1"
														/>
														<ToggleGroupControlIconOption
															label={__("Variation 2", "rootblox")}
															icon={cartIconVariation2}
															value="variation-2"
														/>
														<ToggleGroupControlIconOption
															label={__("Variation 3", "rootblox")}
															icon={cartIconVariation3}
															value="variation-3"
														/>
													</ToggleGroupControl>
												</AttrWrapper>

												<AttrWrapper
													styles={{ marginTop: "0", maxWidth: "50%" }}
												>
													<UnitControl
														label={__("Icon Size", "rootblox")}
														value={attributes.miniCart.iconSize}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																miniCart: {
																	...attributes.miniCart,
																	iconSize: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<SelectControl
													label={__("Font Family", "rootblox")}
													options={googleFonts}
													value={attributes.miniCart.font.family}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															miniCart: {
																...attributes.miniCart,
																font: {
																	...attributes.miniCart.font,
																	family: newValue,
																},
															},
														})
													}
													__next40pxDefaultSize
												/>

												<div className="cthf__attr-divider">
													<AttrWrapper styles={{ marginTop: "0" }}>
														<UnitControl
															label={__("Font Size", "rootblox")}
															value={attributes.miniCart.font.size}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	miniCart: {
																		...attributes.miniCart,
																		font: {
																			...attributes.miniCart.font,
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
														value={attributes.miniCart.font.weight}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																miniCart: {
																	...attributes.miniCart,
																	font: {
																		...attributes.miniCart.font,
																		weight: newValue,
																	},
																},
															})
														}
														__next40pxDefaultSize
													/>
												</div>

												<PanelColorSettings
													className="cthf__color-panel"
													enableAlpha={true}
													title={__("Color", "rootblox")}
													colorSettings={[
														{
															label: __("Icon (Default)", "rootblox"),
															value: attributes.miniCart.color.icon,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	miniCart: {
																		...attributes.miniCart,
																		color: {
																			...attributes.miniCart.color,
																			icon: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Icon (Hover)", "rootblox"),
															value: attributes.miniCart.color.iconHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	miniCart: {
																		...attributes.miniCart,
																		color: {
																			...attributes.miniCart.color,
																			iconHover: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Text", "rootblox"),
															value: attributes.miniCart.color.text,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	miniCart: {
																		...attributes.miniCart,
																		color: {
																			...attributes.miniCart.color,
																			text: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Text Background", "rootblox"),
															value: attributes.miniCart.color.textBg,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	miniCart: {
																		...attributes.miniCart,
																		color: {
																			...attributes.miniCart.color,
																			textBg: newValue,
																		},
																	},
																}),
														},
													]}
												/>
											</PanelBody>
										</Panel>
									)}

									{accSelected && (
										<Panel>
											<PanelBody
												title={__("Account Icon Styles", "rootblox")}
												opened={openPanel === "account-icon-styles"}
												onToggle={() => togglePanel("account-icon-styles")}
											>
												<AttrWrapper styles={{ marginTop: "0" }}>
													<ToggleGroupControl
														label={__("Icon Variation", "rootblox")}
														value={attributes.acc.icon}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																acc: {
																	...attributes.acc,
																	icon: newValue,
																},
															})
														}
														isBlock
														__next40pxDefaultSize
													>
														<ToggleGroupControlIconOption
															label={__("Variation 1", "rootblox")}
															icon={accIconVariation1}
															value="variation-1"
														/>
														<ToggleGroupControlIconOption
															label={__("Variation 2", "rootblox")}
															icon={accIconVariation2}
															value="variation-2"
														/>
														<ToggleGroupControlIconOption
															label={__("Variation 3", "rootblox")}
															icon={accIconVariation3}
															value="variation-3"
														/>
													</ToggleGroupControl>
												</AttrWrapper>

												<AttrWrapper
													styles={{ marginTop: "0", maxWidth: "50%" }}
												>
													<UnitControl
														label={__("Icon Size", "rootblox")}
														value={attributes.acc.iconSize}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																acc: {
																	...attributes.acc,
																	iconSize: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<PanelColorSettings
													className="cthf__color-panel"
													enableAlpha={true}
													title={__("Color", "rootblox")}
													colorSettings={[
														{
															label: __("Icon (Default)", "rootblox"),
															value: attributes.acc.color.icon,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	acc: {
																		...attributes.acc,
																		color: {
																			...attributes.acc.color,
																			icon: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Icon (Hover)", "rootblox"),
															value: attributes.acc.color.iconHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	acc: {
																		...attributes.acc,
																		color: {
																			...attributes.acc.color,
																			iconHover: newValue,
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

							{navigationSelected && (
								<>
									<Panel>
										<PanelBody
											title={__("Menu Icon Styles", "rootblox")}
											opened={openPanel === "menu-icon-styles"}
											onToggle={() => togglePanel("menu-icon-styles")}
										>
											<AttrWrapper styles={{ marginTop: "0" }}>
												<ToggleGroupControl
													label={__("Icon Variation", "rootblox")}
													value={attributes.navigation.icon}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															navigation: {
																...attributes.navigation,
																icon: newValue,
															},
														})
													}
													isBlock
													__next40pxDefaultSize
												>
													<ToggleGroupControlIconOption
														label={__("Variation 1", "rootblox")}
														icon={navIconVariation2}
														value="variation-2"
													/>
													<ToggleGroupControlIconOption
														label={__("Variation 2", "rootblox")}
														icon={navIconVariation1}
														value="variation-1"
													/>
													<ToggleGroupControlIconOption
														label={__("Variation 3", "rootblox")}
														icon={navIconVariation3}
														value="variation-3"
													/>
												</ToggleGroupControl>
											</AttrWrapper>

											<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
												<UnitControl
													label={__("Icon Size", "rootblox")}
													value={attributes.navigation.iconSize}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															navigation: {
																...attributes.navigation,
																iconSize: newValue,
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>

											<PanelColorSettings
												className="cthf__color-panel"
												enableAlpha={true}
												title={__("Color", "rootblox")}
												colorSettings={[
													{
														label: __("Icon (Default)", "rootblox"),
														value: attributes.navigation.color.icon,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																navigation: {
																	...attributes.navigation,
																	color: {
																		...attributes.navigation.color,
																		icon: newValue,
																	},
																},
															}),
													},
													{
														label: __("Icon (Hover)", "rootblox"),
														value: attributes.navigation.color.iconHover,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																navigation: {
																	...attributes.navigation,
																	color: {
																		...attributes.navigation.color,
																		iconHover: newValue,
																	},
																},
															}),
													},
												]}
											/>
										</PanelBody>

										<PanelBody
											title={__("Sidebar Panel Styles", "rootblox")}
											opened={openPanel === "sidebar-panel-styles"}
											onToggle={() => togglePanel("sidebar-panel-styles")}
										>
											<Button
												className="cthf__btn-secondary"
												style={{ margin: "0 0 22px" }}
												text={__("Preview Changes", "rootblox")}
												onClick={() => setSidebarPreview(true)}
											/>

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

											<AttrWrapper styles={{ marginBottom: "0" }}>
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
													__next40pxDefaultSize
												/>
											</AttrWrapper>

											<TabPanel
												className="cthf__tab-panel attr-panel"
												tabs={[
													{
														title: __("Site Info", "rootblox"),
														name: "cthf__tab-4",
														className: "cthf__tab attr-tab",
														icon: siteLogo,
													},
													{
														title: __("Menu", "rootblox"),
														name: "cthf__tab-1",
														className: "cthf__tab attr-tab",
														icon: (
															<SVG
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<Path
																	d="M3 12H21"
																	stroke="currentColor"
																	strokeWidth="1.25"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<Path
																	d="M3 6H21"
																	stroke="currentColor"
																	strokeWidth="1.25"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<Path
																	d="M3 18H21"
																	stroke="currentColor"
																	strokeWidth="1.25"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</SVG>
														),
													},
													{
														title: __("Buttons", "rootblox"),
														name: "cthf__tab-2",
														className: "cthf__tab attr-tab",
														icon: button,
													},
													{
														title: __("Socials", "rootblox"),
														name: "cthf__tab-3",
														className: "cthf__tab attr-tab",
														icon: (
															<SVG
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<Path
																	d="M7 11L11 2C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5V9H19.66C19.9499 8.99672 20.2371 9.0565 20.5016 9.17522C20.7661 9.29393 21.0016 9.46873 21.1919 9.68751C21.3821 9.90629 21.5225 10.1638 21.6033 10.4423C21.6842 10.7207 21.7035 11.0134 21.66 11.3L20.28 20.3C20.2077 20.7769 19.9654 21.2116 19.5979 21.524C19.2304 21.8364 18.7623 22.0055 18.28 22H7M7 11V22M7 11H4C3.46957 11 2.96086 11.2107 2.58579 11.5858C2.21071 11.9609 2 12.4696 2 13V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H7"
																	stroke="currentColor"
																	strokeWidth="1.25"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</SVG>
														),
													},
												]}
												activeClass="attr-active"
											>
												{(tab) => (
													<>
														{tab.name === "cthf__tab-4" && (
															<>
																<AttrWrapper styles={{ marginBottom: "0" }}>
																	<SelectControl
																		label={__("Font Family", "rootblox")}
																		options={googleFonts}
																		value={
																			attributes.sidebarSiteLogo.font.family
																		}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarSiteLogo: {
																					...attributes.sidebarSiteLogo,
																					font: {
																						...attributes.sidebarSiteLogo.font,
																						family: newValue,
																					},
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
																			value={
																				attributes.sidebarSiteLogo.font.size
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSiteLogo: {
																						...attributes.sidebarSiteLogo,
																						font: {
																							...attributes.sidebarSiteLogo
																								.font,
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
																		value={
																			attributes.sidebarSiteLogo.font.weight
																		}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarSiteLogo: {
																					...attributes.sidebarSiteLogo,
																					font: {
																						...attributes.sidebarSiteLogo.font,
																						weight: newValue,
																					},
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Letter Case", "rootblox")}
																			value={
																				attributes.sidebarSiteLogo.letterCase
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSiteLogo: {
																						...attributes.sidebarSiteLogo,
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

																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Decoration", "rootblox")}
																			value={
																				attributes.sidebarSiteLogo.decoration
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSiteLogo: {
																						...attributes.sidebarSiteLogo,
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
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<UnitControl
																			label={__("Line Height", "rootblox")}
																			value={
																				attributes.sidebarSiteLogo.lineHeight
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSiteLogo: {
																						...attributes.sidebarSiteLogo,
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
																			value={
																				attributes.sidebarSiteLogo.letterSpacing
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSiteLogo: {
																						...attributes.sidebarSiteLogo,
																						letterSpacing: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>
																<AttrWrapper
																	styles={{ margin: "-20px 0 22px" }}
																>
																	<PanelColorSettings
																		className="cthf__color-panel cthf__border-none"
																		title={__(
																			"Site Info Color Palette",
																			"rootblox",
																		)}
																		enableAlpha={true}
																		colorSettings={[
																			{
																				label: __("Text (Default)", "rootblox"),
																				value:
																					attributes.sidebarSiteLogo.color.text,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarSiteLogo: {
																							...attributes.sidebarSiteLogo,
																							color: {
																								...attributes.sidebarSiteLogo
																									.color,
																								text: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __("Text (Hover)", "rootblox"),
																				value:
																					attributes.sidebarSiteLogo.color
																						.textHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarSiteLogo: {
																							...attributes.sidebarSiteLogo,
																							color: {
																								...attributes.sidebarSiteLogo
																									.color,
																								textHover: newValue,
																							},
																						},
																					}),
																			},
																		]}
																	/>
																</AttrWrapper>
															</>
														)}

														{tab.name === "cthf__tab-1" && (
															<>
																<fieldset className="cthf__attr-group">
																	<legend>{__("Container", "rootblox")}</legend>
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
																			values={attributes.navigation.padding}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						padding: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<div className="cthf__attr-divider">
																		<AttrWrapper>
																			<UnitControl
																				label={__("Margin Top", "rootblox")}
																				value={attributes.navigation.margin.top}
																				onChange={(newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							margin: {
																								...attributes.navigation.margin,
																								top: newValue,
																							},
																						},
																					})
																				}
																				__next40pxDefaultSize
																			/>
																		</AttrWrapper>

																		<AttrWrapper>
																			<UnitControl
																				label={__("Margin Bottom", "rootblox")}
																				value={
																					attributes.navigation.margin.bottom
																				}
																				onChange={(newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							margin: {
																								...attributes.navigation.margin,
																								bottom: newValue,
																							},
																						},
																					})
																				}
																				__next40pxDefaultSize
																			/>
																		</AttrWrapper>
																	</div>

																	<AttrWrapper styles={{ margin: "0" }}>
																		<BorderBoxControl
																			label={__("Border", "rootblox")}
																			enableAlpha={true}
																			colors={themeColorPalette}
																			value={attributes.navigation.border}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						border: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</fieldset>

																<fieldset className="cthf__attr-group">
																	<legend>{__("Item", "rootblox")}</legend>

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
																			values={attributes.navigation.itemPadding}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						itemPadding: newValue,
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
																			value={attributes.navigation.itemBorder}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						itemBorder: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</fieldset>

																<SelectControl
																	label={__("Font Family", "rootblox")}
																	options={googleFonts}
																	value={attributes.navigation.font.family}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			navigation: {
																				...attributes.navigation,
																				font: {
																					...attributes.navigation.font,
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
																			value={attributes.navigation.font.size}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						font: {
																							...attributes.navigation.font,
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
																		value={attributes.navigation.font.weight}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				navigation: {
																					...attributes.navigation,
																					font: {
																						...attributes.navigation.font,
																						weight: newValue,
																					},
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Letter Case", "rootblox")}
																			value={attributes.navigation.letterCase}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
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

																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Decoration", "rootblox")}
																			value={attributes.navigation.decoration}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
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
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<UnitControl
																			label={__("Line Height", "rootblox")}
																			value={attributes.navigation.lineHeight}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
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
																			value={
																				attributes.navigation.letterSpacing
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						letterSpacing: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<AttrWrapper
																	styles={{ margin: "-20px 0 22px" }}
																>
																	<PanelColorSettings
																		className="cthf__color-panel cthf__border-none"
																		title={__("Menu Color Palette", "rootblox")}
																		enableAlpha={true}
																		colorSettings={[
																			{
																				label: __("Menu (Default)", "rootblox"),
																				value: attributes.navigation.color.text,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								text: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __("Menu (Hover)", "rootblox"),
																				value:
																					attributes.navigation.color.textHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								textHover: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Submenu (Default)",
																					"rootblox",
																				),
																				value:
																					attributes.navigation.color.submenu,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								submenu: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Submenu (Hover)",
																					"rootblox",
																				),
																				value:
																					attributes.navigation.color
																						.submenuHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								submenuHover: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Dropdown Icon (Default)",
																					"rootblox",
																				),
																				value:
																					attributes.navigation.color
																						.submenuIcon,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								submenuIcon: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Dropdown Icon (Hover)",
																					"rootblox",
																				),
																				value:
																					attributes.navigation.color
																						.submenuIconHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								submenuIconHover: newValue,
																							},
																						},
																					}),
																			},
																		]}
																	/>
																</AttrWrapper>
															</>
														)}

														{tab.name === "cthf__tab-2" && (
															<>
																<AttrWrapper styles={{ marginBottom: "0" }}>
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
																		values={attributes.sidebarCTA.padding}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
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
																			value={attributes.sidebarCTA.margin.top}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						margin: {
																							...attributes.sidebarCTA.margin,
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
																			value={
																				attributes.sidebarCTA.margin.bottom
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						margin: {
																							...attributes.sidebarCTA.margin,
																							bottom: newValue,
																						},
																					},
																				})
																			}
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
																			value={attributes.sidebarCTA.border}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
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
																			value={attributes.sidebarCTA.radius}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						radius: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<SelectControl
																	label={__("Font Family", "rootblox")}
																	options={googleFonts}
																	value={attributes.sidebarCTA.font.family}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			sidebarCTA: {
																				...attributes.sidebarCTA,
																				font: {
																					...attributes.sidebarCTA.font,
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
																			value={attributes.sidebarCTA.font.size}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						font: {
																							...attributes.sidebarCTA.font,
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
																		value={attributes.sidebarCTA.font.weight}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
																					font: {
																						...attributes.sidebarCTA.font,
																						weight: newValue,
																					},
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Letter Case", "rootblox")}
																			value={attributes.sidebarCTA.letterCase}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
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

																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Decoration", "rootblox")}
																			value={attributes.sidebarCTA.decoration}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
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
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<UnitControl
																			label={__("Line Height", "rootblox")}
																			value={attributes.sidebarCTA.lineHeight}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
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
																			value={
																				attributes.sidebarCTA.letterSpacing
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						letterSpacing: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<AttrWrapper
																	styles={{ margin: "-20px 0 22px" }}
																>
																	<PanelColorSettings
																		className="cthf__color-panel cthf__border-none"
																		title={__(
																			"Buttons Color Palette",
																			"rootblox",
																		)}
																		enableAlpha={true}
																		colorSettings={[
																			{
																				label: __("Text (Default)", "rootblox"),
																				value: attributes.sidebarCTA.color.text,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								text: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __("Text (Hover)", "rootblox"),
																				value:
																					attributes.sidebarCTA.color.textHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								textHover: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Background (Default)",
																					"rootblox",
																				),
																				value: attributes.sidebarCTA.color.bg,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								bg: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Background (Hover)",
																					"rootblox",
																				),
																				value:
																					attributes.sidebarCTA.color.bgHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								bgHover: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __("Border (Hover)", "rootblox"),
																				value:
																					attributes.sidebarCTA.color
																						.borderHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								borderHover: newValue,
																							},
																						},
																					}),
																			},
																		]}
																	/>
																</AttrWrapper>
															</>
														)}

														{tab.name === "cthf__tab-3" && (
															<>
																<div className="cthf__attr-divider">
																	<AttrWrapper>
																		<UnitControl
																			label={__("Margin Top", "rootblox")}
																			value={
																				attributes.sidebarSocial.margin.top
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSocial: {
																						...attributes.sidebarSocial,
																						margin: {
																							...attributes.sidebarSocial
																								.margin,
																							top: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<AttrWrapper>
																		<UnitControl
																			label={__("Margin Bottom", "rootblox")}
																			value={
																				attributes.sidebarSocial.margin.bottom
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSocial: {
																						...attributes.sidebarSocial,
																						margin: {
																							...attributes.sidebarSocial
																								.margin,
																							bottom: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<ToggleGroupControl
																	label={__("Icon View", "rootblox")}
																	value={attributes.sidebarSocial.view}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			sidebarSocial: {
																				...attributes.sidebarSocial,
																				view: newValue,
																			},
																		})
																	}
																	isBlock
																	__next40pxDefaultSize
																>
																	<ToggleGroupControlOption
																		label={__("Default", "rootblox")}
																		value="default"
																	/>
																	<ToggleGroupControlOption
																		label={__("Stacked", "rootblox")}
																		value="stacked"
																	/>
																</ToggleGroupControl>

																<AttrWrapper styles={{ maxWidth: "50%" }}>
																	<UnitControl
																		label={__("Icon Size", "rootblox")}
																		value={attributes.sidebarSocial.size}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarSocial: {
																					...attributes.sidebarSocial,
																					size: newValue,
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</AttrWrapper>

																{attributes.sidebarSocial.view ===
																	"stacked" && (
																	<>
																		<div className="cthf__attr-divider">
																			<AttrWrapper styles={{ margin: "0" }}>
																				<UnitControl
																					label={__("Box Width", "rootblox")}
																					value={
																						attributes.sidebarSocial.boxWidth
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								boxWidth: newValue,
																							},
																						})
																					}
																					__next40pxDefaultSize
																				/>
																			</AttrWrapper>

																			<AttrWrapper styles={{ margin: "0" }}>
																				<UnitControl
																					label={__("Box Height", "rootblox")}
																					value={
																						attributes.sidebarSocial.boxHeight
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								boxHeight: newValue,
																							},
																						})
																					}
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
																					value={
																						attributes.sidebarSocial.border
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								border: newValue,
																							},
																						})
																					}
																					__next40pxDefaultSize
																				/>
																			</AttrWrapper>

																			<AttrWrapper>
																				<UnitControl
																					label={__(
																						"Border Radius",
																						"rootblox",
																					)}
																					value={
																						attributes.sidebarSocial.radius
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
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

																<CheckboxControl
																	label={__("Use Brand Color", "rootblox")}
																	checked={
																		attributes.sidebarSocial.useBrandColor
																	}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			sidebarSocial: {
																				...attributes.sidebarSocial,
																				useBrandColor: newValue,
																			},
																		})
																	}
																/>

																{attributes.sidebarSocial.useBrandColor && (
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<PanelColorSettings
																			className="cthf__color-panel cthf__border-none"
																			enableAlpha={true}
																			title={__(
																				"Socials Color Palette",
																				"rootblox",
																			)}
																			colorSettings={[
																				{
																					label: __("Icon (Hover)", "rootblox"),
																					value:
																						attributes.sidebarSocial.color
																							.iconHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									iconHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Background (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.bgHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									bgHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Border (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.borderHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									borderHover: newValue,
																								},
																							},
																						}),
																				},
																			]}
																		/>
																	</AttrWrapper>
																)}
																{!attributes.sidebarSocial.useBrandColor && (
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<PanelColorSettings
																			className="cthf__color-panel cthf__border-none"
																			enableAlpha={true}
																			title={__(
																				"Socials Color Palette",
																				"rootblox",
																			)}
																			colorSettings={[
																				{
																					label: __(
																						"Icon (Default)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color.icon,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									icon: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __("Icon (Hover)", "rootblox"),
																					value:
																						attributes.sidebarSocial.color
																							.iconHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									iconHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Background (Default)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color.bg,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									bg: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Background (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.bgHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									bgHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Border (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.borderHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									borderHover: newValue,
																								},
																							},
																						}),
																				},
																			]}
																		/>
																	</AttrWrapper>
																)}
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
								</>
							)}
						</>
					)}
			</div>
		</>
	);
});
