import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import { TabPanel } from "@wordpress/components";

import { cog, styles } from "@wordpress/icons";

import { memo } from "@wordpress/element";
import { Settings } from "./Settings.js";
import { Styles } from "./Styles.js";

export const CozyBlockControls = memo(({ attributes, setAttributes }) => {
	return (
		<>
			<InspectorControls>
				<TabPanel
					tabs={[
						{
							title: __("Settings", "cozy-addons"),
							name: "cozy-tab__one",
							icon: cog,
							className: "cozy-block__tab-control",
						},
						{
						title: __("Styles", "cozy-addons"),
							name: "cozy-tab__two",
							icon: styles,
							className: "cozy-block__tab-control",
						},
					]}
				>
					{(tab) => (
						<>
							{tab.name === "cozy-tab__one" && (
								<Settings
									attributes={attributes}
									setAttributes={setAttributes}
								/>
							)}

							{tab.name === "cozy-tab__two" && (
								<Styles attributes={attributes} setAttributes={setAttributes} />
							)}
						</>
					)}
				</TabPanel>
			</InspectorControls>
		</>
	);
});
