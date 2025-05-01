import "../editor.scss";

import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
	BlockControls,
} from "@wordpress/block-editor";

import { memo, createContext, useContext } from "@wordpress/element";
import { CTHFBlockControls } from "./components/InspectorControls.js";

export const CTHFBlockContext = createContext(null);

const BusinessHours = memo(() => {
	const { blockID, attributes } = useContext(CTHFBlockContext);

	return (
		<>
			<div id={blockID} className="cthf-block__business-hours"></div>
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
					<BusinessHours />
				</div>

				<CTHFBlockControls />
			</CTHFBlockContext.Provider>
		</>
	);
}
