import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import {
	memo,
	createContext,
	useContext,
	useState,
	useEffect,
} from "@wordpress/element";
import { CTHFBlockControls } from "./components/InspectorControls.js";
import { renderBlockStyles } from "./style.js";

export const CTHFBlockContext = createContext(null);

const ContactInfo = memo(() => {
	const { blockID, attributes } = useContext(CTHFBlockContext);

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: renderBlockStyles(blockID, attributes),
				}}
			/>

			<style>
				{attributes.itemStyles.font.family != "" &&
					attributes.itemStyles.font.family != undefined && (
						<link
							rel="stylesheet"
							href={`https://fonts.googleapis.com/css2?family=${attributes.itemStyles.font.family}:wght@100;200;300;400;500;600;700;800;900`}
						/>
					)}
			</style>

			<div id={blockID} className="cthf-block__contact-info">
				<InnerBlocks
					orientation="horizontal"
					allowedBlocks={[
						"cthf-blocks/contact-info-email",
						"cthf-blocks/contact-info-phone",
						"cthf-blocks/contact-info-location",
					]}
					template={[
						["cthf-blocks/contact-info-email"],
						["cthf-blocks/contact-info-phone"],
						["cthf-blocks/contact-info-location"],
					]}
				/>
			</div>
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({
		className: "cthf-block__wrapper",
	});

	return (
		<>
			<CTHFBlockContext.Provider
				value={{
					blockID,
					attributes,
					setAttributes,
				}}
			>
				<div {...blockProps}>
					<ContactInfo />
				</div>

				<CTHFBlockControls />
			</CTHFBlockContext.Provider>
		</>
	);
}
