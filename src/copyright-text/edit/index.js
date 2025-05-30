import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";

import { memo, createContext, useContext } from "@wordpress/element";

import { renderBlockStyles } from "./style.js";
import { CTHFBlockControls } from "./components/InspectorControls.js";

export const CTHFBlockContext = createContext(null);

const CopyrightText = memo(() => {
	const { attributes, setAttributes } = useContext(CTHFBlockContext);

	const blockID = `cthf_${attributes.clientId.replace(/-/gi, "_")}`;

	const Tag = attributes.tag;

	const currentYear = new Date().getFullYear();
	const previousYear = currentYear - attributes.dynamicYear.range;

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: renderBlockStyles(blockID, attributes),
				}}
			/>

			<style>
				{attributes.typography.font.family != "" &&
					attributes.typography.font.family != undefined && (
						<link
							rel="stylesheet"
							href={`https://fonts.googleapis.com/css2?family=${attributes.typography.font.family}:wght@100;200;300;400;500;600;700;800;900`}
						/>
					)}

				{attributes.beforeText.font.family != "" &&
					attributes.beforeText.font.family != undefined && (
						<link
							rel="stylesheet"
							href={`https://fonts.googleapis.com/css2?family=${attributes.beforeText.font.family}:wght@100;200;300;400;500;600;700;800;900`}
						/>
					)}

				{attributes.dynamicYear.font.family != "" &&
					attributes.dynamicYear.font.family != undefined && (
						<link
							rel="stylesheet"
							href={`https://fonts.googleapis.com/css2?family=${attributes.dynamicYear.font.family}:wght@100;200;300;400;500;600;700;800;900`}
						/>
					)}

				{attributes.afterText.font.family != "" &&
					attributes.afterText.font.family != undefined && (
						<link
							rel="stylesheet"
							href={`https://fonts.googleapis.com/css2?family=${attributes.afterText.font.family}:wght@100;200;300;400;500;600;700;800;900`}
						/>
					)}
			</style>

			<Tag id={blockID} className="cthf__copyright-text">
				{attributes.beforeText.enabled && (
					<RichText
						tagName="span"
						className="copyright__before-text"
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
				)}

				{attributes.dynamicYear.enabled && (
					<span className="copyright__year">
						{cthfAssets.isPremium && attributes.dynamicYear.hasRange && (
							<span className="previous-year">
								{previousYear}
								{attributes.dynamicYear.separator}
							</span>
						)}
						{currentYear}
					</span>
				)}

				{attributes.afterText.enabled && (
					<RichText
						tagName="span"
						className="copyright__after-text"
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
				)}
			</Tag>
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockProps = useBlockProps({
		className: "cthf-block__wrapper",
	});

	return (
		<>
			<CTHFBlockContext.Provider value={{ attributes, setAttributes }}>
				<div {...blockProps}>
					<CopyrightText />
				</div>

				<CTHFBlockControls />
			</CTHFBlockContext.Provider>
		</>
	);
}
