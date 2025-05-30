import "../editor.scss";

import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InnerBlocks,
	store as blockEditorStore,
	BlockControls,
} from "@wordpress/block-editor";
import { Button, ToolbarGroup, ToolbarButton } from "@wordpress/components";

import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";

import {
	memo,
	useState,
	useEffect,
	createContext,
	useContext,
} from "@wordpress/element";

import { select, dispatch, useSelect } from "@wordpress/data";

import { CTHFBlockControls } from "./components/InspectorControls.js";
import { renderBlockStyles } from "./style.js";
import { blankTemplate } from "./utils.js";
import { PatternModal } from "./components/PatternModal.js";

import { replace } from "@wordpress/icons";
import { NavSidebar } from "./components/SidebarPreview.js";

export const CTHFBlockContext = createContext(null);

const HeaderBuilder = memo(() => {
	const { blockID, attributes, startBlank, headerContent, deviceType } =
		useContext(CTHFBlockContext);

	return (
		<>
			{attributes.siteLogo.font.family != "" &&
				attributes.siteLogo.font.family != undefined && (
					<link
						rel="stylesheet"
						href={`https://fonts.googleapis.com/css2?family=${attributes.siteLogo.font.family}:wght@100;200;300;400;500;600;700;800;900`}
					/>
				)}
			{attributes.sidebarSiteLogo.font.family != "" &&
				attributes.sidebarSiteLogo.font.family != undefined && (
					<link
						rel="stylesheet"
						href={`https://fonts.googleapis.com/css2?family=${attributes.sidebarSiteLogo.font.family}:wght@100;200;300;400;500;600;700;800;900`}
					/>
				)}
			{attributes.navigation.font.family != "" &&
				attributes.navigation.font.family != undefined && (
					<link
						rel="stylesheet"
						href={`https://fonts.googleapis.com/css2?family=${attributes.navigation.font.family}:wght@100;200;300;400;500;600;700;800;900`}
					/>
				)}
			{attributes.sidebarCTA.font.family != "" &&
				attributes.sidebarCTA.font.family != undefined && (
					<link
						rel="stylesheet"
						href={`https://fonts.googleapis.com/css2?family=${attributes.sidebarCTA.font.family}:wght@100;200;300;400;500;600;700;800;900`}
					/>
				)}
			{attributes.ctaButton.font.family != "" &&
				attributes.ctaButton.font.family != undefined && (
					<link
						rel="stylesheet"
						href={`https://fonts.googleapis.com/css2?family=${attributes.ctaButton.font.family}:wght@100;200;300;400;500;600;700;800;900`}
					/>
				)}
			{attributes.miniCart.font.family != "" &&
				attributes.miniCart.font.family != undefined && (
					<link
						rel="stylesheet"
						href={`https://fonts.googleapis.com/css2?family=${attributes.miniCart.font.family}:wght@100;200;300;400;500;600;700;800;900`}
					/>
				)}

			{(deviceType === "Desktop" || attributes.mobileMenu.status === "off") &&
				attributes.mobileMenu.status !== "always" && (
					<div
						id={blockID}
						className={`cthf-block__header${
							attributes.stickyHeader.enabled ? " is-sticky" : ""
						}${attributes.stickyHeader.topBar ? " top-bar__is-sticky" : ""}`}
					>
						{!startBlank && <InnerBlocks template={headerContent} />}

						{startBlank && <InnerBlocks template={blankTemplate} />}
					</div>
				)}

			{((attributes.mobileMenu.status !== "off" &&
				(deviceType === "Tablet" || deviceType === "Mobile")) ||
				attributes.mobileMenu.status === "always") && (
				<>
					<div className={`cthf__mobile-layout-wrapper element-${blockID}`}>
						<div className="cthf__mobile-layout">
							{attributes.mobileMenu.layout.map((layout, _i) => {
								let index = _i + 1;
								return (
									<>
										<div
											className={`cthf__responsive-navigation layout-wrap-${index}`}
										>
											{layout.map((item) => {
												switch (item) {
													case "Site Logo":
														const TitleTag = attributes.siteLogo.titleTag;

														return (
															<>
																<div className="cthf__site-identity-wrap">
																	{attributes.siteLogo.enableLogo && (
																		<>
																			{attributes.siteLogo.useDefaultLogo && (
																				<a className="custom-logo-link">
																					<img
																						className="custom-logo"
																						src={cthfAssets.siteLogoURL}
																					/>
																				</a>
																			)}
																			{cthfAssets.isPremium &&
																				!attributes.siteLogo.useDefaultLogo && (
																					<div>
																						<a className="custom-logo-link">
																							<img
																								className="custom-logo"
																								src={
																									attributes.siteLogo.custom.url
																								}
																							/>
																						</a>
																					</div>
																				)}
																		</>
																	)}

																	{attributes.siteLogo.enableTitle && (
																		<div className="site-title">
																			<TitleTag>
																				<a className="site-title__link">
																					{cthfAssets.siteTitle}
																				</a>
																			</TitleTag>
																		</div>
																	)}
																</div>
															</>
														);

													case "Navigation":
														let path =
															"M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z";

														if (attributes.navigation.icon === "variation-2") {
															path =
																"M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z";
														} else if (
															attributes.navigation.icon === "variation-3"
														) {
															path =
																"M0 0H18V2H0V0ZM6 7H18V9H6V7ZM0 14H18V16H0V14Z";
														}
														return (
															<>
																<svg
																	className="cthf__mob-icon nav__icon"
																	width={18}
																	height={16}
																	viewBox="0 0 18 16"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path d={path} fill="currentColor" />
																</svg>
															</>
														);

													case "Search":
														if (!cthfAssets.isPremium) {
															return;
														}

														return (
															<>
																<div className="cthf__search-wrapper">
																	<div class="cthf__mob-icon-wrapper search__icon-wrapper">
																		<svg
																			class="cthf__mob-icon search__icon"
																			width="20"
																			height="20"
																			viewBox="0 0 20 20"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M8.783 16.8277C10.3738 16.8292 11.9294 16.3594 13.2534 15.4775C14.5774 14.5956 15.6104 13.3412 16.222 11.8727C16.8333 10.4039 16.9945 8.78674 16.6852 7.22624C16.376 5.66574 15.6102 4.23226 14.485 3.10766C13.3605 1.98261 11.9277 1.21618 10.3677 0.90522C8.80769 0.594263 7.19052 0.752743 5.72057 1.36063C4.25062 1.96852 2.99387 2.99852 2.10915 4.32047C1.22443 5.64242 0.751452 7.19697 0.75 8.78766C0.75 10.9187 1.596 12.9617 3.102 14.4687C4.60848 15.9758 6.65107 16.8241 8.782 16.8277M14.488 14.4907L19.25 19.2497"
																				stroke="currentColor"
																				strokeWidth="1.5"
																				strokeLinecap="round"
																				strokeLinejoin="round"
																			/>
																		</svg>
																	</div>
																</div>
															</>
														);

													case "My Account":
														if (!cthfAssets.isPremium) {
															return;
														}

														return (
															<>
																<a className="cthf__my-account-wrap">
																	{attributes.acc.icon === "variation-1" && (
																		<>
																			<svg
																				class="cthf__mob-icon user__icon"
																				width="18"
																				height="20"
																				viewBox="0 0 18 20"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M16.6188 19.25C16.6188 15.648 12.6028 12.72 9.00081 12.72C5.39881 12.72 1.38281 15.648 1.38281 19.25M9.00081 9.456C10.1553 9.456 11.2625 8.99738 12.0788 8.18104C12.8952 7.36469 13.3538 6.25749 13.3538 5.103C13.3538 3.94851 12.8952 2.84131 12.0788 2.02496C11.2625 1.20862 10.1553 0.75 9.00081 0.75C7.84633 0.75 6.73912 1.20862 5.92278 2.02496C5.10643 2.84131 4.64781 3.94851 4.64781 5.103C4.64781 6.25749 5.10643 7.36469 5.92278 8.18104C6.73912 8.99738 7.84633 9.456 9.00081 9.456Z"
																					stroke="currentColor"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</>
																	)}
																	{attributes.acc.icon === "variation-2" && (
																		<>
																			<svg
																				class="cthf__mob-icon user__icon"
																				width="12"
																				height="15"
																				viewBox="0 0 12 15"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M11.3334 14.6667H0.666687V13.3333C0.666687 12.4493 1.01788 11.6014 1.643 10.9763C2.26812 10.3512 3.11597 9.99999 4.00002 9.99999H8.00002C8.88408 9.99999 9.73192 10.3512 10.357 10.9763C10.9822 11.6014 11.3334 12.4493 11.3334 13.3333V14.6667ZM6.00002 8.66666C5.47473 8.66666 4.95459 8.56319 4.46929 8.36217C3.98398 8.16116 3.54303 7.86652 3.17159 7.49508C2.80016 7.12365 2.50552 6.68269 2.3045 6.19739C2.10348 5.71209 2.00002 5.19194 2.00002 4.66666C2.00002 4.14137 2.10348 3.62123 2.3045 3.13592C2.50552 2.65062 2.80016 2.20966 3.17159 1.83823C3.54303 1.4668 3.98398 1.17216 4.46929 0.971138C4.95459 0.77012 5.47473 0.666656 6.00002 0.666656C7.06089 0.666657 8.0783 1.08808 8.82845 1.83823C9.57859 2.58837 10 3.60579 10 4.66666C10 5.72752 9.57859 6.74494 8.82845 7.49508C8.0783 8.24523 7.06089 8.66666 6.00002 8.66666Z"
																					fill="currentColor"
																				/>
																			</svg>
																		</>
																	)}
																	{attributes.acc.icon === "variation-3" && (
																		<>
																			<svg
																				class="cthf__mob-icon user__icon"
																				width="16"
																				height="16"
																				viewBox="0 0 16 16"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M8.26843 0.5C12.4084 0.5 15.7684 3.86 15.7684 8C15.7684 12.14 12.4084 15.5 8.26843 15.5C4.12843 15.5 0.768433 12.14 0.768433 8C0.768433 3.86 4.12843 0.5 8.26843 0.5ZM3.78568 10.562C4.88668 12.2045 6.53968 13.25 8.38843 13.25C10.2364 13.25 11.8902 12.2053 12.9904 10.562C11.7422 9.39545 10.0969 8.74761 8.38843 8.75C6.67971 8.74742 5.03407 9.39527 3.78568 10.562ZM8.26843 7.25C8.86517 7.25 9.43747 7.01295 9.85942 6.59099C10.2814 6.16903 10.5184 5.59674 10.5184 5C10.5184 4.40326 10.2814 3.83097 9.85942 3.40901C9.43747 2.98705 8.86517 2.75 8.26843 2.75C7.6717 2.75 7.0994 2.98705 6.67744 3.40901C6.25549 3.83097 6.01843 4.40326 6.01843 5C6.01843 5.59674 6.25549 6.16903 6.67744 6.59099C7.0994 7.01295 7.6717 7.25 8.26843 7.25Z"
																					fill="currentColor"
																				/>
																			</svg>
																		</>
																	)}
																</a>
															</>
														);

													case "Mini Cart":
														if (!cthfAssets.isPremium) {
															return;
														}

														return (
															<>
																<div
																	className="mini-cart__wrapper"
																	style={{ position: "relative" }}
																>
																	{attributes.miniCart.icon ===
																		"variation-1" && (
																		<>
																			<svg
																				className="wc-block-mini-cart__icon"
																				width="15"
																				height="15"
																				viewBox="0 0 15 15"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M1.66665 9.66668V1.66668H0.333313V0.333344H2.33331C2.51012 0.333344 2.67969 0.403581 2.80472 0.528606C2.92974 0.65363 2.99998 0.823199 2.99998 1.00001V9.00001H11.292L12.6253 3.66668H4.33331V2.33334H13.48C13.5813 2.33335 13.6813 2.35645 13.7724 2.4009C13.8635 2.44535 13.9432 2.50998 14.0055 2.58987C14.0679 2.66976 14.1112 2.76281 14.1322 2.86195C14.1532 2.96109 14.1513 3.06371 14.1266 3.16201L12.46 9.82868C12.4239 9.97284 12.3406 10.1008 12.2235 10.1922C12.1063 10.2837 11.9619 10.3333 11.8133 10.3333H2.33331C2.1565 10.3333 1.98693 10.2631 1.86191 10.1381C1.73688 10.0131 1.66665 9.84349 1.66665 9.66668ZM2.99998 14.3333C2.64636 14.3333 2.30722 14.1929 2.05717 13.9428C1.80712 13.6928 1.66665 13.3536 1.66665 13C1.66665 12.6464 1.80712 12.3073 2.05717 12.0572C2.30722 11.8072 2.64636 11.6667 2.99998 11.6667C3.3536 11.6667 3.69274 11.8072 3.94279 12.0572C4.19284 12.3073 4.33331 12.6464 4.33331 13C4.33331 13.3536 4.19284 13.6928 3.94279 13.9428C3.69274 14.1929 3.3536 14.3333 2.99998 14.3333ZM11 14.3333C10.6464 14.3333 10.3072 14.1929 10.0572 13.9428C9.80712 13.6928 9.66665 13.3536 9.66665 13C9.66665 12.6464 9.80712 12.3073 10.0572 12.0572C10.3072 11.8072 10.6464 11.6667 11 11.6667C11.3536 11.6667 11.6927 11.8072 11.9428 12.0572C12.1928 12.3073 12.3333 12.6464 12.3333 13C12.3333 13.3536 12.1928 13.6928 11.9428 13.9428C11.6927 14.1929 11.3536 14.3333 11 14.3333Z"
																					fill="currentColor"
																				/>
																			</svg>
																			<span className="wc-block-mini-cart__badge">
																				1
																			</span>
																		</>
																	)}
																	{attributes.miniCart.icon ===
																		"variation-2" && (
																		<>
																			<svg
																				className="wc-block-mini-cart__icon"
																				width="12"
																				height="14"
																				viewBox="0 0 12 14"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M2.33669 0.333344H9.67002C9.77352 0.333344 9.8756 0.35744 9.96817 0.403725C10.0607 0.45001 10.1413 0.517213 10.2034 0.60001L12.0034 3.00001V13C12.0034 13.1768 11.9331 13.3464 11.8081 13.4714C11.6831 13.5964 11.5135 13.6667 11.3367 13.6667H0.670024C0.493213 13.6667 0.323643 13.5964 0.198619 13.4714C0.0735948 13.3464 0.00335693 13.1768 0.00335693 13V3.00001L1.80336 0.60001C1.86545 0.517213 1.94598 0.45001 2.03855 0.403725C2.13112 0.35744 2.23319 0.333344 2.33669 0.333344ZM10.67 4.33334H1.33669V12.3333H10.67V4.33334ZM10.3367 3.00001L9.33669 1.66668H2.67002L1.67002 3.00001H10.3367ZM4.00336 5.66668V7.00001C4.00336 7.53044 4.21407 8.03915 4.58914 8.41422C4.96422 8.7893 5.47292 9.00001 6.00336 9.00001C6.53379 9.00001 7.0425 8.7893 7.41757 8.41422C7.79264 8.03915 8.00336 7.53044 8.00336 7.00001V5.66668H9.33669V7.00001C9.33669 7.88407 8.9855 8.73191 8.36038 9.35703C7.73526 9.98215 6.88741 10.3333 6.00336 10.3333C5.1193 10.3333 4.27146 9.98215 3.64633 9.35703C3.02121 8.73191 2.67002 7.88407 2.67002 7.00001V5.66668H4.00336Z"
																					fill="currentColor"
																				/>
																			</svg>
																			<span className="wc-block-mini-cart__badge">
																				1
																			</span>
																		</>
																	)}
																	{attributes.miniCart.icon ===
																		"variation-3" && (
																		<>
																			<svg
																				className="wc-block-mini-cart__icon"
																				width="12"
																				height="14"
																				viewBox="0 0 12 14"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M2.66667 4.66667V3.33333C2.66667 2.44928 3.01786 1.60143 3.64298 0.976311C4.2681 0.351189 5.11595 0 6 0C6.88406 0 7.7319 0.351189 8.35702 0.976311C8.98214 1.60143 9.33333 2.44928 9.33333 3.33333V4.66667H11.3333C11.5101 4.66667 11.6797 4.7369 11.8047 4.86193C11.9298 4.98695 12 5.15652 12 5.33333V13.3333C12 13.5101 11.9298 13.6797 11.8047 13.8047C11.6797 13.9298 11.5101 14 11.3333 14H0.666667C0.489856 14 0.320286 13.9298 0.195262 13.8047C0.0702379 13.6797 0 13.5101 0 13.3333V5.33333C0 5.15652 0.0702379 4.98695 0.195262 4.86193C0.320286 4.7369 0.489856 4.66667 0.666667 4.66667H2.66667ZM2.66667 6H1.33333V12.6667H10.6667V6H9.33333V7.33333H8V6H4V7.33333H2.66667V6ZM4 4.66667H8V3.33333C8 2.8029 7.78929 2.29419 7.41421 1.91912C7.03914 1.54405 6.53043 1.33333 6 1.33333C5.46957 1.33333 4.96086 1.54405 4.58579 1.91912C4.21071 2.29419 4 2.8029 4 3.33333V4.66667Z"
																					fill="currentColor"
																				/>
																			</svg>
																			<span className="wc-block-mini-cart__badge">
																				1
																			</span>
																		</>
																	)}
																</div>
															</>
														);

													case "Button":
														if (!cthfAssets.isPremium) {
															return;
														}

														return (
															<>
																<a className="cthf__cta-anchor-btn">
																	{attributes.ctaButton.label}
																</a>
															</>
														);

													default:
														break;
												}
											})}
										</div>
									</>
								);
							})}
						</div>
					</div>
				</>
			)}
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockID = `cthf_${clientId.replace(/-/gi, "_")}`;

	const blockProps = useBlockProps({ className: "cthf-block__wrapper" });

	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	const [startBlank, setStartBlank] = useState(false);

	const [patternLoader, setPatternLoader] = useState(false);

	const [innerBlocks, setInnerBlocks] = useState([]);
	useEffect(() => {
		const content = select(blockEditorStore).getBlock(clientId).innerBlocks;
		setInnerBlocks(content);

		if (content.length <= 0) {
			setHeaderContent([]);
			setStartBlank(false);
		}
	}, [innerBlocks, select(blockEditorStore).getBlock(clientId)]);

	const [headerContent, setHeaderContent] = useState([]);
	function handlePatternImport(blocks) {
		setPatternLoader(true);

		if (innerBlocks.length <= 0) {
			setHeaderContent(blocks);
		} else {
			dispatch(blockEditorStore).replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate(blocks),
			);
		}

		handleCloseModal();
		setPatternLoader(false);
	}

	const deviceType = useSelect(
		(select) => select("core/editor").getDeviceType(),
		[],
	);

	const [sidebarPreview, setSidebarPreview] = useState(null);

	return (
		<>
			{innerBlocks.length > 0 && (
				<>
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton
								icon={replace}
								onClick={() => {
									setOpenModal(true);
								}}
							>
								{__("Replace Layout", "rootblox")}
							</ToolbarButton>
						</ToolbarGroup>
					</BlockControls>
				</>
			)}

			<CTHFBlockContext.Provider
				value={{
					blockID,
					attributes,
					setAttributes,
					startBlank,
					headerContent,
					deviceType,
					sidebarPreview,
					setSidebarPreview,
				}}
			>
				<div {...blockProps}>
					<style
						dangerouslySetInnerHTML={{
							__html: renderBlockStyles(blockID, attributes),
						}}
					/>
					<HeaderBuilder />
				</div>

				<CTHFBlockControls />

				{sidebarPreview && <NavSidebar />}
			</CTHFBlockContext.Provider>

			{innerBlocks.length <= 0 && headerContent.length <= 0 && !startBlank && (
				<>
					<div className="cthf__starter-wrap">
						<div className="cthf__starter-header">
							<figure className="starter__img">
								<img src={`${cthfAssets.img}header-starter.png`} />
							</figure>
							<h4 className="starter__title">{__("Header", "rootblox")}</h4>
						</div>
						<p className="cthf__starter-content">
							{__(
								"Quickly start your site with pre-designed header patterns.",
								"rootblox",
							)}
						</p>
						<div className="cthf__starter-btn-wrap">
							<Button variant="secondary" onClick={handleOpenModal}>
								{__("Add a Pattern", "rootblox")}
							</Button>

							<Button variant="secondary" onClick={() => setStartBlank(true)}>
								{__("Start Blank", "rootblox")}
							</Button>
						</div>
					</div>
				</>
			)}

			{openModal && (
				<PatternModal
					handleCloseModal={handleCloseModal}
					handlePatternImport={handlePatternImport}
					patternLoader={patternLoader}
				/>
			)}
		</>
	);
}
