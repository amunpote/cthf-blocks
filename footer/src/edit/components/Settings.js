import { __ } from "@wordpress/i18n";

import {
	CheckboxControl,
	Panel,
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlIconOption,
} from "@wordpress/components";

import { justifyLeft, justifyRight } from "@wordpress/icons";

import { memo, useContext, useState } from "@wordpress/element";
import { CTHFBlockContext } from "./InspectorControls.js";

export const Settings = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState(null);

	return (
		<>
			<div key="cthf-block__setting">
				<Panel>
					<PanelBody title={__("General", "rootblox")}>
						<CheckboxControl
							label={__("Add Back to top Button", "rootblox")}
							checked={attributes.backToTop.enabled}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									backToTop: {
										...attributes.backToTop,
										enabled: newValue,
									},
								})
							}
						/>
					</PanelBody>
				</Panel>

				{attributes.backToTop.enabled && (
					<Panel>
						<PanelBody
							title={__("Back To Top Button Settings", "rootblox")}
							opened={openPanel === "back-to-top-settings"}
							onToggle={() => setOpenPanel("back-to-top-settings")}
						>
							<ToggleGroupControl
								label={__("Position", "rootblox")}
								value={attributes.backToTop.position}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										backToTop: {
											...attributes.backToTop,
											position: newValue,
										},
									})
								}
								__next40pxDefaultSize
							>
								<ToggleGroupControlIconOption
									label={__("Left", "rootblox")}
									icon={justifyLeft}
									value="left"
								/>
								<ToggleGroupControlIconOption
									label={__("Right", "rootblox")}
									icon={justifyRight}
									value="right"
								/>
							</ToggleGroupControl>
						</PanelBody>
					</Panel>
				)}
			</div>
		</>
	);
});
