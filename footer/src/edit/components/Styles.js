import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	__experimentalBoxControl as BoxControl,
	__experimentalUnitControl as UnitControl,
	__experimentalBorderControl as BorderControl,
} from "@wordpress/components";

import { memo, useContext, useState } from "@wordpress/element";
import { select } from "@wordpress/data";
import { CTHFBlockContext } from "./InspectorControls.js";
import { AttrWrapper } from "../../../../../resources/components/utility.js";

export const Styles = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	const [openPanel, setOpenPanel] = useState(null);

	return (
		<>
			<div key="cthf-block__style" className="cthf__light-border-top">
				{attributes.backToTop.enabled && (
					<Panel>
						<PanelBody
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
										colorSettings={themeColorPalette}
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

							<PanelColorSettings
								className="cthf__color-panel"
								enableAlpha={true}
								title={__("Colors", "rootblox")}
								colorSettings={[
									{
										label: __("Icon (Default)", "rootblox"),
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
										label: __("Icon (Hover)", "rootblox"),
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
			</div>
		</>
	);
});
