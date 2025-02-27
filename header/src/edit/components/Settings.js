import { __ } from "@wordpress/i18n";

import {
	Panel,
	PanelBody,
	ToggleControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from "@wordpress/components";

import { memo } from "@wordpress/element";

export const Settings = memo(({ attributes, setAttributes }) => {
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
								<ToggleControl
									label={__("Make Top Bar Sticky", "cozy-addons")}
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
							</>
						)}
					</PanelBody>
				</Panel>
			</div>
		</>
	);
});
