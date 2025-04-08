import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import { TabPanel } from "@wordpress/components";

import { cog, styles } from "@wordpress/icons";

import { memo } from "@wordpress/element";
import { Settings } from "./Settings.js";
import { Styles } from "./Styles.js";

export const CTHFBlockControls = memo(({ attributes, setAttributes }) => {
	return (
		<>
			<InspectorControls>
				<TabPanel
					className="cthf__tab-panel"
					tabs={[
						{
							title: __("Settings", "rootblox"),
							name: "cthf__tab-one",
							icon: cog,
							className: 'cthf__tab'
						},
						{
							title: __("Styles", "rootblox"),
							name: "cthf__tab-two",
							icon: styles,
							className: 'cthf__tab'
						},
					]}
				>
					{(tab) => (
						<>
							{tab.name === "cthf__tab-one" && (
								<Settings
									attributes={attributes}
									setAttributes={setAttributes}
								/>
							)}

							{tab.name === "cthf__tab-two" && (
								<Styles attributes={attributes} setAttributes={setAttributes} />
							)}
						</>
					)}
				</TabPanel>
			</InspectorControls>
		</>
	);
});
