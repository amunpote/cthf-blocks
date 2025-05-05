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

	const googleFonts = getFontOptions();

	return (
		<>
			<Panel>
				<PanelBody
					title={__("Weekday Styles", "rootblox")}
					opened={openPanel === "weekday-styles"}
					onToggle={() => setOpenPanel("weekday-styles")}
				>
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

					<AttrWrapper>
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
							label={__("Border", "rootblox")}
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

					<TabPanel
						className="cthf__tab-panel attr-panel"
						activeClass="attr-active"
						tabs={[
							{
								title: __("Default", "rootblox"),
								name: "cthf__tab-1",
								className: "cthf__tab attr-tab",
							},
							{
								title: __("Weekday", "rootblox"),
								name: "cthf__tab-2",
								className: "cthf__tab attr-tab",
							},
						]}
					>
						{(tab) => (
							<>
								{tab.name === "cthf__tab-1" && (
									<>
										<AttrWrapper styles={{ marginBottom: "0" }}>
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
										</AttrWrapper>

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
											<AttrWrapper styles={{ marginBottom: "0" }}>
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
									</>
								)}

								{tab.name === "cthf__tab-2" && (
									<>
										<AttrWrapper styles={{ marginBottom: "0" }}>
											<SelectControl
												label={__("Font Family", "rootblox")}
												options={googleFonts}
												value={
													attributes.itemStyles.labelTypography.font.family
												}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														itemStyles: {
															...attributes.itemStyles,
															labelTypography: {
																...attributes.itemStyles.labelTypography,
																font: {
																	...attributes.itemStyles.labelTypography.font,
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
													value={
														attributes.itemStyles.labelTypography.font.size
													}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															itemStyles: {
																...attributes.itemStyles,
																labelTypography: {
																	...attributes.itemStyles.labelTypography,
																	font: {
																		...attributes.itemStyles.labelTypography
																			.font,
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
												value={
													attributes.itemStyles.labelTypography.font.weight
												}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														itemStyles: {
															...attributes.itemStyles,
															labelTypography: {
																...attributes.itemStyles.labelTypography,
																font: {
																	...attributes.itemStyles.labelTypography.font,
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
													value={
														attributes.itemStyles.labelTypography.letterCase
													}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															itemStyles: {
																...attributes.itemStyles,
																labelTypography: {
																	...attributes.itemStyles.labelTypography,
																	letterCase: newValue,
																},
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
													value={
														attributes.itemStyles.labelTypography.decoration
													}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															itemStyles: {
																...attributes.itemStyles,
																labelTypography: {
																	...attributes.itemStyles.labelTypography,
																	decoration: newValue,
																},
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
													value={
														attributes.itemStyles.labelTypography.lineHeight
													}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															itemStyles: {
																...attributes.itemStyles,
																labelTypography: {
																	...attributes.itemStyles.labelTypography,
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
													value={
														attributes.itemStyles.labelTypography.letterSpacing
													}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															itemStyles: {
																...attributes.itemStyles,
																labelTypography: {
																	...attributes.itemStyles.labelTypography,
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

					<PanelColorSettings
						className="cthf__color-panel"
						enableAlpha={true}
						title={__("Colors", "rootblox")}
						colorSettings={[
							{
								label: __("Text", "rootblox"),
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
								label: __("Weekday", "rootblox"),
								value: attributes.itemStyles.color.label,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										itemStyles: {
											...attributes.itemStyles,
											color: {
												...attributes.itemStyles.color,
												label: newValue,
											},
										},
									}),
							},
							{
								label: __("Background", "rootblox"),
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
						]}
					/>
				</PanelBody>
			</Panel>

			{attributes.notification.enabled && (
				<Panel>
					<PanelBody
						title={__("Notification Styles", "rootblox")}
						opened={openPanel === "notification-styles"}
						onToggle={() => setOpenPanel("notification-styles")}
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
								values={attributes.notification.padding}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										notification: {
											...attributes.notification,
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
									value={attributes.notification.margin.top}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											notification: {
												...attributes.notification,
												margin: {
													...attributes.notification.margin,
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
									value={attributes.notification.margin.bottom}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											notification: {
												...attributes.notification,
												margin: {
													...attributes.notification.margin,
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
								value={attributes.notification.border}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										notification: {
											...attributes.notification,
											border: newValue,
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>

						<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
							<UnitControl
								label={__("Border Radius", "rootblox")}
								value={attributes.notification.radius}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										notification: {
											...attributes.notification,
											radius: newValue,
										},
									})
								}
								__next40pxDefaultSize
							/>
						</AttrWrapper>

						<TabPanel
							className="cthf__tab-panel attr-panel"
							activeClass="attr-active"
							tabs={[
								{
									title: __("Default", "rootblox"),
									name: "cthf__tab-1",
									className: "cthf__tab attr-tab",
								},
								{
									title: __("Timer", "rootblox"),
									name: "cthf__tab-2",
									className: "cthf__tab attr-tab",
								},
							]}
						>
							{(tab) => (
								<>
									{tab.name === "cthf__tab-1" && (
										<>
											<AttrWrapper styles={{ marginBottom: "0" }}>
												<SelectControl
													label={__("Font Family", "rootblox")}
													options={googleFonts}
													value={attributes.notification.font.family}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															notification: {
																...attributes.notification,
																font: {
																	...attributes.notification.font,
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
														value={attributes.notification.font.size}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
																	font: {
																		...attributes.notification.font,
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
													value={attributes.notification.font.weight}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															notification: {
																...attributes.notification,
																font: {
																	...attributes.notification.font,
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
														value={attributes.notification.letterCase}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
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
														value={attributes.notification.decoration}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
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
														value={attributes.notification.lineHeight}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
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
														value={attributes.notification.letterSpacing}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
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

									{tab.name === "cthf__tab-2" && (
										<>
											<AttrWrapper styles={{ marginBottom: "0" }}>
												<SelectControl
													label={__("Font Family", "rootblox")}
													options={googleFonts}
													value={
														attributes.notification.timerTypography.font.family
													}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															notification: {
																...attributes.notification,
																timerTypography: {
																	...attributes.notification.timerTypography,
																	font: {
																		...attributes.notification.timerTypography
																			.font,
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
														value={
															attributes.notification.timerTypography.font.size
														}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
																	timerTypography: {
																		...attributes.notification.timerTypography,
																		font: {
																			...attributes.notification.timerTypography
																				.font,
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
													value={
														attributes.notification.timerTypography.font.weight
													}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															notification: {
																...attributes.notification,
																timerTypography: {
																	...attributes.notification.timerTypography,
																	font: {
																		...attributes.notification.timerTypography
																			.font,
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
														value={
															attributes.notification.timerTypography.letterCase
														}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
																	timerTypography: {
																		...attributes.notification.timerTypography,
																		letterCase: newValue,
																	},
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
														value={
															attributes.notification.timerTypography.decoration
														}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
																	timerTypography: {
																		...attributes.notification.timerTypography,
																		decoration: newValue,
																	},
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
														value={
															attributes.notification.timerTypography.lineHeight
														}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
																	timerTypography: {
																		...attributes.notification.timerTypography,
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
														value={
															attributes.notification.timerTypography
																.letterSpacing
														}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																notification: {
																	...attributes.notification,
																	timerTypography: {
																		...attributes.notification.timerTypography,
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

						<PanelColorSettings
							title={__("Colors", "rootblox")}
							enableAlpha={true}
							className="cthf__color-panel"
							colorSettings={[
								{
									label: __("Text", "rootblox"),
									value: attributes.notification.color.text,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											notification: {
												...attributes.notification,
												color: {
													...attributes.notification.color,
													text: newValue,
												},
											},
										}),
								},
								{
									label: __("Timer", "rootblox"),
									value: attributes.notification.color.timer,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											notification: {
												...attributes.notification,
												color: {
													...attributes.notification.color,
													timer: newValue,
												},
											},
										}),
								},
								{
									label: __("Background", "rootblox"),
									value: attributes.notification.color.bg,
									onChange: (newValue) =>
										setAttributes({
											...attributes,
											notification: {
												...attributes.notification,
												color: {
													...attributes.notification.color,
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
		</>
	);
});
