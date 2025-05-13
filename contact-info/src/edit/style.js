import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
		#${blockID} .block-editor-block-list__layout > div:not(:first-child) {
			margin-top: ${attributes.gap};
		}
    `;

	return blockStyles;
}
