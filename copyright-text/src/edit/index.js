import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import { memo, createContext, useContext } from "@wordpress/element";

import { renderBlockStyles } from "./style.js";
import { CTHFBlockControls } from "./components/InspectorControls.js";

export const CTHFBlockContext = createContext(null);

const CopyrightText = memo(() => {
	const { attributes } = useContext(CTHFBlockContext);

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

			<Tag id={blockID} className="cthf__copyright-text">
				{attributes.beforeText.enabled && (
					<span className="copyright__before-text">
						{attributes.beforeText.content}
					</span>
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
					<span
						className="copyright__after-text"
						dangerouslySetInnerHTML={{ __html: attributes.afterText.content }}
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
