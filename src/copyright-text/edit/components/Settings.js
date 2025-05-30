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
} from "@wordpress/components";

import { memo, useContext, useState } from "@wordpress/element";

import { CTHFBlockContext } from "../index.js";
import {
	AttrWrapper,
	UpsellAttributeWrapper,
} from "../../../../../resources/components/utility.js";

export const Settings = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const [openPanel, setOpenPanel] = useState("general");

	return (
		<>
			<Panel>
				<PanelBody
					title={__("General", "rootblox")}
					className="cthf__light-border-bottom"
					opened={openPanel === "general"}
					onToggle={() => setOpenPanel("general")}
				>
					<SelectControl
						label={__("Select Tag", "rootblox")}
						options={[
							{
								label: __("H1", "rootblox"),
								value: "h1",
							},
							{
								label: __("H2", "rootblox"),
								value: "h2",
							},
							{
								label: __("H3", "rootblox"),
								value: "h3",
							},
							{
								label: __("H4", "rootblox"),
								value: "h4",
							},
							{
								label: __("H5", "rootblox"),
								value: "h5",
							},
							{
								label: __("H6", "rootblox"),
								value: "h6",
							},
							{
								label: __("div", "rootblox"),
								value: "div",
							},
							{
								label: __("span", "rootblox"),
								value: "span",
							},
							{
								label: __("p", "rootblox"),
								value: "p",
							},
						]}
						value={attributes.tag}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								tag: newValue,
							})
						}
						__next40pxDefaultSize
					/>

					<ToggleControl
						label={__("Add Preceeding Text", "rootblox")}
						checked={attributes.beforeText.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								beforeText: {
									...attributes.beforeText,
									enabled: newValue,
								},
							})
						}
					/>

					<ToggleControl
						label={__("Add Dynamic Year", "rootblox")}
						checked={attributes.dynamicYear.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								dynamicYear: {
									...attributes.dynamicYear,
									enabled: newValue,
								},
							})
						}
					/>

					<ToggleControl
						label={__("Add Subsequent Text", "rootblox")}
						checked={attributes.afterText.enabled}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								afterText: {
									...attributes.afterText,
									enabled: newValue,
								},
							})
						}
					/>
				</PanelBody>
			</Panel>

			{attributes.beforeText.enabled && (
				<Panel>
					<PanelBody
						title={__("Preceeding Text Settings", "rootblox")}
						className="cthf__light-border-bottom"
						opened={openPanel === "before-text"}
						onToggle={() => setOpenPanel("before-text")}
					>
						<TextareaControl
							label={__("Content", "rootblox")}
							value={attributes.beforeText.content}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									beforeText: {
										...attributes.beforeText,
										content: newValue,
									},
								})
							}
						/>
					</PanelBody>
				</Panel>
			)}

			{attributes.dynamicYear.enabled && (
				<Panel>
					<PanelBody
						title={__("Dynamic Year Settings", "rootblox")}
						className="cthf__light-border-bottom"
						opened={openPanel === "dynamic-year"}
						onToggle={() => setOpenPanel("dynamic-year")}
					>
						{!cthfAssets.isPremium && (
							<UpsellAttributeWrapper>
								<CheckboxControl
									label={__("Add Range", "rootblox")}
									checked={false}
									disabled
								/>
							</UpsellAttributeWrapper>
						)}
						{cthfAssets.isPremium && (
							<>
								<CheckboxControl
									label={__("Add Range", "rootblox")}
									checked={attributes.dynamicYear.hasRange}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											dynamicYear: {
												...attributes.dynamicYear,
												hasRange: newValue,
											},
										})
									}
								/>

								{attributes.dynamicYear.hasRange && (
									<>
										<RangeControl
											label={__("Previous Year Range", "rootblox")}
											min={1}
											max={100}
											step={1}
											value={attributes.dynamicYear.range}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													dynamicYear: {
														...attributes.dynamicYear,
														range: newValue,
													},
												})
											}
											__next40pxDefaultSize
										/>

										<AttrWrapper styles={{ margin: "0", maxWidth: "50%" }}>
											<TextControl
												label={__("Range Separator", "rootblox")}
												value={attributes.dynamicYear.separator}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														dynamicYear: {
															...attributes.dynamicYear,
															separator: newValue,
														},
													})
												}
												__next40pxDefaultSize
											/>
										</AttrWrapper>
									</>
								)}
							</>
						)}
					</PanelBody>
				</Panel>
			)}

			{attributes.afterText.enabled && (
				<Panel>
					<PanelBody
						title={__("Subsequent Text Settings", "rootblox")}
						className="cthf__light-border-bottom"
						opened={openPanel === "after-text"}
						onToggle={() => setOpenPanel("after-text")}
					>
						<TextareaControl
							label={__("Content", "rootblox")}
							value={attributes.afterText.content}
							onChange={(newValue) =>
								setAttributes({
									...attributes,
									afterText: {
										...attributes.afterText,
										content: newValue,
									},
								})
							}
						/>
					</PanelBody>
				</Panel>
			)}
		</>
	);
});
