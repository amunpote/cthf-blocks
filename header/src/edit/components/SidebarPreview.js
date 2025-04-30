import { __ } from "@wordpress/i18n";

import { createBlock, serialize } from "@wordpress/blocks";

import { Modal, Spinner } from "@wordpress/components";

import { memo, useContext, useState, useEffect } from "@wordpress/element";
import { CTHFBlockContext } from "../index.js";

import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from "@wordpress/url";

export const NavSidebar = memo(() => {
	const { blockID, attributes, setSidebarPreview } =
		useContext(CTHFBlockContext);

	const sidebarStyles = `
        .cthf__sidebar-panel-modal .cthf__sidebar-panel-wrap.element-${blockID} {
            & .custom-logo {
                max-width: ${attributes.siteLogo.width};
            }
        }
    `;

	const [navigationBlock, setNavigationBlock] = useState("");
	useEffect(() => {
		const block = createBlock("core/navigation", {
			ref: attributes.mobileMenu.menuID,
			overlayMenu: "never",
		});

		apiFetch({
			path: addQueryArgs("/rootblox/v1/parse-block", {
				menuID: attributes.mobileMenu.menuID,
			}),
		})
			.then((response) => {
				setNavigationBlock(response);
			})
			.catch((error) => setNavigationBlock(""));
	}, attributes.mobileMenu.menuID);

	return (
		<>
			<Modal
				onRequestClose={() => setSidebarPreview(false)}
				size="large"
				className="cthf__sidebar-panel-modal"
				style={{ maxWidth: attributes.sidebar.width }}
				__experimentalHideHeader
			>
				<style dangerouslySetInnerHTML={{ __html: sidebarStyles }} />
				<div className={`cthf__sidebar-panel-wrap element-${blockID}`}>
					<div
						className={`sidebar-panel__body content-align-${attributes.sidebar.contentAlign}`}
					>
						<svg
							class="close__icon"
							width="10"
							height="10"
							viewBox="0 0 10 10"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => setSidebarPreview(false)}
						>
							<path
								d="M4.99999 4.058L8.29999 0.758003L9.24266 1.70067L5.94266 5.00067L9.24266 8.30067L8.29932 9.24334L4.99932 5.94334L1.69999 9.24334L0.757324 8.3L4.05732 5L0.757324 1.7L1.69999 0.75867L4.99999 4.058Z"
								fill="currentColor"
							/>
						</svg>

						{attributes.sidebar.siteLogo && (
							<>
								<a className="custom-logo-link">
									{cthfAssets.isPremium &&
										!attributes.siteLogo.useDefaultLogo && (
											<img
												className="custom-logo"
												src={attributes.siteLogo.custom.url}
											/>
										)}

									{(!cthfAssets.isPremium ||
										attributes.siteLogo.useDefaultLogo) && (
										<img className="custom-logo" src={cthfAssets.siteLogoURL} />
									)}
								</a>
							</>
						)}

						{attributes.sidebar.navigation && (
							<>
								{navigationBlock.length <= 0 && <Spinner />}
								{navigationBlock.length > 0 && (
									<div dangerouslySetInnerHTML={{ __html: navigationBlock }} />
								)}
							</>
						)}

						{cthfAssets.isPremium && <></>}
					</div>
				</div>
			</Modal>
		</>
	);
});
