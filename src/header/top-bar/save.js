import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockID = `cthf_${attributes.clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<div {...useBlockProps.save()}>
				<div id={blockID} className="cthf-block__header-top-bar">
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
