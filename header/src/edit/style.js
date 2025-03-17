import { renderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
      #${blockID} {
        color: ${attributes.color.text};
        background-color: ${attributes.color.bg};
      }
    `;

	return blockStyles;
}
