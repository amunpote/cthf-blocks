import { __ } from "@wordpress/i18n";

import { Modal, Spinner } from "@wordpress/components";

import { memo } from "@wordpress/element";

import {
	freeFooterPattern,
	freeFooterPattern2,
	freeFooterPattern3,
	freeFooterPattern4,
	freeFooterPattern5,
} from "../utils.js";

export const PatternModal = memo(
	({ handleCloseModal, handlePatternImport, patternLoader }) => {
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
						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}
									handlePatternImport(freeFooterPattern);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-2.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}
									handlePatternImport(freeFooterPattern2);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-3.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}
									handlePatternImport(freeFooterPattern3);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-4.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}
									handlePatternImport(freeFooterPattern4);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>

						<figure className="cthf-block__pattern">
							<span className="pattern__overlay"></span>
							<img src={`${cthfAssets.img}footer-5.png`} />
							<div
								className="pattern__import-btn"
								onClick={() => {
									if (patternLoader) {
										return;
									}
									handlePatternImport(freeFooterPattern5);
								}}
							>
								{patternLoader && <Spinner />}
								{!patternLoader && __("Import Pattern", "rootblox")}
							</div>
						</figure>
					</div>
				</Modal>
			</>
		);
	}
);
