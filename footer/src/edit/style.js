import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
      .cthf__back-to-top-wrapper.element-${blockID} {
        ${rootbloxRenderTRBL("margin", attributes.backToTop.margin)}
        ${rootbloxRenderTRBL("border", attributes.backToTop.border)}
        border-radius: ${attributes.backToTop.radius};
        width: ${attributes.backToTop.boxWidth};
        height: ${attributes.backToTop.boxHeight};
        background-color: ${attributes.backToTop.color.bg};
        color: ${attributes.backToTop.color.icon};

        & .cthf__back-to-top {
          width: ${attributes.backToTop.iconSize};
          height: ${attributes.backToTop.iconSize};
        }

        &:hover {
          background-color: ${attributes.backToTop.color.bgHover};
          color: ${attributes.backToTop.color.iconHover};
          border-color: ${attributes.backToTop.color.borderHover};
        }
      }
    `;

	return blockStyles;
}
