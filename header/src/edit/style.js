import { rootbloxRenderTRBL } from "../../../../resources/components/utility.js";

export function renderBlockStyles(blockID, attributes) {
	const blockStyles = `
      #${blockID} {
        color: ${attributes.color.text};
        background-color: ${attributes.color.bg};
      }

      .cthf__mobile-layout-wrapper.element-${blockID} {
        ${rootbloxRenderTRBL("padding", attributes.mobileMenu.wrapperPadding)}
        ${rootbloxRenderTRBL("border", attributes.mobileMenu.wrapperBorder)}
        background-color: ${attributes.color.mobileBg};

        & .wc-block-mini-cart__icon, & .cthf__mob-icon, & .cthf__cta-anchor-btn {
          color: ${attributes.color.text};
          
          &:hover {
            color: ${attributes.color.iconHover};
          }
        }

        & .wc-block-mini-cart__icon, & .cthf__mob-icon {
          width: ${attributes.mobileMenu.iconSize};
          height: ${attributes.mobileMenu.iconSize};
        }

        & .cthf__mob-icon.nav__icon {
          color: ${attributes.navigation.color.icon};
          width: ${attributes.navigation.iconSize};
          height: ${attributes.navigation.iconSize};

          &:hover {
            color: ${attributes.navigation.color.iconHover};
          }
        }

        & .cthf__mob-icon.search__icon {
          width: ${attributes.search.iconSize};
          height: ${attributes.search.iconSize};
          color: ${attributes.search.color.icon};

          &:hover {
            color: ${attributes.search.color.iconHover};
          }
        }

        & .cthf__mob-icon.user__icon {
          width: ${attributes.acc.iconSize};
          height: ${attributes.acc.iconSize};
          color: ${attributes.acc.color.icon};

          &:hover {
            color: ${attributes.acc.color.iconHover};
          }
        }

        & .mini-cart__wrapper {
          width: ${attributes.miniCart.iconSize};
          height: ${attributes.miniCart.iconSize};
        }
        & .wc-block-mini-cart__icon {
          width: calc(${attributes.miniCart.iconSize} - 10px);
          height: calc(${attributes.miniCart.iconSize} - 10px);
          color: ${attributes.miniCart.color.icon};

          &:hover {
            color: ${attributes.miniCart.color.iconHover};
          }
        }
        & .wc-block-mini-cart__badge {
          font-size: ${attributes.miniCart.font.size};
          font-weight: ${attributes.miniCart.font.weight};
          font-family: ${attributes.miniCart.font.family};
          color: ${attributes.miniCart.color.text};
          background: ${attributes.miniCart.color.textBg};
        }

        & .custom-logo {
          max-width: ${attributes.siteLogo.width};
        }
        & .site-logo a {
          font-size: ${attributes.siteLogo.font.size};
          font-weight: ${attributes.siteLogo.font.weight};
          font-family: ${attributes.siteLogo.font.family};
          text-transform: ${attributes.siteLogo.letterCase};
          text-decoration: ${attributes.siteLogo.decoration};
          line-height: ${attributes.siteLogo.lineHeight};
          letter-spacing: ${attributes.siteLogo.letterSpacing};
          color: ${attributes.siteLogo.color.text};

          &:hover {
            color: ${attributes.siteLogo.color.textHover};
          }
        }

        & .cthf__responsive-navigation .cthf__cta-anchor-btn {
          ${rootbloxRenderTRBL("padding", attributes.ctaButton.padding)}
          ${rootbloxRenderTRBL("border", attributes.ctaButton.border)}
          ${rootbloxRenderTRBL("radius", attributes.ctaButton.radius)}
          font-size: ${attributes.ctaButton.font.size};
          font-weight: ${attributes.ctaButton.font.weight};
          font-family: ${attributes.ctaButton.font.family};
          text-transform: ${attributes.ctaButton.letterCase};
          text-decoration: ${attributes.ctaButton.decoration};
          line-height: ${attributes.ctaButton.lineHeight};
          letter-spacing: ${attributes.ctaButton.letterSpacing};
          color: ${attributes.ctaButton.color.text};
          background-color: ${attributes.ctaButton.color.bg};

          &:hover {
            color: ${attributes.ctaButton.color.textHover};
            background-color: ${attributes.ctaButton.color.bgHover};
            border-color: ${attributes.ctaButton.color.borderHover};
          }
        }

        & .cthf__responsive-navigation.layout-wrap-1 {
          gap: ${attributes.mobileMenu.layoutAttr[0].gap};
          flex-wrap: ${
						attributes.mobileMenu.layoutAttr[0].stackLayout ? "wrap" : "nowrap"
					};
        }
        & .cthf__responsive-navigation.layout-wrap-2 {
          gap: ${attributes.mobileMenu.layoutAttr[1].gap};
          flex-wrap: ${
						attributes.mobileMenu.layoutAttr[1].stackLayout ? "wrap" : "nowrap"
					};
        }
        & .cthf__responsive-navigation.layout-wrap-3 {
          gap: ${attributes.mobileMenu.layoutAttr[2].gap};
          flex-wrap: ${
						attributes.mobileMenu.layoutAttr[2].stackLayout ? "wrap" : "nowrap"
					};
        }
      }
    `;

	return blockStyles;
}
