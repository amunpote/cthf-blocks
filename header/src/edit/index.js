import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import { memo } from "@wordpress/element";

import { CozyBlockControls } from "./components/InspectorControls.js";
import { renderBlockStyles } from "./style.js";

const HeaderBuilder = memo(({ blockID, attributes }) => {
	return (
		<>
			<div id={blockID} className="cthf-block__header">
				<div></div>

				<div></div>

				<div></div>
			</div>
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cozyBlock_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({ className: "cthf-block__wrapper" });

	return (
		<>
			<div {...blockProps}>
				<style
					dangerouslySetInnerHTML={{
						__html: renderBlockStyles(blockID, attributes),
					}}
				/>

				<HeaderBuilder blockID={blockID} attributes={attributes} />
			</div>

			<CozyBlockControls
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		</>
	);
}
