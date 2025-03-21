import { __ } from "@wordpress/i18n";

import { Modal, Spinner } from "@wordpress/components";

import { memo } from "@wordpress/element";

import {
	freeHeaderPattern,
	freeHeaderPattern2,
	freeHeaderPattern3,
	freeHeaderPattern4,
	freeHeaderPattern5,
	proHeaderPattern,
	proHeaderPattern10,
	proHeaderPattern11,
	proHeaderPattern2,
	proHeaderPattern3,
	proHeaderPattern4,
	proHeaderPattern5,
	proHeaderPattern6,
	proHeaderPattern7,
	proHeaderPattern8,
	proHeaderPattern9,
} from "../patterns.js";

// Create an object to store the patterns
const patterns = {
	freeHeaderPattern,
	freeHeaderPattern2,
	freeHeaderPattern3,
	freeHeaderPattern4,
	freeHeaderPattern5,
	proHeaderPattern,
	proHeaderPattern2,
	proHeaderPattern3,
	proHeaderPattern4,
	proHeaderPattern5,
	proHeaderPattern6,
	proHeaderPattern7,
	proHeaderPattern8,
	proHeaderPattern9,
	proHeaderPattern10,
	proHeaderPattern11,
};

export const PatternModal = memo(
	({ handleCloseModal, handlePatternImport, patternLoader }) => {
		const freePatternCount = 5;
		const proPatternCount = 11;

		const freePatternsList = [];

		for (let i = 1; i <= freePatternCount; i++) {
			let imgSrc = `${cthfAssets.img}header.png`;
			if (i > 1) {
				imgSrc = `${cthfAssets.img}header-${i}.png`;
			}

			let patternKey = "freeHeaderPattern";
			if (i > 1) {
				patternKey = `freeHeaderPattern${i}`;
			}

			freePatternsList.push(
				<figure className="cthf-block__pattern">
					<span className="pattern__overlay"></span>
					<img src={imgSrc} />
					<div
						className="pattern__import-btn"
						onClick={() => {
							if (patternLoader) {
								return;
							}

							handlePatternImport(patterns[patternKey]);
						}}
					>
						{patternLoader && <Spinner />}
						{!patternLoader && __("Import Pattern", "rootblox")}
					</div>
				</figure>,
			);
		}

		const proPatternsList = [];

		for (let i = 1; i <= proPatternCount; i++) {
			let imgSrc = `${cthfAssets.img}header-pro.png`;
			if (i > 1) {
				imgSrc = `${cthfAssets.img}header-pro-${i}.png`;
			}

			let patternKey = "proHeaderPattern";
			if (i > 1) {
				patternKey = `proHeaderPattern${i}`;
			}

			proPatternsList.push(
				<figure className="cthf-block__pattern">
					<span className="pattern__overlay" />
					<img src={imgSrc} />

					<span className="pro__crown" />
					{cthfAssets.isPremium && (
						<div
							className="pattern__import-btn"
							onClick={() => {
								if (patternLoader) {
									return;
								}

								handlePatternImport(patterns[patternKey]);
							}}
						>
							{patternLoader && <Spinner />}
							{!patternLoader && __("Import Pattern", "rootblox")}
						</div>
					)}
					{!cthfAssets.isPremium && (
						<a className="cthf__upsell-btn">{__("Checkout Pro", "rootblox")}</a>
					)}
				</figure>,
			);
		}

		return (
			<>
				<Modal
					title={__("Choose Header Pattern", "rootblox")}
					onRequestClose={handleCloseModal}
					size="large"
					className="cthf__pattern-modal"
				>
					<div className="pattern__layout-wrapper">
						{freePatternsList}

						{proPatternsList}
					</div>
				</Modal>
			</>
		);
	},
);
