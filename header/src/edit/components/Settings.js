import { __ } from "@wordpress/i18n";

import {
	Panel,
	PanelBody,
	ToggleControl,
	RangeControl,
	Button,
	Modal,
	SelectControl,
	FormTokenField,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlLabelOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlIconOption,
	TextControl,
	CheckboxControl,
} from "@wordpress/components";
import { justifyLeft, justifyRight, sidebar, siteLogo } from "@wordpress/icons";

import { memo, useState, useEffect, useContext } from "@wordpress/element";

import {
	UpsellAttributeWrapper,
	AttrWrapper,
} from "../../../../../resources/components/utility.js";
import {
	mapObjectIntoOptions,
	mobileLayouts,
	proMobileLayouts,
} from "../utils.js";

import { plusCircle } from "@wordpress/icons";

import apiFetch from "@wordpress/api-fetch";
import { CTHFBlockContext } from "./InspectorControls.js";

export const Settings = memo(() => {
	const {
		attributes,
		setAttributes,
		initialMobileOptions,
		mobileOptions,
		setMobileOptions,
		navigationSelected,
		searchSelected,
		btnSelected,
	} = useContext(CTHFBlockContext);

	const [mobileLayoutModal, setLayoutModal] = useState(false);

	const [navMenus, setNavMenus] = useState([]);

	useEffect(() => {
		apiFetch({
			path: "/wp/v2/navigation?context=edit&per_page=100&status[0]=publish",
		})
			.then((menus) => setNavMenus(menus))
			.catch((error) => console.error("API Fetch Error:", error));
	}, []);

	const menuOptions = navMenus && mapObjectIntoOptions(navMenus);

	const proMobileOptions = ["My Account", "Search", "Mini Cart", "Button"];
	const updateMobileOptions = (newLayout) => {
		const allSelected = newLayout.flat();
		const availableOptions = initialMobileOptions.filter(
			(item) => !allSelected.includes(item),
		);
		setMobileOptions(availableOptions);
	};

	return (
		<>
			<div key="cthf-block__setting">
				<Panel>
					<PanelBody title={__("General", "rootblox")}>
						<ToggleControl
							label={__("Sticky Header", "cozy-addons")}
							checked={attributes.stickyHeader.enabled}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									stickyHeader: {
										...attributes.stickyHeader,
										enabled: newValue,
									},
								})
							}
						/>

						{attributes.stickyHeader.enabled && (
							<>
								{!cthfAssets.isPremium && (
									<UpsellAttributeWrapper>
										<ToggleControl
											label={__("Make Top Bar Sticky", "rootblox")}
											checked={true}
											disabled
										/>
									</UpsellAttributeWrapper>
								)}
								{cthfAssets.isPremium && (
									<ToggleControl
										label={__("Make Top Bar Sticky", "rootblox")}
										checked={attributes.stickyHeader.topBar}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												stickyHeader: {
													...attributes.stickyHeader,
													topBar: newValue,
												},
											})
										}
									/>
								)}

								{!cthfAssets.isPremium && (
									<UpsellAttributeWrapper>
										<ToggleControl
											label={__("Hide when scrolled to bottom", "rootblox")}
											checked={false}
											disabled
										/>
									</UpsellAttributeWrapper>
								)}
								{cthfAssets.isPremium && (
									<>
										<ToggleControl
											label={__("Hide on bottom scroll", "rootblox")}
											checked={attributes.stickyHeader.bottomScrollHide}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													stickyHeader: {
														...attributes.stickyHeader,
														bottomScrollHide: newValue,
													},
												})
											}
										/>

										{attributes.stickyHeader.bottomScrollHide && (
											<>
												<RangeControl
													label={__("Bottom Scroll Offset", "rootblox")}
													min={200}
													max={1000}
													step={1}
													value={attributes.stickyHeader.bottomScrollOffset}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															stickyHeader: {
																...attributes.stickyHeader,
																bottomScrollOffset: newValue,
															},
														})
													}
												/>
											</>
										)}
									</>
								)}
							</>
						)}
					</PanelBody>
				</Panel>

				<Panel>
					<PanelBody title={__("Mobile Menu", "rootblox")}>
						<ToggleGroupControl
							label={__("Overlay Menu", "rootblox")}
							value={attributes.mobileMenu.status}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									mobileMenu: {
										...attributes.mobileMenu,
										status: newValue,
									},
								})
							}
							isBlock
							__next40pxDefaultSize
						>
							<ToggleGroupControlLabelOption
								label={__("Off", "rootblox")}
								value="off"
							/>
							<ToggleGroupControlLabelOption
								label={__("Mobile", "rootblox")}
								value="mobile"
							/>
							<ToggleGroupControlLabelOption
								label={__("Always", "rootblox")}
								value="always"
							/>
						</ToggleGroupControl>

						{attributes.mobileMenu.status === "mobile" && (
							<>
								{!cthfAssets.isPremium && (
									<>
										<UpsellAttributeWrapper>
											<RangeControl
												label={__("Breakpoint", "rootblox")}
												min={768}
												max={1440}
												step={1}
												value={1280}
												disabled
											/>
										</UpsellAttributeWrapper>
									</>
								)}
								{cthfAssets.isPremium && (
									<>
										<RangeControl
											label={__("Breakpoint", "rootblox")}
											min={768}
											max={1440}
											step={1}
											value={attributes.mobileMenu.breakpoint}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													mobileMenu: {
														...attributes.mobileMenu,
														breakpoint: newValue,
													},
												})
											}
										/>
									</>
								)}
							</>
						)}

						{attributes.mobileMenu.status !== "off" &&
							(attributes.mobileMenu.status === "mobile" ||
								attributes.mobileMenu.status === "always") && (
								<>
									<div className="cthf__mobile-layout-picker">
										<Button
											className={`add__icon${
												attributes.mobileMenu.layout.length >= 3
													? " cthf__blur"
													: ""
											}`}
											icon={plusCircle}
											text={__("Add Flex Box", "rootblox")}
											onClick={() => {
												if (attributes.mobileMenu.layout.length < 3) {
													attributes.mobileMenu.layout.push([]);
													let newArr = attributes.mobileMenu.layout;

													setAttributes({
														...attributes,
														mobileMenu: {
															...attributes.mobileMenu,
															layout: [...newArr],
														},
													});
												}
											}}
										/>

										{Array.isArray(attributes.mobileMenu.layout) &&
											attributes.mobileMenu.layout.map((layout, index) => {
												let layoutIndex = index + 1;

												return (
													<>
														<div className={`flex-wrap flex-${layoutIndex}`}>
															<FormTokenField
																label={__(
																	`Layout Box ${layoutIndex}`,
																	"rootblox",
																)}
																placeholder={__(
																	"Select Mobile Item",
																	"rootblox",
																)}
																suggestions={mobileOptions}
																__experimentalRenderItem={(suggestion) => {
																	return (
																		<>
																			{!cthfAssets.isPremium &&
																			proMobileOptions.includes(suggestion.item)
																				? `${suggestion.item} (Pro)`
																				: suggestion.item}
																		</>
																	);
																}}
																value={attributes.mobileMenu.layout[index]}
																onChange={(token) => {
																	const updatedLayout = [
																		...attributes.mobileMenu.layout,
																	];
																	updatedLayout[index] = [...token];

																	setAttributes({
																		...attributes,
																		mobileMenu: {
																			...attributes.mobileMenu,
																			layout: updatedLayout,
																		},
																	});

																	updateMobileOptions(updatedLayout);
																}}
																__experimentalExpandOnFocus
															/>

															{index > 0 && (
																<span
																	id="clear-flex"
																	onClick={() => {
																		const updatedLayout =
																			attributes.mobileMenu.layout.filter(
																				(_, i) => i !== index,
																			);

																		setAttributes({
																			...attributes,
																			mobileMenu: {
																				...attributes.mobileMenu,
																				layout: updatedLayout,
																			},
																		});

																		updateMobileOptions(updatedLayout);
																	}}
																>
																	<svg
																		width="10"
																		height="10"
																		viewBox="0 0 10 10"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M4.99999 4.058L8.29999 0.758003L9.24266 1.70067L5.94266 5.00067L9.24266 8.30067L8.29932 9.24334L4.99932 5.94334L1.69999 9.24334L0.757324 8.3L4.05732 5L0.757324 1.7L1.69999 0.75867L4.99999 4.058Z"
																			fill="#cf2e2e"
																		/>
																	</svg>
																</span>
															)}
														</div>
													</>
												);
											})}
									</div>
								</>
							)}
					</PanelBody>
				</Panel>

				{navigationSelected && (
					<Panel>
						<PanelBody
							title={__("Navigation Sidebar Options", "rootblox")}
							initialOpen={false}
						>
							<ToggleControl
								label={__("Enable Site Logo", "rootblox")}
								checked={attributes.sidebar.siteLogo}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										sidebar: {
											...attributes.sidebar,
											siteLogo: newValue,
										},
									})
								}
							/>

							<ToggleControl
								label={__("Enable Navigation", "rootblox")}
								checked={attributes.sidebar.navigation}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										sidebar: {
											...attributes.sidebar,
											navigation: newValue,
										},
									})
								}
							/>

							{attributes.sidebar.navigation && (
								<>
									<AttrWrapper>
										<SelectControl
											label={__("Responsive Menu", "rootblox")}
											options={menuOptions}
											value={attributes.mobileMenu.menuID}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													mobileMenu: {
														...attributes.mobileMenu,
														menuID: newValue,
													},
												})
											}
											__next40pxDefaultSize
										/>
									</AttrWrapper>
								</>
							)}

							{!cthfAssets.isPremium && (
								<>
									<UpsellAttributeWrapper>
										<ToggleControl
											label={__("Enable CTA Button", "rootblox")}
											value={false}
											disabled
										/>
									</UpsellAttributeWrapper>
								</>
							)}
							{cthfAssets.isPremium && (
								<>
									<ToggleControl
										label={__("Enable CTA Button", "rootblox")}
										checked={attributes.sidebar.button}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												sidebar: {
													...attributes.sidebar,
													button: newValue,
												},
											})
										}
									/>

									{attributes.sidebar.button && (
										<div className="cthf__cta-btn-group">
											<Button
												text={__("Add CTA Button", "rootblox")}
												icon={plusCircle}
												onClick={() => {
													const addGroup = [...attributes.sidebar.btnGroup, {}];
													setAttributes({
														...attributes,
														sidebar: {
															...attributes.sidebar,
															btnGroup: addGroup,
														},
													});
												}}
											/>

											{Array.isArray(attributes.sidebar.btnGroup) &&
												attributes.sidebar.btnGroup.map((btn, index) => {
													let layoutIndex = index + 1;

													return (
														<>
															<div className={`flex-wrap flex-${layoutIndex}`}>
																<TextControl
																	label={__("Label", "rootblox")}
																	placeholder={__("Add Text", "rootblox")}
																	value={btn.label}
																	onChange={(newValue) => {
																		const updatedBtnGroup =
																			attributes.sidebar.btnGroup.map(
																				(item, i) => {
																					if (i === index) {
																						return {
																							label: newValue,
																							link: item.link,
																							openNewTab: item.openNewTab,
																							noFollow: item.noFollow,
																						};
																					}

																					return item;
																				},
																			);

																		setAttributes({
																			...attributes,
																			sidebar: {
																				...attributes.sidebar,
																				btnGroup: updatedBtnGroup,
																			},
																		});
																	}}
																	__next40pxDefaultSize
																/>

																<TextControl
																	label={__("Link", "rootblox")}
																	placeholder="https://"
																	type="url"
																	value={btn.link}
																	onChange={(newValue) => {
																		const updatedBtnGroup =
																			attributes.sidebar.btnGroup.map(
																				(item, i) => {
																					if (i === index) {
																						return {
																							label: item.label,
																							link: newValue,
																							openNewTab: item.openNewTab,
																							noFollow: item.noFollow,
																						};
																					}

																					return item;
																				},
																			);

																		setAttributes({
																			...attributes,
																			sidebar: {
																				...attributes.sidebar,
																				btnGroup: updatedBtnGroup,
																			},
																		});
																	}}
																	__next40pxDefaultSize
																/>

																<CheckboxControl
																	label={__("Open in New Tab", "rootblox")}
																	checked={btn.openNewTab}
																	onChange={(newValue) => {
																		const updatedBtnGroup =
																			attributes.sidebar.btnGroup.map(
																				(item, i) => {
																					if (i === index) {
																						return {
																							label: item.label,
																							link: item.link,
																							openNewTab: newValue,
																							noFollow: item.noFollow,
																						};
																					}

																					return item;
																				},
																			);

																		setAttributes({
																			...attributes,
																			sidebar: {
																				...attributes.sidebar,
																				btnGroup: updatedBtnGroup,
																			},
																		});
																	}}
																/>

																<CheckboxControl
																	label={__("Mark as no follow", "rootblox")}
																	checked={btn.noFollow}
																	onChange={(newValue) => {
																		const updatedBtnGroup =
																			attributes.sidebar.btnGroup.map(
																				(item, i) => {
																					if (i === index) {
																						return {
																							label: item.label,
																							link: item.link,
																							openNewTab: item.openNewTab,
																							noFollow: newValue,
																						};
																					}

																					return item;
																				},
																			);

																		setAttributes({
																			...attributes,
																			sidebar: {
																				...attributes.sidebar,
																				btnGroup: updatedBtnGroup,
																			},
																		});
																	}}
																/>

																{index > 0 && (
																	<span
																		id="clear-flex"
																		onClick={() => {
																			const updatedBtnGroup =
																				attributes.sidebar.btnGroup.filter(
																					(_, i) => i !== index,
																				);

																			setAttributes({
																				...attributes,
																				sidebar: {
																					...attributes.sidebar,
																					btnGroup: updatedBtnGroup,
																				},
																			});
																		}}
																	>
																		<svg
																			width="10"
																			height="10"
																			viewBox="0 0 10 10"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M4.99999 4.058L8.29999 0.758003L9.24266 1.70067L5.94266 5.00067L9.24266 8.30067L8.29932 9.24334L4.99932 5.94334L1.69999 9.24334L0.757324 8.3L4.05732 5L0.757324 1.7L1.69999 0.75867L4.99999 4.058Z"
																				fill="#cf2e2e"
																			/>
																		</svg>
																	</span>
																)}
															</div>
														</>
													);
												})}
										</div>
									)}
								</>
							)}

							{!cthfAssets.isPremium && (
								<>
									<UpsellAttributeWrapper>
										<ToggleControl
											label={__("Enable Social Icons", "rootblox")}
											checked={false}
											disabled
										/>
									</UpsellAttributeWrapper>
								</>
							)}
							{cthfAssets.isPremium && (
								<>
									<ToggleControl
										label={__("Enable Social Icons", "rootblox")}
										checked={attributes.sidebar.social}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												sidebar: {
													...attributes.sidebar,
													social: newValue,
												},
											})
										}
									/>
								</>
							)}

							{!cthfAssets.isPremium && (
								<>
									<UpsellAttributeWrapper>
										<AttrWrapper>
											<ToggleGroupControl
												label={__("Sidebar Position", "rootblox")}
												value="left"
											>
												<ToggleGroupControlIconOption
													label={__("Left", "rootblox")}
													value="left"
													icon={justifyLeft}
												/>

												<ToggleGroupControlIconOption
													label={__("Right", "rootblox")}
													value="right"
													icon={justifyRight}
												/>
											</ToggleGroupControl>
										</AttrWrapper>
									</UpsellAttributeWrapper>
								</>
							)}
							{cthfAssets.isPremium && (
								<AttrWrapper>
									<ToggleGroupControl
										label={__("Sidebar Position", "rootblox")}
										value={attributes.sidebar.position}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												sidebar: {
													...attributes.sidebar,
													position: newValue,
												},
											})
										}
									>
										<ToggleGroupControlIconOption
											label={__("Left", "rootblox")}
											value="left"
											icon={justifyLeft}
										/>

										<ToggleGroupControlIconOption
											label={__("Right", "rootblox")}
											value="right"
											icon={justifyRight}
										/>
									</ToggleGroupControl>
								</AttrWrapper>
							)}
						</PanelBody>
					</Panel>
				)}

				{cthfAssets.isPremium && (
					<>
						{searchSelected && (
							<Panel>
								<PanelBody
									title={__("Search Bar Options", "rootblox")}
									initialOpen={false}
								>
									<AttrWrapper>
										<ToggleGroupControl
											label={__("Search Variation", "rootblox")}
											value={attributes.search.variation}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													search: {
														...attributes.search,
														variation: newValue,
													},
												})
											}
											isBlock
											__next40pxDefaultSize
											help={__(
												"If 'Product' is selected but WooCommerce is inactive, it will default to 'Post'.",
												"rootblox",
											)}
										>
											<ToggleGroupControlLabelOption
												label={__("Post", "rootblox")}
												value="post"
											/>
											<ToggleGroupControlLabelOption
												label={__("Product", "rootblox")}
												value="product"
											/>
										</ToggleGroupControl>
									</AttrWrapper>
								</PanelBody>
							</Panel>
						)}

						{btnSelected && (
							<Panel>
								<PanelBody
									title={__("CTA Button Options", "rootblox")}
									initialOpen={false}
								>
									<TextControl
										label={__("Label", "rootblox")}
										placeholder="Add Text"
										value={attributes.ctaButton.label}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												ctaButton: {
													...attributes.ctaButton,
													label: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>

									<TextControl
										label={__("Link", "rootblox")}
										type="url"
										placeholder="https://"
										value={attributes.ctaButton.link}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												ctaButton: {
													...attributes.ctaButton,
													link: newValue,
												},
											})
										}
										__next40pxDefaultSize
									/>

									<CheckboxControl
										label={__("Open link in new tab", "rootblox")}
										checked={attributes.ctaButton.openNewTab}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												ctaButton: {
													...attributes.ctaButton,
													openNewTab: newValue,
												},
											})
										}
									/>

									<CheckboxControl
										label={__("Mark as no follow", "rootblox")}
										checked={attributes.ctaButton.noFollow}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												ctaButton: {
													...attributes.ctaButton,
													noFollow: newValue,
												},
											})
										}
									/>
								</PanelBody>
							</Panel>
						)}
					</>
				)}
			</div>
		</>
	);
});
