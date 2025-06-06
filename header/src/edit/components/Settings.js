import { __ } from "@wordpress/i18n";

import {
	PanelColorSettings,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	ToggleControl,
	RangeControl,
	Button,
	Modal,
	SelectControl,
	FormTokenField,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	TextControl,
	CheckboxControl,
	TextareaControl,
} from "@wordpress/components";
import {
	justifyLeft,
	justifyCenter,
	justifyRight,
	justifySpaceBetween,
	alignLeft,
	alignCenter,
	alignRight,
	headingLevel1,
	headingLevel2,
	headingLevel3,
	headingLevel4,
	headingLevel5,
	headingLevel6,
	paragraph,
} from "@wordpress/icons";

import { memo, useState, useEffect, useContext } from "@wordpress/element";

import {
	UpsellAttributeWrapper,
	AttrWrapper,
} from "../../../../../resources/components/utility.js";
import { mapObjectIntoOptions } from "../utils.js";

import { plusCircle } from "@wordpress/icons";

import apiFetch from "@wordpress/api-fetch";
import { CTHFBlockControlsContext } from "./InspectorControls.js";

export const Settings = memo(() => {
	const {
		attributes,
		setAttributes,
		deviceType,
		initialMobileOptions,
		mobileOptions,
		setMobileOptions,
		logoSelected,
		navigationSelected,
		searchSelected,
		btnSelected,
		setSidebarPreview,
	} = useContext(CTHFBlockControlsContext);

	const [openPanel, setOpenPanel] = useState("general");

	const [navMenus, setNavMenus] = useState([]);

	useEffect(() => {
		apiFetch({
			path: "/wp/v2/navigation?context=edit&per_page=100&status[0]=publish",
		})
			.then((menus) => {
				setNavMenus(menus);

				if (menus.length > 0 && attributes.mobileMenu.menuID.length <= 0) {
					setAttributes({
						...attributes,
						mobileMenu: {
							...attributes.mobileMenu,
							menuID: menus[0].id,
						},
					});
				}
			})
			.catch((error) => console.log("API Fetch Error:", error));
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
					<PanelBody
						title={__("General", "rootblox")}
						opened={openPanel === "general"}
						onToggle={() => setOpenPanel("general")}
					>
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
					<PanelBody
						title={__("Search Overlay Settings", "rootblox")}
						initialOpen={false}
						opened={openPanel === "search-bar-settings"}
						onToggle={() => setOpenPanel("search-bar-settings")}
					>
						<AttrWrapper styles={{ marginTop: "0" }}>
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
								<ToggleGroupControlOption
									label={__("Default", "rootblox")}
									value="default"
								/>
								<ToggleGroupControlOption
									label={__("Product", "rootblox")}
									value="product"
								/>
							</ToggleGroupControl>
						</AttrWrapper>

						<ToggleControl
							label={__("Enable Heading", "rootblox")}
							checked={attributes.search.heading.enabled}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									search: {
										...attributes.search,
										heading: {
											...attributes.search.heading,
											enabled: newValue,
										},
									},
								})
							}
						/>

						{attributes.search.heading.enabled && (
							<>
								<TextareaControl
									label={__("Heading Content", "rootblox")}
									value={attributes.search.heading.content}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												heading: {
													...attributes.search.heading,
													content: newValue,
												},
											},
										})
									}
								/>
							</>
						)}

						{!cthfAssets.isPremium && (
							<>
								<UpsellAttributeWrapper>
									<ToggleControl
										label={__("Enable Ajax Search", "rootblox")}
										checked={false}
										disabled
									/>
								</UpsellAttributeWrapper>
							</>
						)}
						{cthfAssets.isPremium && (
							<>
								<ToggleControl
									label={__("Enable Ajax Search", "rootblox")}
									checked={attributes.search.ajax.enabled}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											search: {
												...attributes.search,
												ajax: {
													...attributes.search.ajax,
													enabled: newValue,
												},
											},
										})
									}
								/>

								{attributes.search.ajax.enabled && (
									<>
										<RangeControl
											label={__("Posts per page", "rootblox")}
											min={1}
											max={10}
											step={1}
											value={attributes.search.ajax.postsPerPage}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													search: {
														...attributes.search,
														ajax: {
															...attributes.search.ajax,
															postsPerPage: newValue,
														},
													},
												})
											}
											__next40pxDefaultSize
										/>

										<CheckboxControl
											label={__("Open link in new tab", "rootblox")}
											checked={attributes.search.ajax.openNewTab}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													search: {
														...attributes.search,
														ajax: {
															...attributes.search.ajax,
															openNewTab: newValue,
														},
													},
												})
											}
										/>

										<CheckboxControl
											label={__("Mark as no follow", "rootblox")}
											checked={attributes.search.ajax.noFollow}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													search: {
														...attributes.search,
														ajax: {
															...attributes.search.ajax,
															noFollow: newValue,
														},
													},
												})
											}
										/>
									</>
								)}
							</>
						)}
					</PanelBody>
				</Panel>

				{(deviceType === "Tablet" ||
					deviceType === "Mobile" ||
					attributes.mobileMenu.status === "always") && (
					<>
						<Panel>
							<PanelBody
								title={__("Responsive Menu Settings", "rootblox")}
								opened={openPanel === "responsive-menu-settings"}
								onToggle={() => setOpenPanel("responsive-menu-settings")}
							>
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
									<ToggleGroupControlOption
										label={__("Off", "rootblox")}
										value="off"
									/>
									<ToggleGroupControlOption
										label={__("Mobile", "rootblox")}
										value="mobile"
									/>
									<ToggleGroupControlOption
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
														min={767}
														max={1440}
														step={1}
														value={767}
														disabled
													/>
												</UpsellAttributeWrapper>
											</>
										)}
										{cthfAssets.isPremium && (
											<>
												<RangeControl
													label={__("Breakpoint", "rootblox")}
													min={767}
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
												{Array.isArray(attributes.mobileMenu.layout) &&
													attributes.mobileMenu.layout.map((layout, index) => {
														let layoutIndex = index + 1;

														return (
															<>
																<div
																	className={`flex-wrap flex-${layoutIndex}`}
																>
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
																					proMobileOptions.includes(
																						suggestion.item,
																					)
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

																	<AttrWrapper
																		styles={{
																			maxWidth: "50%",
																		}}
																	>
																		<UnitControl
																			label={__("Gap", "rootblox")}
																			value={
																				attributes.mobileMenu.layoutAttr[index]
																					.gap
																			}
																			onChange={(newValue) => {
																				const updatedValue =
																					attributes.mobileMenu.layoutAttr.map(
																						(item, i) =>
																							i === index
																								? { ...item, gap: newValue }
																								: item,
																					);

																				setAttributes({
																					...attributes,
																					mobileMenu: {
																						...attributes.mobileMenu,
																						layoutAttr: updatedValue,
																					},
																				});
																			}}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<ToggleControl
																		label={__("Stack Layout", "rootblox")}
																		checked={
																			attributes.mobileMenu.layoutAttr[index]
																				.stackLayout
																		}
																		onChange={(newValue) => {
																			const updatedValue =
																				attributes.mobileMenu.layoutAttr.map(
																					(item, i) =>
																						i === index
																							? {
																									...item,
																									stackLayout: newValue,
																							  }
																							: item,
																				);

																			setAttributes({
																				...attributes,
																				mobileMenu: {
																					...attributes.mobileMenu,
																					layoutAttr: updatedValue,
																				},
																			});
																		}}
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

												<AttrWrapper styles={{ marginBottom: "0" }}>
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
												</AttrWrapper>
											</div>
										</>
									)}
							</PanelBody>
						</Panel>

						{attributes.mobileMenu.status !== "off" && (
							<>
								{logoSelected && (
									<Panel>
										<PanelBody
											title={__("Site Identity Settings", "rootblox")}
											initialOpen={false}
											opened={openPanel === "site-logo-settings"}
											onToggle={() => setOpenPanel("site-logo-settings")}
										>
											<ToggleControl
												label={__("Enable Site Logo", "rootblox")}
												checked={attributes.siteLogo.enableLogo}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														siteLogo: {
															...attributes.siteLogo,
															enableLogo: newValue,
														},
													})
												}
											/>

											{attributes.siteLogo.enableLogo && (
												<>
													{!cthfAssets.isPremium && (
														<>
															<UpsellAttributeWrapper>
																<ToggleControl
																	label={__("Use Default Logo", "rootblox")}
																	checked={true}
																	disabled
																/>
															</UpsellAttributeWrapper>
														</>
													)}
													{cthfAssets.isPremium && (
														<>
															<ToggleControl
																label={__("Default Logo", "rootblox")}
																checked={attributes.siteLogo.useDefaultLogo}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		siteLogo: {
																			...attributes.siteLogo,
																			useDefaultLogo: newValue,
																		},
																	})
																}
															/>

															{!attributes.siteLogo.useDefaultLogo && (
																<>
																	{attributes.siteLogo.custom.url.length <=
																		0 && (
																		<>
																			<MediaUploadCheck>
																				<MediaUpload
																					onSelect={(media) =>
																						setAttributes({
																							...attributes,
																							siteLogo: {
																								...attributes.siteLogo,
																								custom: {
																									...attributes.siteLogo.custom,
																									id: media.id,
																									url: media.url,
																								},
																							},
																						})
																					}
																					allowedTypes={["image"]}
																					value={attributes.siteLogo.custom.id}
																					render={({ open }) => (
																						<Button
																							className="cthf__btn-secondary"
																							onClick={open}
																							text={__("Open Media Library")}
																						/>
																					)}
																				/>
																			</MediaUploadCheck>
																		</>
																	)}
																	{attributes.siteLogo.custom.url.length >
																		0 && (
																		<>
																			<figure
																				style={{
																					maxWidth: "100%",
																					textAlign: "center",
																				}}
																			>
																				<img
																					src={attributes.siteLogo.custom.url}
																				/>
																			</figure>

																			<MediaUploadCheck>
																				<MediaUpload
																					onSelect={(media) =>
																						setAttributes({
																							...attributes,
																							siteLogo: {
																								...attributes.siteLogo,
																								custom: {
																									...attributes.siteLogo.custom,
																									id: media.id,
																									url: media.url,
																								},
																							},
																						})
																					}
																					allowedTypes={["image"]}
																					value={attributes.siteLogo.custom.id}
																					render={({ open }) => (
																						<Button
																							className="cthf__btn-secondary"
																							style={{ margin: "0 6px 10px 0" }}
																							onClick={open}
																							text={__("Replace Logo")}
																						/>
																					)}
																				/>
																			</MediaUploadCheck>

																			<Button
																				className="cthf__btn-remove"
																				text={__("Clear Selection", "rootblox")}
																				onClick={() =>
																					setAttributes({
																						...attributes,
																						siteLogo: {
																							...attributes.siteLogo,
																							custom: {
																								...attributes.siteLogo.custom,
																								id: "",
																								url: "",
																							},
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

													<AttrWrapper styles={{ maxWidth: "50%" }}>
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
												</>
											)}

											<ToggleControl
												label={__("Enable Site Title", "rootblox")}
												checked={attributes.siteLogo.enableTitle}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														siteLogo: {
															...attributes.siteLogo,
															enableTitle: newValue,
														},
													})
												}
											/>

											{attributes.siteLogo.enableTitle && (
												<>
													<ToggleGroupControl
														label={__("Title Tag", "rootblox")}
														value={attributes.siteLogo.titleTag}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																siteLogo: {
																	...attributes.siteLogo,
																	titleTag: newValue,
																},
															})
														}
														__next40pxDefaultSize
													>
														<ToggleGroupControlOptionIcon
															label={__("Paragraph", "rootblox")}
															value="p"
															icon={paragraph}
														/>
														<ToggleGroupControlOptionIcon
															label={__("Heading 1", "rootblox")}
															value="h1"
															icon={headingLevel1}
														/>
														<ToggleGroupControlOptionIcon
															label={__("Heading 2", "rootblox")}
															value="h2"
															icon={headingLevel2}
														/>
														<ToggleGroupControlOptionIcon
															label={__("Heading 3", "rootblox")}
															value="h3"
															icon={headingLevel3}
														/>
														<ToggleGroupControlOptionIcon
															label={__("Heading 4", "rootblox")}
															value="h4"
															icon={headingLevel4}
														/>
														<ToggleGroupControlOptionIcon
															label={__("Heading 5", "rootblox")}
															value="h5"
															icon={headingLevel5}
														/>
														<ToggleGroupControlOptionIcon
															label={__("Heading 6", "rootblox")}
															value="h6"
															icon={headingLevel6}
														/>
													</ToggleGroupControl>
												</>
											)}

											{attributes.siteLogo.enableLogo &&
												attributes.siteLogo.enableTitle && (
													<>
														<AttrWrapper
															styles={{ maxWidth: "50%", marginBottom: "0" }}
														>
															<UnitControl
																label={__("Gap", "rootblox")}
																value={attributes.siteLogo.gap}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		siteLogo: {
																			...attributes.siteLogo,
																			gap: newValue,
																		},
																	})
																}
																__next40pxDefaultSize
															/>
														</AttrWrapper>
													</>
												)}
										</PanelBody>
									</Panel>
								)}

								{cthfAssets.isPremium && (
									<>
										{btnSelected && (
											<Panel>
												<PanelBody
													title={__("CTA Button Settings", "rootblox")}
													initialOpen={false}
													opened={openPanel === "cta-button-settings"}
													onToggle={() => setOpenPanel("cta-button-settings")}
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

								{navigationSelected && (
									<Panel>
										<PanelBody
											title={__("Sidebar Panel Settings", "rootblox")}
											opened={openPanel === "sidebar-panel-settings"}
											onToggle={() => setOpenPanel("sidebar-panel-settings")}
										>
											<Button
												className="cthf__btn-secondary"
												style={{ margin: "10px 0 22px" }}
												text={__("Preview Changes", "rootblox")}
												onClick={() => setSidebarPreview(true)}
											/>

											<ToggleControl
												label={__("Enable Site Details", "rootblox")}
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

											{attributes.sidebar.siteLogo && (
												<>
													<ToggleControl
														label={__("Enable Site Logo", "rootblox")}
														checked={attributes.sidebarSiteLogo.enableLogo}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																sidebarSiteLogo: {
																	...attributes.sidebarSiteLogo,
																	enableLogo: newValue,
																},
															})
														}
													/>
													{attributes.sidebarSiteLogo.enableLogo && (
														<>
															<AttrWrapper styles={{ maxWidth: "50%" }}>
																<UnitControl
																	label={__("Logo Width", "rootblox")}
																	value={attributes.sidebarSiteLogo.width}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			sidebarSiteLogo: {
																				...attributes.sidebarSiteLogo,
																				width: newValue,
																			},
																		})
																	}
																	__next40pxDefaultSize
																/>
															</AttrWrapper>
														</>
													)}

													<ToggleControl
														label={__("Enable Site Title", "rootblox")}
														checked={attributes.sidebarSiteLogo.enableTitle}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																sidebarSiteLogo: {
																	...attributes.sidebarSiteLogo,
																	enableTitle: newValue,
																},
															})
														}
													/>

													{attributes.sidebarSiteLogo.enableTitle && (
														<>
															<ToggleGroupControl
																label={__("Title Tag", "rootblox")}
																value={attributes.sidebarSiteLogo.titleTag}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		sidebarSiteLogo: {
																			...attributes.sidebarSiteLogo,
																			titleTag: newValue,
																		},
																	})
																}
																__next40pxDefaultSize
															>
																<ToggleGroupControlOptionIcon
																	label={__("Paragraph", "rootblox")}
																	value="p"
																	icon={paragraph}
																/>
																<ToggleGroupControlOptionIcon
																	label={__("Heading 1", "rootblox")}
																	value="h1"
																	icon={headingLevel1}
																/>
																<ToggleGroupControlOptionIcon
																	label={__("Heading 2", "rootblox")}
																	value="h2"
																	icon={headingLevel2}
																/>
																<ToggleGroupControlOptionIcon
																	label={__("Heading 3", "rootblox")}
																	value="h3"
																	icon={headingLevel3}
																/>
																<ToggleGroupControlOptionIcon
																	label={__("Heading 4", "rootblox")}
																	value="h4"
																	icon={headingLevel4}
																/>
																<ToggleGroupControlOptionIcon
																	label={__("Heading 5", "rootblox")}
																	value="h5"
																	icon={headingLevel5}
																/>
																<ToggleGroupControlOptionIcon
																	label={__("Heading 6", "rootblox")}
																	value="h6"
																	icon={headingLevel6}
																/>
															</ToggleGroupControl>
														</>
													)}

													{attributes.sidebarSiteLogo.enableLogo &&
														attributes.sidebarSiteLogo.enableTitle && (
															<>
																<AttrWrapper
																	styles={{
																		maxWidth: "50%",
																	}}
																>
																	<UnitControl
																		label={__("Gap", "rootblox")}
																		value={attributes.sidebarSiteLogo.gap}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarSiteLogo: {
																					...attributes.sidebarSiteLogo,
																					gap: newValue,
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

											<div
												className={`${
													attributes.sidebar.navigation
														? "cthf__light-border-top"
														: ""
												}`}
												style={{
													paddingTop: attributes.sidebar.navigation
														? "20px"
														: 0,
												}}
											>
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
											</div>

											{attributes.sidebar.navigation && (
												<>
													<AttrWrapper styles={{ marginBottom: "0" }}>
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

													<div className="cthf__attr-divider">
														<AttrWrapper styles={{ marginTop: "10px" }}>
															<UnitControl
																label={__("Menu Gap", "rootblox")}
																value={attributes.navigation.menuGap}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		navigation: {
																			...attributes.navigation,
																			menuGap: newValue,
																		},
																	})
																}
																__next40pxDefaultSize
															/>
														</AttrWrapper>

														<AttrWrapper styles={{ marginTop: "10px" }}>
															<UnitControl
																label={__("Submenu Gap", "rootblox")}
																value={attributes.navigation.submenuGap}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		navigation: {
																			...attributes.navigation,
																			submenuGap: newValue,
																		},
																	})
																}
																__next40pxDefaultSize
															/>
														</AttrWrapper>
													</div>
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
													<div
														className={`${
															attributes.sidebar.button
																? "cthf__light-border-top"
																: ""
														}`}
														style={{
															paddingTop: attributes.sidebar.button
																? "20px"
																: 0,
														}}
													>
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
													</div>

													{attributes.sidebar.button && (
														<>
															<div className="cthf__cta-btn-group">
																{Array.isArray(attributes.sidebar.btnGroup) &&
																	attributes.sidebar.btnGroup.map(
																		(btn, index) => {
																			let layoutIndex = index + 1;

																			return (
																				<>
																					<div
																						className={`flex-wrap flex-${layoutIndex}`}
																					>
																						<TextControl
																							label={__("Label", "rootblox")}
																							placeholder={__(
																								"Add Text",
																								"rootblox",
																							)}
																							value={btn.label}
																							onChange={(newValue) => {
																								const updatedBtnGroup =
																									attributes.sidebar.btnGroup.map(
																										(item, i) => {
																											if (i === index) {
																												return {
																													...item,
																													label: newValue,
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
																													...item,
																													link: newValue,
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
																							label={__(
																								"Open in New Tab",
																								"rootblox",
																							)}
																							checked={btn.openNewTab}
																							onChange={(newValue) => {
																								const updatedBtnGroup =
																									attributes.sidebar.btnGroup.map(
																										(item, i) => {
																											if (i === index) {
																												return {
																													...item,
																													openNewTab: newValue,
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
																							label={__(
																								"Mark as no follow",
																								"rootblox",
																							)}
																							checked={btn.noFollow}
																							onChange={(newValue) => {
																								const updatedBtnGroup =
																									attributes.sidebar.btnGroup.map(
																										(item, i) => {
																											if (i === index) {
																												return {
																													...item,
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

																						<br />

																						<PanelColorSettings
																							title={__("Color", "rootblox")}
																							className="cthf__color-panel"
																							enableAlpha={true}
																							colorSettings={[
																								{
																									label: __(
																										"Text (Default)",
																										"rootblox",
																									),
																									value: btn.textColor,
																									onChange: (newValue) => {
																										const updatedBtnGroup =
																											attributes.sidebar.btnGroup.map(
																												(item, i) => {
																													if (i === index) {
																														return {
																															...item,
																															textColor:
																																newValue,
																														};
																													}

																													return item;
																												},
																											);

																										setAttributes({
																											...attributes,
																											sidebar: {
																												...attributes.sidebar,
																												btnGroup:
																													updatedBtnGroup,
																											},
																										});
																									},
																								},
																								{
																									label: __(
																										"Text (Hover)",
																										"rootblox",
																									),
																									value: btn.textHoverColor,
																									onChange: (newValue) => {
																										const updatedBtnGroup =
																											attributes.sidebar.btnGroup.map(
																												(item, i) => {
																													if (i === index) {
																														return {
																															...item,
																															textHoverColor:
																																newValue,
																														};
																													}

																													return item;
																												},
																											);

																										setAttributes({
																											...attributes,
																											sidebar: {
																												...attributes.sidebar,
																												btnGroup:
																													updatedBtnGroup,
																											},
																										});
																									},
																								},
																								{
																									label: __(
																										"Background (Default)",
																										"rootblox",
																									),
																									value: btn.bgColor,
																									onChange: (newValue) => {
																										const updatedBtnGroup =
																											attributes.sidebar.btnGroup.map(
																												(item, i) => {
																													if (i === index) {
																														return {
																															...item,
																															bgColor: newValue,
																														};
																													}

																													return item;
																												},
																											);

																										setAttributes({
																											...attributes,
																											sidebar: {
																												...attributes.sidebar,
																												btnGroup:
																													updatedBtnGroup,
																											},
																										});
																									},
																								},
																								{
																									label: __(
																										"Background (Hover)",
																										"rootblox",
																									),
																									value: btn.bgHoverColor,
																									onChange: (newValue) => {
																										const updatedBtnGroup =
																											attributes.sidebar.btnGroup.map(
																												(item, i) => {
																													if (i === index) {
																														return {
																															...item,
																															bgHoverColor:
																																newValue,
																														};
																													}

																													return item;
																												},
																											);

																										setAttributes({
																											...attributes,
																											sidebar: {
																												...attributes.sidebar,
																												btnGroup:
																													updatedBtnGroup,
																											},
																										});
																									},
																								},
																								{
																									label: __(
																										"Border (Default)",
																										"rootblox",
																									),
																									value: btn.borderColor,
																									onChange: (newValue) => {
																										const updatedBtnGroup =
																											attributes.sidebar.btnGroup.map(
																												(item, i) => {
																													if (i === index) {
																														return {
																															...item,
																															borderColor:
																																newValue,
																														};
																													}

																													return item;
																												},
																											);

																										setAttributes({
																											...attributes,
																											sidebar: {
																												...attributes.sidebar,
																												btnGroup:
																													updatedBtnGroup,
																											},
																										});
																									},
																								},
																								{
																									label: __(
																										"Border (Hover)",
																										"rootblox",
																									),
																									value: btn.borderHoverColor,
																									onChange: (newValue) => {
																										const updatedBtnGroup =
																											attributes.sidebar.btnGroup.map(
																												(item, i) => {
																													if (i === index) {
																														return {
																															...item,
																															borderHoverColor:
																																newValue,
																														};
																													}

																													return item;
																												},
																											);

																										setAttributes({
																											...attributes,
																											sidebar: {
																												...attributes.sidebar,
																												btnGroup:
																													updatedBtnGroup,
																											},
																										});
																									},
																								},
																							]}
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
																		},
																	)}

																<AttrWrapper styles={{ marginBottom: "0" }}>
																	<Button
																		text={__("Add CTA Button", "rootblox")}
																		icon={plusCircle}
																		onClick={() => {
																			const addGroup = [
																				...attributes.sidebar.btnGroup,
																				{
																					label: "Subscribe",
																					link: "#",
																					openNewTab: false,
																					noFollow: false,
																					textColor: "",
																					textHoverColor: "",
																					bgColor: "",
																					bgHoverColor: "",
																					borderColor: "",
																					borderHoverColor: "",
																				},
																			];
																			setAttributes({
																				...attributes,
																				sidebar: {
																					...attributes.sidebar,
																					btnGroup: addGroup,
																				},
																			});
																		}}
																	/>
																</AttrWrapper>
															</div>

															<div className="cthf__attr-divider">
																<AttrWrapper styles={{ marginTop: "0" }}>
																	<UnitControl
																		label={__("HGap", "rootblox")}
																		value={attributes.sidebarCTA.gap}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
																					gap: newValue,
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</AttrWrapper>

																<AttrWrapper styles={{ marginTop: "0" }}>
																	<UnitControl
																		label={__("VGap", "rootblox")}
																		value={attributes.sidebarCTA.rowGap}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
																					rowGap: newValue,
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
																		label={__("Width", "rootblox")}
																		value={attributes.sidebarCTA.width}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
																					width: newValue,
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</AttrWrapper>

																<AttrWrapper styles={{ marginTop: "0" }}>
																	<ToggleGroupControl
																		label={__("Justification", "rootblox")}
																		value={attributes.sidebarCTA.justification}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
																					justification: newValue,
																				},
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
																		<ToggleGroupControlOptionIcon
																			label={__("Space Between", "rootblox")}
																			icon={justifySpaceBetween}
																			value="space-between"
																		/>
																	</ToggleGroupControl>
																</AttrWrapper>
															</div>

															<ToggleControl
																label={__("Stack Layout", "rootblox")}
																checked={attributes.sidebarCTA.stacked}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		sidebarCTA: {
																			...attributes.sidebarCTA,
																			stacked: newValue,
																		},
																	})
																}
															/>
														</>
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
													<div
														className={`${
															attributes.sidebar.social
																? "cthf__light-border-top"
																: ""
														}`}
														style={{
															marginTop: attributes.sidebar.social ? "20px" : 0,
															paddingTop: attributes.sidebar.social
																? "20px"
																: 0,
														}}
													>
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
													</div>

													{attributes.sidebar.social && (
														<>
															<FormTokenField
																label={__("Add Social Links", "rootblox")}
																placeholder={__(
																	"Select Social Media",
																	"rootblox",
																)}
																suggestions={[
																	"Facebook",
																	"Instagram",
																	"Linkedin",
																	"Whatsapp",
																	"X",
																	"Pinterest",
																	"Spotify",
																	"Medium",
																	"Reddit",
																	"RSS",
																	"Tiktok",
																	"Telegram",
																	"Snapchat",
																	"VK",
																	"Tumblr",
																	"Youtube",
																	"Twitch",
																	"Yelp",
																	"Etsy",
																	"Dribble",
																	"Behance",
																]}
																value={attributes.sidebarSocial.elements}
																onChange={(token) => {
																	// Add missing tokens
																	token.forEach((social) => {
																		if (
																			!attributes.sidebarSocial.links.find(
																				(item) => item.label === social,
																			)
																		) {
																			attributes.sidebarSocial.links.push({
																				label: social,
																				url: "",
																			});
																		}
																	});

																	// Remove items not in token
																	const socialLinks =
																		attributes.sidebarSocial.links.filter(
																			(item) => token.includes(item.label),
																		);

																	setAttributes({
																		...attributes,
																		sidebarSocial: {
																			...attributes.sidebarSocial,
																			elements: token,
																			links: socialLinks,
																		},
																	});
																}}
																__experimentalExpandOnFocus
																__next40pxDefaultSize
															/>

															<ToggleControl
																label={__("Stack Layout", "rootblox")}
																checked={attributes.sidebarSocial.stackLayout}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		sidebarSocial: {
																			...attributes.sidebarSocial,
																			stackLayout: newValue,
																		},
																	})
																}
															/>

															<div className="cthf__attr-divider">
																<AttrWrapper
																	styles={{ marginTop: "0", maxWidth: "50%" }}
																>
																	<UnitControl
																		label={__("HGap", "rootblox")}
																		value={attributes.sidebarSocial.gap}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarSocial: {
																					...attributes.sidebarSocial,
																					gap: newValue,
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</AttrWrapper>

																{attributes.sidebarSocial.stackLayout && (
																	<>
																		<AttrWrapper styles={{ marginTop: "0" }}>
																			<UnitControl
																				label={__("VGap", "rootblox")}
																				value={attributes.sidebarSocial.rowGap}
																				onChange={(newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarSocial: {
																							...attributes.sidebarSocial,
																							rowGap: newValue,
																						},
																					})
																				}
																				__next40pxDefaultSize
																			/>
																		</AttrWrapper>
																	</>
																)}
															</div>

															<ToggleGroupControl
																label={__("Icon Justification", "rootblox")}
																value={attributes.sidebarSocial.justification}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		sidebarSocial: {
																			...attributes.sidebarSocial,
																			justification: newValue,
																		},
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

															<CheckboxControl
																label={__("Open Link in new tab", "rootblox")}
																checked={attributes.sidebarSocial.openNewTab}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		sidebarSocial: {
																			...attributes.sidebarSocial,
																			openNewTab: newValue,
																		},
																	})
																}
															/>

															<CheckboxControl
																label={__("Mark as no follow", "rootblox")}
																checked={attributes.sidebarSocial.noFollow}
																onChange={(newValue) =>
																	setAttributes({
																		...attributes,
																		sidebarSocial: {
																			...attributes.sidebarSocial,
																			noFollow: newValue,
																		},
																	})
																}
															/>

															{attributes.sidebarSocial.links.length > 0 && (
																<>
																	{attributes.sidebarSocial.links.map(
																		(social) => {
																			return (
																				<>
																					<TextControl
																						label={social.label}
																						type="url"
																						placeholder="https://"
																						value={social.url}
																						onChange={(newValue) => {
																							const updatedLinks =
																								attributes.sidebarSocial.links.map(
																									(item) =>
																										item.label === social.label
																											? {
																													...item,
																													url: newValue,
																											  }
																											: item,
																								);

																							setAttributes({
																								...attributes,
																								sidebarSocial: {
																									...attributes.sidebarSocial,
																									links: updatedLinks,
																								},
																							});
																						}}
																						__next40pxDefaultSize
																					/>
																				</>
																			);
																		},
																	)}
																</>
															)}
														</>
													)}
												</>
											)}

											<div
												className="cthf__attr-divider cthf__light-border-top"
												style={{ marginTop: "22px" }}
											>
												<AttrWrapper styles={{ marginBottom: "0" }}>
													<ToggleGroupControl
														label={__("Content Alignment", "rootblox")}
														value={attributes.sidebar.contentAlign}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																sidebar: {
																	...attributes.sidebar,
																	contentAlign: newValue,
																},
															})
														}
													>
														<ToggleGroupControlOptionIcon
															label={__("Left", "rootblox")}
															icon={alignLeft}
															value="left"
														/>
														<ToggleGroupControlOptionIcon
															label={__("Center", "rootblox")}
															icon={alignCenter}
															value="center"
														/>
														<ToggleGroupControlOptionIcon
															label={__("Right", "rootblox")}
															icon={alignRight}
															value="right"
														/>
													</ToggleGroupControl>
												</AttrWrapper>

												<AttrWrapper styles={{ marginBottom: "0" }}>
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
														<ToggleGroupControlOptionIcon
															label={__("Left", "rootblox")}
															value="left"
															icon={justifyLeft}
														/>

														<ToggleGroupControlOptionIcon
															label={__("Right", "rootblox")}
															value="right"
															icon={justifyRight}
														/>
													</ToggleGroupControl>
												</AttrWrapper>
											</div>

											<Button
												className="cthf__btn-secondary"
												style={{ marginTop: "12px" }}
												text={__("Preview Changes", "rootblox")}
												onClick={() => setSidebarPreview(true)}
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
