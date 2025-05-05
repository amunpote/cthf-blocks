import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
        #${blockID} .business-hour__item:not(:first-child) {
            margin-top: ${attributes.itemStyles.gap};
        }
        #${blockID} .business-hour__item {
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
            align-items: ${attributes.itemStyles.alignItems};

            & .weekday {
                font-size: ${attributes.itemStyles.labelTypography.font.size};
                font-weight: ${
									attributes.itemStyles.labelTypography.font.weight
								};
                font-family: ${
									attributes.itemStyles.labelTypography.font.family
								};
                text-transform: ${
									attributes.itemStyles.labelTypography.letterCase
								};
                text-decoration: ${
									attributes.itemStyles.labelTypography.decoration
								};
                line-height: ${
									attributes.itemStyles.labelTypography.lineHeight
								};
                letter-spacing: ${
									attributes.itemStyles.labelTypography.letterSpacing
								};
                color: ${attributes.itemStyles.color.label};
            }
        }

        #${blockID} .notification {
            ${rootbloxRenderTRBL("padding", attributes.notification.padding)}
            margin-top: ${attributes.notification.margin.top};
            margin-bottom: ${attributes.notification.margin.bottom};
            ${rootbloxRenderTRBL("border", attributes.notification.border)}
            border-radius: ${attributes.notification.radius};
            font-size: ${attributes.notification.font.size};
            font-weight: ${attributes.notification.font.weight};
            font-family: ${attributes.notification.font.family};
            text-transform: ${attributes.notification.letterCase};
            text-decoration: ${attributes.notification.decoration};
            line-height: ${attributes.notification.lineHeight};
            letter-spacing: ${attributes.notification.letterSpacing};
            background-color: ${attributes.notification.color.bg};
            color: ${attributes.notification.color.text};

            & .timer {
                font-size: ${attributes.notification.timerTypography.font.size};
                font-weight: ${
									attributes.notification.timerTypography.font.weight
								};
                font-family: ${
									attributes.notification.timerTypography.font.family
								};
                text-transform: ${
									attributes.notification.timerTypography.letterCase
								};
                text-decoration: ${
									attributes.notification.timerTypography.decoration
								};
                line-height: ${
									attributes.notification.timerTypography.lineHeight
								};
                letter-spacing: ${
									attributes.notification.timerTypography.letterSpacing
								};               
                color: ${attributes.notification.color.timer};
            }
        }

    `;

	return blockStyles;
}
