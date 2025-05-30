import { __ } from "@wordpress/i18n";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({ className: "cthf-block__wrapper" });

	return (
		<>
			<div {...blockProps}>
				<div blockID={blockID} className="cthf-block__header-top-bar">
					<InnerBlocks />
				</div>
			</div>
		</>
	);
}
