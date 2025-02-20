import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import { memo } from "@wordpress/element";
import { select } from "@wordpress/data";

// import { getFontOptions } from "../utils.js";

export const Styles = memo(({ attributes, setAttributes }) => {
	// const googleFonts = getFontOptions();

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	return (
		<>
			<div key="cthf-block__style">
				<div className="" style={{ padding: "0 16px" }}>
					<PanelColorSettings
						className="border-none"
						enableAlpha={true}
						title={__("Color", "cozy-addons")}
						colorSettings={[
							{
								label: __("Text", "cozy-addons"),
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
								label: __("Background", "cozy-addons"),
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
				</div>
			</div>
		</>
	);
});
