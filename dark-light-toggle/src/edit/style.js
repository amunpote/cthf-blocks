import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
		#${blockID} {
			text-align: ${attributes.justify};
		}

		#${blockID} .toggle__wrap {
			gap: ${attributes.gap};
			${rootbloxRenderTRBL("padding", attributes.wrapper.padding)}
			margin-top: ${attributes.wrapper.margin.top};
			margin-bottom: ${attributes.wrapper.margin.bottom};
			${rootbloxRenderTRBL("border", attributes.wrapper.border)}
			border-radius: ${attributes.wrapper.radius};
			background-color: ${attributes.wrapper.color.bg};
		}

		#${blockID} .toggle__item {
			gap: ${attributes.contentGap};
			${rootbloxRenderTRBL("padding", attributes.item.padding)}
			${rootbloxRenderTRBL("border", attributes.item.border)}
			border-radius: ${attributes.item.radius};
			background-color: ${attributes.item.color.bg};
			color: ${attributes.item.color.text};
			
			&.active {
				${rootbloxRenderTRBL("border", attributes.item.activeBorder)}
				border-radius: ${attributes.item.activeRadius};
				background-color: ${attributes.item.color.activeBg};
				color: ${attributes.item.color.activeText};
			}

		}

		#${blockID} .icon__wrapper {
			${rootbloxRenderTRBL("padding", attributes.icon.padding)}
			width: ${attributes.icon.boxWidth};
			height: ${attributes.icon.boxHeight};
			${rootbloxRenderTRBL("border", attributes.icon.border)}
			border-radius: ${attributes.icon.radius};
			color: ${attributes.icon.color.text};
			background-color: ${attributes.icon.color.bg};

			& svg {
				width: ${attributes.icon.size};
				height: ${attributes.icon.size};
			}
		}
		#${blockID} .toggle__item.active .icon__wrapper {
			${rootbloxRenderTRBL("border", attributes.icon.activeBorder)}
			color: ${attributes.icon.color.activeText};
			background-color: ${attributes.icon.color.activeBg};
		}

		#${blockID} .toggle__item .label {
			font-size: ${attributes.label.font.size};
			font-weight: ${attributes.label.font.weight};
			font-family: ${attributes.label.font.family};
			text-transform: ${attributes.label.letterCase};
			text-decoration: ${attributes.label.decoration};
			line-height: ${attributes.label.lineHeight};
			letter-spacing: ${attributes.label.letterSpacing};
		}
	`;

	return blockStyles;
}
