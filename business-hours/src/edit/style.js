import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
        #${blockID} .business-hour__item:not(:first-child) {
            margin-top: ${attributes.itemStyles.gap};
        }

    `;

	return blockStyles;
}
