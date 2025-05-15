import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
		#${blockID} .block-editor-block-list__layout > div:not(:first-child) {
			margin-top: ${attributes.gap};
		}

		#${blockID} .cthf-block__contact-info-email, 
		#${blockID} .cthf-block__contact-info-location, 
		#${blockID} .cthf-block__contact-info-phone {
			${rootbloxRenderTRBL("padding", attributes.itemStyles.padding)}
			${rootbloxRenderTRBL("border", attributes.itemStyles.border)}
			border-radius: ${attributes.itemStyles.radius};
			font-size: ${attributes.itemStyles.font.size};
			font-weight: ${attributes.itemStyles.font.weight};
			font-family: ${attributes.itemStyles.font.family};
			text-transform: ${attributes.itemStyles.letterCase};
			text-decoration: ${attributes.itemStyles.decoration};
			line-height: ${attributes.itemStyles.lineHeight};
			letter-spacing: ${attributes.itemStyles.letterSpacing};
			background-color: ${attributes.itemStyles.color.bg};
			color: ${attributes.itemStyles.color.text};
			align-items: ${attributes.icon.align};
			flex-wrap: ${attributes.stackLayout ? "wrap" : "nowrap"};
			gap: ${attributes.icon.gap};
			row-gap: ${attributes.icon.rowGap};

			& a {
				color: ${attributes.itemStyles.color.text};
			}
		}
		#${blockID} .icon__wrapper {
			width: ${attributes.icon.boxWidth};
			height: ${attributes.icon.boxHeight};
			${rootbloxRenderTRBL("padding", attributes.icon.padding)}
			margin-top: ${attributes.icon.margin.top};
			margin-bottom: ${attributes.icon.margin.bottom};
			${rootbloxRenderTRBL("border", attributes.icon.border)}
			border-radius: ${attributes.icon.radius};
			background-color: ${attributes.icon.color.bg};

			& svg {
				width: ${attributes.icon.size};
				height: ${attributes.icon.size};
				color: ${attributes.icon.color.svg};
			}
		}
		#${blockID} .cthf-block__contact-info-email:hover, 
		#${blockID} .cthf-block__contact-info-location:hover, 
		#${blockID} .cthf-block__contact-info-phone:hover {
			color: ${attributes.itemStyles.color.textHover};
			background-color: ${attributes.itemStyles.color.bgHover};
			border-color: ${attributes.itemStyles.color.borderHover};

			& .icon__wrapper {
				background-color: ${attributes.icon.color.bgHover};
				border-color: ${attributes.icon.color.borderHover};

				& svg {
					color: ${attributes.icon.color.svgHover};
				}
			}
		}
    `;

	return blockStyles;
}
