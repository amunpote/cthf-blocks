import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
        #${blockID} {
            ${rootbloxRenderTRBL("padding", attributes.padding)}
            ${rootbloxRenderTRBL("margin", attributes.margin)}
            font-size: ${attributes.typography.font.size};
            font-weight: ${attributes.typography.font.weight};
            font-family: ${attributes.typography.font.family};
            text-transform: ${attributes.typography.letterCase};
            text-decoration: ${attributes.typography.decoration};
            line-height: ${attributes.typography.lineHeight};
            letter-spacing: ${attributes.typography.letterSpacing};
            color: ${attributes.color.text};

            & a {
                color: ${attributes.color.text};
            }
            & a:hover {
                color: ${attributes.color.textHover};
            }
        }
    
        #${blockID} .copyright__before-text {
            font-size: ${attributes.beforeText.font.size};
            font-weight: ${attributes.beforeText.font.weight};
            font-family: ${attributes.beforeText.font.family};
            text-transform: ${attributes.beforeText.letterCase};
            text-decoration: ${attributes.beforeText.decoration};
            line-height: ${attributes.beforeText.lineHeight};
            letter-spacing: ${attributes.beforeText.letterSpacing};
            color: ${attributes.beforeText.color.text};

            & a {
                color: ${attributes.beforeText.color.text};
            }
            & a:hover {
                color: ${attributes.beforeText.color.textHover};
            }
        }

        #${blockID} .copyright__year {
            font-size: ${attributes.dynamicYear.font.size};
            font-weight: ${attributes.dynamicYear.font.weight};
            font-family: ${attributes.dynamicYear.font.family};
            color: ${attributes.dynamicYear.color.text};
        }

        #${blockID} .copyright__after-text {
            font-size: ${attributes.afterText.font.size};
            font-weight: ${attributes.afterText.font.weight};
            font-family: ${attributes.afterText.font.family};
            text-transform: ${attributes.afterText.letterCase};
            text-decoration: ${attributes.afterText.decoration};
            line-height: ${attributes.afterText.lineHeight};
            letter-spacing: ${attributes.afterText.letterSpacing};
            color: ${attributes.afterText.color.text};

            & a {
                color: ${attributes.afterText.color.text};
            }
            & a:hover {
                color: ${attributes.afterText.color.textHover};
            }
        }
    `;

	return blockStyles;
}
