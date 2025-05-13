import { InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockID = `cthf_${attributes.clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<div id={blockID} className="cthf-block__contact-info-email">
				<InnerBlocks.Content />
			</div>
		</>
	);
}
