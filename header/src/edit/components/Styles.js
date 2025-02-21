import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import { memo } from "@wordpress/element";
import { select } from "@wordpress/data";

export const Styles = memo(({ attributes, setAttributes }) => {
	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	return (
		<>
			<div key="cthf-block__style" className="cthf__light-border-top">
			</div>
		</>
	);
});
