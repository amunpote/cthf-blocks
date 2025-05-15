import { __ } from "@wordpress/i18n";

import { InspectorControls, RichText } from "@wordpress/block-editor";

import {
	Panel,
	TextareaControl,
	CheckboxControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";

import { IconVariation1, IconVariation2, IconVariation3 } from "./utils.js";

import { AttrWrapper } from "../../../../resources/components/utility.js";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	context: { icon },
}) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;
	attributes.icon = icon;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<div id={blockID} className="cthf-block__contact-info-phone">
				{icon && icon.enabled && (
					<>
						{attributes.iconVariation === "variation-1" && <IconVariation1 />}
						{attributes.iconVariation === "variation-2" && <IconVariation2 />}
						{attributes.iconVariation === "variation-3" && <IconVariation3 />}
					</>
				)}

				<RichText
					className="contact__link contact-info-phone__link"
					tagName="a"
					allowedFormats={[]}
					placeholder={__("+1‑415‑555‑0132", "rootblox")}
					value={attributes.content}
					onChange={(newValue) =>
						setAttributes({
							...attributes,
							content: newValue,
						})
					}
				/>
			</div>

			<InspectorControls>
				<Panel className="cthf__attr-panel">
					<TextareaControl
						label={__("Add Link", "rootblox")}
						placeholder="tel:+1234567890"
						value={attributes.url}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								url: newValue,
							})
						}
					/>

					<CheckboxControl
						label={__("Open in new tab", "rootblox")}
						checked={attributes.openNewTab}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								openNewTab: newValue,
							})
						}
					/>

					<CheckboxControl
						label={__("Mark as no follow", "rootblox")}
						checked={attributes.noFollow}
						onChange={(newValue) =>
							setAttributes({
								...attributes,
								noFollow: newValue,
							})
						}
					/>

					{icon.enabled && (
						<>
							<AttrWrapper styles={{ marginBottom: "0" }}>
								<ToggleGroupControl
									label={__("Icon Variation", "rootblox")}
									value={attributes.iconVariation}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											iconVariation: newValue,
										})
									}
									isBlock
									__next40pxDefaultSize
								>
									<ToggleGroupControlOptionIcon
										label={__("Variation 1", "rootblox")}
										value="variation-1"
										icon={IconVariation1}
									/>
									<ToggleGroupControlOptionIcon
										label={__("Variation 2", "rootblox")}
										value="variation-2"
										icon={IconVariation2}
									/>
									<ToggleGroupControlOptionIcon
										label={__("Variation 3", "rootblox")}
										value="variation-3"
										icon={IconVariation3}
									/>
								</ToggleGroupControl>
							</AttrWrapper>
						</>
					)}
				</Panel>
			</InspectorControls>
		</>
	);
}
