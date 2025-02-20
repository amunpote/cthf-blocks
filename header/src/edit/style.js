import { renderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
      #${blockID} {
       ${renderTRBL("padding", attributes.padding)}
      }
    `;

	return blockStyles;
}
