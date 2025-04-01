import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	__experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import { memo } from "@wordpress/element";
import { select } from "@wordpress/data";

import { AttrWrapper } from "../../../../../resources/components/utility.js";

export const Styles = memo(({ attributes, setAttributes }) => {
	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	return (
		<>
			<div key="cthf-block__style" className="cthf__light-border-top">
				<AttrWrapper styles={{ marginBottom: "10px" }}>
					<PanelColorSettings
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
						<Panel>
							<PanelBody
								// className="cthf__light-border-bottom"
								title={__("Mobile Menu Styles", "rootblox")}
								initialOpen={false}
							>
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

								<AttrWrapper
									className="is-half__unit-control"
									styles={{ margin: "22px 0" }}
								>
									<UnitControl
										label={__("Sidebar Width", "rootblox")}
										value={attributes.mobileMenu.sidebar.width}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												mobileMenu: {
													...attributes.mobileMenu,
													sidebar: {
														...attributes.mobileMenu.sidebar,
														width: newValue,
													},
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
										values={attributes.mobileMenu.sidebar.padding}
										onChange={(newValue) =>
											setAttributes({
												...attributes,
												mobileMenu: {
													...attributes.mobileMenu,
													sidebar: {
														...attributes.mobileMenu.sidebar,
														padding: newValue,
													},
												},
											})
										}
									/>
								</AttrWrapper>

								<PanelColorSettings
									className="cthf__color-panel"
									title={__("Colors", "rootblox")}
									enableAlpha={true}
									colorSettings={[
										{
											label: __("Menu Icon", "rootblox"),
											value: attributes.color.menuIcon,
											onChange: (newValue) =>
												setAttributes({
													...attributes,
													color: {
														...attributes.color,
														menuIcon: newValue,
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
			</div>
		</>
	);
});
