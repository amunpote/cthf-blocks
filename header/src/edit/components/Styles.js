import { __ } from "@wordpress/i18n";

import { PanelColorSettings } from "@wordpress/block-editor";

import {
	Panel,
	PanelBody,
	TabPanel,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderControl as BorderControl,
	__experimentalBorderBoxControl as BorderBoxControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlIconOption,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	SelectControl,
	Button,
	CheckboxControl,
} from "@wordpress/components";

import { Path, SVG } from "@wordpress/primitives";

import {
	lineSolid,
	formatUppercase,
	formatLowercase,
	formatCapitalize,
	formatUnderline,
	formatStrikethrough,
} from "@wordpress/icons";

import { memo, useContext, useState } from "@wordpress/element";
import { select } from "@wordpress/data";

import {
	AttrWrapper,
	fontWeights,
	getFontOptions,
} from "../../../../../resources/components/utility.js";
import { CTHFBlockControlsContext } from "./InspectorControls.js";

const navIconVariation1 = (
	<>
		<SVG
			className="cthf__nav-icon-variation"
			width="18"
			height="16"
			viewBox="0 0 18 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
				fill="currentColor"
			/>
		</SVG>
	</>
);

const navIconVariation2 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="18"
		height="16"
		viewBox="0 0 18 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z"
			fill="currentColor"
		/>
	</SVG>
);

const navIconVariation3 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="18"
		height="16"
		viewBox="0 0 18 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M0 0H18V2H0V0ZM6 7H18V9H6V7ZM0 14H18V16H0V14Z"
			fill="currentColor"
		/>
	</SVG>
);

const cartIconVariation1 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="15"
		height="15"
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M1.66665 9.66668V1.66668H0.333313V0.333344H2.33331C2.51012 0.333344 2.67969 0.403581 2.80472 0.528606C2.92974 0.65363 2.99998 0.823199 2.99998 1.00001V9.00001H11.292L12.6253 3.66668H4.33331V2.33334H13.48C13.5813 2.33335 13.6813 2.35645 13.7724 2.4009C13.8635 2.44535 13.9432 2.50998 14.0055 2.58987C14.0679 2.66976 14.1112 2.76281 14.1322 2.86195C14.1532 2.96109 14.1513 3.06371 14.1266 3.16201L12.46 9.82868C12.4239 9.97284 12.3406 10.1008 12.2235 10.1922C12.1063 10.2837 11.9619 10.3333 11.8133 10.3333H2.33331C2.1565 10.3333 1.98693 10.2631 1.86191 10.1381C1.73688 10.0131 1.66665 9.84349 1.66665 9.66668ZM2.99998 14.3333C2.64636 14.3333 2.30722 14.1929 2.05717 13.9428C1.80712 13.6928 1.66665 13.3536 1.66665 13C1.66665 12.6464 1.80712 12.3073 2.05717 12.0572C2.30722 11.8072 2.64636 11.6667 2.99998 11.6667C3.3536 11.6667 3.69274 11.8072 3.94279 12.0572C4.19284 12.3073 4.33331 12.6464 4.33331 13C4.33331 13.3536 4.19284 13.6928 3.94279 13.9428C3.69274 14.1929 3.3536 14.3333 2.99998 14.3333ZM11 14.3333C10.6464 14.3333 10.3072 14.1929 10.0572 13.9428C9.80712 13.6928 9.66665 13.3536 9.66665 13C9.66665 12.6464 9.80712 12.3073 10.0572 12.0572C10.3072 11.8072 10.6464 11.6667 11 11.6667C11.3536 11.6667 11.6927 11.8072 11.9428 12.0572C12.1928 12.3073 12.3333 12.6464 12.3333 13C12.3333 13.3536 12.1928 13.6928 11.9428 13.9428C11.6927 14.1929 11.3536 14.3333 11 14.3333Z"
			fill="currentColor"
		/>
	</SVG>
);

const cartIconVariation2 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="12"
		height="14"
		viewBox="0 0 12 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M2.33669 0.333344H9.67002C9.77352 0.333344 9.8756 0.35744 9.96817 0.403725C10.0607 0.45001 10.1413 0.517213 10.2034 0.60001L12.0034 3.00001V13C12.0034 13.1768 11.9331 13.3464 11.8081 13.4714C11.6831 13.5964 11.5135 13.6667 11.3367 13.6667H0.670024C0.493213 13.6667 0.323643 13.5964 0.198619 13.4714C0.0735948 13.3464 0.00335693 13.1768 0.00335693 13V3.00001L1.80336 0.60001C1.86545 0.517213 1.94598 0.45001 2.03855 0.403725C2.13112 0.35744 2.23319 0.333344 2.33669 0.333344ZM10.67 4.33334H1.33669V12.3333H10.67V4.33334ZM10.3367 3.00001L9.33669 1.66668H2.67002L1.67002 3.00001H10.3367ZM4.00336 5.66668V7.00001C4.00336 7.53044 4.21407 8.03915 4.58914 8.41422C4.96422 8.7893 5.47292 9.00001 6.00336 9.00001C6.53379 9.00001 7.0425 8.7893 7.41757 8.41422C7.79264 8.03915 8.00336 7.53044 8.00336 7.00001V5.66668H9.33669V7.00001C9.33669 7.88407 8.9855 8.73191 8.36038 9.35703C7.73526 9.98215 6.88741 10.3333 6.00336 10.3333C5.1193 10.3333 4.27146 9.98215 3.64633 9.35703C3.02121 8.73191 2.67002 7.88407 2.67002 7.00001V5.66668H4.00336Z"
			fill="currentColor"
		/>
	</SVG>
);

const cartIconVariation3 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="12"
		height="14"
		viewBox="0 0 12 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M2.66667 4.66667V3.33333C2.66667 2.44928 3.01786 1.60143 3.64298 0.976311C4.2681 0.351189 5.11595 0 6 0C6.88406 0 7.7319 0.351189 8.35702 0.976311C8.98214 1.60143 9.33333 2.44928 9.33333 3.33333V4.66667H11.3333C11.5101 4.66667 11.6797 4.7369 11.8047 4.86193C11.9298 4.98695 12 5.15652 12 5.33333V13.3333C12 13.5101 11.9298 13.6797 11.8047 13.8047C11.6797 13.9298 11.5101 14 11.3333 14H0.666667C0.489856 14 0.320286 13.9298 0.195262 13.8047C0.0702379 13.6797 0 13.5101 0 13.3333V5.33333C0 5.15652 0.0702379 4.98695 0.195262 4.86193C0.320286 4.7369 0.489856 4.66667 0.666667 4.66667H2.66667ZM2.66667 6H1.33333V12.6667H10.6667V6H9.33333V7.33333H8V6H4V7.33333H2.66667V6ZM4 4.66667H8V3.33333C8 2.8029 7.78929 2.29419 7.41421 1.91912C7.03914 1.54405 6.53043 1.33333 6 1.33333C5.46957 1.33333 4.96086 1.54405 4.58579 1.91912C4.21071 2.29419 4 2.8029 4 3.33333V4.66667Z"
			fill="currentColor"
		/>
	</SVG>
);

const accIconVariation1 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="12"
		height="15"
		viewBox="0 0 12 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M11.3334 14.6667H10V13.3333C10 12.8029 9.78931 12.2942 9.41423 11.9191C9.03916 11.544 8.53045 11.3333 8.00002 11.3333H4.00002C3.46959 11.3333 2.96088 11.544 2.58581 11.9191C2.21073 12.2942 2.00002 12.8029 2.00002 13.3333V14.6667H0.666687V13.3333C0.666687 12.4493 1.01788 11.6014 1.643 10.9763C2.26812 10.3512 3.11597 9.99999 4.00002 9.99999H8.00002C8.88408 9.99999 9.73192 10.3512 10.357 10.9763C10.9822 11.6014 11.3334 12.4493 11.3334 13.3333V14.6667ZM6.00002 8.66666C5.47473 8.66666 4.95459 8.56319 4.46929 8.36217C3.98398 8.16116 3.54303 7.86652 3.17159 7.49508C2.80016 7.12365 2.50552 6.68269 2.3045 6.19739C2.10348 5.71209 2.00002 5.19194 2.00002 4.66666C2.00002 4.14137 2.10348 3.62123 2.3045 3.13592C2.50552 2.65062 2.80016 2.20966 3.17159 1.83823C3.54303 1.4668 3.98398 1.17216 4.46929 0.971138C4.95459 0.77012 5.47473 0.666656 6.00002 0.666656C7.06089 0.666657 8.0783 1.08808 8.82845 1.83823C9.57859 2.58837 10 3.60579 10 4.66666C10 5.72752 9.57859 6.74494 8.82845 7.49508C8.0783 8.24523 7.06089 8.66666 6.00002 8.66666ZM6.00002 7.33332C6.70726 7.33332 7.38554 7.05237 7.88564 6.55227C8.38574 6.05218 8.66669 5.3739 8.66669 4.66666C8.66669 3.95941 8.38574 3.28114 7.88564 2.78104C7.38554 2.28094 6.70726 1.99999 6.00002 1.99999C5.29278 1.99999 4.6145 2.28094 4.1144 2.78104C3.61431 3.28114 3.33335 3.95941 3.33335 4.66666C3.33335 5.3739 3.61431 6.05218 4.1144 6.55227C4.6145 7.05237 5.29278 7.33332 6.00002 7.33332Z"
			fill="currentColor"
		/>
	</SVG>
);

const accIconVariation2 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="12"
		height="15"
		viewBox="0 0 12 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M11.3334 14.6667H0.666687V13.3333C0.666687 12.4493 1.01788 11.6014 1.643 10.9763C2.26812 10.3512 3.11597 9.99999 4.00002 9.99999H8.00002C8.88408 9.99999 9.73192 10.3512 10.357 10.9763C10.9822 11.6014 11.3334 12.4493 11.3334 13.3333V14.6667ZM6.00002 8.66666C5.47473 8.66666 4.95459 8.56319 4.46929 8.36217C3.98398 8.16116 3.54303 7.86652 3.17159 7.49508C2.80016 7.12365 2.50552 6.68269 2.3045 6.19739C2.10348 5.71209 2.00002 5.19194 2.00002 4.66666C2.00002 4.14137 2.10348 3.62123 2.3045 3.13592C2.50552 2.65062 2.80016 2.20966 3.17159 1.83823C3.54303 1.4668 3.98398 1.17216 4.46929 0.971138C4.95459 0.77012 5.47473 0.666656 6.00002 0.666656C7.06089 0.666657 8.0783 1.08808 8.82845 1.83823C9.57859 2.58837 10 3.60579 10 4.66666C10 5.72752 9.57859 6.74494 8.82845 7.49508C8.0783 8.24523 7.06089 8.66666 6.00002 8.66666Z"
			fill="currentColor"
		/>
	</SVG>
);

const accIconVariation3 = (
	<SVG
		className="cthf__nav-icon-variation"
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M8.26843 0.5C12.4084 0.5 15.7684 3.86 15.7684 8C15.7684 12.14 12.4084 15.5 8.26843 15.5C4.12843 15.5 0.768433 12.14 0.768433 8C0.768433 3.86 4.12843 0.5 8.26843 0.5ZM3.78568 10.562C4.88668 12.2045 6.53968 13.25 8.38843 13.25C10.2364 13.25 11.8902 12.2053 12.9904 10.562C11.7422 9.39545 10.0969 8.74761 8.38843 8.75C6.67971 8.74742 5.03407 9.39527 3.78568 10.562ZM8.26843 7.25C8.86517 7.25 9.43747 7.01295 9.85942 6.59099C10.2814 6.16903 10.5184 5.59674 10.5184 5C10.5184 4.40326 10.2814 3.83097 9.85942 3.40901C9.43747 2.98705 8.86517 2.75 8.26843 2.75C7.6717 2.75 7.0994 2.98705 6.67744 3.40901C6.25549 3.83097 6.01843 4.40326 6.01843 5C6.01843 5.59674 6.25549 6.16903 6.67744 6.59099C7.0994 7.01295 7.6717 7.25 8.26843 7.25Z"
			fill="currentColor"
		/>
	</SVG>
);

export const Styles = memo(() => {
	const {
		attributes,
		setAttributes,
		deviceType,
		navigationSelected,
		searchSelected,
		btnSelected,
		miniCartSelected,
		accSelected,
		setSidebarPreview,
	} = useContext(CTHFBlockControlsContext);

	const themeColorPalette = select("core/editor").getEditorSettings().colors;

	const googleFonts = getFontOptions(cthfAssets.googleFonts);

	const [openPanel, setOpenPanel] = useState(null);

	const togglePanel = (panelName) => {
		setOpenPanel((current) => (current === panelName ? null : panelName));
	};

	return (
		<>
			<div key="cthf-block__style" className="cthf__light-border-top">
				<AttrWrapper styles={{ marginTop: "10px" }}>
					<PanelColorSettings
						className="cthf__border-none"
						title={__("Color", "rootblox")}
						enableAlpha={true}
						colorSettings={[
							{
								label: __("Background", "rootblox"),
								value: attributes.color.bg,
								onChange: (newValue) =>
									setAttributes({
										...attributes,
										color: {
											...attributes.color,
											bg: newValue,
										},
									}),
							},
						]}
					/>
				</AttrWrapper>

				{attributes.stickyHeader.enabled && (
					<Panel>
						<PanelBody
							title={__("Sticky Styles", "cozy-addons")}
							opened={openPanel === "sticky-styles"}
							onToggle={() => togglePanel("sticky-styles")}
						>
							<AttrWrapper className="is-half__unit-control">
								<UnitControl
									label={__("Backdrop Blur", "rootblox")}
									value={attributes.stickyHeader.backdropBlur}
									onChange={(newValue) =>
										setAttributes({
											...attributes,
											stickyHeader: {
												...attributes.stickyHeader,
												backdropBlur: newValue,
											},
										})
									}
									help={__(
										"Make sure the background color of the wrapper group has opacity.",
										"rootblox",
									)}
									__next40pxDefaultSize
								/>
							</AttrWrapper>
						</PanelBody>
					</Panel>
				)}

				{attributes.mobileMenu.status !== "off" &&
					((attributes.mobileMenu.status === "mobile" &&
						(deviceType === "Tablet" || deviceType === "Mobile")) ||
						attributes.mobileMenu.status === "always") && (
						<>
							<Panel>
								<PanelBody
									title={__("Mobile Menu Styles", "rootblox")}
									opened={openPanel === "mobile-menu-styles"}
									onToggle={() => togglePanel("mobile-menu-styles")}
								>
									<AttrWrapper>
										<BoxControl
											label={__("Wrapper Padding", "rootblox")}
											resetValues={{
												top: "0px",
												right: "0px",
												bottom: "0px",
												left: "0px",
											}}
											values={attributes.mobileMenu.wrapperPadding}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													mobileMenu: {
														...attributes.mobileMenu,
														wrapperPadding: newValue,
													},
												})
											}
											__next40pxDefaultSize
										/>
									</AttrWrapper>

									<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
										<UnitControl
											label={__("Icon Size", "rootblox")}
											value={attributes.mobileMenu.iconSize}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													mobileMenu: {
														...attributes.mobileMenu,
														iconSize: newValue,
													},
												})
											}
											__next40pxDefaultSize
										/>
									</AttrWrapper>

									<PanelColorSettings
										className="cthf__color-panel"
										title={__("Colors", "rootblox")}
										enableAlpha={true}
										colorSettings={[
											{
												label: __("Text/Icon", "rootblox"),
												value: attributes.color.text,
												onChange: (newValue) =>
													setAttributes({
														...attributes,
														color: {
															...attributes.color,
															text: newValue,
														},
													}),
											},
											{
												label: __("Icon (Hover)", "rootblox"),
												value: attributes.color.iconHover,
												onChange: (newValue) =>
													setAttributes({
														...attributes,
														color: {
															...attributes.color,
															iconHover: newValue,
														},
													}),
											},
											{
												label: __("Background", "rootblox"),
												value: attributes.color.mobileBg,
												onChange: (newValue) =>
													setAttributes({
														...attributes,
														color: {
															...attributes.color,
															mobileBg: newValue,
														},
													}),
											},
										]}
									/>
								</PanelBody>
							</Panel>

							{cthfAssets.isPremium && (
								<>
									{btnSelected && (
										<Panel>
											<PanelBody
												title={__("CTA Button Styles", "rootblox")}
												opened={openPanel === "cta-button-styles"}
												onToggle={() => togglePanel("cta-button-styles")}
											>
												<AttrWrapper>
													<BoxControl
														label={__("Padding", "rootblox")}
														resetValues={[
															{
																top: "0px",
																right: "0px",
																bottom: "0px",
																left: "0px",
															},
														]}
														values={attributes.ctaButton.padding}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	padding: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<AttrWrapper styles={{ maxWidth: "50%" }}>
													<BorderControl
														label={__("Border", "rootblox")}
														enableAlpha={true}
														colors={themeColorPalette}
														value={attributes.ctaButton.border}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	border: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<AttrWrapper>
													<BoxControl
														label={__("Border Radius", "rootblox")}
														resetValues={[
															{
																top: "0px",
																right: "0px",
																bottom: "0px",
																left: "0px",
															},
														]}
														values={attributes.ctaButton.radius}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	radius: newValue,
																},
															})
														}
														__next40pxDefaultSize
													/>
												</AttrWrapper>

												<SelectControl
													label={__("Font Family", "rootblox")}
													options={googleFonts}
													value={attributes.ctaButton.font.family}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															ctaButton: {
																...attributes.ctaButton,
																font: {
																	...attributes.ctaButton.font,
																	family: newValue,
																},
															},
														})
													}
													__next40pxDefaultSize
												/>

												<div className="cthf__attr-divider">
													<AttrWrapper styles={{ margin: "0" }}>
														<UnitControl
															label={__("Font Size", "rootblox")}
															value={attributes.ctaButton.font.size}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		font: {
																			...attributes.ctaButton.font,
																			size: newValue,
																		},
																	},
																})
															}
															__next40pxDefaultSize
														/>
													</AttrWrapper>

													<SelectControl
														label={__("Font Weight", "rootblox")}
														options={fontWeights}
														value={attributes.ctaButton.font.weight}
														onChange={(newValue) =>
															setAttributes({
																...attributes,
																ctaButton: {
																	...attributes.ctaButton,
																	font: {
																		...attributes.ctaButton.font,
																		weight: newValue,
																	},
																},
															})
														}
														__next40pxDefaultSize
													/>
												</div>

												<div className="cthf__attr-divider">
													<AttrWrapper styles={{ margin: "10px 0" }}>
														<ToggleGroupControl
															label={__("Letter Case", "rootblox")}
															value={attributes.ctaButton.letterCase}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		letterCase: newValue,
																	},
																})
															}
														>
															<ToggleGroupControlIconOption
																label={__("None", "rootblox")}
																icon={lineSolid}
																value="none"
															/>
															<ToggleGroupControlIconOption
																label={__("Lowercase", "rootblox")}
																icon={formatUppercase}
																value="uppercase"
															/>
															<ToggleGroupControlIconOption
																label={__("Uppercase", "rootblox")}
																icon={formatLowercase}
																value="lowercase"
															/>
															<ToggleGroupControlIconOption
																label={__("Capitalize", "rootblox")}
																icon={formatCapitalize}
																value="capitalize"
															/>
														</ToggleGroupControl>
													</AttrWrapper>

													<AttrWrapper styles={{ margin: "10px 0" }}>
														<ToggleGroupControl
															label={__("Decoration", "rootblox")}
															value={attributes.ctaButton.decoration}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		decoration: newValue,
																	},
																})
															}
														>
															<ToggleGroupControlIconOption
																label={__("None", "rootblox")}
																icon={lineSolid}
																value="none"
															/>
															<ToggleGroupControlIconOption
																label={__("Underline", "rootblox")}
																icon={formatUnderline}
																value="underline"
															/>
															<ToggleGroupControlIconOption
																label={__("Strikethrough", "rootblox")}
																icon={formatStrikethrough}
																value="line-through"
															/>
														</ToggleGroupControl>
													</AttrWrapper>
												</div>

												<div className="cthf__attr-divider">
													<AttrWrapper styles={{ marginTop: "0" }}>
														<UnitControl
															label={__("Line Height", "rootblox")}
															value={attributes.ctaButton.lineHeight}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		lineHeight: newValue,
																	},
																})
															}
															__next40pxDefaultSize
														/>
													</AttrWrapper>

													<AttrWrapper styles={{ marginTop: "0" }}>
														<UnitControl
															label={__("Letter Spacing", "rootblox")}
															value={attributes.ctaButton.letterSpacing}
															onChange={(newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		letterSpacing: newValue,
																	},
																})
															}
															__next40pxDefaultSize
														/>
													</AttrWrapper>
												</div>

												<PanelColorSettings
													className="cthf__color-panel"
													title={__("Colors", "rootblox")}
													enableAlpha={true}
													colorSettings={[
														{
															label: __("Text (Default)", "rootblox"),
															value: attributes.ctaButton.color.text,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			text: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Text (Hover)", "rootblox"),
															value: attributes.ctaButton.color.textHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			textHover: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Background (Default)", "rootblox"),
															value: attributes.ctaButton.color.bg,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			bg: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Background (Hover)", "rootblox"),
															value: attributes.ctaButton.color.bgHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			bgHover: newValue,
																		},
																	},
																}),
														},
														{
															label: __("Border (Hover)", "rootblox"),
															value: attributes.ctaButton.color.borderHover,
															onChange: (newValue) =>
																setAttributes({
																	...attributes,
																	ctaButton: {
																		...attributes.ctaButton,
																		color: {
																			...attributes.ctaButton.color,
																			borderHover: newValue,
																		},
																	},
																}),
														},
													]}
												/>
											</PanelBody>
										</Panel>
									)}
								</>
							)}

							{searchSelected && (
								<Panel>
									<PanelBody
										title={__("Search Styles", "rootblox")}
										opened={openPanel === "search-styles"}
										onToggle={() => togglePanel("search-styles")}
									>
										<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
											<UnitControl
												label={__("Icon Size", "rootblox")}
												value={attributes.search.iconSize}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														search: {
															...attributes.search,
															iconSize: newValue,
														},
													})
												}
												__next40pxDefaultSize
											/>
										</AttrWrapper>

										<PanelColorSettings
											className="cthf__color-panel cthf__border-none"
											enableAlpha={true}
											title={__("Colors", "rootblox")}
											colorSettings={[
												{
													label: __("Icon (Default)", "rootblox"),
													value: attributes.search.color.icon,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	icon: newValue,
																},
															},
														}),
												},
												{
													label: __("Icon (Hover)", "rootblox"),
													value: attributes.search.color.iconHover,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	iconHover: newValue,
																},
															},
														}),
												},
												{
													label: __("Text", "rootblox"),
													value: attributes.search.color.text,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	text: newValue,
																},
															},
														}),
												},
												{
													label: __("Overlay", "rootblox"),
													value: attributes.search.color.overlay,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	overlay: newValue,
																},
															},
														}),
												},
												{
													label: __("Close Icon (Default)", "rootblox"),
													value: attributes.search.color.close,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	close: newValue,
																},
															},
														}),
												},
												{
													label: __("Close Icon (Hover)", "rootblox"),
													value: attributes.search.color.closeHover,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	closeHover: newValue,
																},
															},
														}),
												},
												{
													label: __(
														"Close Icon Background (Default)",
														"rootblox",
													),
													value: attributes.search.color.closeBg,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	closeBg: newValue,
																},
															},
														}),
												},
												{
													label: __(
														"Close Icon Background (Hover)",
														"rootblox",
													),
													value: attributes.search.color.closeBgHover,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															search: {
																...attributes.search,
																color: {
																	...attributes.search.color,
																	closeBgHover: newValue,
																},
															},
														}),
												},
											]}
										/>
									</PanelBody>
								</Panel>
							)}

							{miniCartSelected && (
								<Panel>
									<PanelBody
										title={__("Mini Cart Icon Styles", "rootblox")}
										opened={openPanel === "mini-cart-icon-styles"}
										onToggle={() => togglePanel("mini-cart-icon-styles")}
									>
										<AttrWrapper styles={{ marginTop: "0" }}>
											<ToggleGroupControl
												label={__("Icon Variation", "rootblox")}
												value={attributes.miniCart.icon}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														miniCart: {
															...attributes.miniCart,
															icon: newValue,
														},
													})
												}
												isBlock
												__next40pxDefaultSize
											>
												<ToggleGroupControlIconOption
													label={__("Variation 1", "rootblox")}
													icon={cartIconVariation1}
													value="variation-1"
												/>
												<ToggleGroupControlIconOption
													label={__("Variation 2", "rootblox")}
													icon={cartIconVariation2}
													value="variation-2"
												/>
												<ToggleGroupControlIconOption
													label={__("Variation 3", "rootblox")}
													icon={cartIconVariation3}
													value="variation-3"
												/>
											</ToggleGroupControl>
										</AttrWrapper>

										<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
											<UnitControl
												label={__("Icon Size", "rootblox")}
												value={attributes.miniCart.iconSize}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														miniCart: {
															...attributes.miniCart,
															iconSize: newValue,
														},
													})
												}
												__next40pxDefaultSize
											/>
										</AttrWrapper>

										<SelectControl
											label={__("Font Family", "rootblox")}
											options={googleFonts}
											value={attributes.miniCart.font.family}
											onChange={(newValue) =>
												setAttributes({
													...attributes,
													miniCart: {
														...attributes.miniCart,
														font: {
															...attributes.miniCart.font,
															family: newValue,
														},
													},
												})
											}
											__next40pxDefaultSize
										/>

										<div className="cthf__attr-divider">
											<AttrWrapper styles={{ marginTop: "0" }}>
												<UnitControl
													label={__("Font Size", "rootblox")}
													value={attributes.miniCart.font.size}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															miniCart: {
																...attributes.miniCart,
																font: {
																	...attributes.miniCart.font,
																	size: newValue,
																},
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>

											<SelectControl
												label={__("Font Weight", "rootblox")}
												options={fontWeights}
												value={attributes.miniCart.font.weight}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														miniCart: {
															...attributes.miniCart,
															font: {
																...attributes.miniCart.font,
																weight: newValue,
															},
														},
													})
												}
												__next40pxDefaultSize
											/>
										</div>

										<PanelColorSettings
											className="cthf__color-panel"
											enableAlpha={true}
											title={__("Color", "rootblox")}
											colorSettings={[
												{
													label: __("Icon (Default)", "rootblox"),
													value: attributes.miniCart.color.icon,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															miniCart: {
																...attributes.miniCart,
																color: {
																	...attributes.miniCart.color,
																	icon: newValue,
																},
															},
														}),
												},
												{
													label: __("Icon (Hover)", "rootblox"),
													value: attributes.miniCart.color.iconHover,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															miniCart: {
																...attributes.miniCart,
																color: {
																	...attributes.miniCart.color,
																	iconHover: newValue,
																},
															},
														}),
												},
												{
													label: __("Text", "rootblox"),
													value: attributes.miniCart.color.text,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															miniCart: {
																...attributes.miniCart,
																color: {
																	...attributes.miniCart.color,
																	text: newValue,
																},
															},
														}),
												},
												{
													label: __("Text Background", "rootblox"),
													value: attributes.miniCart.color.textBg,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															miniCart: {
																...attributes.miniCart,
																color: {
																	...attributes.miniCart.color,
																	textBg: newValue,
																},
															},
														}),
												},
											]}
										/>
									</PanelBody>
								</Panel>
							)}

							{accSelected && (
								<Panel>
									<PanelBody
										title={__("Account Icon Styles", "rootblox")}
										opened={openPanel === "account-icon-styles"}
										onToggle={() => togglePanel("account-icon-styles")}
									>
										<AttrWrapper styles={{ marginTop: "0" }}>
											<ToggleGroupControl
												label={__("Icon Variation", "rootblox")}
												value={attributes.acc.icon}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														acc: {
															...attributes.acc,
															icon: newValue,
														},
													})
												}
												isBlock
												__next40pxDefaultSize
											>
												<ToggleGroupControlIconOption
													label={__("Variation 1", "rootblox")}
													icon={accIconVariation1}
													value="variation-1"
												/>
												<ToggleGroupControlIconOption
													label={__("Variation 2", "rootblox")}
													icon={accIconVariation2}
													value="variation-2"
												/>
												<ToggleGroupControlIconOption
													label={__("Variation 3", "rootblox")}
													icon={accIconVariation3}
													value="variation-3"
												/>
											</ToggleGroupControl>
										</AttrWrapper>

										<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
											<UnitControl
												label={__("Icon Size", "rootblox")}
												value={attributes.acc.iconSize}
												onChange={(newValue) =>
													setAttributes({
														...attributes,
														acc: {
															...attributes.acc,
															iconSize: newValue,
														},
													})
												}
												__next40pxDefaultSize
											/>
										</AttrWrapper>

										<PanelColorSettings
											className="cthf__color-panel"
											enableAlpha={true}
											title={__("Color", "rootblox")}
											colorSettings={[
												{
													label: __("Icon (Default)", "rootblox"),
													value: attributes.acc.color.icon,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															acc: {
																...attributes.acc,
																color: {
																	...attributes.acc.color,
																	icon: newValue,
																},
															},
														}),
												},
												{
													label: __("Icon (Hover)", "rootblox"),
													value: attributes.acc.color.iconHover,
													onChange: (newValue) =>
														setAttributes({
															...attributes,
															acc: {
																...attributes.acc,
																color: {
																	...attributes.acc.color,
																	iconHover: newValue,
																},
															},
														}),
												},
											]}
										/>
									</PanelBody>
								</Panel>
							)}

							{navigationSelected && (
								<>
									<Panel>
										<PanelBody
											title={__("Menu Icon Styles", "rootblox")}
											opened={openPanel === "menu-icon-styles"}
											onToggle={() => togglePanel("menu-icon-styles")}
										>
											<AttrWrapper styles={{ marginTop: "0" }}>
												<ToggleGroupControl
													label={__("Icon Variation", "rootblox")}
													value={attributes.navigation.icon}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															navigation: {
																...attributes.navigation,
																icon: newValue,
															},
														})
													}
													isBlock
													__next40pxDefaultSize
												>
													<ToggleGroupControlIconOption
														label={__("Variation 1", "rootblox")}
														icon={navIconVariation2}
														value="variation-2"
													/>
													<ToggleGroupControlIconOption
														label={__("Variation 2", "rootblox")}
														icon={navIconVariation1}
														value="variation-1"
													/>
													<ToggleGroupControlIconOption
														label={__("Variation 3", "rootblox")}
														icon={navIconVariation3}
														value="variation-3"
													/>
												</ToggleGroupControl>
											</AttrWrapper>

											<AttrWrapper styles={{ marginTop: "0", maxWidth: "50%" }}>
												<UnitControl
													label={__("Icon Size", "rootblox")}
													value={attributes.navigation.iconSize}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															navigation: {
																...attributes.navigation,
																iconSize: newValue,
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>

											<PanelColorSettings
												className="cthf__color-panel"
												enableAlpha={true}
												title={__("Color", "rootblox")}
												colorSettings={[
													{
														label: __("Icon (Default)", "rootblox"),
														value: attributes.navigation.color.icon,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																navigation: {
																	...attributes.navigation,
																	color: {
																		...attributes.navigation.color,
																		icon: newValue,
																	},
																},
															}),
													},
													{
														label: __("Icon (Hover)", "rootblox"),
														value: attributes.navigation.color.iconHover,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																navigation: {
																	...attributes.navigation,
																	color: {
																		...attributes.navigation.color,
																		iconHover: newValue,
																	},
																},
															}),
													},
												]}
											/>
										</PanelBody>

										<PanelBody
											title={__("Sidebar Panel Styles", "rootblox")}
											opened={openPanel === "sidebar-panel-styles"}
											onToggle={() => togglePanel("sidebar-panel-styles")}
										>
											<Button
												className="cthf__btn-secondary"
												style={{ margin: "0 0 22px" }}
												text={__("Preview Changes", "rootblox")}
												onClick={() => setSidebarPreview(true)}
											/>

											<AttrWrapper styles={{ marginTop: "0", maxWidth: "40%" }}>
												<UnitControl
													label={__("Sidebar Width", "rootblox")}
													value={attributes.sidebar.width}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															sidebar: {
																...attributes.sidebar,
																width: newValue,
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>

											<AttrWrapper styles={{ marginBottom: "0" }}>
												<BoxControl
													label={__("Sidebar Padding", "rootblox")}
													resetValues={{
														top: "0px",
														right: "0px",
														bottom: "0px",
														left: "0px",
													}}
													values={attributes.sidebar.padding}
													onChange={(newValue) =>
														setAttributes({
															...attributes,
															sidebar: {
																...attributes.sidebar,
																padding: newValue,
															},
														})
													}
													__next40pxDefaultSize
												/>
											</AttrWrapper>

											<TabPanel
												className="cthf__tab-panel attr-panel"
												tabs={[
													{
														title: __("Menu", "rootblox"),
														name: "cthf__tab-1",
														className: "cthf__tab attr-tab",
													},
													{
														title: __("Buttons", "rootblox"),
														name: "cthf__tab-2",
														className: "cthf__tab attr-tab",
													},
													{
														title: __("Socials", "rootblox"),
														name: "cthf__tab-3",
														className: "cthf__tab attr-tab",
													},
												]}
												activeClass="attr-active"
											>
												{(tab) => (
													<>
														{tab.name === "cthf__tab-1" && (
															<>
																<fieldset className="cthf__attr-group">
																	<legend>{__("Container", "rootblox")}</legend>
																	<AttrWrapper styles={{ marginBottom: "0" }}>
																		<BoxControl
																			label={__("Padding", "rootblox")}
																			resetValues={[
																				{
																					top: "0px",
																					right: "0px",
																					bottom: "0px",
																					left: "0px",
																				},
																			]}
																			values={attributes.navigation.padding}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						padding: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<div className="cthf__attr-divider">
																		<AttrWrapper>
																			<UnitControl
																				label={__("Margin Top", "rootblox")}
																				value={attributes.navigation.margin.top}
																				onChange={(newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							margin: {
																								...attributes.navigation.margin,
																								top: newValue,
																							},
																						},
																					})
																				}
																				__next40pxDefaultSize
																			/>
																		</AttrWrapper>

																		<AttrWrapper>
																			<UnitControl
																				label={__("Margin Bottom", "rootblox")}
																				value={
																					attributes.navigation.margin.bottom
																				}
																				onChange={(newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							margin: {
																								...attributes.navigation.margin,
																								bottom: newValue,
																							},
																						},
																					})
																				}
																				__next40pxDefaultSize
																			/>
																		</AttrWrapper>
																	</div>

																	<AttrWrapper styles={{ margin: "0" }}>
																		<BorderBoxControl
																			label={__("Border", "rootblox")}
																			enableAlpha={true}
																			colors={themeColorPalette}
																			value={attributes.navigation.border}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						border: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</fieldset>

																<fieldset className="cthf__attr-group">
																	<legend>{__("Item", "rootblox")}</legend>

																	<AttrWrapper>
																		<BoxControl
																			label={__("Padding", "rootblox")}
																			resetValues={[
																				{
																					top: "0px",
																					right: "0px",
																					bottom: "0px",
																					left: "0px",
																				},
																			]}
																			values={attributes.navigation.itemPadding}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						itemPadding: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<AttrWrapper styles={{ margin: "0" }}>
																		<BorderBoxControl
																			label={__("Border", "rootblox")}
																			enableAlpha={true}
																			colors={themeColorPalette}
																			value={attributes.navigation.itemBorder}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						itemBorder: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</fieldset>

																<SelectControl
																	label={__("Font Family", "rootblox")}
																	options={googleFonts}
																	value={attributes.navigation.font.family}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			navigation: {
																				...attributes.navigation,
																				font: {
																					...attributes.navigation.font,
																					family: newValue,
																				},
																			},
																		})
																	}
																	__next40pxDefaultSize
																/>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ margin: "0" }}>
																		<UnitControl
																			label={__("Font Size", "rootblox")}
																			value={attributes.navigation.font.size}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						font: {
																							...attributes.navigation.font,
																							size: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<SelectControl
																		label={__("Font Weight", "rootblox")}
																		options={fontWeights}
																		value={attributes.navigation.font.weight}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				navigation: {
																					...attributes.navigation,
																					font: {
																						...attributes.navigation.font,
																						weight: newValue,
																					},
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Letter Case", "rootblox")}
																			value={attributes.navigation.letterCase}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						letterCase: newValue,
																					},
																				})
																			}
																		>
																			<ToggleGroupControlIconOption
																				label={__("None", "rootblox")}
																				icon={lineSolid}
																				value="none"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Lowercase", "rootblox")}
																				icon={formatUppercase}
																				value="uppercase"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Uppercase", "rootblox")}
																				icon={formatLowercase}
																				value="lowercase"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Capitalize", "rootblox")}
																				icon={formatCapitalize}
																				value="capitalize"
																			/>
																		</ToggleGroupControl>
																	</AttrWrapper>

																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Decoration", "rootblox")}
																			value={attributes.navigation.decoration}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						decoration: newValue,
																					},
																				})
																			}
																		>
																			<ToggleGroupControlIconOption
																				label={__("None", "rootblox")}
																				icon={lineSolid}
																				value="none"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Underline", "rootblox")}
																				icon={formatUnderline}
																				value="underline"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Strikethrough", "rootblox")}
																				icon={formatStrikethrough}
																				value="line-through"
																			/>
																		</ToggleGroupControl>
																	</AttrWrapper>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<UnitControl
																			label={__("Line Height", "rootblox")}
																			value={attributes.navigation.lineHeight}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						lineHeight: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<UnitControl
																			label={__("Letter Spacing", "rootblox")}
																			value={
																				attributes.navigation.letterSpacing
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					navigation: {
																						...attributes.navigation,
																						letterSpacing: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<AttrWrapper
																	styles={{ margin: "-20px 0 22px" }}
																>
																	<PanelColorSettings
																		className="cthf__color-panel cthf__border-none"
																		title={__("Menu Color Palette", "rootblox")}
																		enableAlpha={true}
																		colorSettings={[
																			{
																				label: __("Menu (Default)", "rootblox"),
																				value: attributes.navigation.color.text,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								text: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __("Menu (Hover)", "rootblox"),
																				value:
																					attributes.navigation.color.textHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								textHover: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Submenu (Default)",
																					"rootblox",
																				),
																				value:
																					attributes.navigation.color.submenu,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								submenu: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Submenu (Hover)",
																					"rootblox",
																				),
																				value:
																					attributes.navigation.color
																						.submenuHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						navigation: {
																							...attributes.navigation,
																							color: {
																								...attributes.navigation.color,
																								submenuHover: newValue,
																							},
																						},
																					}),
																			},
																		]}
																	/>
																</AttrWrapper>
															</>
														)}

														{tab.name === "cthf__tab-2" && (
															<>
																<AttrWrapper styles={{ marginBottom: "0" }}>
																	<BoxControl
																		label={__("Padding", "rootblox")}
																		resetValues={[
																			{
																				top: "0px",
																				right: "0px",
																				bottom: "0px",
																				left: "0px",
																			},
																		]}
																		values={attributes.sidebarCTA.padding}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
																					padding: newValue,
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</AttrWrapper>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ marginBottom: "0" }}>
																		<UnitControl
																			label={__("Margin Top", "rootblox")}
																			value={attributes.sidebarCTA.margin.top}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						margin: {
																							...attributes.sidebarCTA.margin,
																							top: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<AttrWrapper styles={{ marginBottom: "0" }}>
																		<UnitControl
																			label={__("Margin Bottom", "rootblox")}
																			value={
																				attributes.sidebarCTA.margin.bottom
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						margin: {
																							...attributes.sidebarCTA.margin,
																							bottom: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper>
																		<BorderControl
																			label={__("Border", "rootblox")}
																			enableAlpha={true}
																			colors={themeColorPalette}
																			value={attributes.sidebarCTA.border}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						border: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<AttrWrapper>
																		<UnitControl
																			label={__("Border Radius", "rootblox")}
																			value={attributes.sidebarCTA.radius}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						radius: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<SelectControl
																	label={__("Font Family", "rootblox")}
																	options={googleFonts}
																	value={attributes.sidebarCTA.font.family}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			sidebarCTA: {
																				...attributes.sidebarCTA,
																				font: {
																					...attributes.sidebarCTA.font,
																					family: newValue,
																				},
																			},
																		})
																	}
																	__next40pxDefaultSize
																/>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ margin: "0" }}>
																		<UnitControl
																			label={__("Font Size", "rootblox")}
																			value={attributes.sidebarCTA.font.size}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						font: {
																							...attributes.sidebarCTA.font,
																							size: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<SelectControl
																		label={__("Font Weight", "rootblox")}
																		options={fontWeights}
																		value={attributes.sidebarCTA.font.weight}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarCTA: {
																					...attributes.sidebarCTA,
																					font: {
																						...attributes.sidebarCTA.font,
																						weight: newValue,
																					},
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Letter Case", "rootblox")}
																			value={attributes.sidebarCTA.letterCase}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						letterCase: newValue,
																					},
																				})
																			}
																		>
																			<ToggleGroupControlIconOption
																				label={__("None", "rootblox")}
																				icon={lineSolid}
																				value="none"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Lowercase", "rootblox")}
																				icon={formatUppercase}
																				value="uppercase"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Uppercase", "rootblox")}
																				icon={formatLowercase}
																				value="lowercase"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Capitalize", "rootblox")}
																				icon={formatCapitalize}
																				value="capitalize"
																			/>
																		</ToggleGroupControl>
																	</AttrWrapper>

																	<AttrWrapper styles={{ margin: "10px 0" }}>
																		<ToggleGroupControl
																			label={__("Decoration", "rootblox")}
																			value={attributes.sidebarCTA.decoration}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						decoration: newValue,
																					},
																				})
																			}
																		>
																			<ToggleGroupControlIconOption
																				label={__("None", "rootblox")}
																				icon={lineSolid}
																				value="none"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Underline", "rootblox")}
																				icon={formatUnderline}
																				value="underline"
																			/>
																			<ToggleGroupControlIconOption
																				label={__("Strikethrough", "rootblox")}
																				icon={formatStrikethrough}
																				value="line-through"
																			/>
																		</ToggleGroupControl>
																	</AttrWrapper>
																</div>

																<div className="cthf__attr-divider">
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<UnitControl
																			label={__("Line Height", "rootblox")}
																			value={attributes.sidebarCTA.lineHeight}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						lineHeight: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<UnitControl
																			label={__("Letter Spacing", "rootblox")}
																			value={
																				attributes.sidebarCTA.letterSpacing
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarCTA: {
																						...attributes.sidebarCTA,
																						letterSpacing: newValue,
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<AttrWrapper
																	styles={{ margin: "-20px 0 22px" }}
																>
																	<PanelColorSettings
																		className="cthf__color-panel cthf__border-none"
																		title={__(
																			"Buttons Color Palette",
																			"rootblox",
																		)}
																		enableAlpha={true}
																		colorSettings={[
																			{
																				label: __("Text (Default)", "rootblox"),
																				value: attributes.sidebarCTA.color.text,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								text: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __("Text (Hover)", "rootblox"),
																				value:
																					attributes.sidebarCTA.color.textHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								textHover: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Background (Default)",
																					"rootblox",
																				),
																				value: attributes.sidebarCTA.color.bg,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								bg: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __(
																					"Background (Hover)",
																					"rootblox",
																				),
																				value:
																					attributes.sidebarCTA.color.bgHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								bgHover: newValue,
																							},
																						},
																					}),
																			},
																			{
																				label: __("Border (Hover)", "rootblox"),
																				value:
																					attributes.sidebarCTA.color
																						.borderHover,
																				onChange: (newValue) =>
																					setAttributes({
																						...attributes,
																						sidebarCTA: {
																							...attributes.sidebarCTA,
																							color: {
																								...attributes.sidebarCTA.color,
																								borderHover: newValue,
																							},
																						},
																					}),
																			},
																		]}
																	/>
																</AttrWrapper>
															</>
														)}

														{tab.name === "cthf__tab-3" && (
															<>
																<div className="cthf__attr-divider">
																	<AttrWrapper>
																		<UnitControl
																			label={__("Margin Top", "rootblox")}
																			value={
																				attributes.sidebarSocial.margin.top
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSocial: {
																						...attributes.sidebarSocial,
																						margin: {
																							...attributes.sidebarSocial
																								.margin,
																							top: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>

																	<AttrWrapper>
																		<UnitControl
																			label={__("Margin Bottom", "rootblox")}
																			value={
																				attributes.sidebarSocial.margin.bottom
																			}
																			onChange={(newValue) =>
																				setAttributes({
																					...attributes,
																					sidebarSocial: {
																						...attributes.sidebarSocial,
																						margin: {
																							...attributes.sidebarSocial
																								.margin,
																							bottom: newValue,
																						},
																					},
																				})
																			}
																			__next40pxDefaultSize
																		/>
																	</AttrWrapper>
																</div>

																<ToggleGroupControl
																	label={__("Icon View", "rootblox")}
																	value={attributes.sidebarSocial.view}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			sidebarSocial: {
																				...attributes.sidebarSocial,
																				view: newValue,
																			},
																		})
																	}
																	isBlock
																	__next40pxDefaultSize
																>
																	<ToggleGroupControlOption
																		label={__("Default", "rootblox")}
																		value="default"
																	/>
																	<ToggleGroupControlOption
																		label={__("Stacked", "rootblox")}
																		value="stacked"
																	/>
																</ToggleGroupControl>

																<AttrWrapper styles={{ maxWidth: "50%" }}>
																	<UnitControl
																		label={__("Icon Size", "rootblox")}
																		value={attributes.sidebarSocial.size}
																		onChange={(newValue) =>
																			setAttributes({
																				...attributes,
																				sidebarSocial: {
																					...attributes.sidebarSocial,
																					size: newValue,
																				},
																			})
																		}
																		__next40pxDefaultSize
																	/>
																</AttrWrapper>

																{attributes.sidebarSocial.view ===
																	"stacked" && (
																	<>
																		<div className="cthf__attr-divider">
																			<AttrWrapper styles={{ margin: "0" }}>
																				<UnitControl
																					label={__("Box Width", "rootblox")}
																					value={
																						attributes.sidebarSocial.boxWidth
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								boxWidth: newValue,
																							},
																						})
																					}
																					__next40pxDefaultSize
																				/>
																			</AttrWrapper>

																			<AttrWrapper styles={{ margin: "0" }}>
																				<UnitControl
																					label={__("Box Height", "rootblox")}
																					value={
																						attributes.sidebarSocial.boxHeight
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								boxHeight: newValue,
																							},
																						})
																					}
																					__next40pxDefaultSize
																				/>
																			</AttrWrapper>
																		</div>

																		<div className="cthf__attr-divider">
																			<AttrWrapper>
																				<BorderControl
																					label={__("Border", "rootblox")}
																					enableAlpha={true}
																					colors={themeColorPalette}
																					value={
																						attributes.sidebarSocial.border
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								border: newValue,
																							},
																						})
																					}
																					__next40pxDefaultSize
																				/>
																			</AttrWrapper>

																			<AttrWrapper>
																				<UnitControl
																					label={__(
																						"Border Radius",
																						"rootblox",
																					)}
																					value={
																						attributes.sidebarSocial.radius
																					}
																					onChange={(newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								radius: newValue,
																							},
																						})
																					}
																					__next40pxDefaultSize
																				/>
																			</AttrWrapper>
																		</div>
																	</>
																)}

																<CheckboxControl
																	label={__("Use Brand Color", "rootblox")}
																	checked={
																		attributes.sidebarSocial.useBrandColor
																	}
																	onChange={(newValue) =>
																		setAttributes({
																			...attributes,
																			sidebarSocial: {
																				...attributes.sidebarSocial,
																				useBrandColor: newValue,
																			},
																		})
																	}
																/>

																{attributes.sidebarSocial.useBrandColor && (
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<PanelColorSettings
																			className="cthf__color-panel cthf__border-none"
																			enableAlpha={true}
																			title={__(
																				"Socials Color Palette",
																				"rootblox",
																			)}
																			colorSettings={[
																				{
																					label: __("Icon (Hover)", "rootblox"),
																					value:
																						attributes.sidebarSocial.color
																							.iconHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									iconHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Background (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.bgHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									bgHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Border (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.borderHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									borderHover: newValue,
																								},
																							},
																						}),
																				},
																			]}
																		/>
																	</AttrWrapper>
																)}
																{!attributes.sidebarSocial.useBrandColor && (
																	<AttrWrapper styles={{ marginTop: "0" }}>
																		<PanelColorSettings
																			className="cthf__color-panel cthf__border-none"
																			enableAlpha={true}
																			title={__(
																				"Socials Color Palette",
																				"rootblox",
																			)}
																			colorSettings={[
																				{
																					label: __(
																						"Icon (Default)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color.icon,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									icon: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __("Icon (Hover)", "rootblox"),
																					value:
																						attributes.sidebarSocial.color
																							.iconHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									iconHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Background (Default)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color.bg,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									bg: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Background (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.bgHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									bgHover: newValue,
																								},
																							},
																						}),
																				},
																				{
																					label: __(
																						"Border (Hover)",
																						"rootblox",
																					),
																					value:
																						attributes.sidebarSocial.color
																							.borderHover,
																					onChange: (newValue) =>
																						setAttributes({
																							...attributes,
																							sidebarSocial: {
																								...attributes.sidebarSocial,
																								color: {
																									...attributes.sidebarSocial
																										.color,
																									borderHover: newValue,
																								},
																							},
																						}),
																				},
																			]}
																		/>
																	</AttrWrapper>
																)}
															</>
														)}
													</>
												)}
											</TabPanel>

											<PanelColorSettings
												className="cthf__color-panel"
												title={__("Colors", "rootblox")}
												enableAlpha={true}
												colorSettings={[
													{
														label: __("Sidebar Background", "rootblox"),
														value: attributes.color.sidebarBg,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																color: {
																	...attributes.color,
																	sidebarBg: newValue,
																},
															}),
													},
													{
														label: __("Sidebar Close Icon", "rootblox"),
														value: attributes.color.sidebarCloseIcon,
														onChange: (newValue) =>
															setAttributes({
																...attributes,
																color: {
																	...attributes.color,
																	sidebarCloseIcon: newValue,
																},
															}),
													},
												]}
											/>
										</PanelBody>
									</Panel>
								</>
							)}
						</>
					)}
			</div>
		</>
	);
});
