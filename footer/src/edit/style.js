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
        flex-direction: ${attributes.backToTop.display};
        gap: ${attributes.backToTop.gap};

        & svg {
          width: ${attributes.backToTop.iconSize};
          height: ${attributes.backToTop.iconSize};
        }

        & .back-to-top__label {
          font-size: ${attributes.backToTop.font.size};      
          font-weight: ${attributes.backToTop.font.weight};      
          font-family: ${attributes.backToTop.font.family};      
          text-transform: ${attributes.backToTop.letterCase};      
          text-decoration: ${attributes.backToTop.decoration};      
          line-height: ${attributes.backToTop.lineHeight};      
          letter-spacing: ${attributes.backToTop.letterSpacing};      
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
