import { __ } from "@wordpress/i18n";

import { memo, createContext, useContext } from "@wordpress/element";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { CTHFBlockControls } from "./components/InspectorControls.js";

const Sidebar = memo(() => {
	const { blockID, attributes } = useContext(CTHFBlockContext);

	const blockProps = useBlockProps({ className: "cthf__sidebar-panel-wrap" });

	return (
		<>
			<div {...blockProps}>
				<div blockID={blockID} className="cthf-block__header-sidebar">
					<InnerBlocks />
				</div>
			</div>
		</>
	);
});

export const CTHFBlockContext = createContext(null);

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<CTHFBlockContext.Provider value={{ blockID, attributes, setAttributes }}>
				<Sidebar />

				<CTHFBlockControls />
			</CTHFBlockContext.Provider>
		</>
	);
}
