import { __ } from "@wordpress/i18n";

import {
	Panel,
	PanelBody,
	ToggleControl,
	RangeControl,
	Button,
	Modal,
	SelectControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlLabelOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlIconOption,
} from "@wordpress/components";
import { justifyLeft, justifyRight } from "@wordpress/icons";

import { memo, useState, useEffect } from "@wordpress/element";

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

export const Settings = memo(({ attributes, setAttributes }) => {
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
					<PanelBody title={__("Mobile Menu", "rootblox")} initialOpen={false}>
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
									{/* {attributes.mobileMenu.layout.length > 0 && (
										<>
											<figure style={{ maxWidth: "100%", margin: "22px 0 16px" }}>
												<img
													style={{ width: "100%" }}
													src={`${
														cthfAssets.img + "" + attributes.mobileMenu.layout
													}.png`}
												/>
											</figure>
										</>
									)}

									<Button
										className="cthf__btn-secondary"
										text={__(
											`${
												attributes.mobileMenu.layout.length <= 0
													? "Select Mobile Layout"
													: "Replace Mobile Layout"
											}`,
											"rootblox",
										)}
										onClick={() => setLayoutModal(true)}
										__next40pxDefaultSize
									/>

									{attributes.mobileMenu.layout.length > 0 && (
										<>
											<Button
												className="cthf__btn-remove"
												style={{ marginTop: "10px" }}
												text={__("Clear Selection", "rootblox")}
												onClick={() =>
													setAttributes({
														...attributes,
														mobileMenu: {
															...attributes.mobileMenu,
															layout: "",
														},
													})
												}
												__next40pxDefaultSize
											/>
										</>
									)}
									{mobileLayoutModal && (
										<Modal
											title={__("Select Mobile Layout", "rootblox")}
											onRequestClose={() => setLayoutModal(false)}
											className="cthf__mobile-layout-modal"
										>
											<div className="mobile__layouts">
												{mobileLayouts.map((layout) => {
													return (
														<>
															<figure
																className={`layout__item${
																	attributes.mobileMenu.layout === layout
																		? " is-selected"
																		: ""
																}`}
																style={{ maxWidth: "100%" }}
															>
																<img
																	src={`${cthfAssets.img + "" + layout}.png`}
																/>

																{attributes.mobileMenu.layout !== layout && (
																	<>
																		<span className="pattern__overlay" />

																		<div
																			className="layout__select-btn"
																			onClick={() => {
																				setAttributes({
																					...attributes,
																					mobileMenu: {
																						...attributes.mobileMenu,
																						layout: layout,
																					},
																				});

																				setLayoutModal(false);
																			}}
																		>
																			{__("Select Layout", "rootblox")}
																		</div>
																	</>
																)}
															</figure>
														</>
													);
												})}

												{proMobileLayouts.map((layout) => {
													return (
														<>
															<figure
																className={`layout__item${
																	attributes.mobileMenu.layout === layout
																		? " is-selected"
																		: ""
																}`}
																style={{ maxWidth: "100%" }}
															>
																<img
																	src={`${cthfAssets.img + "" + layout}.png`}
																/>

																<span className="pro__crown" />

																{attributes.mobileMenu.layout !== layout && (
																	<>
																		<span className="pattern__overlay" />

																		{cthfAssets.isPremium && (
																			<div
																				className="layout__select-btn"
																				onClick={() => {
																					setAttributes({
																						...attributes,
																						mobileMenu: {
																							...attributes.mobileMenu,
																							layout: layout,
																						},
																					});

																					setLayoutModal(false);
																				}}
																			>
																				{__("Select Layout", "rootblox")}
																			</div>
																		)}
																		{!cthfAssets.isPremium && (
																			<a className="cthf__upsell-btn">
																				{__("Checkout Pro", "rootblox")}
																			</a>
																		)}
																	</>
																)}
															</figure>
														</>
													);
												})}
											</div>
										</Modal>
									)} */}

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

												console.log(index);

												return (
													<>
														<div
															className={`flex-wrap flex-${layoutIndex}`}
														></div>

														{index > 0 && (
															<span
																id="clear-flex"
																onClick={() => {
																	const updatedArr =
																		attributes.mobileMenu.layout.filter(
																			(_, i) => i !== index,
																		);

																	setAttributes({
																		...attributes,
																		mobileMenu: {
																			...attributes.mobileMenu,
																			layout: [...updatedArr],
																		},
																	});
																}}
															>
																Remove Flex
															</span>
														)}
													</>
												);
											})}
									</div>

									{!cthfAssets.isPremium && (
										<>
											<UpsellAttributeWrapper>
												<ToggleGroupControl
													label={__("Sidebar Position", "rootblox")}
													value="left"
													disabled
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
											</UpsellAttributeWrapper>
										</>
									)}

									{cthfAssets.isPremium && (
										<div style={{ marginTop: "22px" }}>
											<ToggleGroupControl
												label={__("Sidebar Position", "rootblox")}
												value={attributes.mobileMenu.sidebar.position}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														mobileMenu: {
															...attributes.mobileMenu,
															sidebar: {
																...attributes.mobileMenu.sidebar,
																position: newValue,
															},
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
										</div>
									)}

									<div style={{ marginTop: "16px" }}>
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
									</div>
								</>
							)}

						{cthfAssets.isPremium && (
							<>
								<AttrWrapper>
									<ToggleGroupControl
										label={__("Search Variation", "rootblox")}
										value={attributes.mobileMenu.search.variation}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												mobileMenu: {
													...attributes.mobileMenu,
													search: {
														...attributes.mobileMenu.search,
														variation: newValue,
													},
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
							</>
						)}
					</PanelBody>
				</Panel>
			</div>
		</>
	);
});
