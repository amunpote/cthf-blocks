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
} from "@wordpress/components";

import { memo, useState, useEffect } from "@wordpress/element";

import { UpsellAttributeWrapper } from "../../../../../resources/components/utility.js";
import {
	mapObjectIntoOptions,
	mobileLayouts,
	proMobileLayouts,
} from "../utils.js";

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

											<figure style={{ maxWidth: "100%", marginTop: "16px" }}>
												<img
													style={{ width: "100%" }}
													src={`${
														cthfAssets.img + "" + attributes.mobileMenu.layout
													}.png`}
												/>
											</figure>
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

																{attributes.mobileMenu.layout !== layout && (
																	<>
																		<span className="pattern__overlay" />

																		<span className="pro__crown" />

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
					</PanelBody>
				</Panel>
			</div>
		</>
	);
});
