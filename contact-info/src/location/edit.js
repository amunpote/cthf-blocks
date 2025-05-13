import { __ } from "@wordpress/i18n";

import { RichText } from "@wordpress/block-editor";

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

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<div id={blockID} className="cthf-blocks__contact-info-location">
				{icon && icon.enabled && <></>}

				<RichText
					placeholder={__(
						"123 Maplewood Lane, Springfield, IL 62704, USA",
						"rootblox",
					)}
					value={attributes.content}
					onChange={(newValue) =>
						setAttributes({
							...attributes,
							content: newValue,
						})
					}
				/>
			</div>
		</>
	);
}
