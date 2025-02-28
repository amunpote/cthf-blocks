import { __ } from "@wordpress/i18n";

import { Modal, Spinner } from "@wordpress/components";

import { memo } from "@wordpress/element";

import {
	freeFooterPattern,
	freeFooterPattern2,
	freeFooterPattern3,
	freeFooterPattern4,
	freeFooterPattern5,
	freeFooterPattern6,
} from "../utils.js";

const patterns = {
	freeFooterPattern,
	freeFooterPattern2,
	freeFooterPattern3,
	freeFooterPattern4,
	freeFooterPattern5,
	freeFooterPattern6,
};

export const PatternModal = memo(
	({ handleCloseModal, handlePatternImport, patternLoader }) => {
		const freePatternCount = 6;
		const proPatternCount = 0;

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
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(1, 1fr)",
							gap: "16px",
						}}
					>
						{freePatternsList}

						{proPatternsList}
					</div>
				</Modal>
			</>
		);
	},
);
