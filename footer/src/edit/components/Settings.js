import { __ } from "@wordpress/i18n";

import {
	CheckboxControl,
	Panel,
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlIconOption,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import {
	justifyBottom,
	justifyLeft,
	justifyRight,
	justifyTop,
	positionCenter,
} from "@wordpress/icons";

import { memo, useContext, useState } from "@wordpress/element";
import { CTHFBlockContext } from "./InspectorControls.js";
import {
	AttrWrapper,
	UpsellAttributeWrapper,
} from "../../../../../resources/components/utility.js";

export const Settings = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState("general");

	return (
		<>
			<div key="cthf-block__setting">
				<Panel>
					<PanelBody
						className="cthf__light-border-bottom"
						title={__("General", "rootblox")}
						opened={openPanel === "general"}
						onToggle={() => setOpenPanel("general")}
					>
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

						{!cthfAssets.isPremium && (
							<>
								<UpsellAttributeWrapper>
									<CheckboxControl
										label={__("Show Site Scroll Progress", "rootblox")}
										checked={false}
										disabled
									/>
								</UpsellAttributeWrapper>
							</>
						)}

						{cthfAssets.isPremium && (
							<CheckboxControl
								label={__("Show Site Scroll Progress", "rootblox")}
								checked={attributes.scrollProgress.enabled}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										scrollProgress: {
											...attributes.scrollProgress,
											enabled: newValue,
										},
									})
								}
							/>
						)}
					</PanelBody>
				</Panel>

				{attributes.backToTop.enabled && (
					<Panel>
						<PanelBody
							className="cthf__light-border-bottom"
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

				{cthfAssets.isPremium && attributes.scrollProgress.enabled && (
					<Panel>
						<PanelBody
							className="cthf__light-border-bottom"
							title={__("Scroll Progress Settings", "rootblox")}
							opened={openPanel === "scroll-progress-settings"}
							onToggle={() => setOpenPanel("scroll-progress-settings")}
						>
							<ToggleGroupControl
								label={__("Position", "rootblox")}
								value={attributes.scrollProgress.position}
								onChange={(newValue) =>
									setAttributes({
										...attributes,
										scrollProgress: {
											...attributes.scrollProgress,
											position: newValue,
										},
									})
								}
							>
								<ToggleGroupControlIconOption
									label={__("Top", "rootblox")}
									icon={justifyTop}
									value="top"
								/>
								<ToggleGroupControlIconOption
									label={__("Bottom", "rootblox")}
									icon={justifyBottom}
									value="bottom"
								/>
							</ToggleGroupControl>

							<AttrWrapper styles={{ maxWidth: "50%" }}>
								<UnitControl
									label={__("Height", "rootblox")}
									value={attributes.scrollProgress.height}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											scrollProgress: {
												...attributes.scrollProgress,
												height: newValue,
											},
										})
									}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						</PanelBody>
					</Panel>
				)}
			</div>
		</>
	);
});
