import { __ } from "@wordpress/i18n";

import {
	Panel,
	PanelBody,
	ToggleControl,
	RangeControl,
	Button,
	Modal,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlLabelOption,
} from "@wordpress/components";

import { memo, useState } from "@wordpress/element";

import { UpsellAttributeWrapper } from "../../../../../resources/components/utility.js";
import { mobileLayouts, proMobileLayouts } from "../utils.js";

export const Settings = memo(({ attributes, setAttributes }) => {
	const [mobileLayoutModal, setLayoutModal] = useState(false);

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
											<figure style={{ maxWidth: "100%", marginTop: "16px" }}>
												<img
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
																<span className="pattern__overlay" />

																<img
																	src={`${cthfAssets.img + "" + layout}.png`}
																/>

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
																<span className="pattern__overlay" />

																<img
																	src={`${cthfAssets.img + "" + layout}.png`}
																/>

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
															</figure>
														</>
													);
												})}
											</div>
										</Modal>
									)}
								</>
							)}
					</PanelBody>
				</Panel>
			</div>
		</>
	);
});
