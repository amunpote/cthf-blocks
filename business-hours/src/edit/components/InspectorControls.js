import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import { TabPanel } from "@wordpress/components";

import { cog, styles } from "@wordpress/icons";

import { memo } from "@wordpress/element";

import { Settings } from "./Settings.js";
import { Styles } from "./Styles.js";

export const CTHFBlockControls = memo(() => {
	return (
		<>
			<InspectorControls key="setting" group="settings">
				<Settings />
			</InspectorControls>

			<InspectorControls key="style" group="styles">
				<Styles />
			</InspectorControls>
		</>
	);
});
