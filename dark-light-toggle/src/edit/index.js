import "../editor.scss";

import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import { SVG, Path } from "@wordpress/components";

import { memo, createContext, useContext } from "@wordpress/element";

import { renderBlockStyles } from "./style.js";
import { CTHFBlockControls } from "./components/InspectorControls.js";

export const CTHFBlockContext = createContext(null);

const DarkLightToggle = memo(() => {
	const { attributes } = useContext(CTHFBlockContext);

	const blockID = `cthf_${attributes.clientId.replace(/-/gi, "_")}`;

	return (
		<>
			<div id={blockID} className="cthf__dark-light-toggle">
				<ul className="toggle__wrap">
					<li className="toggle__item">
						{attributes.icon.enabled && (
							<div className="icon__wrapper">
								<SVG
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<Path
										d="M10 3.66666C6.50781 3.66666 3.66669 6.50779 3.66669 10C3.66669 13.4922 6.50781 16.3333 10 16.3333C13.4922 16.3333 16.3334 13.4922 16.3334 10C16.3334 6.50779 13.4922 3.66666 10 3.66666ZM10 15C9.01111 15 8.04441 14.7068 7.22217 14.1573C6.39992 13.6079 5.75906 12.827 5.38062 11.9134C5.00218 10.9998 4.90317 9.99445 5.09609 9.02455C5.28902 8.05464 5.76522 7.16373 6.46449 6.46446C7.16375 5.7652 8.05466 5.289 9.02457 5.09607C9.99447 4.90315 10.9998 5.00216 11.9134 5.3806C12.8271 5.75904 13.608 6.3999 14.1574 7.22215C14.7068 8.04439 15 9.01109 15 10C14.9985 11.3256 14.4713 12.5965 13.5339 13.5339C12.5965 14.4712 11.3256 14.9985 10 15Z"
										fill="currentColor"
									/>
									<Path
										d="M10.6666 0H9.33331V2H10.6666V0Z"
										fill="currentColor"
									/>
									<Path
										d="M10.6666 18H9.33331V20H10.6666V18Z"
										fill="currentColor"
									/>
									<Path
										d="M20 9.33334H18V10.6667H20V9.33334Z"
										fill="currentColor"
									/>
									<Path
										d="M2 9.33334H0V10.6667H2V9.33334Z"
										fill="currentColor"
									/>
									<Path
										d="M16.4714 15.5286L15.5286 16.4714L16.862 17.8048L17.8048 16.8619L16.4714 15.5286Z"
										fill="currentColor"
									/>
									<Path
										d="M3.13809 2.19525L2.19525 3.13808L3.52859 4.47142L4.47143 3.52858L3.13809 2.19525Z"
										fill="currentColor"
									/>
									<Path
										d="M3.52851 15.5287L2.19519 16.862L3.13802 17.8048L4.47133 16.4715L3.52851 15.5287Z"
										fill="currentColor"
									/>
									<Path
										d="M16.862 2.19525L15.5286 3.52859L16.4715 4.47143L17.8048 3.13809L16.862 2.19525Z"
										fill="currentColor"
									/>
								</SVG>
							</div>
						)}
						{attributes.label.enabled && (
							<>
								<span className="label">{__("Light", "rootblox")}</span>
							</>
						)}
					</li>

					<li className="toggle__item">
						{attributes.icon.enabled && (
							<div className="icon__wrapper">
								<SVG
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<Path
										d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.075 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6518 13.7866 21 12.79Z"
										fill="none"
										stroke="currentColor"
										stroke-width="1.25"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</SVG>
							</div>
						)}
						{attributes.label.enabled && (
							<>
								<span className="label">{__("Dark", "rootblox")}</span>
							</>
						)}
					</li>
				</ul>
			</div>
		</>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {
	if (attributes.cover) {
		return <img src={attributes.cover} />;
	}

	attributes.clientId = clientId;

	const blockProps = useBlockProps({
		className: "cthf-block__wrapper",
	});

	return (
		<>
			<CTHFBlockContext.Provider value={{ attributes, setAttributes }}>
				<div {...blockProps}>
					<DarkLightToggle />
				</div>

				<CTHFBlockControls />
			</CTHFBlockContext.Provider>
		</>
	);
}
