import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import { memo } from "@wordpress/element";
import { select } from "@wordpress/data";

const AttrWrapper = memo(({ className = "", styles = {}, children }) => {
	return (
		<>
			<div
				className={`cthf__style-attr-wrapper${
					className.length > 0 ? " " + className : ""
				}`}
				style={styles}
			>
				{children}
			</div>
		</>
	);
});

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
								label: __("Text", "rootblox"),
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

				<Panel>
					<PanelBody title={__("Sticky Styles", "cozy-addons")}>
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
			</div>
		</>
	);
});
