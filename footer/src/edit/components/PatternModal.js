import { __ } from "@wordpress/i18n";

import { Modal, Spinner } from "@wordpress/components";

import { memo } from "@wordpress/element";

import {
	freeFooterPattern,
	freeFooterPattern10,
	freeFooterPattern2,
	freeFooterPattern3,
	freeFooterPattern4,
	freeFooterPattern5,
	freeFooterPattern6,
	freeFooterPattern7,
	freeFooterPattern8,
	freeFooterPattern9,
	proFooterPattern,
	proFooterPattern10,
	proFooterPattern11,
	proFooterPattern12,
	proFooterPattern13,
	proFooterPattern14,
	proFooterPattern15,
	proFooterPattern16,
	proFooterPattern17,
	proFooterPattern18,
	proFooterPattern19,
	proFooterPattern2,
	proFooterPattern20,
	proFooterPattern21,
	proFooterPattern22,
	proFooterPattern23,
	proFooterPattern24,
	proFooterPattern25,
	proFooterPattern26,
	proFooterPattern27,
	proFooterPattern28,
	proFooterPattern29,
	proFooterPattern3,
	proFooterPattern30,
	proFooterPattern31,
	proFooterPattern32,
	proFooterPattern33,
	proFooterPattern34,
	proFooterPattern35,
	proFooterPattern36,
	proFooterPattern37,
	proFooterPattern4,
	proFooterPattern5,
	proFooterPattern6,
	proFooterPattern7,
	proFooterPattern8,
	proFooterPattern9,
} from "../patterns.js";

const patterns = {
	freeFooterPattern,
	freeFooterPattern2,
	freeFooterPattern3,
	freeFooterPattern4,
	freeFooterPattern5,
	freeFooterPattern6,
	freeFooterPattern7,
	freeFooterPattern8,
	freeFooterPattern9,
	freeFooterPattern10,
	proFooterPattern,
	proFooterPattern2,
	proFooterPattern3,
	proFooterPattern4,
	proFooterPattern5,
	proFooterPattern6,
	proFooterPattern7,
	proFooterPattern8,
	proFooterPattern9,
	proFooterPattern10,
	proFooterPattern11,
	proFooterPattern12,
	proFooterPattern13,
	proFooterPattern14,
	proFooterPattern15,
	proFooterPattern16,
	proFooterPattern17,
	proFooterPattern18,
	proFooterPattern19,
	proFooterPattern20,
	proFooterPattern21,
	proFooterPattern22,
	proFooterPattern23,
	proFooterPattern24,
	proFooterPattern25,
	proFooterPattern26,
	proFooterPattern27,
	proFooterPattern28,
	proFooterPattern29,
	proFooterPattern30,
	proFooterPattern31,
	proFooterPattern32,
	proFooterPattern33,
	proFooterPattern34,
	proFooterPattern35,
	proFooterPattern36,
	proFooterPattern37,
};

export const PatternModal = memo(
	({ handleCloseModal, handlePatternImport, patternLoader }) => {
		const freePatternCount = 10;
		const proPatternCount = 37;

		const freePatternsList = [];
		for (let i = 1; i <= freePatternCount; i++) {
			let imgSrc = `${cthfAssets.img}footer.png`;
			if (i > 1) {
				imgSrc = `${cthfAssets.img}footer-${i}.png`;
			}

			let patternKey = "freeFooterPattern";
			if (i > 1) {
				patternKey = `freeFooterPattern${i}`;
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
			let imgSrc = `${cthfAssets.img}footer-pro.png`;
			if (i > 1) {
				imgSrc = `${cthfAssets.img}footer-pro-${i}.png`;
			}

			let patternKey = "proFooterPattern";
			if (i > 1) {
				patternKey = `proFooterPattern${i}`;
			}

			proPatternsList.push(
				<figure className="cthf-block__pattern">
					<span className="pattern__overlay"></span>
					<img src={imgSrc} />

					<span className="pro__crown"></span>
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
					title={__("Choose Footer Pattern", "rootblox")}
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
