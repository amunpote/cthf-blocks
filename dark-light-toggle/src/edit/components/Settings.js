import { __ } from "@wordpress/i18n";

import {
	CheckboxControl,
	Panel,
	PanelBody,
	RangeControl,
	SelectControl,
	TextareaControl,
	TextControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

import { memo, useContext, useState } from "@wordpress/element";

import { CTHFBlockContext } from "../index.js";

import {
	AttrWrapper,
	UpsellAttributeWrapper,
	BlockUpsellNotice,
} from "../../../../../resources/components/utility.js";

export const Settings = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState("general");

	return (
		<>
			<Panel>
				<PanelBody
					title={__("General", "rootblox")}
					opened={openPanel === "general"}
					onToggle={() => setOpenPanel("general")}
				>
					<ToggleGroupControl
						label={__("Mode", "rootblox")}
						value={attributes.mode}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								mode: newValue,
							})
						}
						isBlock
						__next40pxDefaultSize
					>
						<ToggleGroupControlOption
							label={__("Light", "rootblox")}
							value="light"
						/>
						<ToggleGroupControlOption
							label={__("Dark", "rootblox")}
							value="dark"
						/>
					</ToggleGroupControl>

					<ToggleControl
						label={__("Enable Icon", "rootblox")}
						checked={attributes.icon.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								icon: {
									...attributes.icon,
									enabled: newValue,
								},
							})
						}
					/>

					<ToggleControl
						label={__("Enable Label", "rootblox")}
						checked={attributes.label.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								label: {
									...attributes.label,
									enabled: newValue,
								},
							})
						}
					/>
				</PanelBody>
			</Panel>

			{!cthfAssets.isPremium && <BlockUpsellNotice />}
		</>
	);
});
