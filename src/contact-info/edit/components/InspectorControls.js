import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import { memo } from "@wordpress/element";

import { Settings } from "./Settings.js";
import { Styles } from "./Styles.js";
import { BlockUpsellNotice } from "../../../../../resources/components/utility.js";

export const CTHFBlockControls = memo(() => {
	return (
		<>
			<InspectorControls key="setting" group="settings">
				<Settings />
				{!cthfAssets.isPremium && <BlockUpsellNotice />}
			</InspectorControls>

			<InspectorControls key="style" group="styles">
				<Styles />
				{!cthfAssets.isPremium && <BlockUpsellNotice />}
			</InspectorControls>
		</>
	);
});
